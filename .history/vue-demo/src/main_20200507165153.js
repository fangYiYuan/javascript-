// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios'
import { store } from './components/store/store'

Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.component('my-cpn', {
  template: `
    <ccpn :pList="pList" @notice="notice"></ccpn>`,
  data(){
    return {
      pList: [{
        id: 'aaa',
        name: '《算法讨论》'
      }, {
        id: 'bbb',
        name: '《Vue指南》'
      }, {
        id: 'ccc',
        name: '《JavaScript教程》'
      }, {
        id: 'ddd',
        name: '《算法讨论》'
      }],
    }
  },
  methods: {
    notice (item) {
      console.log('user => ', item.name)
    }
  },
  components: {
    ccpn: {
      template: `
      <div>
        <button @click="notice(item)" v-for="item in pList">{{item.name}}</button>
      </div>`,
      props: ['pList'],
      methods: {
        notice (item) {
          this.$emit('notice', item)
        }
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
