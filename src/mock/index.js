import Mock from 'mockjs'
import navList from './nav-list'
import tableList from './list'

Mock.mock(/\/getNav/, 'get', navList.getStatisticalData)

// post请求分页
Mock.mock('/api/pageList', 'post', (params) => {
  const [index, size, total] = [JSON.parse(params.body).page, JSON.parse(params.body).size, tableList.length]
  const len = total / size
  // console.log(index, size, total, 'index, size, total')
  const totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
  // 截取list
  // const newProduceNewsData = tableList.slice(index * size, (index + 1) * size)
  const newProduceNewsData = tableList.slice((index - 1) * size, index * size)
  // console.log(newProduceNewsData, 'newProduceNewsData')
  return {
    code: '0',
    message: 'success',
    data: {
      page: index,
      size: size,
      list: newProduceNewsData,
      total: total,
      totalPages: totalPages
    }
  }
})
