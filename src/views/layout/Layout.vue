<template>
  <div class="main">
    <base-header></base-header>
    <div class="help-body">
      <div class="help-index clearfix">
        <nav-left></nav-left>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <base-footer></base-footer>
  </div>
</template>
<script>
import BaseHeader from './components/base-header'
import BaseFooter from './components/base-footer'
import NavLeft from './components/nav-left'

import { getNavList } from '../../api/app'
import store from '../../store/index'
import { mapGetters } from 'vuex'

const logoUrl = require('@/assets/img/logo.png')

export default {
  name: 'layout',
  components: {
    BaseHeader,
    BaseFooter,
    NavLeft
  },
  data() {
    return {
      logoUrl
    }
  },
  computed: {
    ...mapGetters(['navList', 'productCode', 'navChildList'])
  },
  created() {
    this.getNavListData()
  },
  methods: {
    getNavListData() {
      getNavList().then(res => {
        store.dispatch('setNavList', res.data.data)
        if (this.productCode) {
          this.setNavChildListToProductCode(this.productCode)
        } else {
          store.dispatch('setProductCode', this.navList[0].productCode)
          store.dispatch('setNavChildList', this.navList[0].productCategories)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    setNavChildListToProductCode(productCode) {
      const navList = this.navList
      const len = navList.length
      for (let i = 0; i < len; i++) {
        const item = navList[i]
        if (item.productCode === productCode) {
          store.dispatch('setNavChildList', item.productCategories)
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
