import axios from 'axios'

// 创建一个axios实例
const service = axios.create({
  // baseURL: 'http://192.168.110.253:5000',
  // 请求超时配置
  timeout: 3000
})
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    const res = {}
    res.status = response.status
    res.data = response.data
    return res
  },
  err => {
    console.log('err' + err)
    return Promise.reject(err)
  }
)

export default service
