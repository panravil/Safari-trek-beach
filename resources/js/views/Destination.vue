<template>
<div class="destination-page">
  <div class="container">
    <section>
      <header class="section-header mt-5">
        <h3>DESTINATIONS</h3>
      </header>

      <div class="row gx-0" v-if="loading">
        <div class="col-lg-4 col-md-6 col-xs-12" v-for="(blog, index) in 6" v-bind:key="index + 'bloglist'">
          <TourCardSkelecton></TourCardSkelecton>
        </div>
      </div>
      <div class="row gx-0" v-else>
        <div class="col-lg-4 col-md-6 col-xs-12" v-for="(destination, index) in listDestinations" v-bind:key="'destination'+ index">
          <DestinationCard :destination="destination"></DestinationCard>
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

export default {
  name: "DestinationPage",
  components: {
    DestinationCard,
    TourCardSkelecton,
  },
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters({
      listDestinations: "destinationController/listDestinations",
      loading: "tourcard_loading",
    }),
  },

  created() {
    this.getListDestinations();
  },
  methods: {

    getListDestinations() {
      this.$store.dispatch("destinationController/getListDestinations");
    },

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
