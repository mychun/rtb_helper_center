import router from '../router'

// 去掉收尾空格
export function trim(str) {
  str.replace(/(^\s*)|(\s*$)/g, '')
}

// //预防不断重复触发搜索函数
export function debounce(func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 判断是否是当前页面
export function isCurrentPage(path) {
  const currentPath = router.currentRoute.path
  return path === currentPath
}

export function formatDate(date, fmt = 'yyyy-MM-dd hh:mm:ss', near, type) {
  var dateStr = date
  if (!dateStr || !fmt) {
    return
  }
  if (near && typeof date === 'string') {
    if (!(dateStr - 0)) return
    if (!type || type === 'date') {
      dateStr =
        dateStr.substr(0, 4) +
        '/' +
        dateStr.substr(4, 2) +
        '/' +
        dateStr.substr(6, 2)
    } else if (type === 'month') {
      dateStr = dateStr.substr(0, 4) + '/' + dateStr.substr(4, 2) + '/01' // 兼容safari
    }
  }
  if (typeof dateStr === 'string') {
    dateStr = dateStr.replace(/-/g, '/').replace('T', ' ') // 兼容safari
  }
  var tempDate = new Date(dateStr)
  if (tempDate === 'Invalid Date') return
  var o = {
    'M+': tempDate.getMonth() + 1, // 月份
    'd+': tempDate.getDate(), // 日
    'h+': tempDate.getHours(), // 小时
    'm+': tempDate.getMinutes(), // 分
    's+': tempDate.getSeconds(), // 秒
    'q+': Math.floor((tempDate.getMonth() + 3) / 3), // 季度
    S: tempDate.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (tempDate.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt

  // console.log(formatDate(new Date(), 'yyyy年MM月dd日')) //  2017年05月05日
  // console.log(formatDate('20180220', 'MM/dd', true)) //  02/20
}
