import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      { text: '食', to: '/list-page' },
      { text: '住', to: '/list-page' },
      { text: '我的最愛', to: '/fav' },
      { text: '我的禮券', to: '/list-page' },
      { text: '個人資料', to: '/list-page' },
    ],
    listPageType: '',
    favList: []
  },
  getters: {
  },
  mutations: {
    setListPageType(state, payload) {
      state.listPageType = payload.title
    },
    setFav(state, payload) {
      // let findIndex = state.favList.findIndex(e => e.phone)
      // if(findIndex > )
      state.favList.push(payload.list)
      console.log(state.favList);
    }
  },
  actions: {
  },
  modules: {
  }
})
