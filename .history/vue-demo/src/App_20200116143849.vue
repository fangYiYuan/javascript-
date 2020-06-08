<template>
  <div id="app">
    <!-- <product-list-one></product-list-one>
    <button @click="decrement(30)">降价</button>
    <product-list-two></product-list-two> -->
    <h2>{{me2}}</h2>
  </div>
</template>

<script>
// import ProductListOne from './components/ProductListOne'
// import ProductListTwo from './components/ProductListTwo'
export default {
  name: 'app',
  // components: {
  //   'product-list-one': ProductListOne,
  //   'product-list-two': ProductListTwo
  // },
  data () {
    return {
      message: 'hello',
      me2: ''
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
    this.me2 = this.message.split('').reverse().join('')
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
