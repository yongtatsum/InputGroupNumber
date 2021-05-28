Nova.booting((Vue, router, store) => {
  Vue.component('index-input-group-number', require('./components/IndexField'))
  Vue.component('detail-input-group-number', require('./components/DetailField'))
  Vue.component('form-input-group-number', require('./components/FormField'))
})
