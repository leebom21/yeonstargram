<template>
  <div>
    <TypeItem v-for="(item, i) in list" :key="i" :list="list" />
  </div>
</template>

<script>
import TypeItem from "../components/TypeItem.vue";

export default {
  name: "MosiacType",
  components: { TypeItem },
  data() {
    return {
      list: {
        name: "rr",
        follow: "N",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
