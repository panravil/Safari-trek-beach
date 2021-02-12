<template>
<div class="package-inner-page">
  <div class="container mt-5">
    <div class="card mb-3">
      <div class="row g-0 package-inner-banner">
        <div class="col-lg-7 col-md-12">
          <div class="package-inner-image" :style="[popularTours != null ? {
        'background-image': 'url(' + popularTours.image_url + ')',
      } : {'background': '#FFF'}]"></div>
        </div>
        <div class="col-lg-5 col-md-12 p-3 position-relative package-inner-title">
          <div class="card-body">
            <h3 class="card-title fw-bold" v-if="popularTours != null">{{ popularTours.title }}</h3>
            <h5 class="card-title" v-if="popularTours != null">{{ popularTours.company_name }}</h5>
          </div>
          <div class="price-rate p-3">
            <div class="p-3" v-if="popularTours != null">
              <h4 class="fw-bold text-success my-2">${{ popularTours.rate.adult_currency }} <small class="text-dark">USD</small></h4>
              <p class="mt-2">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span v-if="popularTours != null">{{ popularTours.avg_review }} ({{ popularTours.sum_review }} Reviews)</span>
              </p>
              <a class="btn btn-danger" href="/tour-quote">Get Free Quote Now <span class="fa fa-angle-right ms-2"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-lg-8 col-md-12">
        <div class="card p-4 mb-3">
          <ejs-tab id='element'>
            <div class="e-tab-header">
              <div>Short Description </div>
              <div>Itinerary </div>
              <div>Reviews </div>
              <div>Photo Gallery </div>
            </div>
            <div class="e-content">
              <div>
                <div class="p-3" v-if="popularTours != null">
                  <h3 class="fw-bold">Overview</h3>
                  <div class="overview-description">
                    {{ popularTours.description }}
                  </div>
                  <hr>
                  <h4 class="fw-bold text-danger">
                    <span class="fa fa-arrow-circle-right"></span>
                    Tour Summary
                  </h4>
                  <h6 class="my-1">Tour Start from <strong>{{ popularTours.getting_there.start_city }} City</strong></h6>
                  <div class="routine ms-2" v-for="(item, index1) in popularTours.day" v-bind:key="index1">
                    <h6 class="fw-bold mt-4">Day {{ index1 }}</h6>
                    <div class="routine-detail ms-3">
                      <h6 class="my-2">
                        <span class="me-2">✓</span>
                        <span>Destination: <strong>{{ item.destination }}</strong></span>
                      </h6>
                      <h6 class="my-2" v-if="item.accom_name != null">
                        <span class="me-2">✓</span>
                        <span>Accomodation: <strong>{{ item.accom_name }}</strong></span>
                      </h6>
                      <h6 class="my-2">
                        <span class="me-2">✓</span>
                        <span>Location: <strong>{{ item.accom_location }}</strong></span>
                      </h6>
                      <h6 class="my-2">
                        <span class="me-2">✓</span>
                        <span>Comfort: <strong>{{ item.accom_level }}</strong></span>
                      </h6>
                      <h6 class="my-2">
                        <span class="me-2">✓</span>
                        <span>Type: <strong>{{ item.accom_type }}</strong></span>
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
                        <span>Drinks: <strong>Water, Beer and Wine</strong></span>
                      </h6>
                    </div>
                  </div>
                  <hr>
                  <h4 class="fw-bold text-danger">
                    <span class="fa fa-arrow-circle-right"></span>
                    Inclusive
                  </h4>
                  <div class="row g-0">
                    <div class="col-md-6 col-sm-12" v-if="popularTours != null">
                      <h4 class="fw-bold ms-2">Inclusion</h4>
                      <h5 class="ms-5" v-for="(item, index2) in popularTours.inclusion.included" v-bind:key="'A'+index2">
                        <span class="fa fa-check me-3 text-danger"></span>
                        <span class="exclusion-inclusion">{{ item }}</span>
                      </h5>
                    </div>
                    <div class="col-md-6 col-sm-12" v-if="popularTours != null">
                      <h4 class="fw-bold ms-2">Exclusion</h4>
                      <h5 class="ms-5" v-for="(item, index3) in popularTours.inclusion.excluded" v-bind:key="'B'+index3">
                        <span class="fa fa-times me-3 text-danger"></span>
                        <span class="exclusion-inclusion">{{ item }}</span>
                      </h5>
                    </div>
                  </div>
                  <hr>
                  <h4 class="fw-bold text-danger">
                    <span class="fa fa-arrow-circle-right"></span>
                    Activities & Transpotation
                  </h4>
                  <h5 class="ms-5">
                    <span class="fa fa-check me-3 text-danger"></span>
                    <span class="exclusion-inclusion">
                      Activitiy:
                      <strong>
                        {{ popularTours.tour_focus }}
                      </strong>
                    </span>
                  </h5>
                  <h5 class="ms-5">
                    <span class="fa fa-check me-3 text-danger"></span>
                    <span class="exclusion-inclusion">
                      Getting around:
                      <strong v-for="(item, index) in popularTours.transport" v-bind:key="index + 'transport'">
                      {{ item }}<span v-if="index != popularTours.transport.length - 1">, </span>
                      </strong>
                    </span>
                  </h5>
                  <hr>
                  <h4 class="fw-bold text-danger">
                    <span class="fa fa-arrow-circle-right"></span>
                    Getting There
                  </h4>
                  <h5 class="ms-5">
                    <span class="fa fa-check me-3 text-danger"></span>
                    <span class="exclusion-inclusion"> The Tour Starts in: <strong> {{ popularTours.getting_there.start_city}}</strong></span>
                  </h5>
                  <h5 class="ms-5" v-if="popularTours.getting_there.airport_transfer == 'yes'">
                    <span class="fa fa-check me-3 text-danger"></span>
                    <span class="exclusion-inclusion">Airport transfer are included</span>
                  </h5>
                  <!-- <h5 class="ms-5">
                    <span class="fa fa-check me-3 text-danger"></span>
                    <span class="exclusion-inclusion">Sleeping bag</span>
                  </h5> -->
                  <h5 class="ms-5">
                    <span class="fa fa-check me-3 text-danger"></span>
                    <span class="exclusion-inclusion"> The Tour Ends in: <strong>{{ popularTours.getting_there.end_city}}</strong></span>
                  </h5>
                  <hr>
                </div>
              </div>
              <div>
                <div class="p-3" v-if="popularTours != null">
                  <h3 class="fw-bold">Itinerary</h3>
                  <div class="itinery mt-3" v-for="(item, index6) in popularTours.day" v-bind:key="'E'+index6">
                    <div class="position-relative">
                      <img :src="'http://operators.safari-trek-beach.com/images/gallery/tanzania/tour_day/NGORONGORO_CRATER_5.jpg'" class="w-100" />
                      <div class="itinery-title">
                        <h4 class="fw-bold my-2">Day {{ index6 }}</h4>
                        <h5 class="fw-bold my-0">{{ item.title }}</h5>
                      </div>
                    </div>
                    <div class="mt-3">
                      <div class="itinery-content">{{ item.day_description }}</div>
                    </div>
                    <div class="d-flex align-items-start mt-3 mb-0">
                      <div style="min-width: 160px">
                        <h6 class="fw-bold">Accommodation:</h6>
                      </div>
                      <div>
                        <h6 v-if="item.accom_level != null">{{ item.accom_type }} ({{ item.accom_level }})</h6>
                        <h6 v-else>No Accommodation</h6>
                      </div>
                    </div>
                    <div class="d-flex align-items-start mt-0">
                      <div style="min-width: 160px">
                        <h6 class="fw-bold">Meals & Drinks:</h6>
                      </div>
                      <div>
                        <h6>
                          <span v-for="(meal, index) in popularTours.day_meal[index6]" v-bind:key="'meal' + index">
                            {{ meal }}<span v-if="index == popularTours.day_meal[index6].length - 2"> and </span>
                            <span v-else-if="index != popularTours.day_meal[index6].length - 1">, </span>
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="p-3" v-if="popularTours != null">
                  <h5 class="reviews">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="text-danger">Reviews 5.0 / 5 <small class="text-muted">(12 reviews)</small></span>
                  </h5>
                  <hr />
                  <div class="review" v-for="(item, index7) in popularTours.review" v-bind:key="'F'+index7">
                    <h3 class="fw-bold mt-5">{{ item.title}}</h3>
                    <h6 class="reviews">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="text-danger"> {{ item.rate }} / 5 <small class="text-muted"></small></span>
                    </h6>
                    <div class="d-flex align-items-center">
                      <div>
                        <img :src="'/images/user_review.png'" width="40px" height="40px">
                      </div>
                      <div>
                        <h4 class="fw-bold text-muted my-0 ms-3">{{ item.full_name }}</h4>
                      </div>
                    </div>
                    <div class="mt-3">
                      <div class="review-content">{{ item.description }}</div>
                    </div>
                    <hr class="my-3">
                  </div>
                </div>
              </div>
              <div>
                <div class="p-3">
                  <h3 class="fw-bold">Photo Gallary</h3>
                  <div class="row g-0" v-if="popularTours != null">
                    <div class="col-lg-4 col-md-6 col-sm-12 p-2" v-for="(item, index8) in popularTours.gallery" v-bind:key="'G'+index8">
                      <div class="photo-gallery-item" :style="{
                        'background-image': 'url(' + item + ')',
                      }"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ejs-tab>
          <h4 class="fw-bold ms-2 mt-3">Interested in this Tour ?</h4>
          <div>
            <a class="btn btn-danger ms-2 mb-3" href="/tour-quote">Get a Free Quote <span class="fa fa-angle-right ms-2"></span></a>
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
            <div>We advise <strong>requesting qoutes</strong> from <strong>three operators</strong>. <a class="text-danger">Learn Why</a></div>
          </div>

          <h4 class="fw-bold ms-2 mt-5">Disclaimer</h4>
          <div class="d-flex ms-3">
            <div style="min-width: 20px">
              <span class="fa fa-angle-right"></span>
            </div>
            <div>This tour is offered by <strong>Safari Trek Beach</strong>, not SafariBookings.</div>
          </div>
          <div class="d-flex ms-3">
            <div style="min-width: 20px">
              <span class="fa fa-angle-right"></span>
            </div>
            <div>If you request changes to this tour, the advertised rate will likely change.</div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="card p-4 mb-3" v-if="popularTours != null">
          <h3 class="fw-bold text-success">Price: $ {{ popularTours.rate.adult_currency }} <small class="fw-normal">pp</small></h3>
          <h5 class="fw-bold">Request a Quote</h5>
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
            <div class="fst-italic">Your request will be sent directly to the operator</div>
          </div>
        </div>
        <div class="card p-4 mb-3" v-if="popularTours != null">
          <img :src="popularTours.logo" v-if="popularTours.logo != null" class="mx-auto w-50" />
          <hr v-if="popularTours.logo != null">
          <h6 class="mb-0 mt-2"><strong>Offered by:</strong> <span>{{ popularTours.company_name }}</span></h6>
          <h6 class="mb-0 mt-2"><strong>Employees:</strong> <span> {{ popularTours.no_of_staff }}</span></h6>

        </div>
        <div class="card p-4 mb-3">
          <h3 class="fw-bold">Customer Reviews</h3>
          <div class="d-flex align-items-center">
            <div>
              <img :src="'/images/user_review.png'" width="40px" height="40px">
            </div>
            <div>
              <h4 class="fw-bold text-dark my-0 ms-3">John Joe</h4>
              <h6 class="text-dark my-0 ms-3">Reviewed: <span class="text-muted">Feb 09, 2021</span></h6>
            </div>
          </div>
          <carousel :per-page="1" :mouse-drag="false" :speed="1000" :loop="true" :autoplayTimeout="3000" :autoplayDirection="'backward'" :paginationEnabled="false" :autoplay="true">
            <slide v-for="(item, indexsss) in 10" v-bind:key="'SSS'+indexsss">
              <div class="my-3 review-detail">
                <h4 class="text-muted">
                  "asdfdsaf df dsaf dsaf sadf a sdsdfsadf"
                </h4>
                <h5 class="reviews">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="text-dark"> 2 / 5 </span>
                </h5>
                <div class="review-description">

                  Although Covid-19 stopped us actually having our dream holiday,
                  BST Tours were fantastic in helping us plan, change and organise
                  our dream trip. Staff were helpful,responded quickly to emails
                  and questions, thought of things we hadn’t...

                </div>
              </div>
            </slide>
          </carousel>
          <button class="btn btn-danger">Write A Review</button>
        </div>
        <div class="card p-4 mb-3 gallery" v-if="popularTours != null">
          <h3 class="fw-bold">Gallery</h3>
          <carousel :per-page="1" :mouse-drag="false" :speed="1000" :loop="true" :autoplayTimeout="3000" :autoplayDirection="'backward'" :paginationEnabled="false" :autoplay="true">
            <slide v-for="(item, index8) in popularTours.gallery" v-bind:key="'G23'+index8">
              <div class="bg-image" :style="{'background-image': 'url(' + item + ')'}"></div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import {
  TabPlugin
} from '@syncfusion/ej2-vue-navigations';

Vue.use(TabPlugin);
import {
  mapState,
  mapGetters,
  mapMutations
} from "vuex";

export default {
  name: "TourPackage",
  components: {

  },
  computed: {
    package_id: function () {
      var id = this.$route.params.id;
      return id.slice(0, id.length);
    },
    ...mapGetters({
      popularTours: "tourController/packageData",
    }),
  },
  data() {
    return {

    };
  },
  created() {
    this.getPacakgeById(this.package_id);
  },
  mounted() {

  },
  methods: {
    getPacakgeById(package_id) {
      this.$store.dispatch("tourController/getTourById", package_id)
        .then(() => {
          console.log('tag', this.popularTours)
        })

    }
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
  font-family: 'Gentium Basic', serif;
  text-shadow: 1px 1px 5px #000;
  z-index: 3;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0.9) 100%);
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

@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-vue-buttons/styles/material.css";
/* @import "@syncfusion/ej2-vue-popups/styles/material.css"; */
@import "@syncfusion/ej2-vue-navigations/styles/material.css";
</style>
