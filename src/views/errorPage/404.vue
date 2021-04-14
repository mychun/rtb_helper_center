<template>
  <div class="container">
    <div class="notfind_wrapper">
      <img class="notfind" :src="noFoudImgUrl" alt="" />
      <span class="">很抱歉，您访问的页面去月球了~~</span>
      <a href="/">返回首页</a>
    </div>
  </div>
</template>

<script>
const noFoudImgUrl = require('../../assets/img/404.png')

export default {
  name: 'notFound',
  data() {
    return {
      noFoudImgUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.notfind_wrapper {
  position: relative;
}
.notfind {
  margin: 150px auto 0 auto;
  display: block;
}
.notfind_wrapper span {
  position: absolute;
  top: 36%;
  left: 42%;
  color: #999999;
  font-size: 18px;
}
.notfind_wrapper a {
  position: absolute;
  position: absolute;
  top: 43%;
  left: 47%;
  border: 2px solid #94bff3;
  color: #94bff3;
  border-radius: 15px;
  padding: 2px 14px;
  font-size: 15px;
}

@media screen and (max-width: 768px) {
  .notfind_wrapper{ text-align: center;}
  .notfind{ width:100%;}
  .notfind_wrapper span{ position:static;}
  .notfind_wrapper a{display: inline-block; position:static; margin-top: 10px;}
}
</style>
