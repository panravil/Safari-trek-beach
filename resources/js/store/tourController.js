import axios from "axios";
const state = {
    popularTours: null,
    ourTours: null,
    filterTours: null,
    packageData: null,
};

const getters = {
    popularTours: state => state.popularTours,
    ourTours: state => state.ourTours,
    filterTours: state => state.filterTours,
    packageData: state => state.packageData,
};

const mutations = {
    setPopularTours(state, data) {
        console.log("popular tour", data);
        state.popularTours = data;
    },

    setOurTours(state, data) {
        state.ourTours = data;
    },

    setFilterTours(state, data) {
        state.filterTours = data;
    },

    setTourById(state, data) {
        state.packageData = data;
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

    async getTourFilter(context, query) {
        await axios
            .get("/api/tour/filter", { params: query })
            .then(res => {
                console.log("filter result", res);
                context.commit("setFilterTours", res.data.tours);
            })
            .catch(err => {});
    },

    async getTourById(context, id) {
        await axios
            .get("/api/tour/package/" + id)
            .then(res => {
                console.log("one result", res.data.package);
                context.commit("setTourById", res.data.package);
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
