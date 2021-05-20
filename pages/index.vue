<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "../components/Main/main.vue";
import Header from "./header.vue";
export default Vue.extend({
  components: {
    Header,
    Main,
  },
  data() {
    return {
      alist: [],
      blist: [],
    };
  },
  methods: {

  },
});
</script>

<style>
</style>
