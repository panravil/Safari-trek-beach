import Vue from "vue";
import Vuex from "vuex";
import destinationController from "./destinationController";
import tourController from "./tourController";
import blogController from "./blogController";
import operatorController from "./operatorController";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        destinationController,
        tourController,
        blogController,
        operatorController,
    },
    state: {
        tourcard_loading: false,
        blogcard_loading: false,
        request_status: null,
    },
    mutations: {
        setRequestLoadingStatus(state, status) {
            state.tourcard_loading = status;
        },
        setBlogLoadingStatus(state, status) {
            state.blogcard_loading = status;
        },
        setRequestStatus(state, status) {
            state.request_status = status;
        },
    },
    actions: {
    
    },
    getters: {
        tourcard_loading: state => state.tourcard_loading,
        blogcard_loading: state => state.blogcard_loading,
        request_status: state => state.request_status,
    },
    plugins: [createPersistedState()],
});

export default store;
