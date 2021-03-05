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
                        <!-- <Pagination
                            v-model="current_destination_page"
                            :records="listDestinations.length"
                            :per-page="destinations_per_page"
                            :options="pagenation_options"
                        /> -->
                        <paginate
                          v-model="current_destination_page"
                          :page-count="total_page_number"
                          :prev-text="'Prev'"
                          :next-text="'Next'"
                          :container-class="'pagination'"
                          :page-class="'page-item'"
                          :prev-class="'page-link'"
                          :next-class="'page-link'"
                          :page-link-class="'page-link'"
                        >
                        </paginate>
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
// import Pagination from "vue-pagination-2";

export default {
    name: "DestinationPage",
    components: {
        DestinationCard,
        TourCardSkelecton,
        // Pagination
    },
    data() {
        return {
            current_destination_page: null,
            destinations_per_page: 6,
            current_page_destinations: [],
            // pagenation_options: {
            //     chunk: 5
            // },
            total_page_number: 1,
        };
    },

    computed: {
        page_id: function () {
            var id = this.$route.params.id;
            if ( id != undefined )
                return id.slice(0, id.length);
            else 
                return ''
        },
        ...mapGetters({
            listDestinations: "destinationController/listDestinations",
            loading: "tourcard_loading"
        })
    },

    watch: {
        current_destination_page: function(newValue) {

            if ( newValue > 1 ) {
                this.$router.push({name: 'Destination', params: {id: newValue, page: 'page'}})
                    .then(() => {
                        this.getListDestinations();
                    })
                    .catch(() => {})
            } else if (newValue == 1) {
                this.$router.push({name: 'Destination', params: {}})
                    .then(()=>{
                        this.getListDestinations();
                    })
                    .catch(()=>{})
            }
        },
    },

    created() {        

        if ( this.page_id != '' )
            this.current_destination_page = parseInt(this.page_id);
        else 
            this.current_destination_page = 1;

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
                    this.total_page_number = Math.floor(this.listDestinations.length / this.destinations_per_page) ;

                    if ( this.listDestinations.length % this.destinations_per_page > 0 ) {
                        this.total_page_number = this.total_page_number + 1;
                    }

                    let page_title = "Safari-Trek-Beach Destination - Page " 
                       + this.current_destination_page
                       + " of " + this.total_page_number;

                    document.title = page_title;
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
        //   this.$router.push('/destination/' + slug);
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
