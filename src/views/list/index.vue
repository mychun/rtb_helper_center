<template>
  <div class="help-index-list">
    <div class="help-index-cell">
      <div class="help-index-cell-content" v-if="!loading">
        <template v-if="list.length > 0">
          <item-list :data="list"></item-list>
          <pagination
            :page-index="searchForm.currentPage"
            :total="count"
            :page-size="searchForm.pageSize"
            @change="pageChange"
          >
          </pagination>
        </template>
        <template v-else>
          <empty></empty>
        </template>
      </div>
      <loader v-else></loader>
    </div>
  </div>
</template>

<script>
import ItemList from '../../components/item-list'
import Pagination from '../../components/pagination'
import Loader from '../../components/loader'
import Empty from '../../components/empty'
// import { toScrollTop } from '../../utils/dom'
import store from '../../store'
import { mapGetters } from 'vuex'
import { getList } from '../../api/app'
export default {
  name: 'list',
  components: {
    ItemList,
    Pagination,
    Loader,
    Empty
  },
  data() {
    return {
      searchForm: {
        pageSize: 20, // 每页显示20条数据
        currentPage: 1, // 当前页码
        productCode: '',
        categoryId: '',
        documentTitle: ''
      },
      count: 0, // 总记录数
      list: [],
      loading: true
    }
  },
  // beforeRouteUpdate(to, from, next) {
  //   console.log('beforeRouteUpdate', to.params.productCode)
  //   store.dispatch('setProductCode', to.params.productCode)
  //   next()
  // },
  // activated() {
  //   console.log('activated', this.$route.params.productCode)
  //   store.dispatch('setProductCode', this.$route.params.productCode)
  // },
  computed: {
    ...mapGetters(['productCode'])
  },
  watch: {
    // productCode(newVal) {
    //   this.init()
    // },
    $route: {
      handler(route) {
        if (route.name === 'list') {
          console.log('list.vue handle route watch')
          this.init()
        }
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const paramSearchKey = this.$route.params.searchKey
      if (paramSearchKey) {
        this.searchForm.documentTitle = paramSearchKey
      } else {
        this.searchForm.documentTitle = ''
      }

      const productCode = this.$route.params.productCode
      const categoryId = this.$route.params.categoryId

      if (!this.productCode || this.productCode !== productCode) {
        store.dispatch('setProductCode', productCode)
      }
      this.searchForm.productCode = this.productCode

      if (categoryId) {
        this.searchForm.categoryId = categoryId
      } else {
        this.searchForm.categoryId = ''
      }

      this.getListData()
    },
    getListData() {
      this.loading = true
      getList(this.searchForm).then(res => {
        this.list = res.data.data
        this.count = res.data.paginationInfo.totalCount

        this.loading = false
      }).catch(err => {
        console.log('err' + err)
      })
    },
    // 从page组件传递过来的当前page
    pageChange(page) {
      this.searchForm.currentPage = page
      this.getListData()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
