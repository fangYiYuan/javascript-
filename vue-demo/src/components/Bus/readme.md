 vue中的组件通讯
1.父 > 子

  1. props 
  <!-- 
    父：<SubPage :message="world" /> 
    子：props: ['message']
  -->
  2.this.$children可以取到子组件的集合，isArray
  <!-- 
    传值
    this.$children[0].message 
    调子组件方法
    this.$children[0].target
  -->
  3.this.$refs
  <!-- 
    传值
    <SubPage ref="subpage" />
    this.$refs.subpage.message = 'yiyuan'
    调子组件方法
    this.$refs.subpage.target()
   -->
   4.this.$attrs 孙子组件获取，父组件没有使用的爷爷组
     件传给它的值
   5.provide/inject太强大了，可以将值传给所有的子孙组件
     基本类型的值不会响应式的改变，引用类型的值是响应式的
   <!-- 
    父 provide {
       job: 'front-end'
      }
    子和孙 inject: ['job']
    
    基本类型的值也想是响应式的方法
    父 provide: {
        this.theme = Vue.observable({
          job: 'front-end'
        })
        return {
          theme: this.theme
        }
      }
    子 inject: ['theme']
    -->

2.子 > 父
  ! vue中的父子通信是单项数据流，子组件接收到父组件的
    数据不要直接修改：
    1.基本类型的值可以创建一个值的副本再进行操作
    2.引用类型的值需要深拷贝
      数组：[...]
      对象：JSON.parse(JSON.stringify(this.object))

  1.this.$emit()
  <!-- 
  子 sendToSuper () {
      this.$emit('toSuper', 'fangyiyuan')
    }
  父 <SubPage v-on:toSuper="fromSub"/>
    fromSub (e) {
      this.world = e
    }
   -->
   2.this.$parent
   3.props
   <!-- 父组件把方法传给子组件，然后子组件调用 -->

3.兄弟
  1.创建一个vue实例
  <!-- 
    import Vue from 'vue'
    export default new Vue() 
  -->
  2.兄弟组件都引入新建的Vue
  <!-- import Buy from './bus.js' -->
  3.定义一个发送的方法
  <!-- 
    superBtn (e) {
      Bus.$emit('superSubmit', '需要传给兄弟组件的参数')
    }
    created () {
      Bus.$on('superSubmit', e => {
      
      })
    }
   -->
