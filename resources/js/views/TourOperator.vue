<template>
<div class="tour-operator-page">
  <div class="container">
    <div class="card p-4">
      <h3 class="fw-bold mb-0">Serengeti Luxury Safari</h3>
      <p class="mt-2">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span>5.0 (177 Reviews)</span>
      </p>
      <h6 class="mb-0">Learn More about this company</h6>
    </div>
    <div class="card mt-4 p-4">
      <ejs-tab id='element'>
        <div class="e-tab-header">
          <div>Overview</div>
          <div>Safari & Tours</div>
          <div>Reviews</div>
        </div>
        <div class="e-content">
          <div>
            <h3 class="fw-bold mb-0 mt-3">Overview</h3>
            <h6 class="mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nobis numquam veniam nam delectus similique qui illum quisquam animi tempore ad fugit ex, totam voluptates sequi? Neque quaerat sed voluptatem. Aliquam itaque provident sit maiores asperiores cumque ea mollitia perferendis aspernatur, nemo ex. Natus corporis debitis cupiditate accusamus repellendus sunt molestias! Quos ab, dolor repellat sapiente tempora recusandae veniam veritatis! Modi, ex? Perspiciatis at velit quia eos provident maxime alias voluptas animi labore in aspernatur quasi mollitia, ut vero, repellendus id voluptatum eveniet repellat harum! Maxime quis error iusto consequuntur.
            </h6>
            <hr>
            <div class="row g-0 align-items-center">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <TourCard :tourData="top_view"></TourCard>
              </div>
              <div class="col-lg-8 col-md-6 col-sm-12">
                <h4 class="fw-bold mb-0 mt-3 ps-3">Customer Reviews</h4>
                <div class="text-center px-2">
                  <div class="review-section mt-3 p-3" v-for="(item, index) in 2" v-bind:key="index">
                    <h5>Alexey Gerbovoy</h5>
                    <h6>
                      <strong>Great experience with Serengeti Luxury Safari<br> <span class="fa fa-quote-left ms-2"></span></strong>
                      It's budget tour, but it's good. They're good person. I highly recommend this company.
                    </h6>
                  </div>
                  <button type="button" class="btn btn-danger mt-3" data-bs-toggle="modal" data-bs-target="#writeareview">Write A Review</button>

                  <!-- Modal -->
                  <div class="modal fade" id="writeareview" tabindex="-1" aria-labelledby="reviewLavel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                      <div class="modal-content">
                        <div class="modal-header bg-danger text-white">
                          <h5 class="modal-title" id="reviewLavel">Write a Review</h5>
                          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start">
                          <div class="row align-items-center">
                            <div class="col-sm-12">
                              <ejs-textbox floatLabelType="Auto" type="text" placeholder="Name" required></ejs-textbox>
                            </div>
                            <div class="col-sm-12  mt-3">
                              <ejs-textbox floatLabelType="Auto" type="text" placeholder="Email" required></ejs-textbox>
                            </div>
                            <div class="col-sm-12  mt-3">
                              <ejs-textbox floatLabelType="Auto" type="text" placeholder="Title" required></ejs-textbox>
                            </div>
                            <div class="col-sm-12  mt-5">
                              <h5 class="fw-bold">Rate:</h5>
                            </div>
                            <div class="col-sm-12  mt-3">
                              <star-rating :rating="5" :show-rating="false" active-color="#f93154"></star-rating>
                            </div>
                            <div class="col-sm-12  mt-5">
                              <ejs-textbox :multiline="true" floatLabelType="Auto" placeholder="Write a review" required></ejs-textbox>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-danger">Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="row g-0 mt-3">
              <div class="col-lg-4 col-md-6 col-sm-12" v-for="(item, index) in popular" v-bind:key="index">
                <TourCard :tourData="item"></TourCard>
              </div>
            </div>
          </div>
          <div>
            <h3 class="fw-bold mb-0 mt-3">Reviews</h3>
            <div class="review-section mt-3 p-3" v-for="(item, index) in 5" v-bind:key="index">
              <h4>Alexey Gerbovoy</h4>
              <h5>
                <strong>Great experience with Serengeti Luxury Safari <span class="fa fa-quote-left ms-2"></span></strong>
                It's budget tour, but it's good. They're good person. I highly recommend this company.
              </h5>
            </div>
          </div>
        </div>
      </ejs-tab>
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
  TextBoxPlugin
} from '@syncfusion/ej2-vue-inputs';

Vue.use(TextBoxPlugin);

import TourCard from "../components/TourCard";
import StarRating from 'vue-star-rating'

export default {
  name: "TourOperator",
  components: {
    TourCard,
    StarRating,
  },
  data() {
    return {
      popular: [{},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
      top_view: {},
    };
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

.tour-operator-page .e-multi-line-input textarea {
  height: 150px;
}

@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-vue-buttons/styles/material.css";
@import "@syncfusion/ej2-vue-navigations/styles/material.css";
@import "@syncfusion/ej2-vue-popups/styles/material.css";
@import "@syncfusion/ej2-vue-inputs/styles/material.css";
</style>
