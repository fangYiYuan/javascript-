<template>
  <div>
    <div>{{world}}</div>
    <button @click="superBtn">父组件Main</button>
    <!-- <Btnclick :message="world" ref="subclick" @click="targetBtn" /> -->
    <!-- <console /> -->
    <SubPage :giveSub="giveSub" :message="world" :poo="poo" :ioo="ioo" :uoo="uoo" v-on:toSuper="fromSub" ref="subpage" />
    <div>
      子组件传来的值： {{world}}
    </div>
  </div>
</template>

<script>
// import Btnclick from './clicksub'
import SubPage from './SubPage'
// import console from './consolesub'
import Bus from './bus.js'
import Vue from 'vue'
export default {
  provide () {
    this.theme  = Vue.observable({
      color: 'orange'
    })
    return {
      theme: this.theme
    }
  },
  components: {
    // Btnclick,
    SubPage
  },
  data () {
    return {
      world: [{
        name: '111'
      }, {
        name: '222'
      }, {
        name: '333'
      }],
      poo: 'ooo',
      ioo: '222',
      uoo: 'tttt',
      moo: 'mmm',
      color: 'green'
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
    superBtn (e) {
      console.log('=>', e)
      Bus.$emit('superSubmit', this.world)
      // this.$children[1].target()
      // this.$refs.subpage.target()
      // this.$children[1].message = 'alex'
      // this.$children[0].targetBtn()
      // console.log('=>', this.$refs)
      // this.$refs.subclick.targetBtn()
    },
    fromSub (e) {
      this.world = e
    },
    giveSub () {
      console.log('=>', 999)
    }
  }
}
</script>

<style scoped>

</style>
