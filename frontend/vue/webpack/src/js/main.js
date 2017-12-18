/* 引入vue和主页 */
import Vue from 'vue'
import App from '../components/App.vue'

/* 实例化一个vue */
new Vue({
  el: '#root',
  render: h => h(App)
})