import moment from "moment";

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
  },
  async getItemByID({ commit }, id) {
    let { data } = await this.$request.get("/api/dashboard/item-by-id?id=" + id);
    return data;
  },
  async addItem({ commit }, payload) {
    let { data } = await this.$request.post("/api/dashboard/add-item", payload);
    return data;
  },
  async updateItem({ commit }, payload) {
    let { data } = await this.$request.put("/api/dashboard/update-item", payload);
    return data;
  },
  async deleteItem({ commit }, id) {
    let { data } = await this.$request.delete("/api/dashboard/delete-item?id=" + id);
    return data;
  }
};

export const getters = {
  filterExpiration(state) {
    let today = moment();
    return state.itemInfo.map(item => {
      if (today.isAfter(moment(item.expiration_date))) item.type = "expired";
      else if (today.isAfter(moment(item.expiration_date).subtract(8, "d"))) item.type = "expire_soon";
      else item.type = "normal";
      return item;
    });
  }
};
