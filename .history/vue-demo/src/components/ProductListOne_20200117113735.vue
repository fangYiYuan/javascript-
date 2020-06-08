<template>
  <div id="one">
    <h2>Product one</h2>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span>{{item.id}}</span>
        <span>${{item.name}}</span>
      </li>
    </ul>
    <button @click="changeMessage">子传值</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    list: Array
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    changeProducts () {
      return this.$store.getters.change
    }
  },
  methods: {
    changeMessage () {
      this.$emit('change', '子向父传值')
    }
  }
}
</script>

<style>
</style>
