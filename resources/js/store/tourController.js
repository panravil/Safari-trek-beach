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
        // console.log("popular tour", data);
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
    },
};

const actions = {
    async getPopularTours(context) {
        context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .get("/api/tour/popular-tours")
            .then(res => {
                context.commit("setPopularTours", res.data.popularTour);
                context.commit("setRequestLoadingStatus", false, {root: true,});
            })
            .catch(err => {
                context.commit("setRequestLoadingStatus", false, {root: true,});
            });
    },

    async getTourFilter(context, query) {
        context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .get("/api/tour/filter", { params: query })
            .then(res => {
                // console.log("filter result", res);
                context.commit("setFilterTours", res.data.tours);
                context.commit("setRequestLoadingStatus", false, {root: true,});
            })
            .catch(err => {
                context.commit("setRequestLoadingStatus", false, {root: true,});
            });
    },

    async getTourById(context, id) {
        context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .get("/api/tour/package/" + id)
            .then(res => {
                // console.log("one result", res.data.package);
                context.commit("setTourById", res.data.package);
                context.commit("setRequestLoadingStatus", false, {root: true,});
            })
            .catch(err => {
                context.commit("setRequestLoadingStatus", false, {root: true,});
            });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
