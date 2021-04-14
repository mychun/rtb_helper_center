<template>
  <div class="help-index-menu">
    <ul class="help-index-menu-list">
      <li v-for="nav in navList" :key="nav.id">
        <template v-if="nav.children.length > 0">
          <a class="one-class more" href="javascript:void(0);">{{
            nav.name
          }}</a>

          <ul class="menu-son-list">
            <li v-for="child1 in nav.children" :key="child1.id">
              <template v-if="child1.children.length > 0">
                <a class="more" href="javascript:void(0);">{{ child1.name }}</a>
                <ul class="menu-son-list">
                  <li v-for="child2 in child1.children" :key="child2.id">
                    <template v-if="child2.children.length > 0">
                      <a class="more" href="javascript:void(0);">{{
                        child2.name
                      }}</a>
                      <ul class="menu-son-list">
                        <li v-for="child3 in child2.children" :key="child3.id">
                          <router-link
                            :to="{ name: 'list', params: { id: child3.id } }"
                            >{{ child3.name }}</router-link
                          >
                        </li>
                      </ul>
                    </template>
                    <template v-else>
                      <router-link
                        :to="{ name: 'list', params: { id: child2.id } }"
                        >{{ child2.name }}</router-link
                      >
                    </template>
                  </li>
                </ul>
              </template>
              <template v-else>
                <router-link
                  :to="{ name: 'list', params: { id: child1.id } }"
                  >{{ child1.name }}</router-link
                >
              </template>
            </li>
          </ul>
        </template>
        <template v-else>
          <router-link
            class="one-class"
            :to="{ name: 'list', params: { id: nav.id } }"
            >{{ nav.name }}</router-link
          >
        </template>
      </li>

      <!-- <li>
        <a class="one-class more" href="javascript:void(0);">问题中心</a>
        <ul class="menu-son-list">
          <li>
            <a href="javascript:void(0);" class="more">功能分类</a>
            <ul class="menu-son-list">
              <li><a href="">操作管理</a></li>
              <li><a href="">业务管理</a></li>
            </ul>
          </li>
          <li>
            <a href="">角色分类</a>
          </li>
        </ul>
      </li> -->
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'navLeft',
  data() {
    return {
      navList: [],
      id: undefined
    }
  },
  mounted() {
    $('.help-index-menu-list').on('click', '.more', function () {
      $(this).toggleClass('show-son-nav').siblings('ul').slideToggle()
    })
  },
  created() {
    this.$http.get('/getNav').then(res => {
      this.navList = res.data.data.nav
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
