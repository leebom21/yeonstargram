<template>
  <div>
    <ul>
      <FollowListItem
        v-for="(item, i) in List"
        :key="i"
        :item="item"
        :step="step"
        :followInfo="followInfo"
        @click="$emit('follow')"
      />
    </ul>
  </div>
</template>

<script>
import FollowListItem from "../components/FollowListItem.vue";
export default {
  name: "FollowList",
  components: { FollowListItem },
  props: ["step", "followList"],
  data() {
    return {
      List: [
        {
          name: "이봄",
          username: "leebom21",
          userimg:
            "https://i.pinimg.com/564x/48/ff/92/48ff924e72e235ddbe1865ff54e21152.jpg",
          follow: "N",
        },
        {
          name: "이봄22",
          username: "leebom2134",
          userimg:
            "https://i.pinimg.com/564x/48/ff/92/48ff924e72e235ddbe1865ff54e21152.jpg",
          follow: "Y",
        },
        {
          name: "이동근",
          username: "leebom2100",
          userimg:
            "https://i.pinimg.com/564x/48/ff/92/48ff924e72e235ddbe1865ff54e21152.jpg",
          follow: "Y",
        },
        {
          name: "이동관",
          username: "leebom21_11",
          userimg:
            "https://i.pinimg.com/564x/48/ff/92/48ff924e72e235ddbe1865ff54e21152.jpg",
          follow: "N",
        },
        {
          name: "이동관11",
          username: "leebom21__9_",
          userimg:
            "https://i.pinimg.com/564x/48/ff/92/48ff924e72e235ddbe1865ff54e21152.jpg",
          follow: "Y",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  padding: 15px;
  margin: 0;
}
</style>
