<!--  -->
<template>
  <div class="header" :style="{ position: 'sticky', top: '0px' }">
    <div class="header_main">
      <div class="header_left">
        <div class="log">
          <nuxt-link to="/">
            <i class="iconfont icon-ego-blog"></i>
          </nuxt-link>
          <h1 class="header_h1">博客</h1>
        </div>
        <div class="header_txt">
          <span>啦啦啦啦啦啦~</span>
        </div>
      </div>
      <div class="header_right">
        <div class="nav">
          <ul>
            <li>
              <nuxt-link to="/" class="el-link">
                <i class="iconfont icon-home"></i>
                首页
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/header/1" class="el-link">
                <i class="iconfont icon-faxian"></i>
                文章
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/header/2" class="el-link">
                <i class="iconfont icon-xiezuo"></i>
                碎碎念
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/header/3" class="el-link">
                <i class="iconfont icon-shenghuo"></i>
                写作
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    toChange(tags: string) {
      this.$emit("changeTags", tags);
    },
  },
});
</script>
<style>
/* @import url(); 引入css类 */
</style>
