<template>
  <ul class="tabs" data-spm="tab">
    <li
      class="tab-link practice"
      v-for="item in product"
      :key="item.productCode"
    >
      <router-link
        :to="{ name: 'list', params: { productCode: item.productCode } }"
        ><i class="tab-icon"></i>
        <p>{{ item.productName }}</p></router-link
      >
    </li>
    <!-- <li class="tab-link practice">
      <a href="" target="_blank"><i class="tab-icon"></i>
        <p>速递管家</p>
      </a>
    </li> -->
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'productList',
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
</style>
