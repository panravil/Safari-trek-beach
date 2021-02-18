import axios from "axios";
const state = {
    popularTours: null,
    ourTours: null,
    filterTours: null,
    packageData: null,

    where_to_search: null,
    start_date: null,
    adults_number: 1,
    children_number: 0,

    package_id: null,
    user_id: null,
};

const getters = {
    popularTours: state => state.popularTours,
    ourTours: state => state.ourTours,
    filterTours: state => state.filterTours,
    packageData: state => state.packageData,

    where_to_search: state => state.where_to_search,
    start_date: state => state.start_date,
    adults_number: state => state.adults_number,
    children_number: state => state.children_number,
    
    package_id: state => state.package_id,
    user_id: state => state.user_id,
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
    
    setSearchData(state, data) {
        state.where_to_search = data.where_to_search;
        state.start_date = data.start_date;
        state.adults_number = data.adults_number;
        state.children_number = data.children_number;
    },

    setTourInfo(state, data) {
        state.package_id = data.package_id;
        state.user_id = data.user_id;
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
    },

    //save search data item to store to use other pages...
    setSearchData(context, search_data) {
        context.commit("setSearchData", search_data);
    },

    //save package and user id data to store to use quote page...
    setTourInfo(context, tour_info) {
        context.commit("setTourInfo", tour_info);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
