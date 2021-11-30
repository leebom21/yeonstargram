<template>
  <div>
    <li>
      <div class="circle">
        <img :src="item.userimg" />
      </div>
      <div class="list">
        <div>
          <p>
            {{ item.username
            }}<button v-show="item.follow === 'N' && this.step === 3">
              팔로우
            </button>
            <span>{{ item.name }}</span>
          </p>
        </div>
        <button>{{ test }}</button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "FollowListItem",
  props: ["item", "step"],
  computed: {
    test() {
      if (this.step === 3) {
        return "삭제";
      } else {
        return "팔로잉";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 18px;
  .circle {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 30px;

    img {
      width: 100%;
    }
  }
  .list {
    display: flex;
    align-items: center;
    width: 88%;
    justify-content: space-between;
    div {
      p {
        font-size: 14px;
        font-weight: 800;
        color: #000;

        button {
          font-weight: bold;
          border: none;
          background: #fff;
          color: #0095f6;
          padding: 0 7px;
        }
        span {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #8b8989;
        }
      }
    }
    button {
      background: #fff;
      border: 1px solid #e1e1e1;
      border-radius: 3px;
      font-size: 12px;
      padding: 5px 7px 4px;
      font-weight: 600;
    }
  }
}
</style>
