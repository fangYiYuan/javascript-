<template>
  <div>
    <div @click="superBtn">父组件Main</div>
    <Btnclick ref="subclick" @click="targetBtn" />
    <!-- <console /> -->
  </div>
</template>

<script>
import Btnclick from './clicksub'
// import console from './consolesub'
import Bus from './bus.js'
export default {
  components: {
    Btnclick
  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    // console.log('=>', this.$parent.$children)
  },
  methods: {
    targetBtn () {
      // console.log('=>', Bus)
    },
    superBtn () {
      // this.$children[0].targetBtn()
      console.log('=>', this.$refs)
      this.$refs.subclick.targetBtn()
    }
  }
}
</script>

<style scoped>

</style>
