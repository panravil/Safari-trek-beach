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
        <TourOperatorsSkelecton></TourOperatorsSkelecton>
        <TourOperatorsSkelecton></TourOperatorsSkelecton>
      </div>
      <div v-else>
        <div
          class="card p-3 mt-5 tour-operator-card"
          v-for="(operator, index) in current_page_operators"
          v-bind:key="'operator' + index"
          @click="toOperatorDetail(operator.user_id)"
        >
          <div class="wrapper">
            <div class="operator-logo text-center">
              <img v-lazy="operator.logo" />
            </div>
            <div class="px-3 operator-content">
              <h4 class="fw-bold text-capitalize">{{ operator.company_name }}</h4>
              <h6 class="description">
                {{ operator.brief | limitText }}
              </h6>
              <p class="mt-2">
                <CustomStarRating
                  :rating="operator.avg_review"
                ></CustomStarRating>
                <span v-if="operator.avg_review == '5'"
                  >5.0 ({{ operator.num_review }} Reviews)</span
                >
                <span v-else
                  >{{ operator.avg_review }} ({{
                    operator.num_review
                  }}
                  Reviews)</span
                >
              </p>
              <h6>Learn More about this company</h6>
            </div>
            <div class="logo-layout text-center">
              <img v-lazy="operator.banner" />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="operator-pagination" v-if="operatorList != null">
        <Pagination
          v-model="current_operator_page"
          :records="operatorList.length"
          :per-page="operators_per_page"
          :options="pagenation_options"
        />
      </div> -->
      <div class="operator-pagination" v-if="operatorList != null">
        <paginate
          v-model="current_operator_page"
          :page-count="Math.floor(operatorList.length/operators_per_page) + 1"
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
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
// import Pagination from "vue-pagination-2";
import CustomStarRating from "../components/CustomStarRating";
import TourOperatorsSkelecton from "../components/TourOperatorsSkelecton";

export default {
  name: "TourOperators",
  data() {
    return {
      current_operator_page: null,
      operators_per_page: 10,
      current_page_operators: [],
      pagenation_options: {
        chunk: 5,
      },
    };
  },
   metaInfo() {
      return {
          title: `Tour Operators of Safari-Trek-Beach.com`,
          meta: [
              {name: 'description', content: 'This is Tour Operators of Safari-Trek-Beach.com'},
              {property: 'og:title', content: 'Tour Operators of Safari-Trek-Beach.com'},    
              {name: 'twitter:title', content: 'Tour Operators of Safari-Trek-Beach.com'},
              // {property: 'og:image', content: this.blogData.post_inner_image},
              // {property: 'twitter:image', content: this.blogData.post_inner_image}, 
              // {property: 'og:url', content: window.location.href}, 
          ]
      }
  },
  components: {
    // Pagination,
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
      this.$router
        .push("/tour-operators/page/" + newValue)
        .then(() => {
          this.getOperatorList();
        })
        .catch(() => {});
    },
  },
  created() {
    // let page_title = "Tour Operators of Safari-Trek-Beach.com";
    // document.title = page_title;
    this.current_operator_page = parseInt(this.page_id);
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
          id: id,
        },
      });

      window.open(routeData.href, "_blank");
    },

    getCurrentPageOperators(page_num) {
      this.current_page_operators = [];
      let index = 0;
      for (
        let i = (page_num - 1) * this.operators_per_page;
        i < page_num * this.operators_per_page;
        i++
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
  /* background-color: #f2f2f2; */
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

#tour-operators-page .logo-layout {
  min-width: 400px;
  width: 400px;
}

#tour-operators-page .operator-logo img {
  min-width: 150px;
  height: 150px;
}

.tour-operator-card:hover {
  box-shadow: 0px 1px 13px #666;
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
}
/* #tour-operators-page .logo-layout {
  min-width: 400px;
  width: 400px;
  height: 0;
  padding-top: calc(0.5625 * 400px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: auto;
} */

#tour-operators-page .logo-layout img {
  width: 400px;
  height: auto;
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
  margin-top: 40px;
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

  #tour-operators-page .logo-layout {
    margin: auto;
  }
}

@media (max-width: 480px) {
  #tour-operators-page .logo-layout img {
    min-width: 100%;
    width: 100%;
  }

  #tour-operators-page .logo-layout {
    min-width: 100%;
    margin: auto;
    width: 100%;
  }
}
</style>
