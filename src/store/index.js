import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //#1기본값 데이터를 넣어줌
    loggedIn: false,
    user: {
      phone: "",
      email: "",
      password: "",
      username: "",
      userImage:
        "https://i.pinimg.com/564x/48/ff/92/48ff924e72e235ddbe1865ff54e21152.jpg",
    },
    uploadImg: "",
    //#2 vue 메소드에서 이벤트에서 인자값을 담아서 액션 값을 호출하고(디스패치 사용)
  },
  mutations: {
    //#4 액션에서받은 값을 state의 값에 채워 넣어줌
    setUpload(state, payload) {
      state.loggedIn = true;
      state.uploadImg = payload;
    },
  },
  actions: {
    //#3 받은 값을 변수에 담아서 머테이션 값을 호출

    getUploadImg(store, payload) {
      store.commit("setUpload", payload);
    },
  },
  modules: {},
});
