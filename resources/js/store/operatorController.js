import axios from "axios";
const state = {
    operatorList: null,
    operatorData: null,
};

const getters = {
    operatorList: state => state.operatorList,
    operatorData: state => state.operatorData,
};

const mutations = {
    setOperatorList(state, data) {
        state.operatorList = data;
    },

    setOperatorData(state, data) {
        state.operatorData = data;
    },
};

const actions = {
    async getOperatorList(context, query) {
        await axios
            .get("/api/operator/list")
            .then(res => {
                console.log('operator list', res.data.operatorList)
                context.commit("setOperatorList", res.data.operatorList);
            })
            .catch(err => {
            });
    },

    async getOperatorById(context, id) {
        await axios
            .get("/api/operator/detail/" + id)
            .then(res => {
                console.log("operator", res.data.operator);
                context.commit("setOperatorData", res.data.operator);
            })
            .catch(err => {
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
