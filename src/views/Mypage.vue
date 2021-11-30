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
          <button @click="step = 2">프로필 편집</button>
        </div>
      </div>
      <div class="introduction">소개글/..</div>
      <div class="count">
        <button>게시물<span>0</span></button>
        <button @click="step = 3">팔로워<span>0</span></button>

        <button @click="step = 4">팔로우<span>0</span></button>
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
            <div v-show="currentTab === 0" class="align-center">
              <!--length가 0일때-->
              <template>
                <div class="empty">
                  <div>
                    <img src="../assets/images/camera.png" />
                  </div>
                  <h1>사진 공유</h1>
                  <p>사진을 공유하면 회원님의 프로필에 표시됩니다.</p>
                  <button>첫 사진 공유하기</button>
                </div>
              </template>
            </div>
            <div v-show="currentTab === 1">22222</div>
          </div>
        </div>
      </template>
    </template>
    <!--프로필편집--->
    <template v-if="step === 2">
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
          <p class="bold">이름</p>
          <EditInput type="text" :value.sync="$store.state.user.nickname" />
          <span
            >사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을
            사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.</span
          >
        </div>
        <div>
          <p class="bold">사용자 이름</p>
          <EditInput type="text" :value="$store.state.user.username" />
        </div>
        <div style="margin-top: 10px">
          <p class="bold">소개</p>
          <textarea></textarea>
        </div>

        <button class="submit">제출</button>
      </div>
    </template>
    <!--팔로워-->
    <template v-if="step === 3">
      <div>
        <FollowList :step="step" />
      </div>
    </template>
    <!--팔로우-->
    <template v-if="step === 4">
      <div>
        <FollowList :step="step" />
      </div>
    </template>
  </div>
</template>

<script>
import Icon from "../components/Common/Icon.vue";
import EditInput from "../components/EditInput.vue";
import SubHeader from "../components/Common/SubHeader.vue";
import FollowList from "../components/FollowList.vue";

export default {
  name: "Mypage",
  data() {
    return {
      step: 1,
      currentTab: 0,
      tabs: ["", "", "", ""],
    };
  },
  components: { SubHeader, Icon, EditInput, FollowList },
  methods: {
    leftBtnAction() {
      if (this.step === 2 || this.step === 3 || this.step === 4) {
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
          title: "프로필 편집",
          icon: "back",
        };
      } else {
        if (this.step === 3) {
          return {
            title: "팔로워",
            icon: "back",
          };
        } else {
          return {
            title: "팔로잉",
            icon: "back",
          };
        }
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
    button {
      font-size: 13px;
      font-weight: 500;
      color: #626262;
      border: none;
      background: #fff;
      padding: 0;
      span {
        display: block;
        font-weight: bold;
        color: #000;
        font-family: "Apple SD Gothic Neo";
      }
    }
  }
  .tabs {
    .align-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .empty {
      padding: 60px;
      div {
        width: 58px;
        height: 58px;
        overflow: hidden;
        border-radius: 41px;
        border: 2px solid #787373;
        /* text-align: center; */
        margin: 0 auto;
        img {
          width: 62%;
          padding: 10px;
        }
      }
      h1 {
        font-weight: 100;
        font-size: 26px;
      }
      p {
        font-weight: 400;
        font-size: 13px;
      }
      button {
        border: none;
        background: #fff;
        color: #0095f6;
        font-weight: 600;
        margin-top: 20px;
      }
    }
    .tab-btn {
      padding: 7px 0 5px;
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
    font-size: 15px;
    .submit {
      width: 100%;
      border: none;
      background-color: #0095f6;
      color: #fff;
      font-weight: 700;
      padding: 8px;
      border-radius: 3px;
      margin-top: 10px;
      font-size: 14px;
    }
    div {
      textarea {
        width: 96%;
        margin: 0;
        outline: 0;
        overflow: hidden;
        padding: 6px 0 5px 8px;
        text-overflow: ellipsis;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        margin-bottom: 6px;
        border-radius: 3px;
        background: #fff;
        font-family: "Apple SD Gothic Neo";
        margin-top: 7px;
        min-height: 50px;
      }
      .bold {
        font-weight: 500;
        color: #222;
      }
      span {
        font-size: 12px;
        margin-bottom: 15px;
        display: inline-block;
        line-height: 1.4;
        letter-spacing: -0.2px;
      }
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
