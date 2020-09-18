import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      pages: JSON.parse(process.env.VUE_APP_DEMOS),
      currentPage: {}
    };
  },
  mutations: {
    changCurrent(state, payload) {
      state.currentPage = payload;
    }
  },
  actions: {},
  modules: {}
});
