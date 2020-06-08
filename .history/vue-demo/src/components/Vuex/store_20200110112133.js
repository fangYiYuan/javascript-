import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 0,
}

// 创建 store 实例
export default new Vuex.Store({
    state,
})