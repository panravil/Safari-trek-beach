<template>
  <div id="tour-operators-page">
    <div class="container">
      <section>
        <header class="section-header" data-aos="fade-up">
          <h3>AFRICA SAFARI BOOKING OPERATORS</h3>
        </header>
      </section>

      <div
        class="card p-3 mt-5 tour-operator-card"
        v-for="(operator, index) in operatorList"
        v-bind:key="'operator' + index"
        data-aos="fade-up"
        @click="toOperatorDetail(operator.user_id)"
      >
        <div class="wrapper">
          <div class="operator-logo text-center">
            <img :src="operator.logo" />
          </div>
          <div class="px-3 operator-content">
            <h4 class="fw-bold">{{ operator.company_name }}</h4>
            <h6 class="description">
              {{ operator.brief | limitText }}
            </h6>
            <p class="mt-2">
              <CustomStarRating
                :rating="operator.avg_review"
              ></CustomStarRating>
              <span
                >{{ operator.avg_review }} ({{
                  operator.sum_review
                }}
                Reviews)</span
              >
            </p>
            <h6>Learn More about this company</h6>
          </div>
          <div
            class="logo-layout"
            :style="{
              'background-image': 'url(' + operator.banner + ')',
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import CustomStarRating from "../components/CustomStarRating";
export default {
  name: "TourOperators",
  data() {
    return {};
  },
  components: {
    CustomStarRating,
  },
  computed: {
    ...mapGetters({
      operatorList: "operatorController/operatorList",
    }),
  },
  created() {
    this.getOperatorList();
  },
  methods: {
    getOperatorList() {
      this.$store.dispatch("operatorController/getOperatorList");
    },

    toOperatorDetail(id) {
      this.$router.push("/operator/" + id);
    },
  },

  filters: {
    limitText: function (string) {
      if (string.length > 300) return string.substring(0, 300) + "...";
      else return string;
    },
  },
};
</script>

<style>
#tour-operators-page {
  background-color: #f2f2f2;
  padding-top: 50px;
  padding-bottom: 100px;
}

#tour-operators-page section {
  margin-top: 100px;
  margin-bottom: 30px;
}

#tour-operators-page .wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#tour-operators-page .operator-logo img {
  min-width: 150px;
  height: 150px;
}

#tour-operators-page .logo-layout {
  min-width: 400px;
  width: 400px;
  height: 0;
  padding-top: calc(0.5625 * 400px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: auto;
}

#tour-operators-page .operator-content {
  min-width: calc(100% - 550px);
}
.tour-operator-card {
  cursor: pointer;
}
@media (max-width: 1200px) {
  #tour-operators-page .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .operator-content {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  #tour-operators-page .operator-content h4 {
    text-align: center;
  }
}

@media (max-width: 420px) {
  #tour-operators-page .logo-layout {
    min-width: 100%;
    width: 100%;
    padding-top: 56.25%;
  }
}
</style>
