<template>
  <li class="feed-item">
    <div>
      <div>
        <img :src="$store.state.user.userImage" />
      </div>
      <div>
        <a href="#none"> {{ item.User.username }}</a>
        <button class="modal">
          <Icon name="moreBtn" />
        </button>
      </div>
    </div>
    <div class="upload-image">
      <img :src="item.url" alt="게시물 이미지" :class="item.filter" />
    </div>
    <div class="content-wrap">
      <div class="icon-wrap">
        <!--icon box-->
        <div class="left">
          <button
            class="modal base-like"
            :class="{ likeBtn: item.likeIt }"
            @click="like"
          ></button>

          <button class="modal">
            <Icon name="reply" />
          </button>
          <button class="modal">
            <Icon name="share" />
          </button>
        </div>
        <div class="right">
          <button class="modal">
            <Icon name="bookmark" />
          </button>
        </div>
      </div>
      <div>
        <!--detail-->
        <p class="bold like">좋아요 {{ item.like.length }}개</p>
        <p class="normal">
          <a href="#none" class="bold nickname">{{ item.User.username }}</a>
          {{ item.description }}
        </p>
        <span class="date">{{ dateTime }}</span>
      </div>
    </div>
  </li>
</template>

<script>
import Icon from "../components/Common/Icon.vue";

export default {
  name: "FeedListItem",
  components: { Icon },
  props: ["item"],
  data() {
    return {
      likeBtn: false,
    };
  },

  methods: {
    like() {
      this.$emit("like", this.item);
    },
  },
  computed: {
    dateTime() {
      const targetDate = this.$moment(this.item.createdAt);

      // 00분
      const minutes = this.$moment().diff(targetDate, "minute");
      // 10분 미만
      if (minutes < 10) {
        return "방금 전";
      }
      // 60분 미만
      if (minutes < 60) {
        return `${minutes}분 전`;
      }
      // 00시간
      const hours = Math.ceil(minutes / 60);

      // 24시간 미만
      if (hours < 24) {
        return `${hours}시간 전`;
      }

      // 00일
      const days = Math.ceil(hours / 24);
      return days < 10 ? `${days}일 전` : targetDate.format("YYYY.MM.DD");
    },
  },
};
</script>

<style lang="scss" scoped>
.feed-item {
  &:nth-last-child(1) {
    padding-bottom: 50px;
  }
  a {
    text-decoration: none;
    color: #000;
  }

  button {
    border: none;
    background: #fff;
    padding: 0;
  }
  width: 100%;
  & > div {
    &:nth-child(1) {
      padding: 14px;
      border-bottom: 1px solid #ddd;
      overflow: hidden;
      display: flex;
      align-items: center;

      & > div {
        display: inline-block;
        &:nth-child(1) {
          width: 36px;
          height: 32px;
          background: #ddd;
          border-radius: 50px;
          margin-right: 10px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }
        &:nth-child(2) {
          width: 100%;
          display: flex;
          justify-content: space-between;

          a {
            font-weight: 600;
            display: inline-block;
            margin-top: 2px;
          }
        }
      }
    }
  }

  .upload-image {
    height: 450px;
    background: #f3f3f3;
    overflow: hidden;
    vertical-align: middle;

    img {
      height: 100%;
    }
  }

  .content-wrap {
    padding: 0 15px;
    text-align: left;

    span {
      &.date {
        color: #8e8e8e;
        font-size: 11px;
        margin: 10px 0 16px;
        display: inline-block;
      }
    }

    p {
      font-size: 14px;

      &.like {
        margin-bottom: 5px;
      }
    }

    .bold {
      font-weight: bold;
    }
    .normal {
      font-weight: 500;
      color: #222;
    }

    .nickname {
      margin-right: 4px;
    }

    .icon-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 0;
      margin-top: 5px;
      .left {
        button {
          padding: 8px 15px 5px 0;
        }

        .base-like {
          background-image: url(~@/assets/images/heart.png);
          width: 34px;
          height: 24px;
          padding: 0;
          background-repeat: no-repeat;
          background-size: 26px;
          background-position: 0px -1px;
          display: inline-block;
          margin-right: 4px;

          &.likeBtn {
            background-image: url(~@/assets/images/heart-red.png);
          }
        }
      }
      .right {
      }
    }
  }
}
</style>
