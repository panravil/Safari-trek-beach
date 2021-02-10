<template>
  <div class="tour-landing-page">
    <div class="container">
      <h3 class="fw-bold text-center">Safari Trek Beach Tours In Tanzania</h3>
      <h5 class="text-center">The Best Place For Tanzania Tours</h5>
      <div class="text-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. A quis
        aspernatur tempora eos ad necessitatibus magni vertatis ateque!
        Veritatis laudantium saepe molestiae nostrum in molestlas. Offlciis ut
        debitis atque provident. Consectetur, blanditlls excepturl, reiciendis
        vel lusto repudiandae at ut minima magnam sit quidem quaerat laudantium
        sed, cum ex nesclunt facere. Alias sed harum accusamus rerum autem,
        temporibus officiis distinctio ratione?
      </div>
      <div class="row">
        <div
          class="col-md-6 col-xs-12"
          v-for="(tour_data, index) in popularTours"
          v-bind:key="'tour' + index"
        >
          <div class="tour-landing-card">
            <TourCard :tourData="tour_data"></TourCard>
          </div>
        </div>
      </div>
      <div class="text-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. A quis
        aspernatur tempora eos ad necessitatibus magni vertatis ateque!
        Veritatis laudantium saepe molestiae nostrum in molestlas. Offlciis ut
        debitis atque provident. Consectetur, blanditlls excepturl, reiciendis
        vel lusto repudiandae at ut minima magnam sit quidem quaerat laudantium
        sed, cum ex nesclunt facere. Alias sed harum accusamus rerum autem,
        temporibus officiis distinctio ratione?
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import TourCard from "../components/TourCard";
export default {
  components: { TourCard },
  name: "TourLanding",
  computed: {
    ...mapGetters({
      popularTours: "tourController/popularTours",
    }),
  },
  data() {
    return {
      tour_data: null,
    };
  },

  created() {
    this.getPopularTours();
  },

  methods: {
    async getPopularTours() {
      await this.$store.dispatch("tourController/getPopularTours").then(() => {
        this.loading = false;
      });
    },
  },
};
</script>
