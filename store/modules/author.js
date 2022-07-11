const jwtDecode = require("jwt-decode");
export const state = () => ({
  user: ""
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

export const actions = {
  async login({ commit }, payload) {
    let response = await this.$request.get("/api/login", payload);
    let user = jwtDecode(response.data);
    console.log(user);
    commit("setUser", user);
    return response;
  },
  async logout({ commit }) {
    try {
      await this.$request.get("/api/logout");
      localStorage.clear();
      this.$router.push("/login");
      // Force clear state using reload page
      setTimeout(() => location.reload(), 0);
    } catch (error) {
      console.error(error);
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
