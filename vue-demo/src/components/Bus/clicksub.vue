<template>
  <div>
    <button >子按钮1</button>
    <button>子按钮2</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '我被main父组件调用了'
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    targetBtn () {
      console.log('=>', 123)
    }
  }
}
</script>

<style scoped>

</style>
