<template>
  <dl class="wrap-cont">
    <dt>快速链接</dt>
    <dd>
      <p v-for="item in product" :key="item.productCode">
        <router-link class="link" :to="{ name: 'list', params: { productCode: item.productCode } }">{{ item.productName }}</router-link>
      </p>
      <!-- <p ><a class="link" href="">速递管家</a></p> -->
    </dd>
  </dl>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'footerNav',
  data() {
    return {
      product: []
    }
  },
  computed: {
    ...mapGetters(['navList'])
  },
  watch: {
    navList(newVal, oldVal) {
      this.product = newVal
    }
  },
  created() {
    this.product = this.navList
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../../assets/styles/variables.scss';
.wrap-cont{ float:left; margin-left: 140px; width: 255px;}
.wrap-cont dt{ padding-bottom:10px; font-size:18px; color:rgb(169, 169, 169);}
.wrap-cont dd p{ margin-top:8px; color:rgb(169, 169, 169);}
.wrap-cont dd p .link{ color:rgb(169, 169, 169); font-size: 13px;}
.wrap-cont dd p .link:hover{ color:$color-theme;}
</style>
