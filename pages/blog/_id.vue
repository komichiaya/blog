<!--  -->
<template>
  <div>
    <Header />
    <Blog :res="res" />
  </div>
</template>

<script>
import Header from "../../components/Header/header.vue";
import Blog from "../../components/Blog/blog.vue";
import { GET_TXTINFO } from "~/store/types.ts";

export default {
  components: {
    Header,
    Blog,
  },
  data() {
    return {
      id: null,
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.id = this.$route.params.id;
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log(this.id);
  },

  async asyncData({ app, params, store }) {
    let domain = app.context.env.domain;
    const res = await app.$axios.get(
      `${domain}/web/api/articles/list/${params.id}`
    );
    const count = await app.$axios.get(
      `${domain}/mine/api/getCount/${params.id}`
    );
    console.log(count);
    // store.commit("blog/get_txtinfo", res);
    // store.commit("blog/get_likecount", count);
    return {
      res,
      count,
    };
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
