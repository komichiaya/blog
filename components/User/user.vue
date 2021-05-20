<!--  -->
<template>
  <div class="main_right" v-if="!isLoading && listcount.length > 0">
    <div class="aboutMe">
      <div class="userInfo">
        <div class="avatar">
          <img :src="data.avatarImg" />
        </div>
        <div class="about">
          <span class="name"> {{ data.nickName }} </span>
          <p class="signature">{{ data.email }}</p>
        </div>
      </div>
    </div>
    <div class="recommend">
      <ul>
        <li>
          <i class="iconfont icon-blog1"></i><span class="title">文章总数</span
          >{{ listcount.length }}
        </li>
        <li>
          <i class="iconfont icon-renshutongji"></i
          ><span class="title">浏览人数</span>
          {{ allCount.count }}
        </li>
        <!-- <li>
          <i class="iconfont icon-dianzan"></i
          ><span class="title">点赞总数</span>1
        </li> -->
      </ul>
    </div>
    <div class="followMe"></div>
    <div class="ad" ref="b">
      <div>
        <img src="~/static/pc_header.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      data: {},
      allCount: 0,
      isLoading: true,
      listcount: {},
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  async mounted() {
    this.data = await this.$axios.get(
      "/web/api/users/609e21a68654ed31689fc73d"
    );
    this.allCount = await this.$axios.get("/mine/api/getAllCount");
    this.listcount = await this.$axios.get("/web/api/articles/list");

    this.scroll();
  },
  methods: {
    scroll() {
      const ad = <HTMLElement>this.$refs.b;
      document.addEventListener("scroll", function (e) {
        setTimeout(() => {
          if (window.scrollY > 330) {
            ad.style.position = "fixed";
            ad.style.top = 50 + "px";
            ad.style.width = 232 + "px";
          } else {
            ad.style.position = "static";
          }
        }, 0);
      });
    },
  },
  watch: {
    data(newValue) {
      if (newValue) {
        this.isLoading = false;
      }
    },
  },
});
</script>
<style scoped >
/* @import url(); 引入css类 */
</style>
