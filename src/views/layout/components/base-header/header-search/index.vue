<template>
  <div class="help-top-search-box">
    <div class="help-top-search">
      <input
        class="help-top-search-input"
        placeholder="请输入关键词进行搜索"
        v-model.trim="query"
      />
      <!-- <div class="class-select">
            <label>产品类型：</label>
            <select>
              <option>产品一</option>
              <option>产品二</option>
            </select>
          </div> -->
      <ul
        class="help-top-search-result"
        ref="helpRecommend"
        v-show="recommendList.length > 0"
      >
        <template v-if="!loading">
          <li v-for="item in recommendList" :key="item.documentId">
            <a
              href="javascript:void(0);"
              @click="jumpDetail(item.documentId)"
              >{{ item.documentTitle }}</a
            >
          </li>
        </template>
        <loader v-else :isFulled="false"></loader>
      </ul>
    </div>
    <button class="help-top-search-btn" @click="handleSearch">搜索</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getList } from '../../../../../api/app'
import { debounce, isCurrentPage } from '../../../../../utils/util'
// import store from '../../../../../store'
// import Empty from '../../../../../components/empty'
import Loader from '../../../../../components/loader'

export default {
  name: 'headerSearch',
  components: {
    Loader
  },
  computed: {
    ...mapGetters(['productCode'])
  },
  data() {
    return {
      query: '',
      loading: true,
      recommendList: []
    }
  },
  created() {
    this.$watch('query', debounce(newQuery => {
      if (newQuery) {
        // store.dispatch('setSearchKey', newQuery)
        this.getSearchResponseList()
      } else {
        this.recommendList = []
      }
    }, 200))
  },
  // watch: {
  //   searchKey(newVal) {
  //     if (!trim(newVal)) {
  //       this.recommendList = []
  //     }
  //   }
  // },
  methods: {
    getSearchResponseList() {
      this.loading = true
      const requireData = {
        pageSize: 10,
        currentPage: 1,
        productCode: this.productCode,
        documentTitle: this.query
      }
      getList(requireData).then(res => {
        this.loading = false
        this.recommendList = res.data.data
      }).catch(err => {
        console.log('err' + err)
      })
    },
    jumpDetail(documentId) {
      // store.dispatch('setSearchKey', '')
      this.recommendList = []
      const path = `/${this.$route.name}/${this.$route.params.documentId}`
      if (isCurrentPage(path)) {
        return
      }
      this.$router.push({ name: 'detail', params: { documentId } })
    },
    handleSearch() {
      // debugger
      this.recommendList = []
      const path = `/${this.$route.name}/${this.productCode}/${this.query}`
      if (isCurrentPage(path)) {
        return
      }
      this.$router.push({ name: 'list', params: { productCode: this.productCode, searchKey: this.query } })

      // store.dispatch('setSearchKey', '')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
