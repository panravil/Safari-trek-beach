<template>
    <div class="card mb-3 mx-2" id="tour-card" @click="toInnerPackage()">
        <div
            class="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
            :style="{
                'background-image': 'url(' + tourData.image_url + ')'
            }"
        >
            <div>
                <div
                    class="mask"
                    style="background-color: rgba(251, 251, 251, 0.15)"
                ></div>
            </div>
            <div class="tour_title">
                {{ tourData.no_of_day }}-Day {{ tourData.title }}
            </div>
            <img
                :src="tourData.operator_logo"
                style="width: 70px; height: auto; top: 0px; left: 30px"
                class="position-absolute"
            />
        </div>
        <div
            class="card-body"
            style="position: relative; border-bottom: 1px dotted black"
        >
            <div
                class="tag-image"
                v-if="
                    tourData.tag !== null &&
                        tourData.tag !== undefined &&
                        tourData.tag !== ''
                "
            >
                <img
                    v-if="tourData.tag == 'review'"
                    :src="'/images/best-review.png'"
                    style="margin-top: -3px; width: 60px; height: auto"
                />
                <img
                    v-else-if="tourData.tag == 'seller'"
                    :src="'/images/bestseller.png'"
                    style="width: 80px; height: auto"
                />
                <img
                    v-else
                    :src="'/images/toprated2.png'"
                    style="width: 100px; height: auto"
                />
            </div>
            <p class="card-text mb-1">
                <strong> Accommodation: </strong>
                <span v-if="tourData.no_of_day == 2"
                    >{{ tourData.no_of_day - 1 }} Night</span
                >
                <span v-else-if="tourData.no_of_day > 2"
                    >{{ tourData.no_of_day - 1 }} Nights</span
                >
                <span v-else>No Accommodation</span>
            </p>
            <p class="card-text mb-1">
                <strong> Tour Type: </strong>
                {{ getTourLevel(tourData.level) }}
            </p>
            <p class="card-text mb-1 trip-route">
                <strong> Trip Route: </strong>
                {{ tourData.start_city }}(Start),
                {{ getMidRoute(tourData.destination) }}
                {{ tourData.end_city }} (End)
            </p>
        </div>
        <div class="row gx-0" style="position: relative">
            <div>
                <p class="card-text mb-1 ps-3 company-name">
                    {{ tourData.company_name }}
                </p>
                <p class="card-text ps-3 d-flex mb-2 company-review">
                    <CustomStarRating
                        :rating="tourData.avg_review"
                    ></CustomStarRating>
                    <strong v-if="tourData.avg_review == '5'">
                        &nbsp;5.0/5&nbsp;</strong
                    >
                    <strong v-else>
                        &nbsp;{{ tourData.avg_review }}/5&nbsp;</strong
                    >
                    (
                    <span v-if="tourData.sum_review == 1"
                        >{{ tourData.sum_review }} Review</span
                    >
                    <span v-else>{{ tourData.sum_review }} Reviews</span>
                    )
                </p>
            </div>
            <div class="price">
                <strong
                    ><span class="fa fa-dollar"></span
                    >{{ tourData.adult_currency }}</strong
                >&nbsp;<small>pp</small>
            </div>
        </div>
    </div>
</template>

<script>
import CustomStarRating from "../components/CustomStarRating";
// import { mapState, mapGetters, mapMutations } from "vuex";
export default {
    components: {
        CustomStarRating
    },
    props: {
        tourData: Object,
        where_to_search: String,
        start_date: String,
        adults_number: Number,
        children_number: Number
    },
    computed: {},
    data() {
        return {};
    },

    created() {},

    methods: {
        getMidRoute(destination) {
            if (destination == undefined || destination == null) return "";
            let route_data = "";
            for (let i = 0; i < destination.length; i++) {
                route_data = route_data + destination[i] + ", ";
            }
            if (route_data.length > 60) return route_data.substr(0, 60) + "...";
            else return route_data;
        },

        getTourLevel(level) {
            if (level == undefined || level == null) return "";
            var level_data = this.tourData.tour_group;

            for (var i = 0; i < level.length; i++) {
                level_data += ", " + level[i];
            }

            level_data = level_data
                .toLowerCase()
                .replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                });
            return level_data;
        },

        toInnerPackage() {
            let searchData = {};
            searchData = {
                where_to_search: this.where_to_search,
                start_date: this.start_date,
                adults_number: this.adults_number,
                children_number: this.children_number
            };
            this.$store.dispatch("tourController/setSearchData", searchData);

            // this.$router
            //   .push("/tour-package/" + this.tourData.package_id)
            //   .catch(() => {});

            let routeData = this.$router.resolve({
                name: "Tour Package",
                params: {
                    id: this.tourData.package_id
                }
            });

            window.open(routeData.href, "_blank");
        }
    }
};
</script>

<style scoped>
#tour-card .price {
    width: 80px;
    color: #0f6d24;
    right: 5px;
    bottom: 0px;
    top: 0px;
    padding-left: 2px;
    border-left: 1px dotted black;
    position: absolute;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#tour-card .tag-image {
    top: -12px;
    position: absolute;
    right: 10px;
}

#tour-card .bg-image {
    background-size: cover;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
}

#tour-card .tour_title {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: left;
    padding: 15px 10px;
    background: rgba(0, 0, 0, 0.4);
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 45%,
        rgba(0, 0, 0, 0.9) 100%
    );
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    margin: 40px 0 0px 0;
    font-family: "Montserrat", sans-serif;
}

#tour-card.card {
    transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
    box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);
    cursor: pointer;
}

#tour-card.card:hover {
    box-shadow: 0px 1px 13px #666;
}

.trip-route {
    min-height: 75px;
}
.company-name {
    font-size: 18px;
}
@media (max-width: 1200px) {
    .company-name {
        font-size: 14px;
        padding-left: 8px !important;
    }
    .company-review{
        font-size: 14px;
        padding-left: 8px !important;
    }
    #tour-card .price {
        font-size: 16px;
    }
}
</style>
