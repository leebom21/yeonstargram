<template>
  <div>
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
  name: "Layout",
};
</script>

<style lang="scss" scoped></style>
