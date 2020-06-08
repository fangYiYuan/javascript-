<template>
  <div id="two">
    <h2>Product two</h2>
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
      return this.$store.getters.change
    }
  }
}
</script>

<style>
</style>
