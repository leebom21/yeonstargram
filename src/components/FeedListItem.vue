<template>
  <div>
    <li v-for="(item, i) in list" :key="i" class="feed-item">
      <!---->
      <div>
        <div>
          <img :src="item.User.profile" />
        </div>
        <a href="#none"> {{ item.User.username }}</a>
        <button class="modal">더보기</button>
      </div>
      <div>
        <img :src="item.Photo.url" alt="게시물 이미지" />
      </div>
      <div>
        <div>
          <!--icon box-->
          <button class="modal">좋아요</button>
          <button class="modal">댓글</button>
          <button class="modal">쪽지</button>
          <button class="modal">북마크</button>
        </div>
        <div>
          <!--detail-->
          <p>좋아요 {{ item.like.length }}개</p>
          <p>
            <a href="#none">{{ item.User.username }}</a> {{ item.description }}
          </p>
          <span>0일전</span>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "FeedListItem",
  props: ["list"],
};
</script>

<style lang="scss" scoped>
.feed-item {
  width: 100%;
  & > div {
    &:nth-child(1) {
      padding: 14px;
      border-bottom: 1px solid #ddd;
      overflow: hidden;
      vertical-align: center;

      & > div {
        width: 32px;
        height: 32px;
        background: #ddd;
        border-radius: 30px;
        float: left;
        vertical-align: center;

        img {
          width: 100%;
        }
      }
      a {
        float: left;
      }
      button {
        float: right;
        border: none;
      }
    }
  }
}
</style>
