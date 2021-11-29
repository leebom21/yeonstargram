<template>
  <div class="mypage-wrap">
    <SubHeader
      :title="headerContents.title"
      @left="leftBtnAction"
      @right="rightBtnAction"
    >
      <template #left><Icon :name="headerContents.icon" /></template>
      <template #right><Icon :name="headerContents.icon2" /></template>
    </SubHeader>
    <template v-if="step === 1">
      <div class="profile">
        <div class="profile-img">
          <img :src="$store.state.user.userImage" />
        </div>
        <div class="profile-edit">
          <p>{{ $store.state.user.username }}</p>
          <button @click="step = 3">프로필 편집</button>
        </div>
      </div>
      <div class="introduction">소개글/..</div>
      <div class="count">
        <p>게시물<span>0</span></p>
        <p>팔로워<span>0</span></p>
        <p>팔로우<span>0</span></p>
      </div>

      <template>
        <div class="tabs">
          <div class="tab-btn">
            <button
              v-for="(item, i) in tabs"
              :key="i"
              :class="{ active: currentTab === i }"
              @click="currentTab = i"
            >
              <div v-show="i === 0">
                <Icon name="post" />
              </div>
              <div v-show="i === 1">
                <Icon name="feed" />
              </div>
            </button>
          </div>
          <div class="tab-content">
            <div v-show="currentTab === 0">11111</div>
            <div v-show="currentTab === 1">22222</div>
          </div>
        </div>
      </template>
    </template>

    <template v-if="step === 2">
      <div>팔로우</div>
    </template>
    <template v-if="step === 3">
      <div class="edit-wrap">
        <div>
          <div class="profile-img">
            <img :src="$store.state.user.userImage" />
          </div>
          <div class="profile-change">
            <p>{{ $store.state.user.username }}</p>
            <button>프로필 사진 바꾸기</button>
          </div>
        </div>
        <div>
          이름 <br />
          <input type="text" /> <br />
          <span
            >사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을
            사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.</span
          >
        </div>
        <div>
          사용자 이름 <br />
          <input type="text" :value="$store.state.user.username" />
          <div></div>
        </div>
        <div>
          소개 <br />
          <input type="text" />
          <div></div>
        </div>

        <button>제출</button>
      </div>
    </template>
  </div>
</template>

<script>
import Icon from "../components/Common/Icon.vue";

import SubHeader from "../components/Common/SubHeader.vue";

export default {
  name: "Mypage",
  data() {
    return {
      step: 3,
      currentTab: 0,
      tabs: ["", "", "", ""],
    };
  },
  components: { SubHeader, Icon },
  methods: {
    rightBtnAction() {
      if (this.step === 1) {
        this.step = 2;
      }
    },
    leftBtnAction() {
      if (this.step === 2 || this.step === 3) {
        this.step = 1;
      } else {
        console.log("d");
      }
    },
  },
  computed: {
    iconw() {
      return this.currentTab === 0
        ? {
            icon: "post",
          }
        : {
            icon: "close",
          };
    },

    headerContents() {
      if (this.step === 1) {
        return {
          title: this.$store.state.user.username,
          icon: "",
          icon2: "follow",
        };
      } else if (this.step === 2) {
        return {
          title: "팔로우할 만한 계정 둘러보기",
          icon: "back",
        };
      } else {
        return {
          title: "프로필 편집",
          icon: "back",
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mypage-wrap {
  max-width: 450px;
  margin: 0 auto;
  background: #fff;
  //border: 1px solid #eee;
  position: relative;

  .profile {
    overflow: hidden;
    padding: 15px;
    display: flex;
    .profile-img {
      margin-right: 20px;
      height: 80px;
      max-width: 80px;
      border-radius: 64px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }
    .profile-edit {
      width: 75%;
      text-align: left;
      margin-left: 5px;

      p {
        font-size: 26px;
      }
      button {
        width: 90%;
        border: 1px solid #ddd;
        background-color: #fff;
        padding: 6px 5px 5px 5px;
        border-radius: 3px;
        margin-top: 5px;
        font-weight: 600;
        font-size: 12px;
      }
    }
  }
  .introduction {
    text-align: left;
    padding: 0 15px;
    font-size: 13px;
    padding-bottom: 15px;
  }
  .count {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    p {
      font-size: 13px;
      font-weight: 500;
      color: #626262;
      span {
        display: block;
        font-weight: bold;
        color: #000;
      }
    }
  }
  .tabs {
    .tab-btn {
      padding: 6px 0 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #ddd;
      button {
        border: none;
        background: none;
        &.active {
          span {
            &::v-deep {
              ._8-yf5 {
                fill: #0095f6;
              }
            }
          }
        }
      }
    }
  }
  .edit-wrap {
    text-align: left;
    padding: 15px;
    div {
      &:nth-child(1) {
        display: flex;
        margin-bottom: 10px;
        .profile-img {
          width: 40px;
          height: 40px;
          border-radius: 30px;
          overflow: hidden;

          img {
            width: 100%;
          }
        }
        .profile-change {
          margin-left: 15px;
          line-height: 19px;

          p {
            font-size: 20px;
            font-weight: 500;
          }
          button {
            background: #fff;
            border: none;
            color: #0095f6;
            font-weight: 800;
            padding: 0;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
