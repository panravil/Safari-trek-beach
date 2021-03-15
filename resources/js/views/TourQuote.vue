<template>
  <div class="tour-quote-page">
    <div class="container">
      <section>
        <header class="section-header mt-5">
          <h3>GET A FREE QUOTE</h3>
        </header>

        <div class="card p-4">
          <form @submit.prevent="delay">
            <h2 class="mt-3">Fill the form so Operator can contact you!</h2>
            <h6 class="text-danger">
              <span class="fa fa-smile-o me-2"></span>We advice you to compare
              quote from 3 Tour Operators.
            </h6>
            <div class="mt-3 row quote">
              <div class="col-lg-6 col-sm-12 mt-3">
                <ejs-datepicker
                  :placeholder="waterMark"
                  v-model="start_date"
                  ref="dateObj"
                  :focus="onFocus"
                  :allowEdit="false"
                  required
                ></ejs-datepicker>
              </div>
              <div
                class="col-lg-6 col-sm-12 mt-3"
                v-click-outside-dropdown="closeTravelerDropdown"
              >
                <div @click="showTravelerDropdown">
                  <ejs-textbox
                    floatLabelType="Auto"
                    autocomplete="off"
                    type="text"
                    placeholder="Travellers"
                    v-model="traveler_number"
                    :readOnly="true"
                    required
                  ></ejs-textbox>
                </div>
                <!-- <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"> -->
                <div
                  v-if="visible_traveler_dropdown"
                  class="traveler-dropdown left-0 bg-white mt-3 triangule-where shadow"
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
                    <div><strong>Adult </strong>(16+ yrs):</div>
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
                    <div><strong>Child </strong>(0~15 yrs):</div>
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
              <div class="col-lg-6 col-sm-12 mt-3">
                <ejs-textbox
                  v-model="fullname"
                  floatLabelType="Auto"
                  type="text"
                  placeholder="Full Name"
                  required
                ></ejs-textbox>
              </div>
              <div class="col-lg-6 col-sm-12 mt-3">
                <ejs-textbox
                  v-model="email"
                  floatLabelType="Auto"
                  type="email"
                  placeholder="Email Address"
                  required
                ></ejs-textbox>
              </div>
              <div class="col-lg-6 col-sm-12 mt-3">
                <ejs-dropdownlist
                  v-model="selected_country"
                  :dataSource="countryData"
                  :fields="fields"
                  placeholder="Country"
                  required
                ></ejs-dropdownlist>
              </div>
              <div class="col-lg-6 col-sm-12 mt-3">
                <ejs-textbox
                  v-model="mobileno"
                  floatLabelType="Auto"
                  type="tel"
                  placeholder="Mobile Number"
                  required
                ></ejs-textbox>
              </div>
              <div class="col-lg-12 col-sm-12 mt-3">
                <ejs-textbox
                  v-model="message"
                  :multiline="true"
                  floatLabelType="Auto"
                  type="text"
                  placeholder="Your Message"
                  required
                ></ejs-textbox>
              </div>
              <div class="col-lg-12 col-sm-12 mt-3">
                <ejs-checkbox
                  label="Save Details For The Next Quote Request."
                  v-model="remember_details"
                ></ejs-checkbox>
              </div>
            </div>
            <h5 class="fw-bold mt-5">Additional activities:</h5>
            <div v-bind:key="update_checkbox">
              <div class="d-flex align-items-center mt-3 additional-activity">
                <div>
                  <ejs-checkbox
                    label="Zanzibar"
                    v-model="zanzibar_activity"
                  ></ejs-checkbox>
                </div>
                <div class="ms-3" v-if="zanzibar_activity">
                  <ejs-dropdownlist
                    v-model="zanzibar_days"
                    :dataSource="dayList"
                    placeholder="No. of Days"
                  ></ejs-dropdownlist>
                </div>
              </div>
              <div class="d-flex align-items-center mt-3 additional-activity">
                <div>
                  <ejs-checkbox
                    label="Kilimanjaro"
                    v-model="kiliman_activity"
                  ></ejs-checkbox>
                </div>
                <div class="ms-3" v-if="kiliman_activity">
                  <ejs-dropdownlist
                    v-model="kilimanjaro_days"
                    :dataSource="dayList"
                    placeholder="No. of Days"
                  ></ejs-dropdownlist>
                </div>
              </div>
              <div class="d-flex align-items-center mt-3 additional-activity">
                <div>
                  <ejs-checkbox
                    label="Safari"
                    v-model="safari_activity"
                  ></ejs-checkbox>
                </div>
                <div class="ms-3" v-if="safari_activity">
                  <ejs-dropdownlist
                    v-model="safari_days"
                    :dataSource="dayList"
                    placeholder="No. of Days"
                  ></ejs-dropdownlist>
                </div>
              </div>
            </div>
            <div class="text-right w-100 mt-5 d-flex justify-content-end">
              <button type="submit" class="btn btn-danger" :disabled="disabled">
                Send Request <span class="fa fa-angle-right ms-2"></span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(TextBoxPlugin);

import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(DropDownListPlugin);
import countryData from "../components/country_list";

import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);

import { enableRipple } from "@syncfusion/ej2-base";

enableRipple(true);

import { mapState, mapGetters, mapMutations } from "vuex";

import VueNumericInput from "vue-numeric-input";

export default {
  name: "TourQuote",
  components: {
    VueNumericInput,
  },
  data() {
    return {
      waterMark: "Select a date",
      countryData: countryData.countryListAllIsoData,
      fields: {
        text: "name",
        value: "code",
      },
      dayList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      zanzibar_activity: false,
      kiliman_activity: false,
      safari_activity: false,

      zanzibar_days: 0,
      kilimanjaro_days: 0,
      safari_days: 0,

      traveler_number: "",
      visible_traveler_dropdown: false,
      adults_number: 0,
      children_number: 0,
      fullname: "",
      selected_country: "US",
      message: "",
      email: "",
      mobileno: "+1",
      start_date: "",

      remember_details: true,

      results: {},

      disabled: false,
      timeout: null,
      update_checkbox: 0,
    };
  },
  computed: {
    ...mapGetters({
      where_to_search_state: "tourController/where_to_search",
      start_date_state: "tourController/start_date",
      adults_number_state: "tourController/adults_number",
      children_number_state: "tourController/children_number",
      
      detailData: "tourController/detailData",

      package_data: "tourController/quoteData",

      package_id: "tourController/package_id",
      request_status: "request_status",

      user_id: "tourController/user_id",
    }),
  },

  watch: {
    selected_country: function () {
      if (this.selected_country != undefined && this.selected_country != "") {
        this.mobileno = countryData.calling_code.find((obj) => {
          return obj.code == this.selected_country;
        }).dial_code;
      }
    },
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

  async created() {
    this.traveler_number = this.traveler_number_state;
    this.start_date = this.start_date_state;
    this.adults_number = this.adults_number_state;
    this.children_number = this.children_number_state;

    this.traveler_number_calc();
    await axios.get("https://extreme-ip-lookup.com/json/").then((response) => {
      this.selected_country = response.data.countryCode;
      this.mobileno = countryData.calling_code.find((obj) => {
        return obj.code == this.selected_country;
      }).dial_code;
    });

    if ( this.detailData != null ) {

      if ( this.detailData.fullname != undefined ) {
        this.fullname = this.detailData.fullname;
      }

      if ( this.detailData.emailAddress != undefined ) {
        this.email = this.detailData.emailAddress;
      }

      if ( this.detailData.mobileno != undefined ) {
        if (this.detailData.mobileno.includes(this.mobileno)) {
          this.mobileno = this.detailData.mobileno;
        }
      }

      if ( this.detailData.message != undefined ) {
        this.message = this.detailData.message;
      }

      this.zanzibar_days = this.detailData.zanzibar_days;
      this.kilimanjaro_days = this.detailData.kilimanjaro_days;
      this.safari_days = this.detailData.safari_days;

      if ( this.safari_days != undefined ) {
        this.safari_activity = true;
        this.update_checkbox ++;
      }
      if ( this.kilimanjaro_days != undefined ) {
        this.kiliman_activity = true;
        this.update_checkbox ++;
      }
      if ( this.zanzibar_days != undefined ) {
        this.zanzibar_activity = true;
        this.update_checkbox ++;
      }
    }
  },

  metaInfo() {
      return {
          title: `Request a Quote for the Tour ${this.package_data.no_of_day}-Day ${this.package_data.title} - Safari-Trek-Beach.com`,
          meta: [
              {name: 'description', content: 'We strive to ensure that the number of women employed in tourism sector improves. We encourage tour companies to employ more women. One among our raking factors for tour companies is the number of women they have employed.'},
              {property: 'og:title', content: 'Safari-Trek-Beach.com'},    
              {name: 'twitter:title', content: 'Safari-Trek-Beach.com'},
              // {property: 'og:image', content: this.blogData.post_inner_image},
              // {property: 'twitter:image', content: this.blogData.post_inner_image}, 
              // {property: 'og:url', content: window.location.href}, 
          ]
      }
  },

  methods: {
    traveler_number_calc() {
      let traveler = this.adults_number + this.children_number;
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else if (traveler == 0) this.traveler_number = "";
      else this.traveler_number = traveler + " Travelers";
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

    onFocus: function (args) {
      this.$refs.dateObj.show();
    },

    delay() {
      this.disabled = true;

      // Re-enable after 5 seconds
      this.timeout = setTimeout(() => {
        this.disabled = false;
      }, 5000);

      this.tourQuote();
    },

    tourQuote() {
      if ( this.safari_activity == false ) {
        this.safari_days = undefined;
      }

      if ( this.kiliman_activity == false ) {
        this.kilimanjaro_days = undefined;
      }

      if ( this.zanzibar_activity == false ) {
        this.zanzibar_days = undefined;
      }

      let quoteData = {};

      quoteData = {
        travellers: this.adults_number + this.children_number,
        adult: this.adults_number,
        children: this.children_number,
        date: this.start_date,
        fullname: this.fullname,
        emailAddress: this.email,
        country: this.selected_country,
        mobileno: this.mobileno,
        message: this.message,
        zanzibar_days: this.zanzibar_days,
        kilimanjaro_days: this.kilimanjaro_days,
        safari_days: this.safari_days,
        package_id: this.package_id,
        user_id: this.user_id,
      };

      quoteData["country"] = countryData.calling_code.find((obj) => {
        return obj.code == this.selected_country;
      }).name;

      // console.log('tag', quoteData)

      this.$store
        .dispatch("operatorController/tourQuote", quoteData)
        .then(() => {
          if (this.request_status == true) {
            // this.$notify({
            //   group: 'success',
            //   title: 'Quote Success',
            //   text: 'Thank you! We have received your tour qutoe.'
            // });

            if (this.remember_details == false) {

              this.fullname = "";
              this.email = "";
              this.mobileno = "";
              this.message = "";
              this.zanzibar_days = "";
              this.kilimanjaro_days = "";
              this.safari_days = "";

              let searchData = {};

              searchData = {
                where_to_search: "",
                start_date: "",
                adults_number: 0,
                children_number: 0,
              };

              this.$store.dispatch("tourController/setSearchData", searchData);
              this.$store.dispatch("tourController/setdetailData", {});

            } else {

              let searchData = {};

              searchData = {
                where_to_search: "",
                start_date: this.start_date,
                adults_number: this.adults_number,
                children_number: this.children_number,
              };

              this.$store.dispatch("tourController/setSearchData", searchData);

              let detail_data = {};

              detail_data = {
                fullname: this.fullname,
                emailAddress: this.email,
                mobileno: this.mobileno,
                message: this.message,
                zanzibar_days: this.zanzibar_days,
                kilimanjaro_days: this.kilimanjaro_days,
                safari_days: this.safari_days,
              };

              // console.log('tag', detail_data)

              this.$store.dispatch("tourController/setdetailData", detail_data);
            } // if checked remember option

            this.$router.push("/thankyou-quote");
          } else {
            this.$notify({
              group: "warning",
              title: "Submit Error !",
              text: "Sorry, Something went wrong...",
            });

            this.fullname = "";
            this.email = "";
            this.mobileno = "";
            this.message = "";
            this.zanzibar_days = "";
            this.kilimanjaro_days = "";
            this.safari_days = "";
          }
        })
        .catch(() => {
          this.$notify({
            group: "warning",
            title: "Submit Error !",
            text: "Sorry, Something went wrong...",
          });

          this.fullname = "";
          this.email = "";
          this.mobileno = "";
          this.message = "";
          this.zanzibar_days = "";
          this.kilimanjaro_days = "";
          this.safari_days = "";
        });
    },
  },
  beforeDestroy() {
    // clear the timeout before the component is destroyed
    clearTimeout(this.timeout);
  },
};
</script>

<style>
.tour-quote-page {
  padding-top: 50px;
  padding-bottom: 100px;
  /* background-color: #f2f2f2; */
}

.tour-quote-page section {
  margin-top: 100px;
}

.tour-quote-page .e-multi-line-input textarea {
  height: 100px;
}

.tour-quote-page .quote .e-date-wrapper,
.tour-quote-page .quote .e-ddl {
  margin-top: 16px;
}

.additional-activity div:first-child {
  width: 150px;
}

.additional-activity div:last-child {
  width: 150px;
}

.additional-activity {
  margin-left: 30px;
}

@media (max-width: 540px) {
  .additional-activity {
    /* justify-content: center; */
    margin-left: 0px;
  }
}

@import "@syncfusion/ej2-vue-inputs/styles/material.css";
@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "@syncfusion/ej2-buttons/styles/material.css";
@import "@syncfusion/ej2-popups/styles/material.css";
@import "@syncfusion/ej2-vue-calendars/styles/material.css";
</style>
