<template>
  <div class="help-index-menu">
    <ul class="help-index-menu-list">
      <li v-for="nav in navChildList" :key="nav.categoryId">
        <router-link
          class="one-class"
          :to="{
            name: 'list',
            params: { productCode, categoryId: nav.categoryId },
          }"
          :class="{ more: nav.children.length > 0 }"
          >{{ nav.categoryName
          }}<i class="iconfont icon-xia" v-show="nav.children.length > 0"></i
        ></router-link>

        <template v-if="nav.children.length > 0">
          <ul class="menu-son-list">
            <li v-for="child1 in nav.children" :key="child1.categoryId">
              <router-link
                :to="{
                  name: 'list',
                  params: { productCode, categoryId: child1.categoryId },
                }"
                :class="{ more: child1.children.length > 0 }"
                >{{ child1.categoryName
                }}<i
                  class="iconfont icon-xia"
                  v-show="child1.children.length > 0"
                ></i
              ></router-link>

              <template v-if="child1.children.length > 0">
                <ul class="menu-son-list">
                  <li
                    v-for="child2 in child1.children"
                    :key="child2.categoryId"
                  >
                    <router-link
                      :to="{
                        name: 'list',
                        params: {
                          productCode,
                          categoryId: child2.categoryId,
                        },
                      }"
                      :class="{ more: child2.children.length > 0 }"
                      >{{ child2.categoryName
                      }}<i
                        class="iconfont icon-xia"
                        v-show="child2.children.length > 0"
                      ></i></router-link>

                    <template v-if="child2.children.length > 0">
                      <ul class="menu-son-list">
                        <li
                          v-for="child3 in child2.children"
                          :key="child3.categoryId"
                        >
                          <router-link
                            :to="{
                              name: 'list',
                              params: {
                                productCode,
                                categoryId: child3.categoryId,
                              },
                            }"
                            >{{ child3.categoryName }}</router-link
                          >
                        </li>
                      </ul>
                    </template>
                  </li>
                </ul>
              </template>
            </li>
          </ul>
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
import { mapGetters } from 'vuex'
import store from '../../../../store'

export default {
  name: 'navLeft',
  computed: {
    ...mapGetters(['productCode', 'navChildList', 'navList'])
  },
  watch: {
    productCode(newVal) {
      this.setNavChildListToProductCode(newVal)
    }
  },
  mounted() {
    $('.help-index-menu-list').on('click', '.more', function () {
      // const childDom = $(this).siblings('ul')
      // if (childDom.css('display') === 'none') {
      //   $(this).addClass('show-son-nav')
      //   childDom.slideDown()
      // } else {
      //   $(this).removeClass('show-son-nav')
      //   childDom.slideUp()
      // }
      // console.log(1)
      $(this).toggleClass('show-son-nav').siblings('ul').slideToggle()
    })
  },
  methods: {
    setNavChildListToProductCode(productCode) {
      const navList = this.navList
      const len = navList.length
      for (let i = 0; i < len; i++) {
        const item = navList[i]
        if (item.productCode === productCode) {
          store.dispatch('setNavChildList', item.productCategories)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
