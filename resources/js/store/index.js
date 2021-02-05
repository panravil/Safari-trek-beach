import Vue from "vue";
import Vuex from "vuex";
import destinationController from "./destinationController";
import tourController from "./tourController";
import blogController from "./blogController";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        destinationController,
        tourController,
        blogController
    }
});

export default store;
