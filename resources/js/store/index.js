import Vue from "vue";
import Vuex from "vuex";
import destinationController from "./destinationController";
import tourController from "./tourController";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        destinationController,
        tourController
    }
});

export default store;
