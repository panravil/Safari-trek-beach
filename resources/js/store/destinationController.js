import axios from "axios";
const state = {
    topDestinations: null,
    listDestinations: null,
};

const getters = {
    topDestinations: state => state.topDestinations,
    listDestinations: state => state.listDestinations
};

const mutations = {
    setTopDestinations(state, data) {
        state.topDestinations = data;
    },
    setListDestinations(state, data) {
        state.listDestinations = data;
    }
};

const actions = {
    async getTopDestinations(context) {
        // console.log("get Top Destination called");
        context.commit("setRequestLoadingStatus", true, {root: true,});
        
        await axios
            .get("/api/destination/top-destinations")
            .then(res => {
                if (res.status == 200) {
                    context.commit(
                        "setTopDestinations",
                        res.data.topDestinations
                    );
                }
                context.commit("setRequestLoadingStatus", false, {root: true,});
            })
            .catch(err => {
                context.commit("setRequestLoadingStatus", false, {root: true,});

            });
    },
    async getListDestinations(context) {
        // console.log("get Top Destination called");
        context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .get("/api/destination/list")
            .then(res => {
                if (res.status == 200) {
                    // console.log('all destination:',  res);
                    context.commit(
                        "setListDestinations",
                        res.data.destinationsList
                    );
                }
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
