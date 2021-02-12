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
        context.commit("setBlogLoadingStatus", true, {root: true,});
        await axios
            .get("/api/blog/homepage-blog")
            .then(res => {
                context.commit("setPopularBlogs", res.data.homepageBlog);
                context.commit("setBlogLoadingStatus", false, {root: true,});
            })
            .catch(err => {
                context.commit("setBlogLoadingStatus", false, {root: true,});

            });
    },
    async getListBlogs(context) {
        // console.log("get popular tour called");
            context.commit("setRequestLoadingStatus", true, {root: true,});
        await axios
            .get("/api/blog/list")
            .then(res => {
                context.commit("setListBlogs", res.data.blogList);
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
