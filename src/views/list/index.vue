<template>
  <div class="help-index-list">
    <div class="help-index-cell">
      <div class="select-type-container">
        <select-type
          typeLabel="角色"
          :typeList="tagList"
          typeId="tagId"
          typeName="tagName"
          :selectedList="selectedTags"
          v-if="tagList.length > 0"
          @selected="selectedRoleEvent"
        ></select-type>
      </div>

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
import SelectType from '../../components/select-type'
// import { toScrollTop } from '../../utils/dom'
import store from '../../store'
import { mapGetters } from 'vuex'
import { getList, getTagList } from '../../api/app'
export default {
  name: 'list',
  components: {
    ItemList,
    Pagination,
    Loader,
    Empty,
    SelectType
  },
  data() {
    return {
      searchForm: {
        pageSize: 20, // 每页显示20条数据
        currentPage: 1, // 当前页码
        productCode: '',
        categoryId: '',
        documentTitle: '',
        tagIds: ''
      },
      count: 0, // 总记录数
      list: [],
      loading: true,
      tagList: '',
      selectedTags: []
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

    // 监听当下这个路由 是否 有变化
    $route: {
      handler(route) {
        if (route.name === 'list') {
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
      this.initSearchForm()

      this.getTagListData()
      this.getListData()
    },
    initSearchForm() {
      this.searchForm.currentPage = 1

      const paramSearchKey = this.$route.query.searchKey
      if (paramSearchKey) {
        this.searchForm.documentTitle = paramSearchKey
      } else {
        this.searchForm.documentTitle = ''
      }

      const productCode = this.$route.params.productCode

      if (!this.productCode || this.productCode !== productCode) {
        store.dispatch('setProductCode', productCode)
      }
      this.searchForm.productCode = this.productCode

      const categoryId = this.$route.params.categoryId
      if (categoryId) {
        this.searchForm.categoryId = categoryId
      } else {
        this.searchForm.categoryId = ''
      }
      // store.dispatch('setCategoryId', categoryId)

      const tagIds = this.$route.query.tagIds
      if (tagIds) {
        this.searchForm.tagIds = tagIds
        this.selectedTags = tagIds.split(',')
      } else {
        this.searchForm.tagIds = ''
        this.selectedTags = []
      }
      // store.dispatch('setCategoryId', categoryId)
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
    },
    getTagListData() {
      getTagList(this.productCode).then(res => {
        this.tagList = res.data.data
      }).catch(err => {
        console.log('err', err)
      })
    },
    selectedRoleEvent(tagids) {
      // console.log(tagids)
      this.selectedTags = tagids
      this.searchForm.tagIds = tagids.join(',')
      let query = {}
      if (this.searchForm.tagIds) {
        query = {
          tagIds: this.searchForm.tagIds
        }
      }
      this.$router.push({ name: 'list', params: { productCode: this.productCode, categoryId: this.searchForm.categoryId }, query })
      // this.getListData()
    }
  }
}
</script>

<style lang="scss" scoped>
.select-type-container {
  margin-bottom: 40px;
  padding: 5px;
  border: 1px solid #efefef;
}
</style>
