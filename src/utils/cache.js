import storage from 'good-storage'

export function saveProductCode(productCode) {
  storage.set('productCode', productCode)
}
export function getProductCode() {
  return storage.get('productCode', '')
}

export function saveCategoryId(categoryId) {
  storage.set('categoryId', categoryId)
}
export function getCategoryId() {
  return storage.get('categoryId', '')
}

export function saveTagids(tagids) {
  storage.set('tagids', tagids)
}
export function getTagids() {
  return storage.get('tagids', '')
}

export function saveSearchKey(searchKey) {
  storage.set('searchKey', searchKey)
}
export function getSearchKey() {
  return storage.get('searchKey', '')
}
