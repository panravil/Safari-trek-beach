<template>
  <div class="package-inner-page">
    <div class="container mt-5">
      <div class="card mb-3">
        <div class="row g-0 package-inner-banner">
          <div class="col-lg-8 col-md-12">
            <div
              class="package-inner-image"
              :style="[
                packageData != null && !loading
                  ? {
                      'background-image': 'url(' + packageData.image_url + ')',
                    }
                  : { background: '#FFF' },
              ]"
            ></div>
          </div>
          <div
            class="col-lg-4 col-md-12 p-2 position-relative package-inner-title"
          >
            <div class="card-body">
              <h5 v-if="loading"  class="card-title mb-3">
                <content-placeholders-heading />
              </h5>
              <h5
                class="card-title fw-bold mb-3 text-capitalize"
                v-else-if="packageData != null"
              >
                {{ packageData.no_of_day }}-Day {{ packageData.title }}
              </h5>
              <h6 class="card-title" v-if="loading">
                <content-placeholders-text :lines="1"/>
              </h6>
              <h6 class="card-title" v-else-if="packageData.additional_info.cancellation != ''">
                <span class="fa fa-location-arrow mx-2"></span>Free Cancellation Up
                to {{ packageData.additional_info.cancellation }}
              </h6>

              <h6 class="card-title" v-if="loading">
                <content-placeholders-text :lines="1"/>
              </h6>
              <h6 class="card-title" v-else-if="packageData.additional_info.advance_payment != ''">
                <span class="fa fa-location-arrow mx-2"></span> Only {{ packageData.additional_info.advance_payment }} Advance
                Payment
              </h6>

              <h6 class="card-title" v-if="loading">
                <content-placeholders-text :lines="1"/>
              </h6>
              <h6 class="card-title" v-else-if="packageData.customizable == 1">
                <span class="fa fa-location-arrow mx-2"></span> Can be
                customized
              </h6>
              <h6 class="card-title" v-else-if="packageData.customizable == 0">
                <span class="fa fa-location-arrow mx-2"></span> Can't be
                customized
              </h6>

              <h6 class="card-title" v-if="loading">
                <content-placeholders-text :lines="1"/>
              </h6>
              <h6 class="card-title" v-else-if="packageData.additional_info.departure == 'yes'">
                <span class="fa fa-location-arrow mx-2"></span> Guaranteed
                Departure
              </h6>
              <h6 class="card-title" v-else-if="packageData.additional_info.departure == 'no'">
                <span class="fa fa-location-arrow mx-2"></span>Non Guaranteed
                Departure
              </h6>

              <h6 class="card-title" v-if="loading">
                <content-placeholders-text :lines="1"/>
              </h6>
              <h6 class="card-title" v-else-if="packageData.additional_info.arrival_visa == 'yes'">
                <span class="fa fa-location-arrow mx-2"></span> Get Visa On
                Arrival (Available)
              </h6>
              <h6 class="card-title" v-else-if="packageData.additional_info.arrival_visa == 'no'">
                <span class="fa fa-location-arrow mx-2"></span> Get Visa On
                Arrival (Unavailable)
              </h6>

            </div>
            <div class="price-rate p-3">
              <div v-if="loading" class="p-3">
                <content-placeholders-text :lines="3" />
              </div>
              <div class="p-3" v-else>
                <h4
                  class="fw-bold text-success my-2"
                  :title="packageData.rate.child_currency + ' USD per Child'"
                >
                  {{ packageData.rate.adult_currency | currency}}
                  <small class="text-dark">USD</small>
                </h4>
                <p class="mt-2 mb-0" v-if="packageData != null">
                  <CustomStarRating
                    :rating="packageData.avg_review"
                  ></CustomStarRating>
                  <strong v-if="packageData.avg_review == '5'"
                    >&nbsp;5.0/5</strong
                  >
                  <strong v-else-if="packageData.avg_review == '4'"
                    >&nbsp;4.0/5</strong
                  >
                  <strong v-else-if="packageData.avg_review == '3'"
                    >&nbsp;3.0/5</strong
                  >
                  <strong v-else-if="packageData.avg_review == '2'"
                    >&nbsp;2.0/5</strong
                  >
                  <strong v-else-if="packageData.avg_review == '1'"
                    >&nbsp;1.0/5</strong
                  >
                  <strong v-else>&nbsp;{{ packageData.avg_review }}/5</strong>
                  <span>({{ packageData.num_review }} Reviews)</span>
                </p>
                <button class="btn btn-danger mobile mt-2" @click="getQuoteNow">
                  Get Free Quote Now
                  <span class="fa fa-angle-right ms-2"></span>
                </button>
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
                  <div class="p-3">
                    <h3 class="fw-bold">Overview</h3>
                    <div v-if="loading">
                      <content-placeholders-heading />
                      <content-placeholders-heading />
                    </div>
                    <div
                      v-else-if="packageData != null"
                      class="overview-description"
                      v-html="packageData.description"
                    >
                    </div>
                    <div class="d-flex mt-5">
                      <h4 class="fw-bold text-danger flex-shrink-0">
                        <span class="fa fa-arrow-circle-right"></span>
                        <span>Tour Summary</span>
                      </h4>
                      <div class="w-100 horizontal-grayline"></div>
                    </div>
                    <!-- <h6 class="my-1" v-if="packageData != null">
                                        Tour Start from
                                        <strong>{{ packageData.getting_there.start_city }}</strong>
                                    </h6> -->
                    <div v-if="packageData != null">
                      <div
                        class="routine ms-2"
                        v-for="(item, index1) in packageData.day"
                        v-bind:key="index1"
                      >
                        <h6 class="fw-bold mt-4">Day {{ index1 }}</h6>
                        <div class="routine-detail ms-3">
                          <div
                            class="my-2 d-flex"
                            v-if="
                              item.destination != null && item.destination != ''
                            "
                          >
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✓</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Destination:
                                <strong>{{ item.destination }}</strong>
                              </h6>
                            </div>
                          </div>
                          <div class="my-2 d-flex" v-else>
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✗</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Destination:
                                <strong> Excluded</strong>
                              </h6>
                            </div>
                          </div>
                          <div
                            class="my-2 d-flex"
                            v-if="
                              item.accom_name != null && item.accom_name != ''
                            "
                          >
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✓</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Accomodation:
                                <strong>{{ item.accom_name }}</strong>
                              </h6>
                            </div>
                          </div>
                          <div class="my-2 d-flex" v-else>
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✗</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Accomodation:
                                <strong> Excluded</strong>
                              </h6>
                            </div>
                          </div>
                          <div
                            class="my-2 d-flex"
                            v-if="
                              item.accom_location != null &&
                              item.accom_location != ''
                            "
                          >
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✓</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Location:
                                <strong>{{ item.accom_location }}</strong>
                              </h6>
                            </div>
                          </div>
                          <!-- <div class="my-2 d-flex" v-else>
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✗</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Location:
                                <strong> Excluded</strong>
                              </h6>
                            </div>
                          </div> -->
                          <div
                            class="my-2 d-flex"
                            v-if="
                              item.accom_level != null && item.accom_level != ''
                            "
                          >
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✓</h6>
                            </div>

                            <div>
                              <h6 class="my-0">
                                Comfort:
                                <strong>{{ item.accom_level }}</strong>
                              </h6>
                            </div>
                          </div>
                          <!-- <div class="my-2 d-flex" v-else>
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✗</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Comfort:
                                <strong> Excluded</strong>
                              </h6>
                            </div>
                          </div> -->
                          <div
                            class="my-2 d-flex"
                            v-if="
                              item.accom_type != null &&
                              item.accom_type != '' &&
                              item.accom_type != 'null'
                            "
                          >
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✓</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Type:
                                <strong>{{ item.accom_type }}</strong>
                              </h6>
                            </div>
                          </div>
                          <!-- <div class="my-2 d-flex" v-else>
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✗</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Type:
                                <strong> Excluded</strong>
                              </h6>
                            </div>
                          </div> -->
                          <div
                            class="my-2 d-flex"
                            v-if="
                              packageData.day_meal[index1].includes(
                                'Breakfast'
                              ) > -1
                            "
                          >
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✓</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Breakfast:
                                <strong> Included</strong>
                              </h6>
                            </div>
                          </div>
                          <div class="my-2 d-flex" v-else>
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✗</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Breakfast:
                                <strong> Excluded</strong>
                              </h6>
                            </div>
                          </div>

                          <div
                            class="my-2 d-flex"
                            v-if="
                              packageData.day_meal[index1].includes('Lunch') >
                              -1
                            "
                          >
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✓</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Lunch:
                                <strong> Included</strong>
                              </h6>
                            </div>
                          </div>
                          <div class="my-2 d-flex" v-else>
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✗</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Lunch:
                                <strong> Excluded</strong>
                              </h6>
                            </div>
                          </div>

                          <div
                            class="my-2 d-flex"
                            v-if="
                              packageData.day_meal[index1].includes('Diner') >
                              -1
                            "
                          >
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✓</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Dinner:
                                <strong> Included</strong>
                              </h6>
                            </div>
                          </div>
                          <div class="my-2 d-flex" v-else>
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✗</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Dinner:
                                <strong> Excluded</strong>
                              </h6>
                            </div>
                          </div>

                          <div
                            class="my-2 d-flex"
                            v-if="
                              packageData.day_meal[index1].includes(
                                'Drinking water'
                              ) > -1 ||
                              packageData.day_meal[index1].includes(
                                'Non-alcoholic drinks'
                              ) > -1 ||
                              packageData.day_meal[index1].includes(
                                'Beer and wine'
                              ) > -1 ||
                              packageData.day_meal[index1].includes(
                                'Spirits/liquor'
                              ) > -1
                            "
                          >
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✓</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Drinks:
                                <strong>Included</strong>
                                <!-- <span
                                  v-for="(drink, index) in packageData.day_meal[
                                    index1
                                  ]"
                                  v-bind:key="index + 'drink'"
                                >
                                  <strong>{{ drink }}, </strong>
                                </span> -->
                              </h6>
                            </div>
                          </div>
                          <div class="my-2 d-flex" v-else>
                            <div style="min-width: 20px">
                              <h6 class="my-0 me-2">✗</h6>
                            </div>
                            <div>
                              <h6 class="my-0">
                                Drinks:
                                <strong> Excluded</strong>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mobile" v-if="packageData != null">

                      <div class="d-flex mt-5">
                        <h4 class="fw-bold text-danger flex-shrink-0">
                          <span class="fa fa-arrow-circle-right"></span>
                          <span>Rates Per Person</span>
                        </h4>
                        <div class="w-100 horizontal-grayline"></div>
                      </div>
                      <!-- <h6 class="my-1" v-if="packageData != null">
                                          Tour Start from
                                          <strong>{{ packageData.getting_there.start_city }}</strong>
                                      </h6> -->
                      <div v-if="packageData != null && packageData.adult_currency_rate != undefined " class="table-responsive">
                        <table class="table text-center table-striped table-bordered align-middle">
                          <thead>
                            <tr>
                              <th scope="col">Start Dates</th>
                              <th v-for="(item, index) in packageData.adult_currency_rate.adult_currency_autumn" v-bind:key="index + 'rate header'" scope="col">{{ index + 1 }} Person</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- winter -->
                            <tr>
                              <th scope="row">Dec 1 - Feb 28</th>
                              <td v-for="(item, index) in packageData.adult_currency_rate.adult_currency_winter" v-bind:key="index + 'rate ff'">{{ item | currency }}</td>
                              <td class="text-primary" style="cursor: pointer;" @click="getQuoteNow">Get Quote</td>
                            </tr>    
                            
                            <!-- spring -->
                            <tr>
                              <th scope="row">Mar 1 - May 31</th>
                              <td v-for="(item, index) in packageData.adult_currency_rate.adult_currency_spring" v-bind:key="index + 'rate w'">{{ item | currency }}</td>
                              <td class="text-primary" style="cursor: pointer;" @click="getQuoteNow">Get Quote</td>
                            </tr>

                            <!-- summer -->
                            <tr>
                              <th scope="row">Jun 1 - Aug 31</th>
                              <td v-for="(item, index) in packageData.adult_currency_rate.adult_currency_summer" v-bind:key="index + 'rate s'">{{ item | currency }}</td>
                              <td class="text-primary" style="cursor: pointer;" @click="getQuoteNow">Get Quote</td>
                            </tr>

                            <!-- autumn -->
                            <tr>
                              <th scope="row">Sep 1 - Nov 30</th>
                              <td v-for="(item, index) in packageData.adult_currency_rate.adult_currency_autumn" v-bind:key="index + 'rate ss'">{{ item | currency }}</td>
                              <td class="text-primary" style="cursor: pointer;" @click="getQuoteNow">Get Quote</td>
                            </tr>
                          </tbody>
                        </table>
                        <div>* All Park Fees or Tickets cost are included in the cost.</div>
                        <div v-if="packageData.additional_info.arrival_visa == 'yes'">
                          * We Do accept Credit Card Payments. 
                        </div>
                        <div v-else-if="packageData.additional_info.arrival_visa == 'no'">
                          * We Do not accept Credit Card Payments. 
                        </div>
                      </div>

                    </div>

                    <div class="d-flex mt-5">
                      <h4 class="fw-bold text-danger flex-shrink-0">
                        <span class="fa fa-arrow-circle-right"></span>
                        <span>Inclusive</span>
                      </h4>
                      <div class="w-100 horizontal-grayline"></div>
                    </div>
                    <div class="row g-0">
                      <div
                        class="col-md-6 col-sm-12"
                        v-if="packageData != null"
                      >
                        <h6 class="fw-bold ms-2">Inclusion</h6>
                        <div
                          class="ms-2 d-flex"
                          v-for="(item, index2) in packageData.inclusion
                            .included"
                          v-bind:key="'A' + index2"
                        >
                          <div style="min-width: 20px">
                            <h6>
                              <span class="fa fa-check me-3 text-danger"></span>
                            </h6>
                          </div>
                          <div>
                            <h6>
                              <span class="exclusion-inclusion">{{
                                item
                              }}</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-md-6 col-sm-12"
                        v-if="packageData != null"
                      >
                        <h6 class="fw-bold ms-2">Exclusion</h6>
                        <div
                          class="ms-2 d-flex"
                          v-for="(item, index3) in packageData.inclusion
                            .excluded"
                          v-bind:key="'B' + index3"
                        >
                          <div style="min-width: 20px">
                            <h6>
                              <span class="fa fa-times me-3 text-danger"></span>
                            </h6>
                          </div>
                          <div>
                            <h6>
                              <span class="exclusion-inclusion">{{
                                item
                              }}</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-5">
                      <h4 class="fw-bold text-danger flex-shrink-0">
                        <span class="fa fa-arrow-circle-right"></span>
                        <span>Activities & Transpotation</span>
                      </h4>
                      <div class="w-100 horizontal-grayline"></div>
                    </div>
                    <div class="ms-2 d-flex" v-if="packageData != null">
                      <div style="min-width: 20px">
                      <h6>
                        <span class="fa fa-check me-3 text-danger"></span>
                        </h6>
                      </div>
                      <div>
                        <h6 class="exclusion-inclusion">
                          Activitiy:
                          <strong>
                            {{ packageData.tour_focus }}
                          </strong>
                        </h6>
                      </div>
                    </div>
                    <div class="ms-2 d-flex" v-if="packageData != null">
                      <div style="min-width: 20px">
                      <h6>
                        <span class="fa fa-check me-3 text-danger"></span>
                        </h6>
                      </div>
                      <div>
                        <h6 class="exclusion-inclusion">
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
                        </h6>
                      </div>
                    </div>
                    <div class="d-flex mt-5">
                      <h4 class="fw-bold text-danger flex-shrink-0">
                        <span class="fa fa-arrow-circle-right"></span>
                        <span>Location & Getting There</span>
                      </h4>
                      <div class="w-100 horizontal-grayline"></div>
                    </div>
                    <div class="ms-2 d-flex" v-if="packageData != null">
                      <div style="min-width: 20px">
                      <h6>
                        <span class="fa fa-check me-3 text-danger"></span>
                        </h6>
                      </div>
                      <div>
                        <h6 class="exclusion-inclusion">
                          The Tour Starts in:
                          <strong>
                            {{ packageData.getting_there.start_city }}</strong
                          >
                        </h6>
                      </div>
                    </div>
                    <div v-if="packageData != null">
                      <div
                        class="ms-2 d-flex"
                        v-if="
                          packageData.getting_there.airport_transfer == 'yes'
                        "
                      >
                        <div style="min-width: 20px">
                      <h6>
                          <span class="fa fa-check me-3 text-danger"></span>
                      </h6>
                        </div>
                        <div>
                          <h6 class="exclusion-inclusion">
                            Airport transfer are included
                          </h6>
                        </div>
                      </div>
                    </div>
                    <!-- <h5 class="ms-2">
                    <span class="fa fa-check me-3 text-danger"></span>
                    <span class="exclusion-inclusion">Sleeping bag</span>
                  </h5> -->
                    <div class="ms-2 d-flex" v-if="packageData != null">
                      <div style="min-width: 20px">
                      <h6>
                        <span class="fa fa-check me-3 text-danger"></span>
                      </h6>
                      </div>
                      <div>
                        <h6 class="exclusion-inclusion">
                          The Tour Ends in:
                          <strong>{{
                            packageData.getting_there.end_city
                          }}</strong>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="p-3" v-if="packageData != null">
                    <h3 class="fw-bold">Itinerary</h3>
                    <div
                      class="itinery mt-5"
                      v-for="(item, index6) in packageData.day"
                      v-bind:key="'E' + index6"
                    >
                      <div
                        class="position-relative"
                        v-if="item.image_url != null"
                      >
                        <img
                          v-lazy="
                            'https://operators.safari-trek-beach.com' +
                            item.image_url
                          "
                          class="w-100"
                          style="min-height: 170px"
                        />
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
                        <div class="itinery-content" v-html="item.day_description">
                        </div>
                      </div>
                      <div class="d-flex align-items-start mt-3 mb-0">
                        <div style="min-width: 160px">
                          <h6 class="fw-bold">Accommodation:</h6>
                        </div>
                        <div>
                          <h6 v-if="item.accom_level != null && item.accom_level != 'null' && item.accom_type != null && item.accom_type != 'null'">
                            {{ item.accom_type }} ({{ item.accom_level }})
                          </h6>
                          <h6 v-else>Not Included</h6>
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
                    <h3 class="fw-bold">Reviews</h3>
                    <h5 class="mb-0">Traveler Rating</h5>
                    <h5 class="reviews mt-3">
                      <CustomStarRating
                        :rating="packageData.avg_review"
                      ></CustomStarRating>
                      <span
                        v-if="packageData.avg_review == '5'"
                        class="text-danger"
                      >
                        {{ packageData.avg_review }}.0 / 5
                      </span>
                      <span
                        v-else-if="packageData.avg_review == '4'"
                        class="text-danger"
                      >
                        {{ packageData.avg_review }}.0 / 5
                      </span>
                      <span
                        v-else-if="packageData.avg_review == '3'"
                        class="text-danger"
                      >
                        {{ packageData.avg_review }}.0 / 5
                      </span>
                      <span
                        v-else-if="packageData.avg_review == '2'"
                        class="text-danger"
                      >
                        {{ packageData.avg_review }}.0 / 5
                      </span>
                      <span
                        v-else-if="packageData.avg_review == '1'"
                        class="text-danger"
                      >
                        {{ packageData.avg_review }}.0 / 5
                      </span>
                      <span v-else class="text-danger">
                        {{ packageData.avg_review }} / 5
                      </span>

                      <span
                        class="text-muted"
                        v-if="packageData.num_review == '1'"
                        ><small
                          >({{ packageData.num_review }} Review)</small
                        ></span
                      >
                      <span class="text-muted" v-else
                        ><small
                          >({{ packageData.num_review }} Reviews)</small
                        ></span
                      >
                    </h5>
                    <div class="rating-wrap" v-bind:key="update_checklist">
                      <div
                        class="rating-item"
                        :style="[review_5 == 0 ? { color: 'gray' } : {}]"
                      >
                        <span class="rating-grade pe-2">
                          <ejs-checkbox
                            name="default"
                            v-model="excellent"
                            :disabled="review_5 == 0 ? true : false"
                            @change="reviewFilter"
                          ></ejs-checkbox>
                        </span>
                        <span class="rating-grade pe-3">Exellent</span>
                        <div class="rating-grade w-100">
                          <div class="progress">
                            <div
                              class="progress-bar bg-danger"
                              role="progressbar"
                              :style="{
                                width:
                                  (review_5 * 100) / packageData.num_review +
                                  '%',
                              }"
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <span class="rating-grade ps-3">{{ review_5 }}</span>
                      </div>

                      <div
                        class="rating-item"
                        :style="[review_4 == 0 ? { color: 'gray' } : {}]"
                      >
                        <span class="rating-grade pe-2">
                          <ejs-checkbox
                            name="default"
                            v-model="verygood"
                            :disabled="review_4 == 0 ? true : false"
                            @change="reviewFilter"
                          ></ejs-checkbox>
                        </span>
                        <span class="rating-grade pe-3">Very Good</span>
                        <div class="rating-grade w-100">
                          <div class="progress">
                            <div
                              class="progress-bar bg-danger"
                              role="progressbar"
                              :style="{
                                width:
                                  (review_4 * 100) / packageData.num_review +
                                  '%',
                              }"
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <span class="rating-grade ps-3">{{ review_4 }}</span>
                      </div>

                      <div
                        class="rating-item"
                        :style="[review_3 == 0 ? { color: 'gray' } : {}]"
                      >
                        <span class="rating-grade pe-2">
                          <ejs-checkbox
                            name="default"
                            v-model="average"
                            :disabled="review_3 == 0 ? true : false"
                            @change="reviewFilter"
                          ></ejs-checkbox>
                        </span>
                        <span class="rating-grade pe-3">Average</span>
                        <div class="rating-grade w-100">
                          <div class="progress">
                            <div
                              class="progress-bar bg-danger"
                              role="progressbar"
                              :style="{
                                width:
                                  (review_3 * 100) / packageData.num_review +
                                  '%',
                              }"
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <span class="rating-grade ps-3">{{ review_3 }}</span>
                      </div>

                      <div
                        class="rating-item"
                        :style="[review_2 == 0 ? { color: 'gray' } : {}]"
                      >
                        <span class="rating-grade pe-2">
                          <ejs-checkbox
                            name="default"
                            v-model="poor"
                            :disabled="review_2 == 0 ? true : false"
                            @change="reviewFilter"
                          ></ejs-checkbox>
                        </span>
                        <span class="rating-grade pe-3">Poor</span>
                        <div class="rating-grade w-100">
                          <div class="progress">
                            <div
                              class="progress-bar bg-danger"
                              role="progressbar"
                              :style="{
                                width:
                                  (review_2 * 100) / packageData.num_review +
                                  '%',
                              }"
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <span class="rating-grade ps-3">{{ review_2 }}</span>
                      </div>

                      <div
                        class="rating-item"
                        :style="[review_1 == 0 ? { color: 'gray' } : {}]"
                      >
                        <span class="rating-grade pe-2">
                          <ejs-checkbox
                            name="default"
                            v-model="terrible"
                            :disabled="review_1 == 0 ? true : false"
                            @change="reviewFilter"
                          ></ejs-checkbox>
                        </span>
                        <span class="rating-grade pe-3">Terrible</span>
                        <div class="rating-grade w-100">
                          <div class="progress">
                            <div
                              class="progress-bar bg-danger"
                              role="progressbar"
                              :style="{
                                width:
                                  (review_1 * 100) / packageData.num_review +
                                  '%',
                              }"
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <span class="rating-grade ps-3">{{ review_1 }}</span>
                      </div>
                    </div>
                    <hr />
                    <div
                      v-if="filtered_reviewList.length != 0"
                      v-bind:key="'Filter_review' + update_checklist"
                    >
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
                          <span v-if="item.rate == '5'" class="text-danger">
                            &nbsp;5.0 / 5
                          </span>
                          <span v-else class="text-danger">
                            &nbsp;{{ item.rate }} / 5
                          </span>
                        </h6>
                        <div class="d-flex align-items-center">
                          <div>
                            <span
                              class="text-muted fa fa-user"
                              style="font-size: 45px"
                            ></span>
                          </div>
                          <div>
                            <h4 class="fw-bold text-muted my-0 ms-3 text-capitalize">
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
                      <!-- <div class="review-pagination">
                        <Pagination
                          v-model="current_review_page"
                          :records="filtered_reviewList.length"
                          :per-page="reviews_per_page"
                          :options="pagenation_options"
                        />
                      </div> -->
                      <div class="review-pagination">
                        <paginate
                          v-model="current_review_page"
                          :page-count="total_page_number"
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
                    <h5 v-else class="text-center">No reviews to display...</h5>
                  </div>
                </div>
                <div>
                  <div class="p-3" v-if="packageData != null">
                    <h3 class="fw-bold">Photo Gallary</h3>
                    <viewer :images="packageData.gallery">
                      <div class="row g-0" v-if="packageData != null">
                        <div
                          class="col-lg-4 col-md-6 col-sm-12 p-2  gallery-viewer"
                          v-for="(item, index8) in packageData.gallery"
                          v-bind:key="'G' + index8"
                        >
                          <img v-lazy="item" style="width: 100%; height: auto" />
                        </div>
                      </div>
                    </viewer>
                  </div>
                </div>
              </div>
            </ejs-tab>

            <div class="mobile">
              <div class="d-flex mt-4">
                <h4 class="fw-bold flex-shrink-0 text-danger">
                  Interested in this Tour ?
                </h4>
                <div class="w-100 horizontal-grayline"></div>
              </div>
              <div>
                <button class="btn btn-danger ms-2 mb-3" @click="getQuoteNow">
                  Get a Free Quote <span class="fa fa-angle-right ms-2"></span>
                </button>
              </div>
              <div class="d-flex ms-3">
                <div style="min-width: 20px">
                  <span class="fa fa-angle-right"></span>
                </div>
                <div>The Quote is sent to the tour operator only.</div>
              </div>
              <div class="d-flex ms-3">
                <div style="min-width: 20px">
                  <span class="fa fa-angle-right"></span>
                </div>
                <div>
                  We recommend sent quote to 3 operators to get the best deal.
                </div>
              </div>
              <div class="d-flex ms-3">
                <div style="min-width: 20px">
                  <span class="fa fa-angle-right"></span>
                </div>
                <div>
                  Sending quote to 1 or 2 operator reduces your chance of
                  getting the best deal.
                </div>
              </div>
            </div>
          </div>
          <h4 class="fw-bold ms-2 mt-5">Disclaimer</h4>
          <div class="d-flex ms-3">
            <div style="min-width: 20px">
              <span class="fa fa-angle-right"></span>
            </div>
            <div>
              This tour is offered by
              <strong>{{ packageData.company_name }}</strong
              >, not Safari-Trek-Beach.
            </div>
          </div>
          <div class="d-flex ms-3">
            <div style="min-width: 20px">
              <span class="fa fa-angle-right"></span>
            </div>
            <div>
              This operator reserves the right to change rates advertised on
              Safari-Trek-Beach.
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
          <div class="d-flex ms-3">
            <div style="min-width: 20px">
              <span class="fa fa-angle-right"></span>
            </div>
            <div>
              The exact order, content and rate of this tour is subject to
              availability.
            </div>
          </div>
          <div class="d-flex ms-3">
            <div style="min-width: 20px">
              <span class="fa fa-angle-right"></span>
            </div>
            <div>
              The Tour Terms and Condition for are specified by
              <strong>{{ packageData.company_name }}</strong
              >, not Safari-Trek-Beach.
            </div>
          </div>
          <div class="d-flex ms-3">
            <div style="min-width: 20px">
              <span class="fa fa-angle-right"></span>
            </div>
            <div>
              If Accommodation is full, the tour operator will find an
              alternative of the same standard.
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 mobile">
          <div class="card p-4 mb-3" v-if="packageData != null">
            <h3 class="fw-bold text-success">
              {{ packageData.rate.adult_currency | currency }}
              <small class="fw-normal">USD</small>
            </h3>
            <h5 class="fw-bold">Request a Quote</h5>
            <div class="row">
              <div class="col-sm-12 mt-3">
                <div class="d-flex text-danger align-items-center">
                  <div class="me-3">
                    <span class="fa fa-calendar" style="font-size: 25px"></span>
                  </div>
                  <ejs-datepicker
                    :placeholder="'Select a Date'"
                    v-model="start_date"
                    ref="dateObj"
                    :focus="onFocus"
                    :allowEdit="false"
                  ></ejs-datepicker>
                </div>
              </div>
              <div
                class="col-sm-12 mt-3"
                v-click-outside-dropdown="closeTravelerDropdown"
              >
                <div class="d-flex text-danger align-items-center">
                  <div class="me-3">
                    <span class="fa fa-users" style="font-size: 25px"></span>
                  </div>
                  <div @click="showTravelerDropdown" class="w-100">
                    <ejs-textbox
                      floatLabelType="Auto"
                      autocomplete="off"
                      type="text"
                      placeholder="Travellers"
                      v-model="traveler_number"
                      :readOnly="true"
                    ></ejs-textbox>
                  </div>
                </div>
                <!-- <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"> -->
                <div
                  v-if="visible_traveler_dropdown"
                  class="shadow traveler-dropdown left-0 bg-white mt-3 triangule-where"
                >
                  <div class="bg-warning text-white p-2 text-center">
                    Travelers
                    <span
                      class="fa fa-times-circle-o"
                      style="float: right; font-size: 25px; color: black"
                      @click="closeTravelerDropdown"
                    ></span>
                  </div>
                  <div
                    class="py-2 px-3 mt-2 border-1 text-start d-flex justify-content-between"
                  >
                    <div><strong>Adult</strong>(16+ years):</div>
                    <div>
                      <vue-numeric-input
                        v-model="adults_number"
                        :min="1"
                        :max="100"
                        :step="1"
                      ></vue-numeric-input>
                    </div>
                  </div>
                  <div
                    class="py-2 px-3 mt-2 border-1 text-start d-flex justify-content-between"
                  >
                    <div><strong>Child</strong>(0~15 years):</div>
                    <div>
                      <vue-numeric-input
                        v-model="children_number"
                        :min="0"
                        :max="100"
                        :step="1"
                      ></vue-numeric-input>
                    </div>
                  </div>
                  <div class="text-right">
                    <button
                      class="btn btn-warning mx-3 my-3"
                      @click="setTravelerInfo"
                    >
                      Done
                    </button>
                  </div>
                </div>
                <!-- </transition> -->
              </div>
              <div class="col-sm-12 mt-3"></div>
            </div>
            <button class="btn btn-danger mb-3 mt-2" @click="getQuoteNow">
              Enquire Now
            </button>
            <div class="d-flex ms-3">
              <div style="min-width: 25px">
                <span class="fa fa-check-circle"></span>
              </div>
              <div class="fst-italic">Best Price Guarantee</div>
            </div>
            <div class="d-flex ms-3">
              <div style="min-width: 25px">
                <span class="fa fa-check-circle"></span>
              </div>
              <div class="fst-italic">Not a must to Book</div>
            </div>
            <div class="d-flex ms-3">
              <div style="min-width: 25px">
                <span class="fa fa-check-circle"></span>
              </div>
              <div class="fst-italic">
                Your request will be sent to tour Operator Only
              </div>
            </div>
          </div>
          <div class="card p-4 mb-3" v-if="packageData != null">
            <img
              v-lazy="packageData.logo"
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
              :paginationEnabled="false"
              v-model="current_reivew_number"
              class="review-slider"
            >
              <slide
                v-for="(item, indexsss) in packageData.review"
                v-bind:key="'review' + indexsss"
              >
                <div class="d-flex align-items-center">
                  <div>
                    <span
                      class="fa fa-user text-muted ms-1"
                      style="font-size: 45px"
                    ></span>
                  </div>
                  <div>
                    <h5 class="fw-bold text-dark my-0 ms-3 text-capitalize">
                      {{ item.full_name }}
                    </h5>
                    <!-- <h6 class="text-dark my-0 ms-3">{{ item.email }}</h6> -->
                    <h6 class="text-dark my-0 ms-3">Reviewed: <span class="text-muted">{{ new Date(item.created_at).toDateString() }}</span></h6>
                  </div>
                </div>
                <div class="my-3 review-detail">
                  <h5 class="fw-bold mb-2">
                    {{ item.title }}
                  </h5>
                  <h5 class="reviews">
                    <CustomStarRating :rating="item.rate"></CustomStarRating>
                    <span v-if="item.rate == '5'" style="color: #4f4f4f"
                      >&nbsp;5.0 / 5
                    </span>
                    <span v-else style="color: #4f4f4f">
                      &nbsp;{{ item.rate }} / 5
                    </span>
                  </h5>
                  <div class="review-description">
                    {{ item.description.substr(0, 200) }}
                    <span v-if="item.description.length > 200">...</span>
                  </div>
                </div>
              </slide>
            </carousel>
            <div class="text-center mb-3" v-if="packageData.review.length != 0">
              <div class="d-flex justify-content-center align-items-center">
                <button class="btn btn-outline-danger px-3 py-1" @click="prevClick">
                  <span class="fa fa-angle-left" style="font-size: 15px;"></span>
                </button>
                <span class="mx-3">{{ current_reivew_number + 1 }} of {{ packageData.review.length }}</span>
                <button class="btn btn-outline-danger px-3 py-1" @click="nextClick">
                  <span class="fa fa-angle-right" style="font-size: 15px;"></span>
                </button>
              </div>
            </div>
            <h6 v-else class="text-center">There are no reviews yet.</h6>
            <button
              type="button"
              class="btn btn-danger"
              data-mdb-toggle="modal"
              data-mdb-target="#writeareview"
            >
              Write A Review
              <span class="fa fa-edit ms-2"></span>
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
                <form class="modal-content" @submit.prevent="submitReview">
                  <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title" id="reviewLavel">Write a Review</h5>
                    <button
                      type="button"
                      class="btn-close btn-close-white"
                      data-mdb-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-start">
                    <div class="row align-items-center">
                      <div class="col-sm-12">
                        <ejs-textbox
                          v-model="name"
                          floatLabelType="Auto"
                          type="text"
                          placeholder="Name"
                          required
                        ></ejs-textbox>
                      </div>
                      <div class="col-sm-12 mt-3">
                        <ejs-textbox
                          v-model="email"
                          floatLabelType="Auto"
                          type="email"
                          placeholder="Email"
                          required
                        ></ejs-textbox>
                      </div>
                      <div class="col-sm-12 mt-3">
                        <ejs-textbox
                          v-model="title"
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
                          :show-rating="false"
                          v-model="rating"
                          active-color="#f93154"
                        ></star-rating>
                      </div>
                      <div class="col-sm-12 mt-5">
                        <ejs-textbox
                          :multiline="true"
                          v-model="review"
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
                      ref="closeButton"
                      data-mdb-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" class="btn btn-danger">Send</button>
                  </div>
                </form>
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

    <div class="get-quote-mobile w-100 text-center shadow-lg">
      <button class="btn btn-danger my-3" @click="getQuoteNow">
        Get a Free Quote Now
        <span class="fa fa-angle-right ms-2"></span>
      </button>
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

import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

import { mapState, mapGetters, mapMutations } from "vuex";

import VueNumericInput from "vue-numeric-input";
import StarRating from "vue-star-rating";
import CustomStarRating from "../components/CustomStarRating";
// import Pagination from "vue-pagination-2";

export default {
  name: "TourPackage",
  components: {
    StarRating,
    CustomStarRating,
    // Pagination,
    VueNumericInput,
  },
  data() {
    return {
      current_review_page: 1,
      reviews_per_page: 5,
      current_page_reviews: [],
      // pagenation_options: {
      //   chunk: 5,
      // },
      name: "",
      email: "",
      title: "",
      rating: 5,
      review: "",
      start_date: "",
      traveler_number: "",
      visible_traveler_dropdown: false,
      adults_number: 0,
      children_number: 0,

      excellent: true,
      verygood: true,
      average: true,
      poor: true,
      terrible: true,

      review_5: 0,
      review_4: 0,
      review_3: 0,
      review_2: 0,
      review_1: 0,

      filtered_reviewList: [],

      update_checklist: 0,

      current_reivew_number: 0,
      total_page_number: 1,
    };
  },
  metaInfo() {
      return {
          title: `${this.packageData.company_name}: ${this.packageData.no_of_day}-Day ${this.packageData.title}`,
          meta: [
              // {name: 'description', content: this.packageData.description},    
              {property: 'og:title', content: this.packageData.title},    
              {name: 'twitter:title', content: this.packageData.title},
              {property: 'og:image', content: this.packageData.image_url},
              {property: 'twitter:image', content: this.packageData.image_url},
              {property: 'og:url', content: window.location.href}, 
          ]
      }
  },
  directives: {
    "click-outside-dropdown": {
      bind: function (el, binding) {
        // Define ourClickEventHandler
        const ourClickEventHandler = (event) => {
          if (!el.contains(event.target) && el !== event.target) {
            // as we are attaching an click event listern to the document (below)
            // ensure the events target is outside the element or a child of it
            binding.value(event); // before binding it
          }
        };
        // attached the handler to the element so we can remove it later easily
        el.__vueClickEventHandler__ = ourClickEventHandler;

        // attaching ourClickEventHandler to a listener on the document here
        document.addEventListener("click", ourClickEventHandler);
      },
      unbind: function (el) {
        // Remove Event Listeners
        document.removeEventListener("click", el.__vueClickEventHandler__);
      },
    },
  },
  computed: {
    package_id: function () {
      var id = this.$route.params.id;
      return id.slice(0, id.length);
    },
    ...mapGetters({
      packageData: "tourController/packageData",
      loading: "tourcard_loading",
      request_status: "request_status",

      where_to_search_state: "tourController/where_to_search",
      start_date_state: "tourController/start_date",
      adults_number_state: "tourController/adults_number",
      children_number_state: "tourController/children_number",
    }),
  },
  created() {
    this.getPacakgeById(this.package_id);

    this.traveler_number = this.traveler_number_state;
    this.start_date = new Date(this.start_date_state);
    this.adults_number = this.adults_number_state;
    this.children_number = this.children_number_state;

    this.traveler_number_calc();
  },
  watch: {
    current_review_page: function (newValue) {
      this.getCurrentPageReviews(newValue);
    },
  },
  methods: {
    getPacakgeById(package_id) {
      this.$store
        .dispatch("tourController/getTourById", package_id)
        .then(() => {
          // let page_title =
          //   this.packageData.company_name +
          //   ": " +
          //   this.packageData.no_of_day +
          //   "-Day " +
          //   this.packageData.title;
          // document.title = page_title;

          for (let i = 0; i < this.packageData.review.length; i++) {
            if (this.packageData.review[i].rate == 5) this.review_5++;
            else if (this.packageData.review[i].rate == 4) this.review_4++;
            else if (this.packageData.review[i].rate == 3) this.review_3++;
            else if (this.packageData.review[i].rate == 2) this.review_2++;
            else if (this.packageData.review[i].rate == 1) this.review_1++;
          }

          if (this.review_5 == 0) this.excellent = false;
          if (this.review_4 == 0) this.verygood = false;
          if (this.review_3 == 0) this.average = false;
          if (this.review_2 == 0) this.poor = false;
          if (this.review_1 == 0) this.terrible = false;

          this.update_checklist++;

          this.reviewFilter();

          console.log("package", this.packageData);
        });
    },

    reviewFilter() {
      let filtered_reviewData = [];

      for (let i = 0; i < this.packageData.review.length; i++) {
        if (this.packageData.review[i].rate == 5 && this.excellent == true) {
          filtered_reviewData.push(this.packageData.review[i]);
          continue;
        }
        if (this.packageData.review[i].rate == 4 && this.verygood == true) {
          filtered_reviewData.push(this.packageData.review[i]);
          continue;
        }
        if (this.packageData.review[i].rate == 3 && this.average == true) {
          filtered_reviewData.push(this.packageData.review[i]);
          continue;
        }
        if (this.packageData.review[i].rate == 2 && this.poor == true) {
          filtered_reviewData.push(this.packageData.review[i]);
          continue;
        }
        if (this.packageData.review[i].rate == 1 && this.terrible == true) {
          filtered_reviewData.push(this.packageData.review[i]);
        }
      }

      this.filtered_reviewList = filtered_reviewData;

      // console.log('filter', this.filtered_reviewList)

      this.update_checklist++;

      this.current_review_page = 1;

      this.total_page_number = Math.floor(this.filtered_reviewList.length / this.reviews_per_page);

      if ( this.filtered_reviewList.length % this.reviews_per_page > 0 ) {
        this.total_page_number = this.total_page_number + 1;
      }

      this.getCurrentPageReviews(1);
    },

    traveler_number_calc() {
      let traveler = this.adults_number + this.children_number;
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else if (traveler == 0) this.traveler_number = "";
      else this.traveler_number = traveler + " Travelers";
    },

    getCurrentPageReviews(page_num) {
      this.current_page_reviews = [];
      let index = 0;
      for (
        let i = (page_num - 1) * this.reviews_per_page;
        i < page_num * this.reviews_per_page;
        i++
      ) {
        if (this.filtered_reviewList[i] != undefined) {
          this.current_page_reviews[index] = this.filtered_reviewList[i];
          index++;
        }
      }
    },

    showTravelerDropdown() {
      var current_flag = this.visible_traveler_dropdown;
      this.visible_traveler_dropdown = !current_flag;
    },

    closeTravelerDropdown: function (event) {
      this.visible_traveler_dropdown = false;
    },
    setTravelerInfo(event) {
      event.preventDefault();
      let traveler = this.adults_number + this.children_number;
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else this.traveler_number = traveler + " Travelers";
      this.closeTravelerDropdown();
    },

    getQuoteNow() {
      let searchData = {};

      searchData = {
        where_to_search: this.where_to_search,
        start_date: this.start_date,
        adults_number: this.adults_number,
        children_number: this.children_number,
      };

      let quoteData = {};

      quoteData = {
        title: this.packageData.title,
        no_of_day: this.packageData.no_of_day,
      };

      this.$store.dispatch("tourController/setSearchData", searchData);
      this.$store.dispatch("tourController/setQuotePackage", quoteData);

      let quote_tourInfo = {};
      quote_tourInfo = {
        package_id: this.packageData.package_id,
        user_id: this.packageData.user_id,
      };
      this.$store.dispatch("tourController/setTourInfo", quote_tourInfo);

      // this.$router.push("/tour-quote").catch(() => {});

      let routeData = this.$router.resolve({
          name: "Tour Quote",
        });

        window.open(routeData.href, "_blank");
    },

    onFocus: function (args) {
      this.$refs.dateObj.show();
    },

    nextClick(){
      if ( this.current_reivew_number == this.packageData.review.length - 1 ) {
        return;
      } else {
        this.current_reivew_number ++
      }
    },

    prevClick(){
      if ( this.current_reivew_number == 0 ) {
        return;
      } else {
        this.current_reivew_number --
      }
    },

    submitReview() {
      let params = {};

      params = {
        name: this.name,
        email: this.email,
        title: this.title,
        review: this.review,
        rate: this.rating,
        operator_id: this.packageData.user_id,
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

            this.name = "";
            this.email = "";
            this.title = "";
            this.review = "";
            this.rating = 5;
            this.$router.push("/thankyou-review");
          } else {
            this.$notify({
              group: "warning",
              title: "Submit Error !",
              text: "Sorry, Something went wrong...",
            });

            this.name = "";
            this.email = "";
            this.title = "";
            this.review = "";
            this.rating = 5;
          }
          const elem = this.$refs.closeButton;
          elem.click();
        })
        .catch(() => {
          this.$notify({
            group: "warning",
            title: "Submit Error !",
            text: "Sorry, Something went wrong...",
          });

          this.name = "";
          this.email = "";
          this.title = "";
          this.review = "";
          this.rating = 5;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.package-inner-page {
  padding-top: 60px;
  padding-bottom: 60px;
  // background-color: #f2f2f2;
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
  font-family: sans-serif;
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
  font-weight: 700;
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
  font-size: 15px;
}

.package-inner-page .mobile {
  display: block;
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
  // background-color: #f1f1f1;
  border: 1px solid #f93154;
  padding: 20px;
  position: relative;
}

.gallery-viewer img{
  cursor: pointer;
}

.package-inner-page .review-detail::before {
    position: absolute;
    top: -9px;
    left: 2.1875rem;
    transform: rotate(-45deg);
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    border: 0.0625rem solid #f93154;
    background-color: white;
    border-bottom: none;
    border-left: none;
}

.package-inner-page .e-multi-line-input textarea {
  height: 150px;
}

// This is for rating correction - @Влад
.rating-wrap {
  display: table;
  max-width: 400px;
  width: 100%;
  position: relative;
}

.rating-item {
  display: table-row;
}

.rating-item span {
  font-size: 15px;
}

.rating-item .progress {
  height: 15px;
}

.rating-grade {
  display: table-cell;
  white-space: nowrap;
  vertical-align: middle;
}

.get-quote-mobile {
  display: none;
}

h4.flex-shrink-0 {
  font-size: 16px;
  line-height: 22px;
}

.horizontal-grayline {
  margin-top: 11px;
  height: 1px;
  margin-left: 5px;
  background: #b3b3b3;
}

.routine h6 {
  font-size: 15px;
}

.routine-detail h6 {
  text-transform: capitalize;
}

table th, table td {
  padding: 10px 15px;
  vertical-align: middle;
}

table thead th:first-child {
  min-width: 150px;
}



@media (min-width: 1201px) and (max-width: 1400px) {
  .package-inner-page .package-inner-image {
    padding-top: 55%;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .package-inner-page .package-inner-image {
    padding-top: 70%;
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

  .package-inner-page .price-rate {
    position: relative;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .package-inner-page .mobile {
    display: none;
  }

  .package-inner-page .package-inner-title {
    height: auto;
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

  .get-quote-mobile {
    display: block;
    position: fixed;
    bottom: 0px;
    z-index: 2222;
    background-color: white;
  }
}

@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-vue-buttons/styles/material.css";
@import "@syncfusion/ej2-vue-popups/styles/material.css";
@import "@syncfusion/ej2-vue-navigations/styles/material.css";
@import "@syncfusion/ej2-vue-inputs/styles/material.css";
@import "@syncfusion/ej2-vue-calendars/styles/material.css";
</style>
