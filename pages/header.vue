<template>
  <div>
    <Header />
    <NuxtChild />
  </div>
</template>
<script>
import Header from "../components/Header/header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1rem;
}
</style>
