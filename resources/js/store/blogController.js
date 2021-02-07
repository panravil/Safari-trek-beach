import axios from "axios";
const state = {
    popularBlogs: null,
    listBlog: null,
};

const getters = {
    popularBlogs: state => state.popularBlogs,
    listBlog: state => state.listBlog,
};

const mutations = {
    setPopularBlogs(state, data) {
        state.popularBlogs = data;
    },
    setListBlogs(state, data) {
        state.listBlog = data;
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
    },
    async getListBlogs(context) {
        // console.log("get popular tour called");
        await axios
            .get("/api/blog/list")
            .then(res => {
                context.commit("setListBlogs", res.data.blogList);
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
