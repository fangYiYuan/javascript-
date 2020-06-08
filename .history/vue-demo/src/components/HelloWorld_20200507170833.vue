<template>
  <div class="hello">
    <h2>{{fullName}}</h2>
    <p><router-link :to="{name: 'ProductListOne'}">one</router-link></p>
    <input v-focus v-model="search" type="text">
    <ul>
      <li v-for="(item, index) in filted" :key="index">
        <h1 v-rainbow>{{item.title | toUpercase}}</h1>
        <article>{{item.body | snippt}}</article>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data () {
    return {
      name1: '',
      name2: '',
      search: '',
      data: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      }]
    }
  },
  filters: {
    'toUpercase': function (value) {
      return value.toUpperCase()
    },
    'snippt': function (value) {
      return value.slice(0, 100) + '...'
    }
  },
  directives: {
    'rainbow': {
      bind(el) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8)
      }
    },
    'focus': {
      inserted(el) {
        el.focus()
      }
    }
  },
  computed: {
    filted () {
      return this.data.filter((val) => {
        return val.title.match(this.search)
      })
    },
    fullName: {
      set (val) {
        let name = val.split(' ')
        this.name1 = name[0]
        this.name2 = name[1]
      },
      get () {
        return this.name1 + ' ' + this.name2
      }
    }
  },
  methods: {

  },
  mounted () {
    this.fullName = 'uncle'

    let fun1 = new Promise((resolve, reject) => {
      this.axios.get('../../a/static/arr.txt').then(res => {
        resolve()
      }).catch(err => {
        console.log(err)
      })
    })
    fun1.then(res => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
  width:400px;
  background: #6677cc;
  margin: 20px auto;
}
li {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background: #ffffff;
}
a {
  color: #42b983;
}
</style>
