import jwtDecode from "jwt-decode";
export const state = () => ({
  lang: localStorage.getItem("lang"),
  userInfo: null
});

export const mutations = {
  setLanguage(state, lang) {
    state.lang = lang;
  },
  setUserInfo(state) {
    const token = localStorage.getItem("token");
    state.userInfo = jwtDecode(token);
  }
};
