<template>
<div class="tour-operator-page">
    <div class="container">
        <div class="card p-4">
            <div v-if="loading">
                <content-placeholders-heading />
            </div>
            <h3 class="fw-bold mb-2" v-else-if="operatorData != null">{{ operatorData.company_name }}</h3>
            <h6 class="mt-2 mb-0" v-if="operatorData != null">
                <strong>Reviews:</strong>
                <CustomStarRating :rating="operatorData.avg_review"></CustomStarRating>
                <span>{{ operatorData.avg_review }}/5 ({{
              operatorData.sum_review
            }}
                    Reviews)</span>
            </h6>
            <h6 class="mt-2 mb-0">
                <strong>Tour Type:</strong>
                <span></span>
            </h6>
            <h6 class="mt-2 mb-0">
                <strong>Address:</strong>
                <span></span>
            </h6>
            <h6 class="mt-2 mb-0">
                <strong>Office Location:</strong>
                <span></span>
            </h6>
            <h6 class="mt-2 mb-0">
                <strong>Contact Person:</strong>
                <span></span>
            </h6>
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
                        <div v-if="loading">
                            <content-placeholders-heading />
                        </div>
                        <h6 class="mt-2" v-else-if="operatorData != null" style="color: darkslategrey">
                            {{ operatorData.brief }}
                        </h6>
                        <h6 class="fw-bold mb-0 mt-3">Company Description</h6>
                        <h6 class="mt-2" v-if="operatorData != null" v-html="operatorData.description" style="color: darkslategrey">
                        </h6>
                        <!-- <hr /> -->
                        <h6 class="fw-bold mb-0 mt-3">Company License and Certificate</h6>
                        <div class="row g-0 mt-5 logo-certificate">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="text-center">
                                    <h6>License</h6>
                                    <img :src="operatorData.logo" class="logo" />
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-6 col-sm-12">
                                <div class="text-center">
                                    <h6>Certificate</h6>
                                    <img :src="operatorData.banner" class="certificate" />
                                </div>
                            </div>
                        </div>
                        <!-- <div class="row g-0 align-items-center">
              <div v-if="loading" class="col-lg-4 col-md-6 col-sm-12">
                <TourCardSkelecton></TourCardSkelecton>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12" v-else-if="operatorData.package.length != 0">
                <TourCardOperator :tourData="operatorData.package[0]" :company_name="operatorData.company_name" :avg_review="operatorData.avg_review" :sum_review="operatorData.sum_review" :tag="operatorData.tag"></TourCardOperator>
              </div>
              <div class="col-lg-8 col-md-6 col-sm-12">
                <h4 class="fw-bold mb-0 mt-3 ps-3">Customer Reviews</h4>
                <div v-if="loading" class="mt-5">
                  <content-placeholders-heading />
                  <content-placeholders-heading />
                  <content-placeholders-heading />
                  <content-placeholders-heading />
                  <content-placeholders-heading />
                </div>
                <div class="text-center px-2" v-else-if="operatorData != null && operatorData.review.length > 0">
                  <div class="review-section mt-3 p-3" v-for="(review, index) in operatorData.review.slice(0, 1)" v-bind:key="'review' + index">
                    <h5>{{ review.full_name }}</h5>
                    <h6>
                      <strong>{{ review.title }}
                        <br />
                      </strong>
                    </h6>
                    <h6 class="text-start" style="color: darkslategrey">
                      <strong>
                        <span class="fa fa-quote-left ms-2"></span></strong>
                      {{ review.description }}
                    </h6>
                  </div>
                </div>
                <h5 v-else-if="operatorData.review.length == 0" class="text-center my-3 fst-italic">There is no review yet. Be the first person who write a review.</h5>

                <div class="text-center">
                  <button type="button" class="btn btn-danger mt-3" data-bs-toggle="modal" data-bs-target="#writeareview">
                    Write A Review
                  </button>
                </div>

                <div class="modal fade" id="writeareview" tabindex="-1" aria-labelledby="reviewLavel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                    <form class="modal-content" @submit.prevent="submitReview">
                      <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="reviewLavel">
                          Write a Review
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body text-start">
                        <div class="row align-items-center">
                          <div class="col-sm-12">
                            <ejs-textbox v-model="name" floatLabelType="Auto" type="text" placeholder="Name" required></ejs-textbox>
                          </div>
                          <div class="col-sm-12 mt-3">
                            <ejs-textbox v-model="email" floatLabelType="Auto" type="email" placeholder="Email" required></ejs-textbox>
                          </div>
                          <div class="col-sm-12 mt-3">
                            <ejs-textbox v-model="title" floatLabelType="Auto" type="text" placeholder="Title" required></ejs-textbox>
                          </div>
                          <div class="col-sm-12 mt-5">
                            <h5 class="fw-bold">Rate:</h5>
                          </div>
                          <div class="col-sm-12 mt-3">
                            <star-rating :show-rating="false" v-model="rating" active-color="#f93154"></star-rating>
                          </div>
                          <div class="col-sm-12 mt-5">
                            <ejs-textbox :multiline="true" v-model="review" floatLabelType="Auto" placeholder="Write a review" required></ejs-textbox>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" ref="closeButton" class="btn btn-light" data-bs-dismiss="modal">
                          Close
                        </button>
                        <button type="submit" class="btn btn-danger">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> -->
                    </div>
                    <div>
                        <div v-if="loading"></div>
                        <div class="row g-0 mt-3" v-else-if="operatorData != null && operatorData.package.length > 0">
                            <div class="col-lg-4 col-md-6 col-sm-12" v-for="(item, index) in operatorData.package" v-bind:key="'package' + index">
                                <TourCardOperator :tourData="item" :company_name="operatorData.company_name" :avg_review="operatorData.avg_review" :sum_review="operatorData.sum_review" :tag="operatorData.tag"></TourCardOperator>
                            </div>
                        </div>
                        <h5 v-else-if="operatorData.package.length == 0" class="text-center my-3 fst-italic">There is no package yet.</h5>
                    </div>
                    <div>
                        <div v-if="loading"></div>
                        <div v-else-if="operatorData != null && operatorData.review.length > 0">
                            <h3 class="fw-bold mb-0 mt-3">Reviews</h3>
                            <div class="text-center">
                                <button type="button" class="btn btn-danger my-3" data-bs-toggle="modal" data-bs-target="#writeareview2">
                                    Write A Review
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="writeareview2" tabindex="-1" aria-labelledby="reviewLavel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                                        <form class="modal-content" @submit.prevent="submitReview">
                                            <div class="modal-header bg-danger text-white">
                                                <h5 class="modal-title" id="reviewLavel">
                                                    Write a Review
                                                </h5>
                                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body text-start">
                                                <div class="row align-items-center">
                                                    <div class="col-sm-12">
                                                        <ejs-textbox v-model="name" floatLabelType="Auto" type="text" placeholder="Name" required></ejs-textbox>
                                                    </div>
                                                    <div class="col-sm-12 mt-3">
                                                        <ejs-textbox v-model="email" floatLabelType="Auto" type="email" placeholder="Email" required></ejs-textbox>
                                                    </div>
                                                    <div class="col-sm-12 mt-3">
                                                        <ejs-textbox v-model="title" floatLabelType="Auto" type="text" placeholder="Title" required></ejs-textbox>
                                                    </div>
                                                    <div class="col-sm-12 mt-5">
                                                        <h5 class="fw-bold">Rate:</h5>
                                                    </div>
                                                    <div class="col-sm-12 mt-3">
                                                        <star-rating :show-rating="false" v-model="rating" active-color="#f93154"></star-rating>
                                                    </div>
                                                    <div class="col-sm-12 mt-5">
                                                        <ejs-textbox :multiline="true" v-model="review" floatLabelType="Auto" placeholder="Write a review" required></ejs-textbox>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-light" ref="closeButton" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button type="submit" class="btn btn-danger">
                                                    Send
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div class="review-section mt-3 p-3" v-for="(review, index) in current_page_reviews" v-bind:key="'r' + index">
                                <h4 class="fw-bold">{{ review.title }}</h4>
                                <h5>
                                    <span class="text-muted fa fa-user align-middle me-3" style="font-size: 45px"></span>
                                    <span class="align-middle">{{ review.full_name }}</span>
                                </h5>
                                <h6 class="reviews">
                                    <CustomStarRating :rating="review.rate"></CustomStarRating>
                                    <span v-if="review.rate == '5'" class="text-danger">
                                        &nbsp;5.0 / 5
                                    </span>
                                    <span v-else class="text-danger">
                                        &nbsp;{{ review.rate }} / 5
                                    </span>
                                </h6>
                                <div class="review-content">
                                    <read-more more-str="Read more" :text="review.description" less-str="Read less" :max-chars="200"></read-more>
                                </div>
                            </div>
                            <div class="review-pagination">
                                <Pagination v-model="current_review_page" :records="operatorData.review.length" :per-page="reviews_per_page" :options="pagenation_options" />
                            </div>
                        </div>
                        <div v-else-if="operatorData.review.length == 0">
                            <h5 class="text-center my-3 fst-italic">There is no review yet. Be the first person who write a review.</h5>

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

import {
    TabPlugin
} from "@syncfusion/ej2-vue-navigations";

Vue.use(TabPlugin);

import {
    TextBoxPlugin
} from "@syncfusion/ej2-vue-inputs";

Vue.use(TextBoxPlugin);
import TourCardSkelecton from "../components/TourCardSkelecton";
import TourCardOperator from "../components/TourCardOperator";
import StarRating from "vue-star-rating";
import {
    mapState,
    mapGetters,
    mapMutations
} from "vuex";
import CustomStarRating from "../components/CustomStarRating";
import Pagination from "vue-pagination-2";

export default {
    name: "TourOperator",
    components: {
        TourCardOperator,
        StarRating,
        CustomStarRating,
        Pagination,
        TourCardSkelecton,
    },
    data() {
        return {
            current_review_page: 1,
            reviews_per_page: 5,
            current_page_reviews: [],
            pagenation_options: {
                chunk: 5,
            },
            name: '',
            email: '',
            title: '',
            rating: 5,
            review: '',
        };
    },
    computed: {
        operator_id: function () {
            var id = this.$route.params.id;
            return id.slice(0, id.length);
        },
        ...mapGetters({
            operatorData: "operatorController/operatorData",
            loading: "tourcard_loading",
            request_status: "request_status",
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
                    console.log('tag', this.operatorData)
                    let page_title = this.operatorData.company_name
                    document.title = page_title;
                });
        },

        getCurrentPageReviews(page_num) {
            this.current_page_reviews = [];
            let index = 0;
            for (
                let i = (page_num - 1) * this.reviews_per_page; i < page_num * this.reviews_per_page; i++
            ) {
                if (this.operatorData.review[i] != undefined) {
                    this.current_page_reviews[index] = this.operatorData.review[i];
                    index++;
                }
            }
        },

        submitReview() {
            let params = {};

            params = {
                'name': this.name,
                'email': this.email,
                'title': this.title,
                'review': this.review,
                'rate': this.rating,
                'operator_id': this.operatorData.user_id
            };

            this.$store
                .dispatch("operatorController/postReview", params)
                .then(() => {
                    if (this.request_status == true) {
                        // this.$notify({
                        //   group: 'success',
                        //   title: 'Review Success',
                        //   text: 'Thank you! We have received your review. We will publish your review soon.'
                        // });

                        this.name = ''
                        this.email = ''
                        this.title = ''
                        this.review = ''
                        this.rating = 5

                        this.$router.push('/thankyou-review')
                    } else {
                        this.$notify({
                            group: 'warning',
                            title: 'Submit Error !',
                            text: 'Sorry, Something went wrong...'
                        });

                        this.name = ''
                        this.email = ''
                        this.title = ''
                        this.review = ''
                        this.rating = 5
                    }
                    const elem = this.$refs.closeButton
                    elem.click()
                })
                .catch(() => {
                    this.$notify({
                        group: 'warning',
                        title: 'Submit Error !',
                        text: 'Sorry, Something went wrong...'
                    });

                    this.name = ''
                    this.email = ''
                    this.title = ''
                    this.review = ''
                    this.rating = 5
                });
        }
    },
};
</script>

<style>
.tour-operator-page {
    background-color: #f2f2f2;
    padding-top: 120px;
    padding-bottom: 100px;
}

.review-section {
    background-color: #f5f5f5;
}

.review-content p,
.review-content span {
    font-size: 15px;
}

.review-pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.tour-operator-page .e-multi-line-input textarea {
    height: 150px;
}

.logo-certificate .logo {
    width: 150px;
    margin: auto;
}

.logo-certificate .certificate {
    width: 300px;
    margin: auto;
}

@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-vue-buttons/styles/material.css";
@import "@syncfusion/ej2-vue-navigations/styles/material.css";
@import "@syncfusion/ej2-vue-popups/styles/material.css";
@import "@syncfusion/ej2-vue-inputs/styles/material.css";
</style>
