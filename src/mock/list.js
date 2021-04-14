import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random

// 用于接受生成数据的数组
const tableList = []
for (let i = 0; i < 100; i++) {
  const newObject = {
    title: Random.csentence(10, 20), //  Random.csentence( min, max )
    intro: Random.csentence(20, 50), // Random.cname() 随机生成一个常见的中文姓名
    id: 1, // 生成web地址
    create_date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
  }
  tableList.push(newObject)
}
// }
// console.log(tableList, 'tableList')
// 拦截ajax请求，配置mock的数据

export default tableList
