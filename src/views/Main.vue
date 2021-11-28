<template>
  <div>
    <div class="feed">
      <FeedList :list="list" @like="getLike" />
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
      try {
        const response = await axios({
          method: "get",
          url: "/api/board",
        });
        if (response.status === 200) {
          console.log(response.data.map((item) => item.User));
          this.list = response.data.reverse().map((item) => {
            const target = item.like.find(
              (item) => item.user_id === this.$store.state.user.id
            );
            item.likeIt = Boolean(target);
            item.filter = item.Photo.filter;
            item.url = `/api/image/${item.Photo.url}`;
            return item;
          });
        }
      } catch (e) {
        console.log(e.response);
      }
    },

    async getLike(data) {
      const method = data.likeIt ? "post" : "delete";

      try {
        const response = await axios({
          method,
          url: "/api/board/like",
          data: {
            board_id: data.id,
            user_id: this.$store.state.user.id,
          },
        });
        if (response.status === 200) {
          data.likeIt = !data.likeIt;
          // data.likeIt ? (data.likeIt = false) : (data.likeIt = true);
          // //
          // if (data.likeIt === true) {
          //   data.likeIt = false;
          // } else {
          //   data.likeIt = true;
          // }
          //
          // if (data.likeIt) {
          //   data.likeIt = false;
          // } else {
          //   data.likeIt = true;
          // }
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

<style lang="scss" scoped>
.feed {
  margin-top: 47px;
}
</style>
