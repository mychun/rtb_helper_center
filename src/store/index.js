import Vue from 'vue'
import Vuex from 'vuex'
import { getProductCode, saveProductCode, getSearchKey, saveSearchKey, saveCategoryId, getCategoryId, saveTagids, getTagids } from '../utils/cache'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],
    navChildList: [],
    productCode: getProductCode(),
    categoryId: getCategoryId(),
    tagids: getTagids(),
    searchKey: getSearchKey()
  },
  getters: {
    navList: (state) => state.navList,
    productCode: (state) => state.productCode,
    categoryId: (state) => state.categoryId,
    tagids: (state) => state.tagids,
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
    SET_CATEGORY_ID(state, flag) {
      state.categoryId = flag
    },
    SET_TAGIDS(state, flag) {
      state.tagids = flag
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
    setCategoryId({ commit }, categoryId) {
      saveCategoryId(categoryId)
      commit('SET_CATEGORY_ID', categoryId)
    },
    setTagids({ commit }, tagids) {
      saveTagids(tagids)
      commit('SET_TAGIDS', tagids)
    },
    setNavChildList({ commit }, navChildList) {
      commit('SET_NAV_CHILD_LIST', navChildList)
    },
    setSearchKey({ commit }, searchKey) {
      saveSearchKey(searchKey)
      commit('SET_SEARCH_KEY', searchKey)
    }
  }
})
