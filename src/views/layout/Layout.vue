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
  }
}
</script>
<style lang="scss" scoped></style>
