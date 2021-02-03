<template>
  <div id="our-tours">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-xs-12">
          <div class="row gx-0">
            <div
              class="col-md-12 mobile-filter position-relative"
              v-click-outside-dropdown="closeWhereToDropDown"
            >
              <div
                class="bg-white h-100 align-items-center d-flex justify-content-between px-3"
              >
                <span class="fa fa-map-marker"></span>
                <div class="w-100 px-2" @click="showWhereToDropdown(true)">
                  <input
                    v-model="where_to_search"
                    placeholder="Where To"
                    type="text"
                    ref="whereTo"
                    class="w-100"
                  />
                </div>
                <span
                  v-if="visible_whereto_dropdown == true"
                  class="fa fa-search"
                ></span>
                <span
                  v-else-if="
                    where_to_search != '' && visible_whereto_dropdown == false
                  "
                  class="fa fa-times-circle-o"
                  @click="setInitWhereTo"
                ></span>
                <span v-else class="fa fa-search invisible"></span>
              </div>
              <transition
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
              >
                <div
                  class="where_to_dropdown left-0 w-100 bg-white mt-3 triangule-where"
                  v-if="visible_whereto_dropdown == true && search_result != ''"
                >
                  <div class="bg-warning text-white p-2 text-left">
                    Start typing or select below
                  </div>
                  <div
                    v-for="(item, index) in search_result"
                    v-bind:key="index"
                  >
                    <div
                      class="py-1 px-3 border-bottom border-1 text-start"
                      v-if="index < 6"
                      @click="setCurrentWhereTo(item.title)"
                    >
                      <div class="p-0 m-0">
                        <strong>{{ item.title }}</strong>
                      </div>
                      <div class="p-0 m-0">
                        <small>{{ item.country }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <div class="col-md-12 mobile-filter position-relative">
              <div
                class="bg-white w-100 h-100 align-items-center d-flex justify-content-between px-3"
              >
                <span class="fa fa-calendar"></span>
                <div class="w-100 px-2">
                  <datepicker
                    :disabledDates="disabledFn"
                    v-model="start_date"
                    :placeholder="'Start Date'"
                    :highlighted="highlighted"
                  ></datepicker>
                </div>
                <span
                  v-if="start_date != ''"
                  class="fa fa-times-circle-o"
                  @click="initStartDate"
                ></span>
                <span v-else class="fa fa-times-circle-o invisible"></span>
              </div>
            </div>
            <div
              class="col-md-12 mobile-filter position-relative"
              v-click-outside-dropdown="closeTravelerDropdown"
            >
              <div
                class="bg-white w-100 h-100 align-items-center d-flex justify-content-between px-3"
                @click="showTravelerDropdown"
              >
                <span class="fa fa-users"></span>
                <div class="w-100 px-2">
                  <input
                    v-model="traveler_number"
                    id="traveler_input"
                    type="text"
                    placeholder="Travelers"
                    class="w-100"
                  />
                </div>
                <span
                  v-if="traveler_number != ''"
                  class="fa fa-times-circle-o"
                  @click="setTravelerInit"
                ></span>
                <span v-else class="fa fa-times-circle-o invisible"></span>
              </div>
              <transition
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
              >
                <div
                  v-if="visible_traveler_dropdown"
                  class="traveler-dropdown left-0 bg-white mt-3 triangule-where"
                >
                  <div class="bg-warning text-white p-2 text-left">
                    Travelers
                    <span
                      class="fa fa-times-circle-o"
                      @click="closeTravelerDropdown"
                    ></span>
                  </div>
                  <div
                    class="py-2 px-3 mt-2 border-1 text-start d-flex justify-content-between"
                  >
                    <div><strong>Adults</strong>(18+ years):</div>
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
                    <div><strong>Children</strong>(0~17 years):</div>
                    <div>
                      <vue-numeric-input
                        v-model="children_number"
                        :min="0"
                        :max="100"
                        :step="1"
                      ></vue-numeric-input>
                    </div>
                  </div>

                  <!--
                      @this is for children age select options
                     -->

                  <!-- <p class="mt-3 text-center" v-if="children_number">
                      Age at the end of the tour
                    </p>
                    <hr class="mx-3" v-if="children_number" />
                    <div class="py-2 px-3 border-1 text-start d-flex justify-content-end align-items-center" v-for="(item, index) in selectedAge" :key="index">
                      <div class="me-3">Child {{ index + 1 }}:</div>
                      <div style="width: 150px">
                        <v-select :options="options" v-model="item.Age" />
                      </div>
                    </div> -->

                  <div class="text-right">
                    <button
                      class="btn btn-danger mx-3 my-3"
                      @click="setTravelerInfo"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </transition>
            </div>
            <div class="col-md-12 mobile-filter">
              <button class="btn btn-danger w-100 h-100">
                <span>Search Tours</span>
                <span class="fa fa-angle-right ms-2"></span>
              </button>
            </div>
          </div>

          <h6 class="mt-5 fw-bold">Tour Price</h6>

          <ejs-slider
            :min="100"
            :max="16000"
            :type="'Range'"
            v-model="price_range"
          ></ejs-slider>
          <div class="d-flex justify-content-between">
            <div>${{ price_range[0] }}</div>
            <div>${{ price_range[1] }}</div>
          </div>

          <h6 class="mt-5 fw-bold">Tour Days</h6>

          <ejs-slider
            :min="1"
            :max="30"
            :type="'Range'"
            v-model="day_range"
          ></ejs-slider>
          <div class="d-flex justify-content-between">
            <div>{{ day_range[0] }} Days</div>
            <div>{{ day_range[1] }} Days</div>
          </div>

          <h6 class="mt-5 fw-bold">Private or Group</h6>

          <ul>
            <li>
              <ejs-radiobutton label="Private" name="default"></ejs-radiobutton>
            </li>
            <li>
              <ejs-radiobutton
                label="Group"
                name="default"
                checked="true"
              ></ejs-radiobutton>
            </li>
          </ul>
          <h6 class="mt-5 fw-bold">Standard</h6>

          <p>
            <ejs-checkbox label="Budget"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Camping"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Lodge"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Luxury"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Luxury plus"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Mid Range"></ejs-checkbox>
          </p>
          <h6 class="mt-5 fw-bold">Specialized</h6>

          <p>
            <ejs-checkbox label="Birdwatching"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label=" Canoe/Mokoro safari"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label=" Tour for disabled travelers"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label=" Scenic and/or Cultural tour"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Cycling Safari"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Yoga"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox
              label="Gorilla and/or chimp tracking & mountain climbing"
            ></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Fly-in safari"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Game drive safari"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox
              label=" Gorilla and/or chimp trekking & game drive safari"
            ></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox
              label=" Gorilla and/or chimp trekking only"
            ></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Guided self drive"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label=" Mountain climbing only"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Horseback Safari"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox
              label=" Mountain climbing & game drive safari"
            ></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Wildlife photography"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label=" Golf & wildlife viewing"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="walking-safari"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox
              label="Beach holiday & game drive safari"
            ></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Beach holiday only"></ejs-checkbox>
          </p>
          <p>
            <ejs-checkbox label="Overland truck safari"></ejs-checkbox>
          </p>
        </div>
        <div class="col-lg-9 col-xs-12">
          <section class="section-header">
            <h3>Our Tours</h3>
            <span class="read-more"
              >Tanzania is Africa’s number one safari destination. The wildlife
              viewing is amazing and big cats are easy to see. Africa Big Five
              can be found in many Tanzanian parks and reserves.</span
            >
            <span v-if="!read_more">...</span>
            <transition
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
            >
              <span v-if="read_more" class="read-more">
                The most famous parks are Ngorongoro Crater and Serengeti
                National Park. More than a quarter of the country is set aside
                for conservation. Tanzania is also home to Africa tallest
                Mountain, Mt. Kilimanjaro and has the best white sand beaches at
                Zanzibar Island.</span
              >
            </transition>
            <span
              v-if="!read_more"
              class="read-more text-danger"
              @click="read_more = !read_more"
              >Read more</span
            >
            <span
              v-else
              class="read-more text-danger"
              @click="read_more = !read_more"
              >Read less</span
            >
          </section>
          <ul class="tagpill-group ps-0 mt-3">
            <span class="my-1">Selected Filters:</span>
            <ejs-chiplist
              id="tag-list-filter"
              cssClass="e-outline e-info"
              enableDelete="true"
            >
              <e-chips>
                <e-chip
                  text="Andrew"
                  v-for="(item, index) in 15"
                  v-bind:key="index"
                  v-on:click.native="chipclick"
                ></e-chip>
                <e-chip
                  text="Clear All Filters"
                  cssClass="e-outline e-danger"
                ></e-chip>
              </e-chips>
            </ejs-chiplist>
          </ul>
          <h6 class="my-3 fw-bold">Showing 1 - 23 of 300 results</h6>
          <div class="row gx-0">
            <div
              class="col-md-6 col-xs-12"
              v-for="(item, index) in searched_package"
              v-bind:key="index"
            >
              <TourCard :tourData="item"></TourCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TourCard from "../components/TourCard";
import VueNumericInput from "vue-numeric-input";
import Datepicker from "vuejs-datepicker";

import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);

import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);

import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(RadioButtonPlugin);

import { ChipListPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ChipListPlugin);

export default {
  name: "OurTours",
  components: {
    TourCard,
    VueNumericInput,
    Datepicker,
  },
  data() {
    return {
      type: "Range",
      price_range: [100, 16000],
      day_range: [0, 30],
      type: "Range",
      read_more: false,
      ddd: "",
      where_to_search: "",
      traveler_number: "",
      start_date: "",
      visible_whereto_dropdown: false,
      visible_traveler_dropdown: false,
      adults_number: 1,
      children_number: 0,
      disabledFn: {
        customPredictor(date) {
          var current_date = new Date();
          if (date - current_date <= 0) {
            return true;
          }
        },
      },
      highlighted: {
        dates: [
          // your date
          new Date(),
        ],
      },
      searched_package: [
        {
          id: 1,
          title: "3-Day Ngorongoro & Serengeti Budget Tour",
          acommodation: "Budget, Camping",
          type: "Group",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "Meru Slopes Tours and Safaris",
          reviews: 42,
          rating: "5.0",
          price: 339,
          image: "./images/CHEMKA_HOT_SPRING_8.jpg",
          tagImage: "./images/toprated2.png",
        },
        {
          id: 2,
          title: "4-Day Budget Camping to Tarangire, Serengeti &Ngorongoro",
          acommodation: "Budget, Camping",
          type: "Group",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "Travel Africa Safari Agency",
          reviews: 12,
          rating: "5.0",
          price: 59,
          image: "./images/NGORONGORO_CRATER_3.jpg",
          tagImage: "./images/toprated2.png",
        },
        {
          id: 3,
          title: "6-Day Camping Safari to Serengeti, Ngorongoro & Tarangire",
          acommodation: "Budget, Camping",
          type: "Group",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "Travel Africa Safari Agency",
          reviews: 0,
          rating: "5.0",
          price: 599,
          image: "./images/SERENGETI_NATIONAL_PARK_11.jpg",
          tagImage: "./images/toprated2.png",
        },
        {
          id: 4,
          title: "2-Day Coffee, city tour, chemka & Materuni waterfalls",
          acommodation: "Budget, Camping",
          type: "Private",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "wildlife oasis tours",
          reviews: 12,
          rating: "5.0",
          price: 99,
          image: "./images/TARANGIRE_NATIONAL_PARK_7.jpg",
          tagImage: "./images/best-review.png",
        },
        {
          id: 5,
          title: "5-Day Private Tour",
          acommodation: "Budget, Camping",
          type: "Private",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "wildlife oasis tours",
          reviews: 53,
          rating: "5.0",
          price: 599,
          image: "./images/SERENGETI_NATIONAL_PARK_28.jpg",
          tagImage: "./images/toprated2.png",
        },
        {
          id: 6,
          title: "5-Day Tarangire, Serengeti(2 nights) & Ngorongoro crater",
          acommodation: "Budget, Camping",
          type: "Private",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "Safari soles tours",
          reviews: 9,
          rating: "5.0",
          price: 159,
          image: "./images/TARANGIRE_NATIONAL_PARK_7.jpg",
          tagImage: "./images/bestseller.png",
        },
        {
          id: 2,
          title: "4-Day Budget Camping to Tarangire, Serengeti &Ngorongoro",
          acommodation: "Budget, Camping",
          type: "Group",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "Travel Africa Safari Agency",
          reviews: 12,
          rating: "5.0",
          price: 59,
          image: "./images/NGORONGORO_CRATER_3.jpg",
          tagImage: "./images/toprated2.png",
        },
        {
          id: 3,
          title: "6-Day Camping Safari to Serengeti, Ngorongoro & Tarangire",
          acommodation: "Budget, Camping",
          type: "Group",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "Travel Africa Safari Agency",
          reviews: 0,
          rating: "5.0",
          price: 599,
          image: "./images/SERENGETI_NATIONAL_PARK_11.jpg",
          tagImage: "./images/toprated2.png",
        },
        {
          id: 4,
          title: "2-Day Coffee, city tour, chemka & Materuni waterfalls",
          acommodation: "Budget, Camping",
          type: "Private",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "wildlife oasis tours",
          reviews: 12,
          rating: "5.0",
          price: 99,
          image: "./images/TARANGIRE_NATIONAL_PARK_7.jpg",
          tagImage: "./images/best-review.png",
        },
        {
          id: 5,
          title: "5-Day Private Tour",
          acommodation: "Budget, Camping",
          type: "Private",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "wildlife oasis tours",
          reviews: 53,
          rating: "5.0",
          price: 599,
          image: "./images/SERENGETI_NATIONAL_PARK_28.jpg",
          tagImage: "./images/toprated2.png",
        },
        {
          id: 6,
          title: "5-Day Tarangire, Serengeti(2 nights) & Ngorongoro crater",
          acommodation: "Budget, Camping",
          type: "Private",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "Safari soles tours",
          reviews: 9,
          rating: "5.0",
          price: 159,
          image: "./images/TARANGIRE_NATIONAL_PARK_7.jpg",
          tagImage: "./images/bestseller.png",
        },
        {
          id: 2,
          title: "4-Day Budget Camping to Tarangire, Serengeti &Ngorongoro",
          acommodation: "Budget, Camping",
          type: "Group",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "Travel Africa Safari Agency",
          reviews: 12,
          rating: "5.0",
          price: 59,
          image: "./images/NGORONGORO_CRATER_3.jpg",
          tagImage: "./images/toprated2.png",
        },
        {
          id: 3,
          title: "6-Day Camping Safari to Serengeti, Ngorongoro & Tarangire",
          acommodation: "Budget, Camping",
          type: "Group",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "Travel Africa Safari Agency",
          reviews: 0,
          rating: "5.0",
          price: 599,
          image: "./images/SERENGETI_NATIONAL_PARK_11.jpg",
          tagImage: "./images/toprated2.png",
        },
        {
          id: 4,
          title: "2-Day Coffee, city tour, chemka & Materuni waterfalls",
          acommodation: "Budget, Camping",
          type: "Private",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "wildlife oasis tours",
          reviews: 12,
          rating: "5.0",
          price: 99,
          image: "./images/TARANGIRE_NATIONAL_PARK_7.jpg",
          tagImage: "./images/best-review.png",
        },
        {
          id: 5,
          title: "5-Day Private Tour",
          acommodation: "Budget, Camping",
          type: "Private",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "wildlife oasis tours",
          reviews: 53,
          rating: "5.0",
          price: 599,
          image: "./images/SERENGETI_NATIONAL_PARK_28.jpg",
          tagImage: "./images/toprated2.png",
        },
        {
          id: 6,
          title: "5-Day Tarangire, Serengeti(2 nights) & Ngorongoro crater",
          acommodation: "Budget, Camping",
          type: "Private",
          route:
            "Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha (End)",
          company: "Safari soles tours",
          reviews: 9,
          rating: "5.0",
          price: 159,
          image: "./images/TARANGIRE_NATIONAL_PARK_7.jpg",
          tagImage: "./images/bestseller.png",
        },
      ],
      where_to_list: [
        {
          title: "All Safari Destinations",
          country: "Search Everywhere",
        },
        {
          title: "Kenya",
          country: "Country",
        },
        {
          title: "Tarangire National Park",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park2",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park3",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park4",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park5",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park6",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park61",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park62",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park63",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park64",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park65",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park66",
          country: "Park(Tanzania)",
        },
        {
          title: "Tarangire National Park67",
          country: "Park(Tanzania)",
        },
        {
          title: "abd National Park68",
          country: "Park(Tanzania)",
        },
        {
          title: "bdd National Park67",
          country: "Park(Tanzania)",
        },
        {
          title: "csv National Park67",
          country: "Park(Tanzania)",
        },
        {
          title: "reee National Park67",
          country: "Park(Tanzania)",
        },
        {
          title: "hsh National Park67",
          country: "Park(Tanzania)",
        },
        {
          title: "xsdfr National Park67",
          country: "Park(Tanzania)",
        },
      ],
      search_result: [],
    };
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
  watch: {
    // children_number: function (newValue, oldValue) {
    //   if (newValue > oldValue) {
    //     this.selectedAge.push({
    //       Age: "- Age -"
    //     });
    //   } else {
    //     this.selectedAge.splice(this.selectedAge.length - 1, 1);
    //   }
    // },
    where_to_search: function () {
      if (this.where_to_search) {
        this.search_result = this.where_to_list.filter((item) => {
          return this.where_to_search
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        this.search_result = this.where_to_list;
      }
    },
  },
  created() {
    this.search_result = this.where_to_list;
  },
  methods: {
    closeWhereToDropDown() {
      this.visible_whereto_dropdown = false;
    },
    showWhereToDropdown(visible_flag) {
      this.visible_whereto_dropdown = visible_flag;
    },
    setCurrentWhereTo(value) {
      this.where_to_search = value;
      this.visible_whereto_dropdown = false;
    },
    setInitWhereTo() {
      this.where_to_search = "";
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
    setTravelerInit() {
      this.traveler_number = "";
      this.adults_number = 1;
      this.children_number = 0;
    },
    initStartDate() {
      this.start_date = "";
    },
    chipclick: function (e) {
      //   console.log('you have clicked ' + e.target.textContent);
    },
  },
};
</script>

<style>
@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-buttons/styles/material.css";
@import "@syncfusion/ej2-popups/styles/material.css";
@import "@syncfusion/ej2-vue-inputs/styles/material.css";
@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-buttons/styles/material.css";

.e-radio-wrapper {
  margin-top: 18px;
}

li {
  list-style: none;
}
</style>
