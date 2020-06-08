<template>
  <div id="one">
    <h2>Product one</h2>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span>{{item.id}}</span>
        <span>${{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      props: ['list']
    }
  },
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
