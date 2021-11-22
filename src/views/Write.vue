<template>
  <div class="write-wrap">
    <SubHeader
      :title="headerContents.title"
      @left="leftBtnAction"
      @right="rightBtnAction"
    >
      <template #left><Icon :name="headerContents.icon" /></template>
      <template #right>{{ headerContents.button }}</template>
    </SubHeader>
    <template v-if="step === 1">
      <div class="frame-box">
        <img :src="$store.state.uploadImg" align="center" />
      </div>
    </template>
    <template v-if="step === 2">
      <div class="write-feed">
        <div>
          <div class="myprofile">
            <img :src="$store.state.user.userImage" />
          </div>
          <div class="write-text">
            <textarea placeholder="문구입력..."></textarea>
          </div>
          <div class="upload-image">
            <img :src="$store.state.uploadImg" align="center" />
          </div>
        </div>
        <!--위치 추가--->
        <div>
          <p>위치 추가</p>
          <span> &gt; </span>
        </div>

        <!--사람태그하기 --->
        <div>
          <p>사람 태그하기</p>
          <span> &gt; </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Icon from "../components/Common/Icon.vue";
import SubHeader from "../components/Common/SubHeader.vue";
//import axios from "axios";

export default {
  name: "Write",
  components: { SubHeader, Icon },
  data() {
    return {
      step: 1,
      description: "",
      tag: "",
      writer: "",
      photo: "",
    };
  },
  methods: {
    leftBtnAction() {
      if (this.step === 1) {
        this.$router.push("/main");
      } else {
        this.step = 1;
      }
    },
    rightBtnAction() {
      if (this.step === 1) {
        this.step = 2;
      } else {
        //api 호출
        // const response = await axios.post("/api/board/write", {
        //   description,
        //   tag,
        //   writer: this.$store.state.user.id,
        //   photo: data.id,
        // });
        // if (response.status === 200) {
        //   this.$router.push("main");
        // } else {
        // }
      }
    },
  },
  computed: {
    headerContents() {
      return this.step === 1
        ? {
            title: "새로운 사진 게시물",
            icon: "close",
            button: "다음",
          }
        : {
            title: "새 게시물",
            icon: "back",
            button: "공유하기",
          };
    },
  },
};
</script>

<style lang="scss" scoped>
.write-wrap {
  max-width: 450px;
  margin: 0 auto;
  height: 100%;
  background: #fafafa;
  border: 1px solid #eee;
  position: relative;
  min-height: 700px;

  .frame-box {
    width: 100%;
    height: 453px;
    background: #eee;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      //width: 100%;
      min-height: 453px;
      height: 100%;
    }
  }
  .write-feed {
    & > div {
      display: flex;
      vertical-align: middle;
      align-items: flex-start;
      justify-content: space-between;
      padding: 15px;
      background: #fff;

      &:nth-child(1) {
        border-bottom: 1px solid #ddd;
      }

      &:nth-child(2),
      &:nth-child(3) {
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        margin-top: 12px;
      }

      .myprofile {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background-color: #eee;
        display: inline-block;
        overflow: hidden;
        img {
          width: 100%;
        }
      }

      .write-text {
        display: inline-block;
        width: 322px;

        textarea {
          width: 100%;
          height: 41px;
          border-color: #fff;
          resize: none;
          font-family: "Apple SD Gothic Neo";
          font-weight: 500;
          color: #222;
          font-size: 15px;

          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #c6c6c6;
            font-size: 15px;
          }
        }
      }
      .upload-image {
        display: inline-block;
        width: 48px;
        height: 48px;
        background-color: #eee;
        display: flex;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        img {
          height: 100%;
        }
      }
    }
  }
}
</style>
