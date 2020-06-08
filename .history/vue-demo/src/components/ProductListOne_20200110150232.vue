<template>
  <div id="one">
    <h2>Product one</h2>
    <ul>
      <li v-for="(item, index) in changeProducts" :key="index">
        <span>{{item.name}}</span>
        <span>${{item.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.products
    },
    changeProducts () {
      let data = this.$store.state.products
      data.map(item => {
        // return item = {
        //   name: '@' + item.name,
        //   price: item.price / 2
        // }
        return '@' + item.name
      })
      return data
    }
  }
}
</script>

<style>
</style>
