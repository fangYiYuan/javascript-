<template>
  <div id="app">
    <product-list-one :list="list"></product-list-one>
    <button @click="decrement(30)">降价</button>
    <product-list-two></product-list-two>
    <p>{{message}}</p>
    <!-- <h2>{{name1}}</h2>
    <h2>{{name2}}</h2>
    <h2>{{fullName}}</h2> -->
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'
export default {
  name: 'app',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  data () {
    return {
      message: 'hello',
      me2: '',
      name1: '全',
      name2: '旭升',
      name3: '',
      list: [{
        id: 1,
        name: 'alex'
      }, {
        id: 2,
        name: 'alex2'
      }, {
        id: 3,
        name: 'alex3'
      }]
    }
  },
  computed: {
    fullName: {
      get () {
        return this.name1 + this.name2
      },
      set (value) {
        let val = value.split('')
        console.log('user => ', val)
        this.name1 = val[0]
        this.name2 = val[val.length - 1]
      }
    }
  },
  methods: {
    // message2 () {
    //   return this.message.split('').reverse().join('')
    // }
    // reversedMessage: function () {
    //   return this.message.split('').reverse().join('')
    // }
    // decrement (count) {
    //   this.$store.dispatch('reducePrice', count)
    // }
  },
  mounted(){
    this.fullName = 'alex'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
*{
  list-style-type: none;
}
</style>
