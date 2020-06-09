<template>
  <div @click="sendToSuper">
    从父组件传来的： {{message}} </br>
    从父组件传来的2： {{message2}}
    从父组件传来的3： {{poo}}
    从父组件传来的4： {{theme.color}}
    <!-- 从父组件传来的4： {{job}} -->
    <Btnclick v-bind="[$attrs, $listeners]" ref="subclick" />
  </div>
</template>

<script>
import Btnclick from './clicksub'
import Bus from './bus'
export default {
  components: {
    Btnclick
  },
  props: ['message', 'poo', 'giveSub'],
  inject: ['theme'],
  // inject: {
  //   theme: {
  //     //函数式组件取值不一样
  //     // default: () => ({})
  //   }
  // },
  data () {
    return {
      message2: JSON.parse(JSON.stringify(this.message)),
      world: [{
        name: '111'
      }, {
        name: '222'
      }, {
        name: '333'
      }]
    }
  },
  created () {
    Bus.$on('superSubmit', e => {
      console.log('=>subPage', e)
      e[2].name = '999'
    })
  },
  mounted () {
    console.log('=>injections', this.theme.color)
    this.giveSub()
    // console.log('=>Subpage', this.job)
    // console.log('=>parent', this.$parent)
    // console.log('=>attr', this.$attrs)
    this.message2[1].name = 'jupaoshushu'
    // console.log('=>', this.$parent.world)
    // this.$parent.world.push('green')
    // this.message2[2].name = 'job'
  },
  methods: {
    target () {
      console.log('=>', '父组件调用了我')
    },
    sendToSuper () {
      this.$emit('toSuper', 'fangyiyuan')
    },
  }
}
</script>

<style scoped>

</style>
