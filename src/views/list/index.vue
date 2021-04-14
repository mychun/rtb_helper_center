<template>
  <div class="help-index-list">
    <div class="help-index-cell">
      <div class="help-index-cell-content" v-if="!loading">
        <item-list :data="list"></item-list>
        <pagination
          :page-index="searchForm.page"
          :total="count"
          :page-size="searchForm.size"
          @change="pageChange"
        >
        </pagination>
      </div>
      <loader v-else></loader>
    </div>
  </div>
</template>

<script>
import ItemList from '../../components/item-list'
import Pagination from '../../components/pagination'
import Loader from '../../components/loader'
import { toScrollTop } from '../../utils/dom'

export default {
  name: 'list',
  components: {
    ItemList,
    Pagination,
    Loader
  },
  data() {
    return {
      id: undefined,
      searchForm: {
        size: 20, // 每页显示20条数据
        page: 1 // 当前页码
      },
      count: 0, // 总记录数
      list: [],
      loading: true
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.id = from.params.id
    this.getList()
    next()
  },
  created() {
    this.id = this.$route.params.id
    this.getList()
  },
  methods: {
    getList() {
      console.log(this.id)
      this.loading = true
      this.$http.post('/api/pageList', this.searchForm).then(res => {
        this.list = res.data.data.list
        this.count = res.data.data.total
        this.loading = false
        this.$nextTick(() => {
          toScrollTop()
        })
      }).catch(err => {
        console.log(err)
      })
    },
    // 从page组件传递过来的当前page
    pageChange(page) {
      this.searchForm.page = page
      this.getList()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
