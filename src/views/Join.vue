<template>
  <div class="join">
    <div class="join-wrap">
      <div>
        <div class="logo">
          <img src="../assets/images/new-logo.png" alt="logo" />
        </div>
        <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
        <Button title="Facebook으로 로그인" @click="join"> </Button>
        <div class="line-wrap">
          <span class="line"></span>
          <span>또는</span>
          <span class="line"></span>
        </div>
        <div>
          <Input type="text" placeHolder="휴대폰 번호" :value.sync="phone" />
          <Input type="text" placeHolder="이메일" :value.sync="email" />
          <Input
            type="password"
            placeHolder="비밀번호"
            :value.sync="password"
          />
          <Input type="text" placeHolder="사용자 이름" :value.sync="username" />

          <Button title="가입" @click="join"> </Button>
        </div>
      </div>
      <div class="login">
        <p>계정이 있으신가요? <router-link to="/">로그인</router-link></p>
      </div>
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
</template>

<script>
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import axios from "axios";
export default {
  components: { Input, Button },
  name: "join",
  data() {
    return {
      phone: "",
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    async join() {
      // console.log("hi");
      const response = await axios.post("/api/account/join", {
        email: this.email,
        password: this.password,
        username: this.username,
        phone: this.phone,
      });
      // 회원가입 성공
      if (response.status === 200) {
        this.$router.push("/");
      } else {
        // 회원가입 실패
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.join {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  background-color: #fafafa;

  .join-wrap {
    width: 350px;
    & > div {
      border: 1px solid #ddd;
      background: #fff;

      &:nth-child(1) {
        padding: 40px;
        margin-bottom: 10px;

        .logo {
          width: 192px;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }
        .line-wrap {
          margin: 13px 0 15px;
          span {
            font-family: "Apple SD Gothic Neo";
            color: #8e8e8e;
            font-size: 13px;
            font-weight: 600;
            line-height: 15px;
            padding: 0 15px;
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
      }
      &:nth-child(2) {
        padding: 20px;
        margin-bottom: 10px;

        a {
          display: inline-block !important;
          text-decoration: none;
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
  }
}
</style>
