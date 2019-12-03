import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('Foo', {
  name: 'Foo',
  template: '<div>foo</div>'
})

Vue.component('Bar', () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'Bar',
        template: '<div>lazy bar</div>'
      });
    }, 2000)
  })
});

let app = new Vue({
  render: h => h(App),
}).$mount('#app')

