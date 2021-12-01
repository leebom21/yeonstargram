import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //#1기본값 데이터를 넣어줌
    loggedIn: false,
    user: {
      id: null,
      phone: "",
      email: "",
      password: "",
      username: "",
      profile: "",
      userImage: "",
      nickname: "",
      intro: "",
    },
    img: {
      src: "",
      file: null,
    },
    uploadImg: "",
    //#2 vue 메소드에서 이벤트에서 인자값을 담아서 액션 값을 호출하고(디스패치 사용)
  },
  mutations: {
    //#4 액션에서받은 값을 state의 값에 채워 넣어줌
    setUpload(state, payload) {
      state.img.src = payload.src;
      state.img.file = payload.file;
    },
    setUpdate(state, payload) {
      state.user.profile = payload.file;
      state.user.userImage = payload.src;
    },
    setLogin(state, payload) {
      state.user.id = payload.id;
      state.user.email = payload.email;
      state.user.phone = payload.phone;
      state.user.username = payload.username;
      state.user.profile = payload.profile;
      state.loggedIn = true;
    },
  },
  actions: {
    //#3 받은 값을 변수에 담아서 머테이션 값을 호출
    getUploadImg(store, payload) {
      store.commit("setUpload", payload);
    },

    //프로필 이미지 업데이트
    getImgUpdate(store, payload) {
      store.commit("setUpdate", payload);
    },
    async login(store, payload) {
      let response = null;
      try {
        response = await axios.post("/api/account/login", {
          email: payload.id,
          password: payload.pw,
        });
      } catch (e) {
        response = e.response;
      } finally {
        if (response.status === 200) {
          await store.dispatch("getUserInfo");
        } else if (response.status === 401) {
          alert("아이디와 비밀번호를 확인해주세요.");
        } else {
          alert("네트워크 연결이 원할하지 않습니다. 다시 시도해주세요.");
        }
      }
    },
    async getUserInfo(store) {
      const response = await axios.get("/api/account");
      store.commit("setLogin", response.data);
    },
  },
  modules: {},
});
