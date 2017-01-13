export const rules = {
  getUrl: '/api/url/',
  getUrl2: '/api/url2/',
}

export function saveToServer (data, cb) {
  this.$http.get(rules.getUrl).then((response) => {
    cb(response)
  }, (response) => {
    console.log('Ой, ошибка! Она очень плохая и находится в api')
  });
}
