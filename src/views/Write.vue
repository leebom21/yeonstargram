<template>
  <div class="write-wrap">
    <SubHeader
      title="새로운 사진 게시물"
      @left="leftBtnAction"
      @right="rightBtnAction"
    >
      <template #left>
        <svg
          aria-label="닫기"
          class="_8-yf5"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 48 48"
          width="24"
        >
          <path
            clip-rule="evenodd"
            d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </template>
      <template #right> 다음 </template>
    </SubHeader>
    글쓰기페이지
  </div>
</template>

<script>
import SubHeader from "../components/Common/SubHeader.vue";

export default {
  name: "Write",
  components: { SubHeader },
  methods: {
    leftBtnAction() {},
    rightBtnAction() {},
  },
};
</script>

<style lang="scss" scoped>
.write-wrap {
  max-width: 450px;
  margin: 0 auto;
  height: 100%;
  background: #fff;
  border: 1px solid #eee;
  position: relative;
}
</style>
