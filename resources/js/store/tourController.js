import axios from "axios";
const state = {
    popularTours: [
        {
            id: 1,
            title: "3-Day Ngorongoro & Serengeti Budget Tour",
            acommodation: "Budget, Camping",
            type: "Group",
            route:
                "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
            company: "Meru Slopes Tours and Safaris",
            reviews: 42,
            rating: "5.0",
            price: 339,
            image: "./images/CHEMKA_HOT_SPRING_8.jpg",
            tagImage: "./images/toprated2.png"
        },
        {
            id: 2,
            title: "4-Day Budget Camping to Tarangire, Serengeti &Ngorongoro",
            acommodation: "Budget, Camping",
            type: "Group",
            route:
                "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
            company: "Travel Africa Safari Agency",
            reviews: 12,
            rating: "5.0",
            price: 59,
            image: "./images/NGORONGORO_CRATER_3.jpg",
            tagImage: "./images/toprated2.png"
        },
        {
            id: 3,
            title: "6-Day Camping Safari to Serengeti, Ngorongoro & Tarangire",
            acommodation: "Budget, Camping",
            type: "Group",
            route:
                "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
            company: "Travel Africa Safari Agency",
            reviews: 0,
            rating: "5.0",
            price: 599,
            image: "./images/SERENGETI_NATIONAL_PARK_11.jpg",
            tagImage: "./images/toprated2.png"
        },
        {
            id: 4,
            title: "2-Day Coffee, city tour, chemka & Materuni waterfalls",
            acommodation: "Budget, Camping",
            type: "Private",
            route:
                "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
            company: "wildlife oasis tours",
            reviews: 12,
            rating: "5.0",
            price: 99,
            image: "./images/TARANGIRE_NATIONAL_PARK_7.jpg",
            tagImage: "./images/best-review.png"
        },
        {
            id: 5,
            title: "5-Day Private Tour",
            acommodation: "Budget, Camping",
            type: "Private",
            route:
                "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
            company: "wildlife oasis tours",
            reviews: 53,
            rating: "5.0",
            price: 599,
            image: "./images/SERENGETI_NATIONAL_PARK_28.jpg",
            tagImage: "./images/toprated2.png"
        },
        {
            id: 6,
            title: "5-Day Tarangire, Serengeti(2 nights) & Ngorongoro crater",
            acommodation: "Budget, Camping",
            type: "Private",
            route:
                "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
            company: "Safari soles tours",
            reviews: 9,
            rating: "5.0",
            price: 159,
            image: "./images/TARANGIRE_NATIONAL_PARK_7.jpg",
            tagImage: "./images/bestseller.png"
        }
    ],
    ourTours: null
};

const getters = {
    popularTours: state => state.popularTours,
    ourTours: state => state.ourTours
};

const mutations = {
    setPopularTours(state, data) {
        state.popularTours = data;
    },
    setOurTours(state, data) {
        state.ourTours = data;
    }
};

const actions = {
    async getPopularTours() {
        console.log("get popular tour called");
        await axios
            .get("/api/tour/popular-tours")
            .then(res => {
                console.log("response tour data", res);
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
