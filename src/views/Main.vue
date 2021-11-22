<template>
  <div>
    <!--스토리-->

    <!--리스트 뿌려주기-->
    <div class="feed"><FeedList :list="list" :listData="listData" /></div>
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
      listData: [
        {
          id: 0,
          profile:
            "https://i.pinimg.com/564x/52/9f/9a/529f9aeb3d2c17476d3fa67fdec7f064.jpg", //프로필 이미지 경로
          username: "leebom_test01", // 작성자 닉네임
          url: "https://i.pinimg.com/564x/73/35/31/733531b6c100ef52159dbf1476f253a2.jpg", //게시물 이미지 경로
          likeCount: 1,
          date: 7,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula sapien, rutrum sed vestibulum eget, rhoncus ac erat. Aliquam erat volutpat. Sed convallis scelerisque enim at fermentum.",
        },
        {
          id: 1,
          profile:
            "https://i.pinimg.com/564x/e6/3f/64/e63f64a6ff3895ccb4fa6399b7acbfdd.jpg", //프로필 이미지 경로
          username: "rkskekf", // 작성자 닉네임
          url: "https://i.pinimg.com/736x/6e/14/cc/6e14cc16824ed8150ab77a59b2e7ff3b.jpg", //게시물 이미지 경로
          likeCount: 7,
          date: 3,
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
          id: 2,
          profile:
            "https://i.pinimg.com/564x/41/88/a5/4188a5bc471ab4797417813e5b039c60.jpg", //프로필 이미지 경로
          username: "lalala", // 작성자 닉네임
          url: "https://i.pinimg.com/564x/4a/df/79/4adf79a54b55ff828832636d7e3b62c9.jpg", //게시물 이미지 경로
          likeCount: 3,
          date: 1,
          description: "오늘은 화요일 :)",
        },
        {
          id: 3,
          profile:
            "https://i.pinimg.com/564x/98/d5/3e/98d53e3014862a543e49c729ba06c4af.jpg", //프로필 이미지 경로
          username: "lalala", // 작성자 닉네임
          url: "https://i.pinimg.com/564x/9d/02/b2/9d02b26580b242a40108589138138e6f.jpg", //게시물 이미지 경로
          likeCount: 8,
          date: 0,
          description: "오늘은 수요일!!!! ",
        },
      ],
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
    // this.getPosts();
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
