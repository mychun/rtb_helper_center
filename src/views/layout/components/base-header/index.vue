<template>
  <div class="header">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/"><img :src="logoUrl" /></a>
        </div>
      </div>
    </nav>
    <div class="help-top">
      <h1>帮助文档</h1>
      <header-search></header-search>
      <product-list></product-list>
    </div>
  </div>
</template>
<script>
import ProductList from '../product-list'
import HeaderSearch from './header-search'

const logoUrl = require('@/assets/img/logo.png')
export default {
  name: 'baseHeader',
  components: {
    ProductList,
    HeaderSearch
  },
  data() {
    return {
      logoUrl
    }
  }
}
</script>
<style lang="scss" scoped></style>
