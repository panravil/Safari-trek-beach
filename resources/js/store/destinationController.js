import axios from "axios";
const state = {
    topDestinations: [
        {
            id: 1,
            title: "SERENGETI",
            image: "./images/img1.jpg"
        },
        {
            id: 2,
            title: "NGOZI",
            image: "./images/img3.jpg"
        },
        {
            id: 3,
            title: "KILIMANJARO",
            image: "./images/img5.jpg"
        },
        {
            id: 4,
            title: "USANGU",
            image: "./images/img1.jpg"
        },
        {
            id: 5,
            title: "TARANGIRE",
            image: "./images/img6.jpg"
        },
        {
            id: 6,
            title: "KILIMANJARO",
            image: "./images/img4.jpg"
        },
        {
            id: 7,
            title: "TARANGIRE",
            image: "./images/img1.jpg"
        },
        {
            id: 8,
            title: "KATAVI",
            image: "./images/img5.jpg"
        },
        {
            id: 9,
            title: "USAMBALA",
            image: "./images/img6.jpg"
        },
        {
            id: 10,
            title: "MATERUNI",
            image: "./images/img3.jpg"
        },
        {
            id: 11,
            title: "KATAVI",
            image: "./images/img6.jpg"
        },
        {
            id: 12,
            title: "MERU",
            image: "./images/img5.jpg"
        }
    ]
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
    async getTopDestinations() {
        console.log("get Top Destination called");
        await axios
            .get("/api/destination/top-destinations")
            .then(res => {
                console.log("response destination data", res);
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
