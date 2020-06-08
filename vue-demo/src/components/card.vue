<template>
  <div>
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    this.push()
  },
  methods: {
    text () {
      console.log('user =>', '父组件触发son的方法')
    },
    push () {
      this.$emit('get', [1, 2, 3, 4])
    }
  }
}
</script>

<style scoped>
div{
  font-size: 20px;
  padding: 20px;
  background: orange;
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
