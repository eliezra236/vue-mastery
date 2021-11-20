const app = Vue.createApp({
  data() {
    return {
      product: 'Boots',
      description: 'Beautiful one of a kind boots'
    }
  }
})

const mountedApp = app.mount('#app');
