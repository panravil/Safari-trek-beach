import axios from "axios";
const state = {
    popularBlogs: null
};

const getters = {
    popularBlogs: state => state.popularBlogs
};

const mutations = {
    setPopularBlogs(state, data) {
        state.popularBlogs = data;
    }
};

const actions = {
    async getPopularBlogs(context) {
        // console.log("get popular tour called");
        await axios
            .get("/api/blog/homepage-blog")
            .then(res => {
                context.commit("setPopularBlogs", res.data.homepageBlog);
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
