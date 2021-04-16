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
