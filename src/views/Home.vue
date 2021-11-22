<template>
  <div class="home">
    <div class="home-wrap">
      <!--left img --->
      <div class="left">
        <div class="image-wrap">
          <img src="../assets/images/img001.png" alt="phone-img" />
        </div>
      </div>
      <div class="right">
        <div>
          <!--logo-->
          <div class="logo">
            <img src="../assets/images/yeon-logo.png" alt="logo" />
          </div>
          <!--input -->
          <Input
            :value.sync="id"
            type="text"
            placeHolder="전화번호, 사용자 이름 또는 이메일"
          />
          <Input :value.sync="pw" type="password" placeHolder="비밀번호" />

          <Button title="로그인" @click="login" />
          <div class="line-wrap">
            <span class="line"></span>
            <span>또는</span>
            <span class="line"></span>
          </div>

          <router-link to="/" class="facebook">
            <svg
              version="1.2"
              baseProfile="tiny"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
              x="0px"
              y="0px"
              width="36px"
              height="36px"
              viewBox="0 0 36 36"
              xml:space="preserve"
            >
              <defs></defs>
              <rect fill="#3B5998" width="36" height="36" />
              <path
                fill="#FFFFFF"
                d="M30.895,16.535l-0.553,5.23h-4.181v15.176h-6.28V21.766H16.75v-5.23h3.131v-3.149
	c0-4.254,1.768-6.796,6.796-6.796h4.181v5.23h-2.615c-1.952,0-2.081,0.736-2.081,2.1v2.615H30.895z"
              />
            </svg>

            Facebook으로 로그인</router-link
          >
          <router-link to="/" class="find-pw">
            비밀번호를 잊으셨나요?</router-link
          >
        </div>
        <div class="join">
          <p>
            계정이 없으신가요? <router-link to="/join">가입하기</router-link>
          </p>
        </div>

        <!---app download-->
        <div>
          <p>앱을 다운로드하세요.</p>
          <div>
            <router-link to="">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                alt="ios"
              />
            </router-link>
            <router-link to="">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                alt="안드로이드"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Input,
    Button,
  },
  data() {
    return {
      id: "",
      pw: "",
    };
  },
  methods: {
    login() {
      this.$router.push("/main");
    },
    async login1() {
      const response = await axios.post("/api/account/login", {
        email: this.id,
        password: this.pw,
      });
      //console.log(response);
      if (response.status === 200) {
        this.$router.push("/main");
      }
    },
  },
};
</script>
<style lang="scss" coped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  background-color: #fafafa;

  .home-wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    .left {
      .image-wrap {
        width: 454px;
        position: relative;

        img {
          width: 100%;
        }
      }
    }
    .right {
      & > div {
        border: 1px solid #ddd;
        background: #fff;

        &:nth-child(1) {
          margin-top: 17px;
          padding: 40px 40px 20px 40px;
          margin-bottom: 10px;
        }
        &:nth-child(2) {
          padding: 20px;
        }
        &:nth-child(3) {
          border: none;
          background: none;
          padding: 20px 0;

          p {
            font-size: 14px;
            font-weight: 500;
            color: #222;
            margin-bottom: 20px;
          }
          div {
            display: flex;
            justify-content: center;
            align-items: center;

            a {
              display: inline-block;
              width: 136px;
              img {
                width: 100%;
              }

              &:nth-child(1) {
                margin-right: 8px;
              }
              &:nth-child(2) {
                width: 134px;
              }
            }
          }
        }
      }

      .logo {
        width: 202px;
        margin: 0 auto;
        margin-bottom: 15px;
        img {
          width: 100%;
        }
      }

      .line-wrap {
        margin: 13px 0 25px;
        span {
          font-family: "Apple SD Gothic Neo";
          color: #8e8e8e;
          font-size: 13px;
          font-weight: 600;
          line-height: 15px;
          padding: 0 20px;
          &.line {
            width: 107px;
            height: 1px;
            background: #dbdbdb;
            display: inline-block;
            vertical-align: middle;
            padding: 0;
          }
        }
      }

      a {
        font-family: "Apple SD Gothic Neo";
        display: block;
        text-decoration: none;
        color: #00376b;
        &.facebook {
          font-size: 14px;
          color: #385185;
          font-weight: 800;
        }
        &.find-pw {
          font-size: 12px;
          line-height: 16px;
          margin-top: 12px;
          text-align: center;
          font-weight: 500;
        }
      }
      svg {
        width: 16px;
        vertical-align: middle;
        margin-top: -3px;
        margin-right: 5px;
      }
    }
  }
  .join {
    a {
      display: inline-block !important;
    }

    p {
      font-size: 14px;
      color: #262626;

      a {
        color: #0095f6 !important;
        font-weight: 600;
      }
    }
  }
  p {
    font-family: "Apple SD Gothic Neo";
  }
}
</style>
