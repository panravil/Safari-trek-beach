<template>
<div class="tour-landing-page">
  <div class="container">
    <section>
      <header class="section-header" data-aos="fade-up">
        <h3 class="fw-bold text-center">Safari Trek Beach Tours In Tanzania</h3>
      </header>
      <h4 class="text-center" data-aos="fade-up">The Best Place For Tanzania Tours</h4>
      <div class="text-center" data-aos="fade-up">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. A quis
        aspernatur tempora eos ad necessitatibus magni vertatis ateque!
        Veritatis laudantium saepe molestiae nostrum in molestlas. Offlciis ut
        debitis atque provident. Consectetur, blanditlls excepturl, reiciendis
        vel lusto repudiandae at ut minima magnam sit quidem quaerat laudantium
        sed, cum ex nesclunt facere. Alias sed harum accusamus rerum autem,
        temporibus officiis distinctio ratione?
      </div>
    </section>
    <div class="row mt-5 g-0">
      <div class="col-md-4 col-sm-6 col-xs-12" v-for="(tour_data, index) in popularTours" v-bind:key="'tour' + index">
        <TourCard :tourData="tour_data"></TourCard>
      </div>
    </div>
    <div class="text-center mt-3" data-aos="fade-up">
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
import {
  mapState,
  mapGetters,
  mapMutations
} from "vuex";
import TourCard from "../components/TourCard";
export default {
  components: {
    TourCard
  },
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

  metaInfo() {
      return {
          title: `Tour Landing Pages of Safari-Trek-Beach.com`,
          meta: [
              {name: 'description', content: 'This is Tour Landing Pages of Safari-Trek-Beach.com'},
              {property: 'og:title', content: 'Tour Landing Pages of Safari-Trek-Beach.com'},    
              {name: 'twitter:title', content: 'Tour Landing Pages of Safari-Trek-Beach.com'},
              // {property: 'og:image', content: this.blogData.post_inner_image},
              // {property: 'twitter:image', content: this.blogData.post_inner_image}, 
              // {property: 'og:url', content: window.location.href}, 
          ]
      }
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
