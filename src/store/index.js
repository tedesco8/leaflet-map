import Vue from "vue";
import Vuex from "vuex";
import lugaresNamespace from "./lugares"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lugaresNamespace,
  }
});
