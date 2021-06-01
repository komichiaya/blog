<!--  -->
<template>
  <div>
    <div class="main">
      <div class="main_left">
        <div class="article_module" v-if="!this.loading && $route.path === '/'">
          <div v-for="item in list" :key="item._id">
            <div class="article_mian" v-if="item.top">
              <div>
                <div class="article_module_title">
                  <div class="title_h2">
                    <nuxt-link
                      :to="{ name: 'blog-id', params: { id: item._id } }"
                      >{{ item.title }}</nuxt-link
                    >
                    <!-- <a href="./txt.html">{{ item.title }}</a> -->
                  </div>
                  <div class="title_tagInfo">
                    <ul class="tag">
                      <li v-if="item.top">置顶</li>
                      <li>热门</li>
                    </ul>
                    <div class="info">
                      <span class="date">
                        <i class="iconfont icon-riqi"></i>
                        {{ time(item.updatedAt) }}
                      </span>
                      <span class="type">
                        <i class="iconfont icon-17"></i>
                        {{ item.categories[0] }}
                      </span>
                      <!-- <span class="count">
                    <i class="iconfont icon-faxian"></i>
                    4000人
                  </span> -->
                    </div>
                  </div>
                </div>
                <div class="article_module_info">
                  <div
                    class="fistSection"
                    v-html="truncate1(item.body, 60, { keepImageTag: true })"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="article_module" v-if="!this.loading">
          <div v-for="item in list" :key="item._id">
            <div
              class="article_mian"
              style="border-bottom: 1px solid #eee"
              v-if="$route.path === '/' ? !item.top : 1"
            >
              <div class="article_module_title">
                <div class="title_h2">
                  <nuxt-link
                    :to="{ name: 'blog-id', params: { id: item._id } }"
                    >{{ item.title }}</nuxt-link
                  >
                </div>
                <div class="title_tagInfo">
                  <ul class="tag" v-if="$route.path === '/'">
                    <li v-if="item.top">置顶</li>
                    <li v-if="item.count > articlesList.length">热门</li>
                  </ul>
                  <div class="info">
                    <span class="date">
                      <i class="iconfont icon-riqi"></i>
                      {{ time(item.updatedAt) }}
                    </span>
                    <span class="type">
                      <i class="iconfont icon-17"></i>
                      {{ item.categories[0] }}
                    </span>
                    <!-- <span class="count">
                    <i class="iconfont icon-faxian"></i>
                    4000人
                  </span> -->
                  </div>
                </div>
              </div>
              <div class="article_module_info">
                <div
                  class="fistSection"
                  v-html="truncate1(item.body, 60, { keepImageTag: true })"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <User :listcount="articlesList.length" />
    </div>
  </div>
</template>

<script >
import Vue from "vue";
import { mapState } from "vuex";
import User from "../User/user.vue";
import truncate from "html-truncate";
import { time } from "~/assets/time.js";

export default {
  components: { User },
  props: {
    classify: {
      type: String,
    },
  },
  data: () => {
    const loading = true;
    return {
      loading,
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$store.dispatch("home/getArticlesList");
  },
  computed: {
    ...mapState("home", {
      articlesList: (state) => state.articlesList,
      classifyList: (state) => state.classifyList,
    }),
    list() {
      if (this.$route.params.classify) {
        if (this.classifyList.length) {
          return this.classifyList;
        } else {
          return this.articlesList;
        }
      } else {
        return this.articlesList;
      }
    },
  },
  watch: {
    classify(newValue, oldValue) {
      if (newValue) {
        console.log(newValue);
        this.$store.dispatch("home/getClassifylist", newValue);
      }
    },
    articlesList(newValue, oldValue) {
      if (newValue.length > 0) {
        this.loading = false;
      }
    },
  },
  methods: {
    a() {
      // console.log(this.$route.params);
      if (this.$route.params == {}) {
      } else {
        console.log(2);
      }
    },
    truncate1(param, length, options) {
      return truncate(param, length, options);
    },
    time(row) {
      return time(row);
    },
    getTopTagTxt(list) {
      list.find((item) => {
        console.log(item);
        return item;
      });
    },
  },
};
</script>
<style scoped lang='sass'>
</style>
