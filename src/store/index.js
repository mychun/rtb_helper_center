import Vue from 'vue'
import Vuex from 'vuex'
import { getProductCode, saveProductCode } from '../utils/cache'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],
    navChildList: [],
    productCode: getProductCode(),
    searchKey: ''
  },
  getters: {
    navList: (state) => state.navList,
    productCode: (state) => state.productCode,
    navChildList: (state) => state.navChildList,
    searchKey: (state) => state.searchKey
  },
  mutations: {
    SET_NAV_LIST(state, flag) {
      state.navList = flag
    },
    SET_PRODUCT_CODE(state, flag) {
      state.productCode = flag
    },
    SET_LIST_DETAIL(state, flag) {
      state.listDetail = flag
    },
    SET_NAV_CHILD_LIST(state, flag) {
      state.navChildList = flag
    },
    SET_SEARCH_KEY(state, flag) {
      state.searchKey = flag
    }
  },
  actions: {
    setNavList({ commit }, navList) {
      commit('SET_NAV_LIST', navList)
      // return new Promise(resolve => {
      //   commit('SET_NAV_LIST', navList)
      //   resolve()
      // })
    },
    setProductCode({ commit }, productCode) {
      saveProductCode(productCode)
      commit('SET_PRODUCT_CODE', productCode)
    },
    setNavChildList({ commit }, navChildList) {
      commit('SET_NAV_CHILD_LIST', navChildList)
    },
    setSearchKey({ commit }, searchKey) {
      commit('SET_SEARCH_KEY', searchKey)
    }
  }
})
