<template>
    <ul class="search-container">
      <li v-for="item in data" :key="item.documentId">
        <router-link class="help-item-title" :to="{ name: 'detail', params: { documentId: item.documentId } }">{{ item.documentTitle }}</router-link>
        <!-- <div class="help-item-content">{{ item.intro }}</div> -->
        <div class="nodes-info">
          <span>创建时间：{{ item.createTime | formatDate }}</span>
          <span v-if="item.updateUserName">创建人：{{ item.updateUserName }}</span>
        </div>
      </li>

      <!-- <li>
        <a href="" class="help-item-title">2.1.5版本</a>
        <div class="help-item-content">
          本文为您介绍Flink半托管/ACK 2..5版本的重大功能变更。版本重大功能变更
          平台语言支持中文简体。您也可以在控制台系统信息页面，切换为英文。支持STS
          Token认证。说明 Flink半托管/ACK 2.
        </div>
        <div class="nodes-info">创建时间：2021-04-12</div>
      </li> -->
    </ul>
</template>

<script>
export default {
  name: 'itemList',
  props: {
    data: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.search-container {
  li {
    margin-bottom: 40px;

    .help-item-title {
      display: inline-block;
      &:hover {
        color: $color-theme;
      }
      height: 24px;
      font-size: 18px;
      color: #181818;
      letter-spacing: 0;
      line-height: 24px;
      margin-bottom: 6px;
    }
    .help-item-content {
      font-size: 14px;
      color: #3d3d3d;
      letter-spacing: 0;
      line-height: 24px;
      margin-bottom: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .nodes-info {
      height: 18px;
      font-size: 14px;
      color: #999;
      line-height: 18px;
      margin-right: 60px;
      span{
        display: inline-block; margin-right: 10px;
      }
    }
  }
}
</style>
