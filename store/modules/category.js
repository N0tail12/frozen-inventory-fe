export const state = () => ({
  category: []
});

export const mutations = {
  setCategory(state, data) {
    state.category = data;
  }
};

export const actions = {
  async getAllCategory({ commit }) {
    let { data } = await this.$request.get("/api/category");
    commit("setCategory", data.data);
    return data;
  }
};
