<template>
  <div class="help-index-list">
    <item-list></item-list>
    <pagination
          :page-index="currentPage"
          :total="count"
          :page-size="pageSize"
          @change="pageChange"
        >
        </pagination>
  </div>
</template>

<script>
import ItemList from '../../components/item-list'
import Pagination from '../../components/pagination'

export default {
  name: 'search',
  components: {
    ItemList,
    Pagination
  },
  data() {
    return {
      pageSize: 20, // 每页显示20条数据
      currentPage: 1, // 当前页码
      count: 0 // 总记录数
    }
  },
  methods: {
    getList() {},
    // 从page组件传递过来的当前page
    pageChange(page) {
      this.currentPage = page
      this.getList()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
