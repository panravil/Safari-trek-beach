<template>
  <div id="our-tours">
    <div class="container">
      <div class="row">
        <div
          v-if="isSidebar"
          class="overlay-mobile"
          @click="isSidebar = false"
        ></div>
        <div
          class="mobile-filter-close bg-danger text-white py-3"
          v-bind:style="[
            isSidebar
              ? {
                  right: 0,
                }
              : '',
          ]"
        >
          <div
            class="position-relative d-flex justify-content-between align-items-center px-3"
            @click="isSidebar = false"
          >
            <h4 class="font-bold my-0">Filter Options</h4>
            <div class="filter-option-close">
              <span class="fa fa-times-circle-o display-5"></span>
            </div>
          </div>
        </div>
        <div
          class="mobile-filter-button bg-white text-white py-3"
          v-bind:style="[
            isSidebar
              ? {
                  right: 0,
                }
              : '',
          ]"
        >
          <button class="btn btn-danger w-100 h-100" @click="isSidebar = false">
            <span>Search Tours</span>
            <span class="fa fa-angle-right ms-2"></span>
          </button>
        </div>
        <div
          class="col-lg-3 col-xs-12 filters"
          v-bind:style="[
            isSidebar
              ? {
                  right: 0,
                }
              : '',
          ]"
        >
          <div class="position-relative">
            <div class="row gx-0 mobile-filter-traveler">
              <div
                class="col-md-12 mobile-filter position-relative"
                v-click-outside-dropdown="closeWhereToDropDown"
              >
                <div
                  class="bg-white h-100 align-items-center d-flex justify-content-between px-3 shadow-sm"
                >
                  <span class="fa fa-map-marker"></span>
                  <div class="w-100 px-2" @click="showWhereToDropdown(true)">
                    <input
                      v-model="where_to_search"
                      autocomplete="off"
                      placeholder="Where To"
                      type="text"
                      ref="whereTo"
                      class="w-100"
                      v-on:keyup.enter="searchEnter"
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
                <!-- <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"> -->
                <div
                  class="shadow where_to_dropdown left-0 w-100 bg-white mt-3 triangule-where"
                  v-if="visible_whereto_dropdown == true && search_result != ''"
                >
                  <div
                    class="bg-warning text-white p-2 text-left d-flex justify-content-between align-items-center"
                  >
                    Start typing or select below
                    <span
                      class="fa fa-times-circle-o"
                      style="font-size: 25px"
                      @click="visible_whereto_dropdown = false"
                    ></span>
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
                        <small>{{ item.description }}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </transition> -->
              </div>
              <div class="col-md-12 mobile-filter position-relative">
                <div
                  class="bg-white w-100 h-100 align-items-center d-flex justify-content-between px-3 shadow-sm"
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
                    v-if="start_date != '' && start_date != null"
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
                  class="bg-white w-100 h-100 align-items-center d-flex justify-content-between px-3 shadow-sm"
                  @click="showTravelerDropdown"
                >
                  <span class="fa fa-users"></span>
                  <div class="w-100 px-2">
                    <input
                      v-model="traveler_number"
                      autocomplete="off"
                      id="traveler_input"
                      type="text"
                      placeholder="Travelers"
                      class="w-100"
                      readonly
                    />
                  </div>
                  <span
                    v-if="traveler_number != ''"
                    class="fa fa-times-circle-o"
                    @click="setTravelerInit"
                  ></span>
                  <span v-else class="fa fa-times-circle-o invisible"></span>
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
                    class="py-2 px-3 mt-2 border-1 text-start d-flex justify-content-between align-items-center"
                  >
                    <div><strong>Adult</strong>: (16+ years)</div>
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
                    class="py-2 px-3 mt-2 border-1 text-start d-flex justify-content-between align-items-center"
                  >
                    <div><strong>Child</strong>: (0~15 years)</div>
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
                      class="btn btn-warning mx-3 my-3"
                      @click="setTravelerInfo"
                    >
                      Done
                    </button>
                  </div>
                </div>
                <!-- </transition> -->
              </div>
              <!-- <div class="col-md-12 mobile-filter mobile-filter-none">
              <button class="btn btn-danger w-100 h-100">
                <span>Search Tours</span>
                <span class="fa fa-angle-right ms-2"></span>
              </button>
            </div> -->
            </div>

            <h6 class="mt-5 fw-bold">Tour Price</h6>
            <div>
              <ejs-slider
                :min="10"
                :max="10000"
                :step="10"
                :type="'Range'"
                :enabled="!loading"
                v-model="price_range"
                :changed="getFilterToursBySlidePrice"
              ></ejs-slider>
              <div class="d-flex justify-content-between">
                <div>${{ price_range[0] }}</div>
                <div v-if="price_range[1] == 10000">${{ price_range[1] }}+</div>
                <div v-else>${{ price_range[1] }}</div>
              </div>
            </div>

            <h6 class="mt-5 fw-bold">Tour Days</h6>
            <ejs-slider
              :min="1"
              :max="30"
              :type="'Range'"
              :enabled="!loading"
              v-model="day_range"
              :changed="getFilterToursBySlideDay"
            ></ejs-slider>
            <div class="d-flex justify-content-between">
              <div v-if="day_range[0] == 1">{{ day_range[0] }} Day</div>
              <div v-else>{{ day_range[0] }} Days</div>
              <div v-if="day_range[1] == 30">{{ day_range[1] }}+ Days</div>
              <div v-else>{{ day_range[1] }} Days</div>
            </div>

            <h6 class="mt-5 fw-bold">Private or Group</h6>
            <p v-bind:key="'private' + update_private_check">
              <ejs-checkbox
                label="Private"
                name="default"
                v-model="check_private_filter"
                @change="groupChange(1)"
              ></ejs-checkbox>
            </p>
            <p v-bind:key="'group' + update_group_check">
              <ejs-checkbox
                label="Group"
                name="default"
                @change="groupChange(2)"
                v-model="check_group_filter"
              ></ejs-checkbox>
            </p>

            <div v-bind:key="update_checklist">
              <h6 class="mt-5 fw-bold">Standard</h6>
              <p
                v-for="check_data in standard_check_list"
                v-bind:key="check_data.title"
                class="standard"
              >
                <ejs-checkbox
                  :label="check_data.title"
                  v-model="check_data.checked_state"
                  v-on:change="updateCheckedFilterOptions"
                ></ejs-checkbox>
              </p>

              <h6 class="mt-5 fw-bold">Specialized</h6>
              <p
                v-for="check_data in specialized_check_list"
                v-bind:key="check_data.title"
              >
                <ejs-checkbox
                  :label="check_data.title"
                  v-model="check_data.checked_state"
                  v-on:change="updateCheckedFilterOptions"
                ></ejs-checkbox>
              </p>
            </div>
          </div>
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
          <div class="mobile-sidebar-trigger mt-3 text-center">
            <button class="btn btn-primary" @click="isSidebar = true">
              <span class="fa fa-filter me-2"></span> Search Filter
            </button>
          </div>
          <ul class="tagpill-group ps-0 mt-3">
            <span
              class="my-1"
              v-if="
                checked_specialized_filter_options.length != 0 ||
                checked_standard_filter_options.length != 0 ||
                day_range[0] != 1 ||
                day_range[1] != 30 ||
                this.price_range[0] != 10 ||
                this.price_range[1] != 10000 ||
                check_private_filter == true ||
                check_group_filter == true
              "
              >Selected Filters:</span
            >
            <ejs-chiplist
              id="tag-list-filter"
              cssClass="e-outline e-info"
              enableDelete="true"
              v-on:delete="deleteFilterOption"
            >
              <e-chips>
                <e-chip
                  :text="'To: ' + where_to_search_option"
                  v-if="
                    where_to_search_option != '' &&
                    where_to_search_option != null
                  "
                ></e-chip>
                <e-chip
                  :text="getPriceRangeChip()"
                  v-if="price_range[0] != 10 || price_range[1] != 10000"
                ></e-chip>
                <e-chip
                  :text="getDayRangeChip()"
                  v-if="day_range[0] != 1 || day_range[1] != 30"
                ></e-chip>
                <e-chip
                  text="Private"
                  v-if="check_private_filter == true"
                ></e-chip>
                <e-chip text="Group" v-if="check_group_filter == true"></e-chip>
                <e-chip
                  :text="item.title"
                  v-for="(item, index) in checked_standard_filter_options"
                  v-bind:key="index"
                ></e-chip>
                <e-chip
                  :text="item.title"
                  v-for="(item, index) in checked_specialized_filter_options"
                  v-bind:key="index"
                ></e-chip>
                <e-chip
                  v-if="
                    checked_specialized_filter_options.length != 0 ||
                    checked_standard_filter_options.length != 0 ||
                    day_range[0] != 1 ||
                    day_range[1] != 30 ||
                    this.price_range[0] != 10 ||
                    this.price_range[1] != 10000 ||
                    check_private_filter == true ||
                    check_group_filter == true ||
                    where_to_search_option != ''
                  "
                  text="Clear All Filters"
                  cssClass="e-outline e-danger"
                ></e-chip>
              </e-chips>
            </ejs-chiplist>
          </ul>
          <h6 class="my-3 fw-bold" v-if="filterTours != null && !loading">
            <span v-if="filterTours.total_tours > 1"
              >Showing {{ filterTours.tour_show_from }} -
              {{ filterTours.tour_show_to }} of
              {{ filterTours.total_tours }} results</span
            >
            <span v-if="filterTours.total_tours == 1"
              >Showing 1 of 1 result</span
            >
          </h6>
          <h6 v-else class="my-3 fw-bold">Searching...</h6>
          <div class="row gx-0" v-if="loading">
            <div
              class="col-md-6 col-xs-12"
              v-for="(item, index) in 10"
              v-bind:key="'skelecton' + index"
            >
              <TourCardSkelecton></TourCardSkelecton>
            </div>
          </div>
          <div
            class="row gx-0"
            v-else-if="filterTours != null && filterTours.tours.length > 0"
          >
            <div
              class="col-md-6 col-xs-12"
              v-for="(item, index) in filterTours.tours"
              v-bind:key="'filter' + index"
            >
              <TourCard
                :tourData="item"
                :where_to_search="where_to_search"
                :traveler_number="traveler_number"
                :start_date="start_date != null ? start_date.toString() : ''"
                :adults_number="adults_number"
                :children_number="children_number"
              ></TourCard>
            </div>
            <!-- <div class="ourtours-pagination my-3">
              <Pagination
                v-model="current_ourtour_page"
                :records="filterTours.total_tours"
                :per-page="ourtour_perpage"
                :options="pagination_options"
              />
            </div> -->

            <div class="ourtours-pagination my-3">
              <paginate
                v-model="current_ourtour_page"
                :page-count="filterTours.pages"
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
          <p
            v-else-if="filterTours != null && filterTours.tours.length == 0"
            class="text-center mt-5 nosafari-search"
          >
            <span>Found 0 Safari Tours</span>
          </p>
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
// import Pagination from "vue-pagination-2";

import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);

import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);

import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(RadioButtonPlugin);

import { ChipListPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ChipListPlugin);

import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "OurTours",
  components: {
    TourCard,
    VueNumericInput,
    Datepicker,
    TourCardSkelecton,
    // Pagination,
  },
  data() {
    return {
      type: "Range",
      price_range: [10, 10000],
      day_range: [1, 30],
      type: "Range",
      read_more: false,

      where_to_search: "",
      traveler_number: "",
      start_date: "",
      adults_number: 0,
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

      search_result: [],
      isSidebar: false,
      standard_check_list: [],
      specialized_check_list: [],

      checked_specialized_filter_options: [],
      checked_standard_filter_options: [],
      where_to_search_option: "",
      update_checklist: 0,
      check_private_filter: false,
      check_group_filter: false,
      update_private_check: 0,
      update_group_check: 0,

      pagination_options: {
        chunk: 5,
        edgeNavigation: true,
      },
      current_ourtour_page: 1,
      ourtour_perpage: 40,

      page: 1,

      page_from_url: 0,

      where_to_list: [],
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
    router_query: function () {
      return this.$route.query;
    },
    destination_id: function () {
      var id = this.$route.params.destination;
      if (id != undefined) {
        return id.slice(0, id.length);
      } else {
        return "";
      }
    },
    single_id: function () {
      var id = this.$route.params.single;
      if (id != undefined) {
        return id.slice(0, id.length);
      } else {
        return "";
      }
    },
    ...mapGetters({
      filterTours: "tourController/filterTours",
      loading: "tourcard_loading",

      where_to_search_state: "tourController/where_to_search",
      start_date_state: "tourController/start_date",
      adults_number_state: "tourController/adults_number",
      children_number_state: "tourController/children_number",
      traveler_number_state: "tourController/traveler_number",

      query_instore: "tourController/query_instore",

      tourLevel: "tourController/tourLevel",
      tourFocus: "tourController/tourFocus",
      where_to_list_state: "tourController/tourActivity",
    }),
  },

  watch: {
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

    current_ourtour_page: function (newValue) {
      // this.$router.push('/tour-operators/page/' + newValue).catch(() =>{})
      this.page = newValue;
      this.getFilterTours();
    },

    start_date: function (newValue) {
      this.saveFormtoStore();
    },

    adults_number: function (newValue) {
      this.saveFormtoStore();
    },

    children_number: function (newValue) {
      this.saveFormtoStore();
    },
  },

  async created() {
    document.title = "Search Tours of Safari-Trek-Beach.com";

    this.where_to_search = this.where_to_search_state;
    this.traveler_number = this.traveler_number_state;
    this.start_date = this.start_date_state;
    this.adults_number = this.adults_number_state;
    this.children_number = this.children_number_state;

    if (this.where_to_search != "") {
      this.where_to_search_option = this.where_to_search;
    }

    this.$store.commit("tourController/initFilterData")

    await this.getTourFocus();
    await this.getTourLevel();
    await this.getTourActivity();
    this.traveler_number_calc();

    // this is for conversion from url query to normal text for api request

    let temp_query = this.router_query;

    // console.log('temp query', temp_query )

    // let possible_single = [];

    // if ( temp_query['group'] == undefined ) possible_single.push('group')
    // if ( temp_query['comfort'] == undefined ) possible_single.push('comfort')
    // if ( temp_query['focus'] == undefined ) possible_single.push('focus')

    // console.log('possible', possible_single)

    var destination_url = this.destination_id;
    var single_url = this.single_id;

    if (destination_url !== undefined && destination_url !== "") { //if first param exists, i.e. if one of params exists at least

      // Destination search if first string is the element of the pre-determined activity list
      let destination_item = this.where_to_list.find(function (el) {
        return el.input_id == destination_url;
      });

      if (destination_item != undefined) {
        
        // if found, to query for api request, append this element
        temp_query = Object.assign(
          { destination: destination_item.title },
          temp_query
        );

        if (single_url != "") {  //if the second single param is not empty, check what it is and append
          let single = [];
          single = this.checkSingleParam(single_url);

          switch (single[0]) {
            case 'group':
              temp_query = Object.assign(
                { group: single[1] },
                temp_query
              );
              break;

            case 'comfort':
              temp_query = Object.assign(
                { comfort: single[1] },
                temp_query
              );
              break;

            case 'focus':
              temp_query = Object.assign(
                { focus: single[1] },
                temp_query
              );
              break;

            case 'day':
              temp_query = Object.assign(
                { min_day: single[1] },
                { max_day: single[1] },
                temp_query
              );
              break;
          
            default:
              break;

          }
        }

      } else {

        //if can not found -  (two possible case, if typed input that not in the list, 
        //                                     or if group, comfort or focus single item)

        // so first check if it is single param...
        // if is single param and single_id is empty => destination is empty and single param estimate...

        if ( single_url != '' ) {

          let single = this.checkSingleParam(single_url);

          switch (single[0]) {
            case 'group':
              temp_query = Object.assign(
                { group: single[1] },
                temp_query
              );
              break;

            case 'comfort':
              temp_query = Object.assign(
                { comfort: single[1] },
                temp_query
              );
              break;

            case 'focus':
              temp_query = Object.assign(
                { focus: single[1] },
                temp_query
              );
              break;

            case 'day':
              temp_query = Object.assign(
                { min_day: single[1] },
                { max_day: single[1] },
                temp_query
              );
              break;
          
            default:
              break;

          }

          // append to temp query

          let temp_destination = this.destination_id.split("_").join(" ");
          temp_destination = this.destination_id.split("~").join("&");
          temp_query = Object.assign(
            { destination: temp_destination },
            temp_query
          );

        } else {

          let single = this.checkSingleParam(destination_url) 

          if ( single != null ) {
            // if single param, append this to temp query

            switch (single[0]) {
              case 'group':
                temp_query = Object.assign(
                  { group: single[1] },
                  temp_query
                );
                break;

              case 'comfort':
                temp_query = Object.assign(
                  { comfort: single[1] },
                  temp_query
                );
                break;

              case 'focus':
                temp_query = Object.assign(
                  { focus: single[1] },
                  temp_query
                );
                break;

              case 'day':
              temp_query = Object.assign(
                { min_day: single[1] },
                { max_day: single[1] },
                temp_query
              );
              break;
            
              default:
                break;

            }
          } else {
            // if not single parameter, detect it as a custom typed destination
            let temp_destination = this.destination_id.split("_").join(" ");
            temp_destination = this.destination_id.split("~").join("&");
            temp_query = Object.assign(
              { destination: temp_destination },
              temp_query
            );
          }

        }

        
      }
    } else { // if no params in URL ...
      this.where_to_search = "";
      this.where_to_search_option = "";
      this.saveFormtoStore();
    }

    if (temp_query["comfort"] !== undefined) {
      temp_query["comfort"] = temp_query["comfort"].split("_").join(" ");
      temp_query["comfort"] = temp_query["comfort"].split("@").join("+");
    }

    // console.log('temp after', temp_query)

    this.$store.dispatch("tourController/setQuery", temp_query);

    this.setCurrentCheck();
  },

  methods: {
    async getTourActivity() {
      await this.$store
        .dispatch("tourController/getTourActivity")
        .then(() => {
          let first_activity = [
            {
            "title": "Serengeti National Park",
            "input_id": "serengeti-national-park",
            },
            {
            "title": "Mount Kilimanjaro",
            "input_id": "mount-kilimanjaro",
            },
            {
            "title": "Zanzibar",
            "input_id": "zanzibar",
            },
            {
            "title": "Ngorongoro Crater",
            "input_id": "ngorongoro-crater",
            },
            {
            "title": "Tarangire National Park",
            "input_id": "tarangire-national-park",
            },
            {
            "title": "Ruaha National Park",
            "input_id": "ruaha-national-park",
            },
          ];

          let ar = this.where_to_list_state;

          for(var i=0; i < ar.length; i++) {
            if(ar[i].title == "Serengeti National Park" || ar[i].title == "Mount Kilimanjaro" || ar[i].title == "Ngorongoro Crater" || ar[i].title == "Tarangire National Park" || ar[i].title == "Zanzibar" || ar[i].title == "Ruaha National Park")
            {
                ar.splice(i,1);
            }
          }
          this.where_to_list = first_activity.concat(ar);
          this.search_result = this.where_to_list;
        });
    },

    async getTourFocus() {
      await this.$store.dispatch("tourController/getTourFocus").then(() => {
        this.specialized_check_list = this.tourFocus;
        for (let i = 0; i < this.tourFocus.length; i++) {
          this.specialized_check_list[i].checked_state = false;
        }
      });
    },

    async getTourLevel() {
      await this.$store.dispatch("tourController/getTourLevel").then(() => {
        this.standard_check_list = this.tourLevel;
        for (let i = 0; i < this.tourLevel.length; i++) {
          this.standard_check_list[i].checked_state = false;
        }
      });
    },

    setCurrentCheck() {
      var comfort_list =
        this.query_instore["comfort"] !== undefined
          ? this.query_instore.comfort.split("|")
          : [];
      var focus_list =
        this.query_instore["focus"] !== undefined
          ? this.query_instore.focus.split("|")
          : [];
      var destination =
        this.query_instore["destination"] !== undefined
          ? this.query_instore.destination
          : this.where_to_search;
      var group =
        this.query_instore["group"] !== undefined
          ? this.query_instore.group
          : "";
      var page =
        this.query_instore["p"] !== undefined ? this.query_instore.p : "";

      if (page != "") {
        // console.log("page", page);
        this.page_from_url = parseInt(page);
      }

      if (group != "") {
        if (group == "group") {
          this.check_group_filter = true;
        } else {
          this.check_private_filter = true;
        }
        this.update_group_check++;
        this.update_private_check++;
      }

      this.price_range = [
        this.query_instore.min_price != undefined
          ? this.query_instore.min_price
          : 10,
        this.query_instore.max_price != undefined
          ? this.query_instore.max_price
          : 10000,
      ];

      this.day_range = [
        this.query_instore.min_day != undefined
          ? this.query_instore.min_day
          : 1,
        this.query_instore.max_day != undefined
          ? this.query_instore.max_day
          : 30,
      ];

      this.where_to_search = destination;
      this.where_to_search_option = destination;

      for (let i = 0; i < this.standard_check_list.length; i++) {
        if (comfort_list.includes(this.standard_check_list[i].title)) {
          this.standard_check_list[i].checked_state = true;
        }
      }

      for (let i = 0; i < this.specialized_check_list.length; i++) {
        if (focus_list.includes(this.specialized_check_list[i].input_id)) {
          this.specialized_check_list[i].checked_state = true;
        }
      }

      this.update_checklist++;

      this.updateCheckedFilterOptions();
    },

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
      this.page = 1;
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
      this.where_to_search_option = this.where_to_search;
      this.visible_whereto_dropdown = false;
      this.page = 1;

      this.saveFormtoStore();

      this.getFilterTours();
    },

    saveFormtoStore() {
      let searchData = {};
      searchData = {
        where_to_search: this.where_to_search,
        start_date: this.start_date,
        adults_number: this.adults_number,
        children_number: this.children_number,
      };

      this.$store.dispatch("tourController/setSearchData", searchData);
    },

    setInitWhereTo() {
      this.where_to_search = "";
      this.where_to_search_option = "";
      this.page = 1;

      this.saveFormtoStore();

      this.getFilterTours();
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
      else if (traveler == 0) this.traveler_number = "";
      else this.traveler_number = traveler + " Travelers";
    },

    setTravelerInit() {
      this.traveler_number = "";
      this.adults_number = 0;
      this.children_number = 0;
      this.saveFormtoStore();
    },

    initStartDate() {
      this.start_date = "";
      this.saveFormtoStore();
    },

    deleteFilterOption: function (e) {
      var lastChar = e.data.text[e.data.text.length - 1];
      var check_first_string = e.data.text.substr(0, 4);
      var check_last_string = e.data.text.substr(e.data.text.length - 4, 4);
      if (lastChar == "$") {
        this.price_range = [10, 10000];
        this.page = 1;
        this.getFilterTours();
        return;
      }
      if (check_first_string == "To: ") {
        this.where_to_search = "";
        this.where_to_search_option = "";
        this.page = 1;
        this.getFilterTours();
        return;
      }
      if (check_last_string == "days") {
        this.day_range = [1, 30];
        this.page = 1;
        this.getFilterTours();
        return;
      }
      switch (e.data.text) {
        case "Clear All Filters":
          this.checked_specialized_filter_options = [];
          this.checked_standard_filter_options = [];
          this.day_range = [1, 30];
          this.price_range = [10, 10000];
          this.check_private_filter = false;
          this.check_group_filter = false;
          this.where_to_search = "";
          this.where_to_search_option = "";
          this.adults_number = 0;
          this.children_number = 0;
          this.traveler_number = "";
          this.start_date = "";
          let searchData = {
            where_to_search: "",
            start_date: "",
            adults_number: 0,
            children_number: 0,
            traveler_number: "",
          };
          this.$store.dispatch("tourController/setSearchData", searchData);
          this.update_private_check++;
          this.update_group_check++;
          this.initCheckList();

          break;

        case "Private":
          this.check_private_filter = false;
          this.update_private_check++;
          this.page = 1;
          this.getFilterTours();

          break;

        case "Group":
          this.check_group_filter = false;
          this.update_group_check++;
          this.page = 1;
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
        if (this.standard_check_list[i].title == item) {
          this.standard_check_list[i].checked_state = false;
        }
      }
      for (let i = 0; i < this.specialized_check_list.length; i++) {
        if (this.specialized_check_list[i].title == item) {
          this.specialized_check_list[i].checked_state = false;
        }
      }
      this.update_checklist++;
      this.page = 1;
      this.getFilterTours();
    },

    removeFilterOptionItem(item) {
      for (let i = 0; i < this.checked_standard_filter_options.length; i++) {
        if (this.checked_standard_filter_options[i].title == item) {
          this.checked_standard_filter_options.splice(i, 1);
        }
      }

      for (let i = 0; i < this.checked_specialized_filter_options.length; i++) {
        if (this.checked_specialized_filter_options[i].title == item) {
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

      this.page = 1;
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

      if ( this.day_range[0] == this.day_range[1]) {
        day_range_text = ( this.day_range[0] == 1 ) ? "1 day" : this.day_range[0] + " days";
      }
      return day_range_text;
    },

    getPriceRangeChip() {
      let price_range_text = "";
      if (this.price_range[0] != 10) {
        if (this.price_range[1] == 10000)
          price_range_text = "From " + this.price_range[0] + "$";
        else
          price_range_text =
            this.price_range[0] + " to " + this.price_range[1] + "$";
      } else if (this.price_range[1] != 10000) {
        price_range_text = "Up to " + this.price_range[1] + "$";
      }

      if ( this.price_range[0] == this.price_range[1]) {
        price_range_text = this.price_range[0] + "$";
      }

      return price_range_text;
    },

    groupChange(index) {
      if (index == 1) {
        if (this.check_private_filter) {
          this.check_group_filter = false;
          this.update_group_check++;
        }
        this.page = 1;
        this.getFilterTours();
        return;
      }
      if (index == 2) {
        if (this.check_group_filter) {
          this.check_private_filter = false;
          this.update_private_check++;
        }
        this.page = 1;
        this.getFilterTours();
      }
    },

    searchEnter() {
      this.where_to_search_option = this.where_to_search;

      this.saveFormtoStore();

      this.getFilterTours();
    },

    // filter tours function

    getFilterToursBySlidePrice() {
      // console.log('changed priceeeeee')
      this.page = 1;
      this.getFilterTours();
    },

    getFilterToursBySlideDay() {
      // console.log('changed day')
      this.page = 1;
      this.getFilterTours();
    },

    checkSingleParam(single) {

      if ( single == 'group' || single == 'private' ) {

        return ['group', single]

      }

      // this is the single day ...

      if ( single.substr(single.length - 4) == '-Day' ) {

        return ['day', single.substring(0, single.length - 4)]

      }

      // focus check ...

      let focus = this.tourFocus.find(function (el) {
        return el.input_id == single;
      });

      if ( focus != undefined ) {
        return ['focus', focus.input_id]
      }

      //level check ...

      single = single.split("_").join(" ");
      single = single.split("@").join("+");

      let level = this.tourLevel.find(function (el) {
        return el.title == single;
      });

      if ( level != undefined ) {
        return ['comfort', level.title]
      }

      return [];
    },

    async getFilterTours() {
      let group_filter = "";
      let level_filter = "";
      let specialized_filter = "";

      let focus_for_url = "";

      let group_number = 0;
      let comfort_number = 0;
      let focus_number = 0;
      let day_number = 0;

      if (this.check_private_filter) {
        group_filter = "private";
        group_number = 1;
      } else if (this.check_group_filter) {
        group_filter = "group";
        group_number = 1;
      }

      if ( this.day_range[0] == this.day_range[1] ) {
        day_number = 1;
      }

      comfort_number = this.checked_standard_filter_options.length;
      focus_number = this.checked_specialized_filter_options.length;

      for (let i = 0; i < this.checked_standard_filter_options.length; i++) {
        level_filter += this.checked_standard_filter_options[i].title + "|";
      }

      if (level_filter != "") {
        level_filter = level_filter.substring(0, level_filter.length - 1);
      }

      for (let i = 0; i < this.checked_specialized_filter_options.length; i++) {
        specialized_filter +=
          this.checked_specialized_filter_options[i].title + "|";
        focus_for_url +=
          this.checked_specialized_filter_options[i].input_id + "|";
      }

      if (specialized_filter != "") {
        specialized_filter = specialized_filter.substring(
          0,
          specialized_filter.length - 1
        );
      }

      if (focus_for_url != "") {
        focus_for_url = focus_for_url.substring(0, focus_for_url.length - 1);
      }

      // console.log('focusurl', focus_for_url)

      let query = {
        destination: this.where_to_search,
        min_price: this.price_range[0],
        max_price: this.price_range[1],
        min_day: this.day_range[0],
        max_day: this.day_range[1],
        group: group_filter,
        comfort: level_filter,
        focus: specialized_filter,
        p: this.page,
      };

      //for URL query

      let url_query = {
        destination: this.where_to_search,
        min_price: this.price_range[0],
        max_price: this.price_range[1],
        min_day: this.day_range[0],
        max_day: this.day_range[1],
        group: group_filter,
        comfort: level_filter,
        focus: focus_for_url,
        p: this.page,
      };

      if (this.page_from_url > 1) {
        query.p = this.page_from_url;
        url_query.p = this.page_from_url;
        this.page_from_url = 0;
      }

      // let filtered_query = query

      for (var key in query) {
        if (query[key] === "") {
          delete query[key];
        }
      }

      this.$store.dispatch("tourController/setQuery", query);

      // let filtered_query = query

      for (var key in url_query) {
        if (url_query[key] === "") {
          delete url_query[key];
        }
      }

      // console.log('url query', url_query)

      if (url_query["min_price"] == 10) {
        delete url_query["min_price"];
      }

      if (url_query["max_price"] == 10000) {
        delete url_query["max_price"];
      }

      if (url_query["min_day"] == 1) {
        delete url_query["min_day"];
      }

      if (url_query["max_day"] == 30) {
        delete url_query["max_day"];
      }

      if (url_query["destination"] != undefined) {
        let destination_item = this.where_to_list.find(function (el) {
          return el.title == url_query["destination"];
        });

        if (destination_item != undefined) {
          url_query["destination"] = destination_item.input_id;
        } else {
          url_query["destination"] = url_query["destination"]
            .split(" ")
            .join("_");
          url_query["destination"] = url_query["destination"]
            .split("&")
            .join("~");
        }
      }

      if (url_query["comfort"] !== undefined) {
        url_query["comfort"] = url_query["comfort"].split(" ").join("_");
        url_query["comfort"] = url_query["comfort"].split("+").join("@");
      }

      if (url_query["p"] !== undefined) {
        if (url_query["p"] == 1) {
          delete url_query["p"];
        }
      }

      let destination_params =
        url_query["destination"] != undefined ? url_query["destination"] : "";

      if (url_query["destination"] !== undefined) {
        delete url_query["destination"];
      }

      let single = "";  //this is for single router params

      switch (true) {
        case (focus_number == 1):
          single = url_query["focus"];
          delete url_query["focus"];
          break;
      
        case (group_number == 1):
          single = url_query["group"];
          delete url_query["group"];
          break;

        case (comfort_number == 1):
          single = url_query["comfort"];
          delete url_query["comfort"];
          break;

        case (day_number == 1):
          single = url_query["min_day"] + '-Day';

          if ( url_query["min_day"] != undefined )
            delete url_query["min_day"];
          if ( url_query["max_day"] != undefined )
            delete url_query["max_day"];

          break;


        default:
          break;
      }

      if (destination_params == "" && single == "") { // query only
        this.$router
          .replace({
            name: "Our Tours",
            query: url_query,
          })
          .catch(() => {});
      } else {

        let params = {};
        if ( destination_params != "" ) {
          params["destination"] = destination_params;
        }
        if ( single != "" ) {
          params["single"] = single;
        }

        // console.log('parmas', params)

        this.$router
          .replace({
            name: "Our Tours2",
            params: params,
            query: url_query,
          })
          .catch(() => {});
      } // with params amd query

      await this.$store
        .dispatch("tourController/getTourFilter", query)
        .then(() => {
          this.current_ourtour_page = parseInt(this.filterTours.page);
        })
        .catch(() => {});

      // console.log("???", "");
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

.pagination a {
  outline: none;
}

p.standard .e-checkbox-wrapper .e-frame + .e-label,
.e-css.e-checkbox-wrapper .e-frame + .e-label {
  text-transform: capitalize;
}

.e-chip-text::first-letter {
  text-transform: uppercase;
}

.ourtours-pagination {
  display: flex;
  justify-content: center;
}

.nosafari-search {
  margin-top: 30px;
  line-height: 1px;
  background-color: #8f8e8e;
}

.nosafari-search span {
  background-color: #f2f2f2;
  font-size: 20px;
  padding: 10px 20px;
}

/* .e-control-wrapper.e-slider-container .e-slider .e-handle {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.e-control-wrapper.e-slider-container.e-horizontal .e-handle {
  margin-left: -12px;
  top: calc(50% - 12px);
  cursor: pointer;
}

.e-control-wrapper.e-slider-container.e-horizontal .e-slider-track,
.e-control-wrapper.e-slider-container.e-horizontal .e-range {
  height: 4px;
  top: calc(50% - 2px);
}

.e-control-wrapper.e-slider-container.e-horizontal .e-slider {
  height: 4px;
  top: calc(50% - 2px);
}

.e-control-wrapper.e-slider-container.e-disabled .e-slider .e-handle {
  transform: scale(1.2) !important;
} */

@media (max-width: 450px) {
  .mobile-filter-traveler {
    margin-left: -20px;
    margin-right: -20px;
  }
}
</style>
