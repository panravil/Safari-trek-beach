import axios from "axios";
const state = {
    popularTours: null,
    ourTours: null,
    filterTours: null,
    packageData: null,

    tourActivity: null,
    tourLevel: null,
    tourFocus: null,

    query_instore: {},

    where_to_search: '',
    start_date: '',
    traveler_number: '',
    adults_number: 1,
    children_number: 0,

    package_id: null,
    user_id: null,

    quoteData: {},
};

const getters = {
    popularTours: state => state.popularTours,
    ourTours: state => state.ourTours,
    filterTours: state => state.filterTours,
    packageData: state => state.packageData,

    tourActivity: state => state.tourActivity,
    tourLevel: state => state.tourLevel,
    tourFocus: state => state.tourFocus,

    where_to_search: state => state.where_to_search,
    start_date: state => state.start_date,
    adults_number: state => state.adults_number,
    children_number: state => state.children_number,
    traveler_number: state => state.traveler_number,

    query_instore: state => state.query_instore,

    quoteData: state => state.quoteData,
    
    package_id: state => state.package_id,
    user_id: state => state.user_id,
};

const mutations = {
    setPopularTours(state, data) {
        state.popularTours = data;
    },

    setTourActivity(state, data) {
        state.tourActivity = data;
    },

    setTourLevel(state, data) {
        state.tourLevel = data;
    },

    setTourFocus(state, data) {
        state.tourFocus = data;
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

    setQuery(state, data) {
        state.query_instore = data;
    },
    
    setSearchData(state, data) {
        state.where_to_search = data.where_to_search;
        state.start_date = data.start_date;
        state.adults_number = data.adults_number;
        state.children_number = data.children_number;
        state.traveler_number = data.traveler_number;
    },

    setTourInfo(state, data) {
        state.package_id = data.package_id;
        state.user_id = data.user_id;
    },

    setQuotePackage(state, data) {
        state.quoteData = data;
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

    async getTourActivity(context) {
        await axios
            .get("/api/tour/activity")
            .then(res => {
                context.commit("setTourActivity", res.data.tourActivities);
            })
            .catch(err => {
            });
    },

    async getTourFocus(context) {
        await axios
            .get("/api/tour/focus")
            .then(res => {
                context.commit("setTourFocus", res.data.tourFocus);
            })
            .catch(err => {
            });
    },

    async getTourLevel(context) {
        context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .get("/api/tour/level")
            .then(res => {
                context.commit("setTourLevel", res.data.tourlevels);
            })
            .catch(err => {
            });
    },

    async getTourFilter(context, query) {
        context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .get("/api/tour/filter", { params: query })
            .then(res => {
                // console.log("filter result", res);
                context.commit("setFilterTours", res.data);
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
    },

    //save query data in store
    setQuery(context, query) {
        context.commit("setQuery", query);
    },

    //save quote data in store (package name, etc)
    setQuotePackage(context, quoteData) {
        context.commit("setQuotePackage", quoteData);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
