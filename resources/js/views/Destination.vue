<template>
<div class="destination-page">
  <div class="container">
    <section>
      <header class="section-header mt-5">
        <h3>DESTINATIONS</h3>
      </header>

      <div class="row gx-0">
        <div class="col-lg-4 col-md-6 col-xs-12" v-for="(destination, index) in listDestinations" v-bind:key="index">
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

export default {
  name: "DestinationPage",
  components: {
    DestinationCard,
  },
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters({
      listDestinations: "destinationController/listDestinations",
    }),
  },

  created() {
    this.getListDestinations();
  },
  methods: {
    getListDestinations() {
      this.$store.dispatch("destinationController/getListDestinations");
    }
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
