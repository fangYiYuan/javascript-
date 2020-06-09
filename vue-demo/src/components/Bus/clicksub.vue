<template>
  <div>
    <button >子按钮1</button>
    <p>{{name}}</p>
    <p>{{theme.color}}</p>
    <!-- <p>clicksub: {{job}}</p>
    <p>clicksub: {{subjob}}</p> -->
  </div>
</template>

<script>
import SubPage from './SubPage'
export default {
  props: ['message'],
  // inject: ['job'],
  components: {
    SubPage
  },
  inject: ['theme'],
  data () {
    return {
      name: '我被main父组件调用了',
      message3: [{
        name: '111'
      }, {
        name: '222'
      }, {
        name: '333'
      }],
      // subjob: [...this.job]
    }
  },
  created () {

  },
  mounted () {
    this.theme.color = 'red'
    console.log('=>clicksub', this.theme.color)
    // this.job.push('back-end', '999')
    // this.job = 'front-end'
    // console.log('=>clicksub', this.job)
    // console.log('=>clicksub', this.$attrs)
    // console.log('=>clicksub', this.$listeners.toSuper)
    // this.$listeners.toSuper()
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
