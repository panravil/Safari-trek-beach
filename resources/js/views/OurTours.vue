<template>
<div id="our-tours">
  <div class="container">
    <div class="row">
      <div v-if="isSidebar" class="overlay-mobile" @click="isSidebar = false"></div>
      <div class="mobile-filter-close bg-danger text-white py-3" v-bind:style="[
            isSidebar
              ? {
                  right: 0,
                }
              : '',
          ]">
        <div class="position-relative d-flex justify-content-between align-items-center px-3">
          <h4 class="font-bold my-0">Filter Options</h4>
          <div @click="isSidebar = false" class="filter-option-close">
            <span class="fa fa-times-circle-o display-5"></span>
          </div>
        </div>
      </div>
      <div class="mobile-filter-button bg-white text-white py-3" v-bind:style="[
            isSidebar
              ? {
                  right: 0,
                }
              : '',
          ]">
        <button class="btn btn-danger w-100 h-100" @click="isSidebar = false">
          <span>Search Tours</span>
          <span class="fa fa-angle-right ms-2"></span>
        </button>
      </div>
      <div class="col-lg-3 col-xs-12 filters" v-bind:style="[
            isSidebar
              ? {
                  right: 0,
                }
              : '',
          ]">
        <div class="position-relative">
          <!-- <div class="mobile-search-button w-100">
            <div>Filter Options</div>
          </div> -->
          <div class="row gx-0">
            <div class="col-md-12 mobile-filter position-relative" v-click-outside-dropdown="closeWhereToDropDown">
              <div class="bg-white h-100 align-items-center d-flex justify-content-between px-3">
                <span class="fa fa-map-marker"></span>
                <div class="w-100 px-2" @click="showWhereToDropdown(true)">
                  <input v-model="where_to_search" placeholder="Where To" type="text" ref="whereTo" class="w-100" />
                </div>
                <span v-if="visible_whereto_dropdown == true" class="fa fa-search"></span>
                <span v-else-if="
                      where_to_search != '' && visible_whereto_dropdown == false
                    " class="fa fa-times-circle-o" @click="setInitWhereTo"></span>
                <span v-else class="fa fa-search invisible"></span>
              </div>
              <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
                <div class="where_to_dropdown left-0 w-100 bg-white mt-3 triangule-where" v-if="
                      visible_whereto_dropdown == true && search_result != ''
                    ">
                  <div class="bg-warning text-white p-2 text-left">
                    Start typing or select below
                  </div>
                  <div v-for="(item, index) in search_result" v-bind:key="index">
                    <div class="py-1 px-3 border-bottom border-1 text-start" v-if="index < 6" @click="setCurrentWhereTo(item.title)">
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
              <div class="bg-white w-100 h-100 align-items-center d-flex justify-content-between px-3">
                <span class="fa fa-calendar"></span>
                <div class="w-100 px-2">
                  <datepicker :disabledDates="disabledFn" v-model="start_date" :placeholder="'Start Date'" :highlighted="highlighted"></datepicker>
                </div>
                <span v-if="start_date != ''" class="fa fa-times-circle-o" @click="initStartDate"></span>
                <span v-else class="fa fa-times-circle-o invisible"></span>
              </div>
            </div>
            <div class="col-md-12 mobile-filter position-relative" v-click-outside-dropdown="closeTravelerDropdown">
              <div class="bg-white w-100 h-100 align-items-center d-flex justify-content-between px-3" @click="showTravelerDropdown">
                <span class="fa fa-users"></span>
                <div class="w-100 px-2">
                  <input v-model="traveler_number" id="traveler_input" type="text" placeholder="Travelers" class="w-100" />
                </div>
                <span v-if="traveler_number != ''" class="fa fa-times-circle-o" @click="setTravelerInit"></span>
                <span v-else class="fa fa-times-circle-o invisible"></span>
              </div>
              <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
                <div v-if="visible_traveler_dropdown" class="traveler-dropdown left-0 bg-white mt-3 triangule-where">
                  <div class="bg-warning text-white p-2 text-left">
                    Travelers
                    <span class="fa fa-times-circle-o" @click="closeTravelerDropdown"></span>
                  </div>
                  <div class="py-2 px-3 mt-2 border-1 text-start d-flex justify-content-between">
                    <div><strong>Adults</strong>(18+ years):</div>
                    <div>
                      <vue-numeric-input v-model="adults_number" :min="1" :max="100" :step="1"></vue-numeric-input>
                    </div>
                  </div>
                  <div class="py-2 px-3 mt-2 border-1 text-start d-flex justify-content-between">
                    <div><strong>Children</strong>(0~17 years):</div>
                    <div>
                      <vue-numeric-input v-model="children_number" :min="0" :max="100" :step="1"></vue-numeric-input>
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
                    <button class="btn btn-danger mx-3 my-3" @click="setTravelerInfo">
                      Done
                    </button>
                  </div>
                </div>
              </transition>
            </div>
            <!-- <div class="col-md-12 mobile-filter mobile-filter-none">
              <button class="btn btn-danger w-100 h-100">
                <span>Search Tours</span>
                <span class="fa fa-angle-right ms-2"></span>
              </button>
            </div> -->
          </div>

          <h6 class="mt-5 fw-bold">Tour Price</h6>
          <div v-on:mouseup="getFilterTours">
            <ejs-slider :min="100" :max="16000" :type="'Range'" v-model="price_range"></ejs-slider>
          </div>
          <div class="d-flex justify-content-between">
            <div>${{ price_range[0] }}</div>
            <div>${{ price_range[1] }}</div>
          </div>

          <h6 class="mt-5 fw-bold">Tour Days</h6>
          <div v-on:mouseup="getFilterTours">
            <ejs-slider :min="1" :max="30" :type="'Range'" v-model="day_range"></ejs-slider>
          </div>
          <div class="d-flex justify-content-between">
            <div v-if="day_range[0] == 1">{{ day_range[0] }} Day</div>
            <div v-else>{{ day_range[0] }} Days</div>
            <div>{{ day_range[1] }} Days</div>
          </div>

          <h6 class="mt-5 fw-bold">Private or Group</h6>
          <p v-bind:key="'private' + update_private_check">
            <ejs-checkbox label="Private" name="default" v-model="check_private_filter"></ejs-checkbox>
          </p>
          <p v-bind:key="'group' + update_group_check">
            <ejs-checkbox label="Group" name="default" v-model="check_group_filter"></ejs-checkbox>
          </p>
          <div v-bind:key="update_checklist">
            <h6 class="mt-5 fw-bold">Standard</h6>
            <p v-for="check_data in standard_check_list" v-bind:key="check_data.label">
              <ejs-checkbox :label="check_data.label" v-model="check_data.checked_state" v-on:change="updateCheckedFilterOptions"></ejs-checkbox>
            </p>

            <h6 class="mt-5 fw-bold">Specialized</h6>
            <p v-for="check_data in specialized_check_list" v-bind:key="check_data.label">
              <ejs-checkbox :label="check_data.label" v-model="check_data.checked_state" v-on:change="updateCheckedFilterOptions"></ejs-checkbox>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-9 col-xs-12">
        <section class="section-header">
          <h3>Our Tours</h3>
          <span class="read-more">Tanzania is Africa’s number one safari destination. The wildlife
            viewing is amazing and big cats are easy to see. Africa Big Five
            can be found in many Tanzanian parks and reserves.</span>
          <span v-if="!read_more">...</span>
          <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <span v-if="read_more" class="read-more">
              The most famous parks are Ngorongoro Crater and Serengeti
              National Park. More than a quarter of the country is set aside
              for conservation. Tanzania is also home to Africa tallest
              Mountain, Mt. Kilimanjaro and has the best white sand beaches at
              Zanzibar Island.</span>
          </transition>
          <span v-if="!read_more" class="read-more text-danger" @click="read_more = !read_more">Read more</span>
          <span v-else class="read-more text-danger" @click="read_more = !read_more">Read less</span>
        </section>
        <div class="mobile-sidebar-trigger mt-3 text-center">
          <button class="btn btn-primary" @click="isSidebar = true">
            <span class="fa fa-filter me-2"></span> Search Filter
          </button>
        </div>
        <ul class="tagpill-group ps-0 mt-3">
          <span class="my-1" v-if="
                checked_specialized_filter_options.length != 0 ||
                checked_standard_filter_options.length != 0 ||
                day_range[0] != 1 ||
                day_range[1] != 30 ||
                this.price_range[0] != 100 ||
                this.price_range[1] != 16000 ||
                check_private_filter == true ||
                check_group_filter == true
              ">Selected Filters:</span>
          <ejs-chiplist id="tag-list-filter" cssClass="e-outline e-info" enableDelete="true" v-on:delete="deleteFilterOption">
            <e-chips>
              <e-chip :text="getPriceRangeChip()" v-if="price_range[0] != 100 || price_range[1] != 16000"></e-chip>
              <e-chip :text="getDayRangeChip()" v-if="day_range[0] != 1 || day_range[1] != 30"></e-chip>
              <e-chip text="Private" v-if="check_private_filter == true"></e-chip>
              <e-chip text="Group" v-if="check_group_filter == true"></e-chip>
              <e-chip :text="item.label" v-for="(item, index) in checked_standard_filter_options" v-bind:key="index"></e-chip>
              <e-chip :text="item.label" v-for="(item, index) in checked_specialized_filter_options" v-bind:key="index"></e-chip>
              <e-chip v-if="
                    checked_specialized_filter_options.length != 0 ||
                    checked_standard_filter_options.length != 0 ||
                    day_range[0] != 1 ||
                    day_range[1] != 30 ||
                    this.price_range[0] != 100 ||
                    this.price_range[1] != 16000 ||
                    check_private_filter == true ||
                    check_group_filter == true
                  " text="Clear All Filters" cssClass="e-outline e-danger"></e-chip>
            </e-chips>
          </ejs-chiplist>
        </ul>
        <h6 class="my-3 fw-bold" v-if="filterTours != null">
          <span v-if="filterTours.length != 0">Showing 1 - {{ filterTours.length }} of 300 results</span>
        </h6>
        <div class="row gx-0" v-if="loading">
          <div class="col-md-6 col-xs-12" v-for="(item, index) in 12" v-bind:key="'skelecton' + index">
            <TourCardSkelecton></TourCardSkelecton>
          </div>
        </div>
        <div class="row gx-0" v-else>
          <div class="col-md-6 col-xs-12" v-for="(item, index) in filterTours" v-bind:key="'filter' + index">
            <TourCard :tourData="item" :where_to_search="where_to_search" :traveler_number="traveler_number" :start_date="start_date" :adults_number="adults_number" :children_number="children_number"></TourCard>
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
import TourCardSkelecton from "../components/TourCardSkelecton";

import Vue from "vue";
import {
  SliderPlugin
} from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);

import {
  CheckBoxPlugin
} from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);

import {
  RadioButtonPlugin
} from "@syncfusion/ej2-vue-buttons";
Vue.use(RadioButtonPlugin);

import {
  ChipListPlugin
} from "@syncfusion/ej2-vue-buttons";
Vue.use(ChipListPlugin);

import {
  enableRipple
} from "@syncfusion/ej2-base";
enableRipple(true);

import {
  mapState,
  mapGetters,
  mapMutations
} from "vuex";

export default {
  name: "OurTours",
  components: {
    TourCard,
    VueNumericInput,
    Datepicker,
    TourCardSkelecton,
  },
  data() {
    return {
      type: "Range",
      price_range: [100, 16000],
      day_range: [1, 30],
      type: "Range",
      read_more: false,
      ddd: "",

      where_to_search: "",
      traveler_number: "",
      start_date: "",
      adults_number: 1,
      children_number: 0,

      visible_whereto_dropdown: false,
      visible_traveler_dropdown: false,

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

      day_range_chip: "",

      where_to_list: [{
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
      isSidebar: false,

      standard_check_list: [{
          label: "budget",
          checked_state: false,
        },
        {
          label: "Camping",
          checked_state: false,
        },
        {
          label: "Lodge",
          checked_state: false,
        },
        {
          label: "Luxury",
          checked_state: false,
        },
        {
          label: "Luxury plus",
          checked_state: false,
        },
        {
          label: "Mid rage",
          checked_state: false,
        },
      ],

      specialized_check_list: [{
          label: "Birdwatching",
          checked_state: false,
        },
        {
          label: "Canoe/Mokoro safari",
          checked_state: false,
        },
        {
          label: "Tour for disabled travelers",
          checked_state: false,
        },
        {
          label: "Scenic and/or Cultural tour",
          checked_state: false,
        },
        {
          label: "Cycling Safari",
          checked_state: false,
        },
        {
          label: "Gorilla and/or chimp tracking & mountain climbing",
          checked_state: false,
        },
        {
          label: "Fly-in safari",
          checked_state: false,
        },
        {
          label: "Game drive safari",
          checked_state: false,
        },
        {
          label: "Gorilla and/or chimp trekking & game drive safari",
          checked_state: false,
        },
        {
          label: "Gorilla and/or chimp trekking only",
          checked_state: false,
        },
        {
          label: "Guided self drive",
          checked_state: false,
        },
        {
          label: "Mountain climbing only",
          checked_state: false,
        },
        {
          label: "Horseback Safari",
          checked_state: false,
        },
        {
          label: "Mountain climbing & game drive safari",
          checked_state: false,
        },
        {
          label: "Wildlife photography",
          checked_state: false,
        },
        {
          label: "Golf & wildlife viewing",
          checked_state: false,
        },
        {
          label: "walking-safari",
          checked_state: false,
        },
        {
          label: "Beach holiday & game drive safari",
          checked_state: false,
        },
        {
          label: "Beach holiday only",
          checked_state: false,
        },
        {
          label: "Overland truck safari",
          checked_state: false,
        },
      ],
      checked_specialized_filter_options: [],
      checked_standard_filter_options: [],
      update_checklist: 0,
      check_private_filter: false,
      check_group_filter: false,
      update_private_check: 0,
      update_group_check: 0,
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

  computed: {
    ...mapGetters({
      filterTours: "tourController/filterTours",
      loading: "tourcard_loading",

      where_to_search_state: "tourController/where_to_search",
      start_date_state: "tourController/start_date",
      adults_number_state: "tourController/adults_number",
      children_number_state: "tourController/children_number",
    }),
  },
  watch: {
    //   filter when click private checkbox checked
    check_private_filter: function () {
      this.getFilterTours();
    },
    // filter when click group checkbox  checked
    check_group_filter: function () {
      this.getFilterTours();
    },

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

    this.where_to_search = this.where_to_search_state
    this.traveler_number = this.traveler_number_state
    this.start_date = this.start_date_state
    this.adults_number = this.adults_number_state
    this.children_number = this.children_number_state

    this.getFilterTours();
    this.traveler_number_calc();
  },
  methods: {
    updateCheckedFilterOptions() {
      let index = 0;
      this.checked_standard_filter_options = [];
      this.checked_specialized_filter_options = [];
      for (let i = 0; i < this.standard_check_list.length; i++) {
        if (this.standard_check_list[i].checked_state) {
          this.checked_standard_filter_options[
            index
          ] = this.standard_check_list[i];
          index++;
        }
      }
      index = 0;
      for (let i = 0; i < this.specialized_check_list.length; i++) {
        if (this.specialized_check_list[i].checked_state) {
          this.checked_specialized_filter_options[
            index
          ] = this.specialized_check_list[i];
          index++;
        }
      }
      this.getFilterTours();
    },

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

    traveler_number_calc() {
      let traveler = this.adults_number + this.children_number;
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else this.traveler_number = traveler + " Travelers";
    },

    setTravelerInit() {
      this.traveler_number = "";
      this.adults_number = 1;
      this.children_number = 0;
    },

    initStartDate() {
      this.start_date = "";
    },

    deleteFilterOption: function (e) {
      var lastChar = e.data.text[e.data.text.length - 1];
      var check_last_string = e.data.text.substr(e.data.text.length - 4, 4);
      if (lastChar == "$") {
        this.price_range = [100, 16000];
        this.getFilterTours();
        return;
      }
      if (check_last_string == "days") {
        this.day_range = [1, 30];
        this.getFilterTours();
        return;
      }
      switch (e.data.text) {
        case "Clear All Filters":
          this.checked_specialized_filter_options = [];
          this.checked_standard_filter_options = [];
          this.day_range = [1, 30];
          this.price_range = [100, 16000];
          this.check_private_filter = false;
          this.check_group_filter = false;
          this.update_private_check++;
          this.update_group_check++;
          this.initCheckList();

          break;
        case "Private":
          this.check_private_filter = false;
          this.update_private_check++;
          this.getFilterTours();

          break;

        case "Group":
          this.check_group_filter = false;
          this.update_group_check++;
          this.getFilterTours();

          break;
        default:
          this.removeFilterOptionItem(e.data.text);
          this.uncheckFilterCheckListItem(e.data.text);
          break;
      }
    },

    uncheckFilterCheckListItem(item) {
      for (let i = 0; i < this.standard_check_list.length; i++) {
        if (this.standard_check_list[i].label == item) {
          this.standard_check_list[i].checked_state = false;
        }
      }
      for (let i = 0; i < this.specialized_check_list.length; i++) {
        if (this.specialized_check_list[i].label == item) {
          this.specialized_check_list[i].checked_state = false;
        }
      }
      this.update_checklist++;
      this.getFilterTours();
    },

    removeFilterOptionItem(item) {
      for (let i = 0; i < this.checked_standard_filter_options.length; i++) {
        if (this.checked_standard_filter_options[i].label == item) {
          this.checked_standard_filter_options.splice(i, 1);
        }
      }

      for (let i = 0; i < this.checked_specialized_filter_options.length; i++) {
        if (this.checked_specialized_filter_options[i].label == item) {
          this.checked_specialized_filter_options.splice(i, 1);
        }
      }
    },

    initCheckList() {
      for (let i = 0; i < this.standard_check_list.length; i++) {
        this.standard_check_list[i].checked_state = false;
      }
      for (let i = 0; i < this.specialized_check_list.length; i++) {
        this.specialized_check_list[i].checked_state = false;
      }
      this.update_checklist++;

      this.getFilterTours();
    },

    getDayRangeChip() {
      let day_range_text = "";
      if (this.day_range[0] != 1) {
        if (this.day_range[1] == 30)
          day_range_text = "From " + this.day_range[0] + " days";
        else
          day_range_text =
          this.day_range[0] + " to " + this.day_range[1] + " days";
      } else if (this.day_range[1] != 30) {
        day_range_text = "Up to " + this.day_range[1] + " days";
      }
      return day_range_text;
    },

    getPriceRangeChip() {
      let price_range_text = "";
      if (this.price_range[0] != 100) {
        if (this.price_range[1] == 16000)
          price_range_text = "From " + this.price_range[0] + "$";
        else
          price_range_text =
          this.price_range[0] + " to " + this.price_range[1] + "$";
      } else if (this.price_range[1] != 16000) {
        price_range_text = "Up to " + this.price_range[1] + "$";
      }
      return price_range_text;
    },

    // filter tours function

    getFilterTours() {
      let group_filter = "";
      let level_filter = "";
      let specialized_filter = "";
      if (this.check_private_filter) {
        group_filter = "private";
        if (this.check_group_filter) group_filter = group_filter + "|group";
      } else if (this.check_group_filter) group_filter += "group";
      for (let i = 0; i < this.checked_standard_filter_options.length; i++) {
        level_filter += this.checked_standard_filter_options[i].label + "|";
      }
      if (level_filter != "") {
        level_filter = level_filter.substring(0, level_filter.length - 1);
      }
      for (let i = 0; i < this.checked_specialized_filter_options.length; i++) {
        specialized_filter +=
          this.checked_specialized_filter_options[i].label + "|";
      }

      if (specialized_filter != "") {
        specialized_filter = specialized_filter.substring(
          0,
          specialized_filter.length - 1
        );
      }

      this.$router
        .replace({
          query: {
            destination: "",
            min_price: this.price_range[0],
            max_price: this.price_range[1],
            min_day: this.day_range[0],
            max_day: this.day_range[1],
            group: group_filter,
            comfort: level_filter,
            focus: specialized_filter,
          },
        })
        .catch(() => {});

      this.$store
        .dispatch("tourController/getTourFilter", this.$route.query)
        .then(() => {})
        .catch(() => {});
    },
  },
};
</script>

<style>
@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-buttons/styles/material.css";
@import "@syncfusion/ej2-popups/styles/material.css";
@import "@syncfusion/ej2-vue-inputs/styles/material.css";

.e-radio-wrapper {
  margin-top: 18px;
}

li {
  list-style: none;
}
</style>
