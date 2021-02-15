<template>
  <div class="tour-operator-page">
    <div class="container">
      <div class="card p-4" v-if="operatorData != null">
        <h3 class="fw-bold mb-0">{{ operatorData.company_name }}</h3>
        <p class="mt-2">
          <CustomStarRating
            :rating="operatorData.avg_review"
          ></CustomStarRating>
          <span
            >{{ operatorData.avg_review }} ({{
              operatorData.sum_review
            }}
            Reviews)</span
          >
        </p>
        <!-- <h6 class="mb-0">Learn More about this company</h6> -->
      </div>
      <div class="card mt-4 p-4">
        <ejs-tab id="element">
          <div class="e-tab-header">
            <div>Overview</div>
            <div>Safari & Tours</div>
            <div>Reviews</div>
          </div>
          <div class="e-content">
            <div>
              <h3 class="fw-bold mb-0 mt-3">Overview</h3>
              <h6 class="mt-2" v-if="operatorData != null">
                {{ operatorData.brief }}
              </h6>
              <hr />
              <div
                class="row g-0 align-items-center"
                v-if="operatorData != null"
              >
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <TourCardOperator
                    :tourData="operatorData.package[0]"
                    :company_name="operatorData.company_name"
                    :avg_review="operatorData.avg_review"
                    :sum_review="operatorData.sum_review"
                  ></TourCardOperator>
                </div>
                <div class="col-lg-8 col-md-6 col-sm-12">
                  <h4 class="fw-bold mb-0 mt-3 ps-3">Customer Reviews</h4>
                  <div class="text-center px-2">
                    <div
                      class="review-section mt-3 p-3"
                      v-for="(review, index) in operatorData.review.slice(0, 1)"
                      v-bind:key="'review' + index"
                    >
                      <h5>{{ review.full_name }}</h5>
                      <h6>
                        <strong
                          >{{ review.title }}<br />
                          <span class="fa fa-quote-left ms-2"></span
                        ></strong>
                        {{ review.description }}
                      </h6>
                    </div>
                    <button
                      type="button"
                      class="btn btn-danger mt-3"
                      data-bs-toggle="modal"
                      data-bs-target="#writeareview"
                    >
                      Write A Review
                    </button>

                    <!-- Modal -->
                    <div
                      class="modal fade"
                      id="writeareview"
                      tabindex="-1"
                      aria-labelledby="reviewLavel"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down"
                      >
                        <div class="modal-content">
                          <div class="modal-header bg-danger text-white">
                            <h5 class="modal-title" id="reviewLavel">
                              Write a Review
                            </h5>
                            <button
                              type="button"
                              class="btn-close btn-close-white"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body text-start">
                            <div class="row align-items-center">
                              <div class="col-sm-12">
                                <ejs-textbox
                                  floatLabelType="Auto"
                                  type="text"
                                  placeholder="Name"
                                  required
                                ></ejs-textbox>
                              </div>
                              <div class="col-sm-12 mt-3">
                                <ejs-textbox
                                  floatLabelType="Auto"
                                  type="text"
                                  placeholder="Email"
                                  required
                                ></ejs-textbox>
                              </div>
                              <div class="col-sm-12 mt-3">
                                <ejs-textbox
                                  floatLabelType="Auto"
                                  type="text"
                                  placeholder="Title"
                                  required
                                ></ejs-textbox>
                              </div>
                              <div class="col-sm-12 mt-5">
                                <h5 class="fw-bold">Rate:</h5>
                              </div>
                              <div class="col-sm-12 mt-3">
                                <star-rating
                                  :rating="5"
                                  :show-rating="false"
                                  active-color="#f93154"
                                ></star-rating>
                              </div>
                              <div class="col-sm-12 mt-5">
                                <ejs-textbox
                                  :multiline="true"
                                  floatLabelType="Auto"
                                  placeholder="Write a review"
                                  required
                                ></ejs-textbox>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-light"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-danger">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="row g-0 mt-3" v-if="operatorData != null">
                <div
                  class="col-lg-4 col-md-6 col-sm-12"
                  v-for="(item, index) in operatorData.package"
                  v-bind:key="'package' + index"
                >
                  <TourCardOperator
                    :tourData="item"
                    :company_name="operatorData.company_name"
                    :avg_review="operatorData.avg_review"
                    :sum_review="operatorData.sum_review"
                  ></TourCardOperator>
                </div>
              </div>
            </div>
            <div>
              <div v-if="operatorData != null">
                <h3 class="fw-bold mb-0 mt-3">Reviews</h3>
                <div
                  class="review-section mt-3 p-3"
                  v-for="(review, index) in current_page_reviews"
                  v-bind:key="'r' + index"
                >
                  <h4>{{ review.full_name }}</h4>
                  <h5>
                    <strong
                      >{{ review.title }}
                      <span class="fa fa-quote-left ms-2"></span
                    ></strong>
                    {{ review.description }}
                  </h5>
                </div>
                <div class="review-pagination">
                  <Pagination
                    v-model="current_review_page"
                    :records="operatorData.review.length"
                    :per-page="reviews_per_page"
                    :options="pagenation_options"
                  />
                </div>
              </div>
            </div>
          </div>
        </ejs-tab>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import { TabPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(TabPlugin);

import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(TextBoxPlugin);

import TourCardOperator from "../components/TourCardOperator";
import StarRating from "vue-star-rating";
import { mapState, mapGetters, mapMutations } from "vuex";
import CustomStarRating from "../components/CustomStarRating";
import Pagination from "vue-pagination-2";

export default {
  name: "TourOperator",
  components: {
    TourCardOperator,
    StarRating,
    CustomStarRating,
    Pagination,
  },
  data() {
    return {
      current_review_page: 1,
      reviews_per_page: 5,
      current_page_reviews: [],
      pagenation_options: {
        chunk: 5,
      },
    };
  },
  computed: {
    operator_id: function () {
      var id = this.$route.params.id;
      return id.slice(0, id.length);
    },
    ...mapGetters({
      operatorData: "operatorController/operatorData",
    }),
  },
  watch: {
    current_review_page: function (newValue) {
      this.getCurrentPageReviews(newValue);
    },
  },
  created() {
    this.getOperatorById(this.operator_id);
  },
  methods: {
    getOperatorById(operator_id) {
      this.$store
        .dispatch("operatorController/getOperatorById", operator_id)
        .then(() => {
          this.getCurrentPageReviews(1);
        });
    },

    getCurrentPageReviews(page_num) {
      this.current_page_reviews = [];
      let index = 0;
      for (
        let i = (page_num - 1) * this.reviews_per_page;
        i < page_num * this.reviews_per_page;
        i++
      ) {
        if (this.operatorData.review[i] != undefined) {
          this.current_page_reviews[index] = this.operatorData.review[i];
          index++;
        }
      }
    },
  },
};
</script>

<style>
.tour-operator-page {
  background-color: #f2f2f2;
  padding-top: 150px;
  padding-bottom: 100px;
}

.review-section {
  background-color: #f5f5f5;
}

.review-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.tour-operator-page .e-multi-line-input textarea {
  height: 150px;
}

@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-vue-buttons/styles/material.css";
@import "@syncfusion/ej2-vue-navigations/styles/material.css";
@import "@syncfusion/ej2-vue-popups/styles/material.css";
@import "@syncfusion/ej2-vue-inputs/styles/material.css";
</style>
