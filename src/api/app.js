import service from '../utils/request'

// 获取所有分类
export function getNavList() {
  return service.get('/api/ProductInfo')
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err))
}

// 获取列表
export function getList(params) {
  return service.get('/api/ProductDocument', {
    params
  })
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err))
}

// 获取列表内容详情
export function getDetail(documentId) {
  return service.get(`/api/ProductDocument/${documentId}`)
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err))
}

// 获取角色列表
export function getTagList(productCode) {
  return service.get(`/api/ProductTag/?ProductCode=${productCode}`)
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err))
}
