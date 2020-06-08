<template>
  <div>
    <button @dblclick="incrementNum">增加</button>
    <h1>{{mNum}}</h1>
    <h2>购物车功能</h2>
    <my-cpn></my-cpn>
    <div>
      <input type="text" :value="message" @input="message = $event.target.value">
      <h1>{{message}}</h1>
    </div>
    <div v-if="list.length > 0 ">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>书籍名称</th>
            <th>出版日期</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{index + 1}}</td>
            <td class="name-css">{{item.name | nameSplice}}</td>
            <td>{{item.data}}</td>
            <td>{{item.price | priceicon}}</td>
            <td>
              <button @click="decrement(index)" :disabled="item.num < 1">-</button>
              <span class="pd10">{{item.num}}</span>
              <button @click="increment(index)">+</button>
            </td>
            <td>
              <button @click="deleteBtn(index)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="margin-top: 10px;">总价： {{totalMoney | priceicon}}</div>
    </div>
    <div v-else>
      购物车暂未空
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: 'v-model实现原理',
      list: [{
        name: '《Es6知识点整理》',
        data: '2010-08',
        price: '85',
        num: 1,
        id: 1
      }, {
        name: '《Vue指南Vue指南Vue指南Vue指南Vue指南Vue指南》',
        data: '2015-02',
        price: '60',
        num: 1,
        id: 2
      }, {
        name: '《JavaScript教程JavaScript教程JavaScript教程JavaScript教程》',
        data: '2019-10',
        price: '40',
        num: 1,
        id: 3
      }, {
        name: '《Es6知识点整理》',
        data: '2022-01',
        price: '100',
        num: 1,
        id: 4
      }],
      mNum: 1
    }
  },
  filters: {
    priceicon (val) {
      return '¥ ' + val + '.00'
    },
    nameSplice (val) {
      return  val.length > 10 ? val.slice(0, 10) + '...' : val
    }
  },
  methods: {
    increment (index) {
      this.list[index].num++
    },
    decrement (index) {
      this.list[index].num--
    },
    deleteBtn (index) {
      this.list.splice(index, 1)
    },
    inputfocus (event) {
      // console.log('user => ', event)
      this.message = event.target.value
    },
    incrementNum () {
      this.mNum += 12
    }
  },
  computed: {
    totalMoney () {
      let money = 0
      this.list.forEach(item => {
        money += item.price * item.num
      })
      return money
    }
  },
  mounted () {
    this.message = 'hhh'
  }
}
</script>

<style>
table{
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0
}
th, td{
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
th{
  background: #f7f7f7;
  color: '#5c6b77';
  font-weight: 600;
}
i{
  padding: 2px 6px;
  background: #e5e5e5;
  display: inline-block;
  cursor: pointer;
}
.pd10{
  width: 20px;
  display: inline-block;
  text-align: center;
}
.name-css{
  width: 150px;
}
</style>