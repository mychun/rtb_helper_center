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
      <div class="help-top-search-box">
        <div class="help-top-search">
          <input
            class="help-top-search-input"
            id="helpSearch"
            placeholder="请输入关键词进行搜索"
          />
          <div class="class-select">
            <label>产品类型：</label>
            <select>
              <option>产品一</option>
              <option>产品二</option>
            </select>
          </div>
          <ul
            class="help-top-search-result"
            id="helpRecommend"
            style="display: none"
          >
            <li>搜索提示内容</li>
          </ul>
        </div>
        <button class="help-top-search-btn">搜索</button>
      </div>
      <product-list></product-list>
    </div>
  </div>
</template>
<script>
import ProductList from '../product-list'

const logoUrl = require('@/assets/img/logo.png')
export default {
  name: 'baseHeader',
  components: {
    ProductList
  },
  data() {
    return {
      logoUrl
    }
  }
}
</script>
<style lang="scss" scoped></style>
