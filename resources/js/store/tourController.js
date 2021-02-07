import axios from "axios";
const state = {
    popularTours: null,
    ourTours: null
};

const getters = {
    popularTours: state => state.popularTours,
    ourTours: state => state.ourTours
};

const mutations = {
    setPopularTours(state, data) {
        console.log("popular tour", data);
        state.popularTours = data;
    },
    setOurTours(state, data) {
        state.ourTours = data;
    }
};

const actions = {
    async getPopularTours(context) {
        // console.log("get popular tour called");
        await axios
            .get("/api/tour/popular-tours")
            .then(res => {
                context.commit("setPopularTours", res.data.popularTour);
            })
            .catch(err => {});
    },

    async getTourFilter(context) {
        // console.log("get popular tour called");
        await axios
            .get("/api/tour/filter")
            .then(res => {
                console.log("filter result", res);
                // context.commit("setPopularTours", res.data.popularTour);
            })
            .catch(err => {});
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
