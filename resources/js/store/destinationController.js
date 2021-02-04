import axios from "axios";
const state = {
    topDestinations: null
};

const getters = {
    topDestinations: state => state.topDestinations
};

const mutations = {
    setTopDestinations(state, data) {
        state.topDestinations = data;
    }
};

const actions = {
    async getTopDestinations(context) {
        console.log("get Top Destination called");
        await axios
            .get("/api/destination/top-destinations")
            .then(res => {
                if (res.status == 200) {
                    console.log(res);
                    context.commit(
                        "setTopDestinations",
                        res.data.topDestinations
                    );
                }
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
