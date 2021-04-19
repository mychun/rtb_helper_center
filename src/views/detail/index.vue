<template>
  <div class="help-index-list">
    <template v-if="!laoding">
      <div class="help-body-box-detail-title">
        <h1>{{ detail.documentTitle }}</h1>
        <p class="helper-update">
          <span>创建时间：{{ detail.createTime | formatDate }}</span
          ><span>创建人：{{ detail.createUserName }}</span>
        </p>
      </div>
      <div
        class="help-detail-container"
        v-html="detail.productDocumentContent.documentContent"
      ></div>
    </template>
    <template v-else>
      <loader></loader>
    </template>
  </div>
</template>

<script>
import { getDetail } from '../../api/app'
import Loader from '../../components/loader'

export default {
  name: 'detail',
  components: {
    Loader
  },
  data() {
    return {
      detail: '',
      laoding: true
    }
  },
  watch: {
    $route: {
      handler(route) {
        if (route.name === 'detail') {
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
      this.laoding = true
      getDetail(this.$route.params.documentId).then(res => {
        this.detail = res.data
        this.laoding = false
      }).catch(err => {
        console.log('err' + err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.help-body-box-detail-title {
  h1 {
    font-size: 32px;
    margin: 0;
  }
  .helper-update {
    color: #999;
    height: 24px;
    font-size: 12px;
    margin-top: 15px;
    span {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
.help-detail-container {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 20px;
}
</style>
