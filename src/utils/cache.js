import storage from 'good-storage'

export function saveProductCode(productCode) {
  storage.set('productCode', productCode)
}
export function getProductCode(productCode) {
  return storage.get('productCode', '')
}
