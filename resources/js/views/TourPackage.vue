<template>
  <div class="package-inner-page">
    <div class="container mt-5">
      <div class="card mb-3">
        <div class="row g-0 package-inner-banner">
          <div class="col-lg-7 col-md-12">
            <div
              class="package-inner-image"
              :style="[
                packageData != null
                  ? {
                      'background-image': 'url(' + packageData.image_url + ')',
                    }
                  : { background: '#FFF' },
              ]"
            ></div>
          </div>
          <div
            class="col-lg-5 col-md-12 p-3 position-relative package-inner-title"
          >
            <div class="card-body">
              <h3 class="card-title fw-bold" v-if="packageData != null">
                {{ packageData.title }}
              </h3>
              <h5 class="card-title" v-if="packageData != null">
                {{ packageData.company_name }}
              </h5>
            </div>
            <div class="price-rate p-3">
              <div class="p-3" v-if="packageData != null">
                <h4
                  class="fw-bold text-success my-2"
                  :title="packageData.rate.child_currency + ' USD per Child'"
                >
                  ${{ packageData.rate.adult_currency }}
                  <small class="text-dark">USD</small>
                </h4>
                <p class="mt-2" v-if="packageData != null">
                  <CustomStarRating
                    :rating="packageData.avg_review"
                  ></CustomStarRating>
                  <span>{{ packageData.avg_review }}</span>
                  <span>({{ packageData.sum_review }} Reviews)</span>
                </p>
                <a class="btn btn-danger" href="/tour-quote"
                  >Get Free Quote Now
                  <span class="fa fa-angle-right ms-2"></span
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-8 col-md-12">
          <div class="card p-4 mb-3">
            <ejs-tab id="element">
              <div class="e-tab-header">
                <div>Short Description</div>
                <div>Itinerary</div>
                <div>Reviews</div>
                <div>Photo Gallery</div>
              </div>
              <div class="e-content">
                <div>
                  <div class="p-3" v-if="packageData != null">
                    <h3 class="fw-bold">Overview</h3>
                    <div class="overview-description">
                      {{ packageData.description }}
                    </div>
                    <hr />
                    <h4 class="fw-bold text-danger">
                      <span class="fa fa-arrow-circle-right"></span>
                      Tour Summary
                    </h4>
                    <h6 class="my-1">
                      Tour Start from
                      <strong
                        >{{ packageData.getting_there.start_city }} City</strong
                      >
                    </h6>
                    <div
                      class="routine ms-2"
                      v-for="(item, index1) in packageData.day"
                      v-bind:key="index1"
                    >
                      <h6 class="fw-bold mt-4">Day {{ index1 }}</h6>
                      <div class="routine-detail ms-3">
                        <h6 class="my-2">
                          <span class="me-2">✓</span>
                          <span
                            >Destination:
                            <strong>{{ item.destination }}</strong></span
                          >
                        </h6>
                        <h6 class="my-2" v-if="item.accom_name != null">
                          <span class="me-2">✓</span>
                          <span
                            >Accomodation:
                            <strong>{{ item.accom_name }}</strong></span
                          >
                        </h6>
                        <h6 class="my-2">
                          <span class="me-2">✓</span>
                          <span
                            >Location:
                            <strong>{{ item.accom_location }}</strong></span
                          >
                        </h6>
                        <h6 class="my-2">
                          <span class="me-2">✓</span>
                          <span
                            >Comfort:
                            <strong>{{ item.accom_level }}</strong></span
                          >
                        </h6>
                        <h6 class="my-2">
                          <span class="me-2">✓</span>
                          <span
                            >Type: <strong>{{ item.accom_type }}</strong></span
                          >
                        </h6>
                        <h6 class="my-2">
                          <span class="me-2">✓</span>
                          <span>BreakFast: <strong>Include</strong></span>
                        </h6>
                        <h6 class="my-2">
                          <span class="me-2">X</span>
                          <span>Lunch: <strong>Include</strong></span>
                        </h6>
                        <h6 class="my-2">
                          <span class="me-2">X</span>
                          <span>Dinner: <strong>Exclude</strong></span>
                        </h6>
                        <h6 class="my-2">
                          <span class="me-2">X</span>
                          <span
                            >Drinks: <strong>Water, Beer and Wine</strong></span
                          >
                        </h6>
                      </div>
                    </div>
                    <hr />
                    <h4 class="fw-bold text-danger">
                      <span class="fa fa-arrow-circle-right"></span>
                      Inclusive
                    </h4>
                    <div class="row g-0">
                      <div
                        class="col-md-6 col-sm-12"
                        v-if="packageData != null"
                      >
                        <h4 class="fw-bold ms-2">Inclusion</h4>
                        <h5
                          class="ms-5"
                          v-for="(item, index2) in packageData.inclusion
                            .included"
                          v-bind:key="'A' + index2"
                        >
                          <span class="fa fa-check me-3 text-danger"></span>
                          <span class="exclusion-inclusion">{{ item }}</span>
                        </h5>
                      </div>
                      <div
                        class="col-md-6 col-sm-12"
                        v-if="packageData != null"
                      >
                        <h4 class="fw-bold ms-2">Exclusion</h4>
                        <h5
                          class="ms-5"
                          v-for="(item, index3) in packageData.inclusion
                            .excluded"
                          v-bind:key="'B' + index3"
                        >
                          <span class="fa fa-times me-3 text-danger"></span>
                          <span class="exclusion-inclusion">{{ item }}</span>
                        </h5>
                      </div>
                    </div>
                    <hr />
                    <h4 class="fw-bold text-danger">
                      <span class="fa fa-arrow-circle-right"></span>
                      Activities & Transpotation
                    </h4>
                    <h5 class="ms-5">
                      <span class="fa fa-check me-3 text-danger"></span>
                      <span class="exclusion-inclusion">
                        Activitiy:
                        <strong>
                          {{ packageData.tour_focus }}
                        </strong>
                      </span>
                    </h5>
                    <h5 class="ms-5">
                      <span class="fa fa-check me-3 text-danger"></span>
                      <span class="exclusion-inclusion">
                        Getting around:
                        <strong
                          v-for="(item, index) in packageData.transport"
                          v-bind:key="index + 'transport'"
                        >
                          {{ item
                          }}<span
                            v-if="index != packageData.transport.length - 1"
                            >,
                          </span>
                        </strong>
                      </span>
                    </h5>
                    <hr />
                    <h4 class="fw-bold text-danger">
                      <span class="fa fa-arrow-circle-right"></span>
                      Getting There
                    </h4>
                    <h5 class="ms-5">
                      <span class="fa fa-check me-3 text-danger"></span>
                      <span class="exclusion-inclusion">
                        The Tour Starts in:
                        <strong>
                          {{ packageData.getting_there.start_city }}</strong
                        ></span
                      >
                    </h5>
                    <h5
                      class="ms-5"
                      v-if="packageData.getting_there.airport_transfer == 'yes'"
                    >
                      <span class="fa fa-check me-3 text-danger"></span>
                      <span class="exclusion-inclusion"
                        >Airport transfer are included</span
                      >
                    </h5>
                    <!-- <h5 class="ms-5">
                    <span class="fa fa-check me-3 text-danger"></span>
                    <span class="exclusion-inclusion">Sleeping bag</span>
                  </h5> -->
                    <h5 class="ms-5">
                      <span class="fa fa-check me-3 text-danger"></span>
                      <span class="exclusion-inclusion">
                        The Tour Ends in:
                        <strong>{{
                          packageData.getting_there.end_city
                        }}</strong></span
                      >
                    </h5>
                    <hr />
                  </div>
                </div>
                <div>
                  <div class="p-3" v-if="packageData != null">
                    <h3 class="fw-bold">Itinerary</h3>
                    <div
                      class="itinery mt-3"
                      v-for="(item, index6) in packageData.day"
                      v-bind:key="'E' + index6"
                    >
                      <div
                        class="position-relative"
                        v-if="item.image_url != null"
                      >
                        <img :src="item.image_url" class="w-100" />
                        <div class="itinery-title">
                          <h4 class="fw-bold my-2">Day {{ index6 }}</h4>
                          <h5 class="fw-bold my-0">{{ item.title }}</h5>
                        </div>
                      </div>
                      <div v-else>
                        <h4 class="fw-bold my-2">Day {{ index6 }}</h4>
                        <h5 class="fw-bold my-0">{{ item.title }}</h5>
                      </div>
                      <div class="mt-3">
                        <div class="itinery-content">
                          {{ item.day_description }}
                        </div>
                      </div>
                      <div class="d-flex align-items-start mt-3 mb-0">
                        <div style="min-width: 160px">
                          <h6 class="fw-bold">Accommodation:</h6>
                        </div>
                        <div>
                          <h6 v-if="item.accom_level != null">
                            {{ item.accom_type }} ({{ item.accom_level }})
                          </h6>
                          <h6 v-else>No Accommodation</h6>
                        </div>
                      </div>
                      <div class="d-flex align-items-start mt-0">
                        <div style="min-width: 160px">
                          <h6 class="fw-bold">Meals & Drinks:</h6>
                        </div>
                        <div>
                          <h6>
                            <span
                              v-for="(meal, index) in packageData.day_meal[
                                index6
                              ]"
                              v-bind:key="'meal' + index"
                            >
                              {{ meal
                              }}<span
                                v-if="
                                  index ==
                                  packageData.day_meal[index6].length - 2
                                "
                              >
                                and
                              </span>
                              <span
                                v-else-if="
                                  index !=
                                  packageData.day_meal[index6].length - 1
                                "
                                >,
                              </span>
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="p-3" v-if="packageData != null">
                    <h5 class="reviews">
                      <CustomStarRating
                        :rating="packageData.avg_review"
                      ></CustomStarRating>
                      <span class="text-danger"
                        >Reviews {{ packageData.avg_review }} / 5
                        <small class="text-muted"
                          >({{ packageData.sum_review }} reviews)</small
                        ></span
                      >
                    </h5>
                    <hr />
                    <div
                      class="review"
                      v-for="(item, index7) in current_page_reviews"
                      v-bind:key="'F' + index7"
                    >
                      <h3 class="fw-bold mt-5">{{ item.title }}</h3>
                      <h6 class="reviews">
                        <CustomStarRating
                          :rating="item.rate"
                        ></CustomStarRating>
                        <span class="text-danger">
                          {{ item.rate }} / 5 <small class="text-muted"></small
                        ></span>
                      </h6>
                      <div class="d-flex align-items-center">
                        <div>
                          <img
                            :src="'/images/user_review.png'"
                            width="40px"
                            height="40px"
                          />
                        </div>
                        <div>
                          <h4 class="fw-bold text-muted my-0 ms-3">
                            {{ item.full_name }}
                          </h4>
                        </div>
                      </div>
                      <div class="mt-3">
                        <div class="review-content">
                          <read-more
                            more-str="Read more"
                            :text="item.description"
                            less-str="Read less"
                            :max-chars="100"
                          ></read-more>
                        </div>
                      </div>
                      <hr class="my-3" />
                    </div>
                    <div class="review-pagination">
                      <Pagination
                        v-model="current_review_page"
                        :records="packageData.review.length"
                        :per-page="reviews_per_page"
                        :options="pagenation_options"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="p-3" v-if="packageData != null">
                    <h3 class="fw-bold">Photo Gallary</h3>
                    <!-- <div class="row g-0" v-if="packageData != null">
                    <div class="col-lg-4 col-md-6 col-sm-12 p-2" v-for="(item, index8) in packageData.gallery" v-bind:key="'G'+index8">
                      <div class="photo-gallery-item" :style="{
                        'background-image': 'url(' + item + ')',
                      }"></div>
                    </div>
                  </div> -->
                    <viewer :images="packageData.gallery">
                      <div class="row g-0" v-if="packageData != null">
                        <div
                          class="col-lg-4 col-md-6 col-sm-12 p-2"
                          v-for="(item, index8) in packageData.gallery"
                          v-bind:key="'G' + index8"
                        >
                          <img :src="item" style="width: 100%; height: auto" />
                        </div>
                      </div>
                    </viewer>
                  </div>
                </div>
              </div>
            </ejs-tab>
            <h4 class="fw-bold ms-2 mt-3">Interested in this Tour ?</h4>
            <div>
              <a class="btn btn-danger ms-2 mb-3" href="/tour-quote"
                >Get a Free Quote <span class="fa fa-angle-right ms-2"></span
              ></a>
            </div>
            <div class="d-flex ms-3">
              <div style="min-width: 20px">
                <span class="fa fa-angle-right"></span>
              </div>
              <div>Requests are sent directly to tour operator.</div>
            </div>
            <div class="d-flex ms-3">
              <div style="min-width: 20px">
                <span class="fa fa-angle-right"></span>
              </div>
              <div>
                We advise <strong>requesting qoutes</strong> from
                <strong>three operators</strong>.
                <a class="text-danger">Learn Why</a>
              </div>
            </div>

            <h4 class="fw-bold ms-2 mt-5">Disclaimer</h4>
            <div class="d-flex ms-3">
              <div style="min-width: 20px">
                <span class="fa fa-angle-right"></span>
              </div>
              <div>
                This tour is offered by <strong>Safari Trek Beach</strong>, not
                SafariBookings.
              </div>
            </div>
            <div class="d-flex ms-3">
              <div style="min-width: 20px">
                <span class="fa fa-angle-right"></span>
              </div>
              <div>
                If you request changes to this tour, the advertised rate will
                likely change.
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="card p-4 mb-3" v-if="packageData != null">
            <h3 class="fw-bold text-success">
              Price: $ {{ packageData.rate.adult_currency }}
              <small class="fw-normal">pp</small>
            </h3>
            <h5 class="fw-bold">Request a Quote</h5>
            <div class="row">
              <div class="col-sm-12 mt-3">
                <ejs-datepicker :placeholder="'Select a Date'"></ejs-datepicker>
              </div>
              <div class="col-sm-12 mt-3"></div>
            </div>
            <button class="btn btn-danger mb-3">Enquire Now</button>
            <div class="d-flex ms-3">
              <div style="min-width: 25px">
                <span class="fa fa-check-circle"></span>
              </div>
              <div class="fst-italic">Best price guarantee</div>
            </div>
            <div class="d-flex ms-3">
              <div style="min-width: 25px">
                <span class="fa fa-check-circle"></span>
              </div>
              <div class="fst-italic">Without any obligation to book</div>
            </div>
            <div class="d-flex ms-3">
              <div style="min-width: 25px">
                <span class="fa fa-check-circle"></span>
              </div>
              <div class="fst-italic">
                Your request will be sent directly to the operator
              </div>
            </div>
          </div>
          <div class="card p-4 mb-3" v-if="packageData != null">
            <img
              :src="packageData.logo"
              v-if="packageData.logo != null"
              class="mx-auto w-50"
            />
            <hr v-if="packageData.logo != null" />
            <h6 class="mb-0 mt-2">
              <strong>Offered by:</strong>
              <span>{{ packageData.company_name }}</span>
            </h6>
            <h6 class="mb-0 mt-2">
              <strong>Employees:</strong>
              <span> {{ packageData.no_of_staff }}</span>
            </h6>
          </div>
          <div class="card p-4 mb-3" v-if="packageData != null">
            <h3 class="fw-bold">Customer Reviews</h3>

            <carousel
              :per-page="1"
              :speed="1000"
              :loop="true"
              :autoplayTimeout="3000"
              :autoplayDirection="'backward'"
              :paginationEnabled="false"
              :autoplay="true"
            >
              <slide
                v-for="(item, indexsss) in packageData.review"
                v-bind:key="'review' + indexsss"
              >
                <div class="d-flex align-items-center">
                  <div>
                    <img
                      :src="'/images/user_review.png'"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div>
                    <h4 class="fw-bold text-dark my-0 ms-3">
                      {{ item.full_name }}
                    </h4>
                    <!-- <h6 class="text-dark my-0 ms-3">Reviewed: <span class="text-muted">{{ new Date(item.created_at).toDateString() }}</span></h6> -->
                  </div>
                </div>
                <div class="my-3 review-detail">
                  <h5 class="text-muted fw-bold">
                    {{ item.title }}
                  </h5>
                  <h5 class="reviews">
                    <CustomStarRating :rating="item.rate"> </CustomStarRating>
                    <span style="color: #4f4f4f"> {{ item.rate }} / 5 </span>
                  </h5>
                  <div class="review-description">
                    {{ item.description.substr(0, 200) }}
                    <span v-if="item.description.length > 200">...</span>
                  </div>
                </div>
              </slide>
            </carousel>
            <button
              type="button"
              class="btn btn-danger"
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
                    <h5 class="modal-title" id="reviewLavel">Write a Review</h5>
                    <button
                      type="button"
                      class="btn-close btn-close-white"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
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
                    <button type="button" class="btn btn-danger">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card p-4 mb-3 gallery" v-if="packageData != null">
            <h3 class="fw-bold">Gallery</h3>
            <!-- <carousel :navigationEnabled="true" :per-page="1" :mouse-drag="false" :speed="1000" :loop="true" :autoplayTimeout="3000" :autoplayDirection="'backward'" :paginationEnabled="false" :autoplay="true"> -->
            <carousel
              :per-page="1"
              :paginationEnabled="false"
              :autoplay="true"
              :speed="1000"
              :loop="true"
              :autoplayTimeout="3000"
            >
              <slide
                v-for="(item, index8) in packageData.gallery"
                v-bind:key="'G23' + index8"
              >
                <div
                  class="bg-image"
                  :style="{ 'background-image': 'url(' + item + ')' }"
                ></div>
              </slide>
            </carousel>
          </div>
        </div>
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

import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
Vue.use(Viewer);

import { mapState, mapGetters, mapMutations } from "vuex";

import StarRating from "vue-star-rating";
import CustomStarRating from "../components/CustomStarRating";
import Pagination from "vue-pagination-2";
export default {
  name: "TourPackage",
  components: {
    StarRating,
    CustomStarRating,
    Pagination,
  },
  computed: {
    package_id: function () {
      var id = this.$route.params.id;
      return id.slice(0, id.length);
    },
    ...mapGetters({
      packageData: "tourController/packageData",
    }),
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
  created() {
    this.getPacakgeById(this.package_id);
  },
  watch: {
    current_review_page: function (newValue) {
      this.getCurrentPageReviews(newValue);
    },
  },
  mounted() {},
  methods: {
    getPacakgeById(package_id) {
      this.$store
        .dispatch("tourController/getTourById", package_id)
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
        if (this.packageData.review[i] != undefined) {
          this.current_page_reviews[index] = this.packageData.review[i];
          index++;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.package-inner-page {
  padding-top: 60px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
}

.package-inner-page .package-inner-image {
  height: 0;
  width: 100%;
  padding-top: 45%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.package-inner-page .price-rate {
  bottom: 0;
  left: 0;
  position: absolute;
}

.package-inner-page .photo-gallery-item {
  height: 0;
  width: 100%;
  padding-top: 56.25%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.package-inner-page .review-content,
.package-inner-page .overview-description,
.package-inner-page .itinery-content {
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  text-align: justify;
}

.package-inner-page .itinery-title {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  padding: 20px 10px 30px 30px;
  color: white;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 600;
  font-family: "Gentium Basic", serif;
  text-shadow: 1px 1px 5px #000;
  z-index: 3;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 45%,
    rgba(0, 0, 0, 0.9) 100%
  );
}
.review-pagination {
  justify-content: center;
  display: flex;
}
.exclusion-inclusion {
  font-size: 18px;
}

@media (min-width: 992px) and (max-width: 1400px) {
  .package-inner-page .package-inner-image {
    padding-top: 50%;
  }
}

@media (max-width: 991px) {
  .package-inner-page .package-inner-image {
    padding-top: 50%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  .package-inner-page .package-inner-title {
    height: 300px;
  }

  .package-inner-page .package-inner-title h3 {
    font-size: 20px;
  }

  .package-inner-page .package-inner-title h5 {
    font-size: 18px;
  }

  .package-inner-page .itinery-title {
    padding: 20px 10px 20px 20px;
  }
}

.gallery .bg-image {
  height: 0;
  width: 100%;
  padding-top: 56.25%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.package-inner-page .review-detail {
  background-color: #f1f1f1;
  border: 1px solid #f93154;
  padding: 20px;
}

.package-inner-page .e-multi-line-input textarea {
  height: 150px;
}

@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-vue-buttons/styles/material.css";
@import "@syncfusion/ej2-vue-popups/styles/material.css";
@import "@syncfusion/ej2-vue-navigations/styles/material.css";
@import "@syncfusion/ej2-vue-inputs/styles/material.css";
@import "@syncfusion/ej2-vue-calendars/styles/material.css";
</style>
