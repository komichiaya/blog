<!--  -->
<template>
  <Main :classify="classify" />
</template>

<script>
import Main from "~/components/Main/main.vue";

export default {
  components: {
    Main,
  },
  data() {
    return {
      classify: "",
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.classify = this.$route.params.classify;
  },
  watch: {
    $route(to, from) {
      console.log(to.params);
      this.classify = to.params.classify;
      console.log(from);
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
