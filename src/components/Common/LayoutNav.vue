<template>
  <div class="main-layout">
    <router-view />
    <Navigation />
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  components: { Navigation },
  name: "LayoutNav",
};
</script>

<style lang="scss" scoped>
.main-layout {
  max-width: 450px;
  margin: 0 auto;
  //height: 100%;
  background: #fff;
  position: relative;
  height: 100%;
  border: 1px solid #eee;

  &::v-deep {
    .line {
      border-color: #262626 !important;
    }
  }
}
</style>
