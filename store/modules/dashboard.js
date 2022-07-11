export const state = () => ({
  itemInfo: []
});

export const mutations = {
  setItemInfo(state, data) {
    state.itemInfo = data;
  }
};

export const actions = {
  async getAllItem({ commit }) {
    let { data } = await this.$request.get("/api/dashboard/all-item");
    commit("setItemInfo", data.data);
    return data;
  }
};
