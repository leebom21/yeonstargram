<template>
  <div class="main-layout">
    <Header />
    <router-view />
    <Navigation />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Navigation from "./Navigation.vue";

export default {
  components: { Header, Navigation },
  name: "LayoutMain",
};
</script>

<style lang="scss" scoped>
.main-layout {
  max-width: 450px;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
</style>
