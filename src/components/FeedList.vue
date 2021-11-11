<template>
  <ul class="feed-list">
    <FeedListItem :list="list" :listData="listData" />
  </ul>
</template>

<script>
import FeedListItem from "./FeedListItem.vue";
export default {
  name: "FeedList",
  props: ["list", "listData"],
  components: { FeedListItem },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
