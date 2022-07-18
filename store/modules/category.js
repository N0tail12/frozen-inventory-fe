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
  },
  async addCategory({ commit }, payload) {
    let { data } = await this.$request.post("/api/category/add-category", payload);
    return data;
  },
  async updateCategory({ commit }, payload) {
    let { data } = await this.$request.put("/api/category/update-category", payload);
    return data;
  },
  async deleteCategory({ commit }, id) {
    let { data } = await this.$request.delete("/api/category/delete-category?id=" + id);
    return data;
  }
};
