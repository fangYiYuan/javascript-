<template>
  <div id="app">
    <!-- <product-list-one></product-list-one>
    <button @click="decrement(30)">降价</button>
    <product-list-two></product-list-two> -->
    <h2>{{reversedMessage()}}</h2>
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
      message: 'hello'
    }
  },
  methods: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
    // decrement (count) {
    //   this.$store.dispatch('reducePrice', count)
    // }
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
