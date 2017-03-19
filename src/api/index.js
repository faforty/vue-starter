export const link = {
  products: '/api/products'
}

export function saveToServer (data, cb) {
  this.$http.get(link.products).then((response) => {
    cb(response)
  }, (response) => {
    console.log('Ой, ошибка! Она очень плохая и находится в api')
  });
}
