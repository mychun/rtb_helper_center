<template>
    <div class="empty" v-text="emptyTxt"></div>
</template>

<script>
export default {
  name: 'empty',
  props: {
    emptyTxt: {
      type: String,
      default: '暂时没有数据!!!'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.empty{ padding:10px 0; text-align: center; color: 999;}
</style>
