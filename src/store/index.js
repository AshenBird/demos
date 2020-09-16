import { createStore } from "vuex";

export default createStore({
  state: {
    configs: JSON.parse(process.env.VUE_APP_DEMOS)
  },
  mutations: {},
  actions: {},
  modules: {}
});
