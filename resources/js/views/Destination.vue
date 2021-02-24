<template>
    <div class="destination-page">
        <div class="container">
            <section>
                <header class="section-header mt-5">
                    <h3>DESTINATIONS</h3>
                </header>

                <div class="row gx-0" v-if="loading">
                    <div
                        class="col-lg-4 col-md-6 col-xs-12"
                        v-for="(blog, index) in 6"
                        v-bind:key="index + 'bloglist'"
                    >
                        <TourCardSkelecton></TourCardSkelecton>
                    </div>
                </div>
                <div class="row gx-0" v-else>
                    <div
                        class="col-lg-4 col-md-6 col-xs-12"
                        v-for="(destination,
                        index) in current_page_destinations"
                        v-bind:key="'destination' + index"
                    >
                        <DestinationCard
                            :destination="destination"
                        ></DestinationCard>
                    </div>
                    <div
                        class="d-flex justify-content-center mt-4"
                        v-if="listDestinations != null"
                    >
                        <Pagination
                            v-model="current_destination_page"
                            :records="listDestinations.length"
                            :per-page="destinations_per_page"
                            :options="pagenation_options"
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import DestinationCard from "../components/DestinationCard";
import { mapState, mapGetters, mapMutations } from "vuex";
import TourCardSkelecton from "../components/TourCardSkelecton";
import Pagination from "vue-pagination-2";

export default {
    name: "DestinationPage",
    components: {
        DestinationCard,
        TourCardSkelecton,
        Pagination
    },
    data() {
        return {
            current_destination_page: 1,
            destinations_per_page: 6,
            current_page_destinations: [],
            pagenation_options: {
                chunk: 5
            }
        };
    },
    computed: {
        ...mapGetters({
            listDestinations: "destinationController/listDestinations",
            loading: "tourcard_loading"
        })
    },

    watch: {
        current_destination_page: function(newValue) {
            this.getCurrentPageDestinations(newValue);
        }
    },

    created() {
        let page_title = "Safari-Trek-Beach.com Destination";
        document.title = page_title;
        this.getListDestinations();
    },
    methods: {
        getListDestinations() {
            this.$store
                .dispatch("destinationController/getListDestinations")
                .then(() => {
                    this.getCurrentPageDestinations(
                        this.current_destination_page
                    );
                });
        },

        getCurrentPageDestinations(page_num) {
            this.current_page_destinations = [];
            let index = 0;
            for (
                let i = (page_num - 1) * this.destinations_per_page;
                i < page_num * this.destinations_per_page;
                i++
            ) {
                if (this.listDestinations[i] != undefined) {
                    this.current_page_destinations[
                        index
                    ] = this.listDestinations[i];
                    index++;
                }
            }
        }

        // toDestinationInnerPage(slug) {
        //   this.$router.push('/destination-package/' + slug);
        // },
    }
};
</script>

<style>
.destination-page {
    padding-top: 50px;
    padding-bottom: 100px;
    background-color: #f2f2f2;
}

.destination-page section {
    margin-top: 100px;
}
</style>
