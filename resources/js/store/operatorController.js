import axios from "axios";
const state = {
    operatorList: null,
    operatorData: null
};

const getters = {
    operatorList: state => state.operatorList,
    operatorData: state => state.operatorData
};

const mutations = {
    setOperatorList(state, data) {
        state.operatorList = data;
    },

    setOperatorData(state, data) {
        state.operatorData = data;
    }
};

const actions = {
    async getOperatorList(context, query) {
        context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .get("/api/operator/list")
            .then(res => {
                context.commit("setRequestLoadingStatus", false, {root: true,});
                context.commit("setOperatorList", res.data.operatorList);
            })
            .catch(err => {
                context.commit("setRequestLoadingStatus", false, {root: true,});
            });
    },

    async getOperatorById(context, id) {
        context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .get("/api/operator/detail/" + id)
            .then(res => {
                context.commit("setRequestLoadingStatus", false, {root: true,});
                context.commit("setOperatorData", res.data.operator);
            })
            .catch(err => {
                context.commit("setRequestLoadingStatus", false, {root: true,});
            });
    },

    async postReview(context, query) {
        // context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .post("/api/review/add", query)
            .then(res => {
                if (res.status == 200) {
                    context.commit("setRequestStatus", true, {root: true,});
                }
                else {
                    context.commit("setRequestStatus", false, {root: true,});
                }
                // context.commit("setRequestLoadingStatus", false, {root: true,});
                // context.commit("setOperatorData", res.data.operator);
            })
            .catch(err => {
                context.commit("setRequestStatus", false, {root: true,});
                // context.commit("setRequestLoadingStatus", false, {root: true,});
            });
    },

    async becomePartner(context, query) {
        // context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .post("/api/operator/add", query)
            .then(res => {
                if (res.status == 200) {
                    context.commit("setRequestStatus", true, {root: true,});
                }
                else {
                    context.commit("setRequestStatus", false, {root: true,});
                }
                // context.commit("setRequestLoadingStatus", false, {root: true,});
                // context.commit("setOperatorData", res.data.operator);
            })
            .catch(err => {
                // context.commit("setRequestLoadingStatus", false, {root: true,});
                context.commit("setRequestStatus", false, {root: true,});
            });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
