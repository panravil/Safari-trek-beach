<template>
<div id="tour-operators-page">
  <div class="container">
    <section>
      <header class="section-header" data-aos="fade-up">
        <h3>TOUR OPERATORS</h3>
      </header>
    </section>
    <div v-if="loading">
      <TourOperatorsSkelecton></TourOperatorsSkelecton>
      <TourOperatorsSkelecton></TourOperatorsSkelecton>
      <TourOperatorsSkelecton></TourOperatorsSkelecton>
    </div>
    <div v-else>
      <div class="card p-3 mt-5 tour-operator-card" v-for="(operator, index) in current_page_operators" v-bind:key="'operator' + index" data-aos="fade-up" @click="toOperatorDetail(operator.user_id)">
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
              <CustomStarRating :rating="operator.avg_review"></CustomStarRating>
              <span v-if="operator.avg_review == '5'">5.0 ({{
                  operator.sum_review
                }}
                Reviews)</span>
              <span v-else>{{ operator.avg_review }} ({{
                  operator.sum_review
                }}
                Reviews)</span>
            </p>
            <h6>Learn More about this company</h6>
          </div>
          <div class="logo-layout" :style="{
              'background-image': 'url(' + operator.banner + ')',
            }"></div>
        </div>
      </div>
    </div>
    <div class="operator-pagination" v-if="operatorList != null">
      <Pagination v-model="current_operator_page" :records="operatorList.length" :per-page="operators_per_page" :options="pagenation_options" />
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
import Pagination from "vue-pagination-2";
import CustomStarRating from "../components/CustomStarRating";
import TourOperatorsSkelecton from "../components/TourOperatorsSkelecton";

export default {
  name: "TourOperators",
  data() {
    return {
      current_operator_page: null,
      operators_per_page: 5,
      current_page_operators: [],
      pagenation_options: {
        chunk: 5,
      },
    };
  },
  components: {
    Pagination,
    CustomStarRating,
    TourOperatorsSkelecton,
  },
  computed: {
    page_id: function () {
      var id = this.$route.params.id;
      return id.slice(0, id.length);
    },
    ...mapGetters({
      operatorList: "operatorController/operatorList",
      loading: "tourcard_loading",
    }),
  },
  watch: {
    current_operator_page: function (newValue) {
      this.$router.push('/tour-operators/page/' + newValue).catch(() =>{})
    },
  },
  created() {
    let page_title = "Tour Operators of Safari-Trek-Beach.com"
    document.title = page_title;
    this.current_operator_page = parseInt(this.page_id)
    this.getOperatorList();
  },
  methods: {
    getOperatorList() {
      this.$store.dispatch("operatorController/getOperatorList").then(() => {
        this.getCurrentPageOperators(this.current_operator_page);
      });
    },

    toOperatorDetail(id) {
      // this.$router.push("/operator/" + id);

      let routeData = this.$router.resolve({
        name: "Tour Operator",
        params: {
          id: id
        }
      });
      
      window.open(routeData.href, '_blank');
    },

    getCurrentPageOperators(page_num) {
      this.current_page_operators = [];
      let index = 0;
      for (
        let i = (page_num - 1) * this.operators_per_page; i < page_num * this.operators_per_page; i++
      ) {
        if (this.operatorList[i] != undefined) {
          this.current_page_operators[index] = this.operatorList[i];
          index++;
        }
      }
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

.operator-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
