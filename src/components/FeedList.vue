<template>
  <ul class="feed-list">
    <FeedListItem
      v-for="(item, i) in list"
      :item="item"
      :key="i"
      @like="$emit('like', $event)"
    />
  </ul>
</template>

<script>
import FeedListItem from "./FeedListItem.vue";
export default {
  name: "FeedList",
  props: ["list"],
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
