<template>
  <div id="two">
    <h2>Product two</h2>
    <ul>
      <li v-for="(item, index) in products" :key="index">
        <span>{{item.name}}</span>
        <span>${{item.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
