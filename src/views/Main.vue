<template>
  <div>
    <!--스토리-->

    <!--리스트 뿌려주기-->
    <div class="feed">
      <FeedList :list="list" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FeedList from "../components/FeedList.vue";

export default {
  name: "Main",
  data() {
    return {
      list: [],
    };
  },
  components: { FeedList },
  methods: {
    async getPosts() {
      // axios({
      //   method: "get",
      //   url: "/api/board",
      // })
      //   .then((res) => {
      //     if (res.status === 200) {
      //       this.list = res.data;
      //     }
      //   })
      //   .catch((e) => {
      //     console.log(e.response);
      //   });

      try {
        const response = await axios({
          method: "get",
          url: "/api/board",
        });
        if (response.status === 200) {
          this.list = response.data;
        }
      } catch (e) {
        console.log(e.response);
      }
    },
  },
  // vue 기본 문법
  // data, computed, methods, props, watch
  created() {
    this.getPosts();
  },

  // vue life cycle
  // beforeCreate, created, beforeMount, mounted, beforeDestroy
};
</script>

<style lang="scss" scoped></style>
