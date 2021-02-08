<template>
<div class="tour-quote-page">
  <div class="container">
    <section>
      <header class="section-header mt-5">
        <h3>GET FREE QUOTE</h3>
      </header>

      <div class="card p-4">
        <h2 class="mt-3">Fill the form so Operator can contact you!</h2>
        <h6 class="text-danger"><span class="fa fa-smile-o me-2"></span>We advice you to compare quote from 3 Tour Operators.</h6>
        <div class="mt-3 row quote">
          <div class="col-lg-6 col-sm-12 mt-3">
            <ejs-datepicker :placeholder="waterMark"></ejs-datepicker>
          </div>
          <div class="col-lg-6 col-sm-12 mt-3">
            <ejs-textbox floatLabelType="Auto" type="number" placeholder="Travellers" required></ejs-textbox>
          </div>
          <div class="col-lg-6 col-sm-12 mt-3">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Full Name" required></ejs-textbox>
          </div>
          <div class="col-lg-6 col-sm-12 mt-3">
            <ejs-textbox floatLabelType="Auto" type="email" placeholder="Email Address" required></ejs-textbox>
          </div>
          <div class="col-lg-6 col-sm-12 mt-3">
            <ejs-dropdownlist id='dropdownlist' :dataSource='countryData' placeholder='Country'></ejs-dropdownlist>
          </div>
          <div class="col-lg-6 col-sm-12 mt-3">
            <ejs-textbox floatLabelType="Auto" type="phone" placeholder="Mobile Number" required></ejs-textbox>
          </div>
          <div class="col-lg-12 col-sm-12 mt-3">
            <ejs-textbox :multiline="true" floatLabelType="Auto" type="text" placeholder="Your Message" required></ejs-textbox>
          </div>
        </div>
        <h5 class="fw-bold mt-5">Additional activities:</h5>
        <div class="d-flex align-items-center mt-3 additional-activity">
          <div>
            <ejs-checkbox label="Zanzibar" v-model="zanzibar_activity"></ejs-checkbox>
          </div>
          <div class="ms-3" v-if="zanzibar_activity">
            <ejs-dropdownlist :dataSource='dayList' placeholder='No. of Days'></ejs-dropdownlist>
          </div>
        </div>
        <div class="d-flex align-items-center mt-3 additional-activity">
          <div>
            <ejs-checkbox label="Kilimanjaro" v-model="kiliman_activity"></ejs-checkbox>
          </div>
          <div class="ms-3" v-if="kiliman_activity">
            <ejs-dropdownlist :dataSource='dayList' placeholder='No. of Days'></ejs-dropdownlist>
          </div>
        </div>
        <div class="d-flex align-items-center mt-3 additional-activity">
          <div>
            <ejs-checkbox label="Safari" v-model="safari_activity"></ejs-checkbox>
          </div>
          <div class="ms-3" v-if="safari_activity">
            <ejs-dropdownlist :dataSource='dayList' placeholder='No. of Days'></ejs-dropdownlist>
          </div>
        </div>
        <div class="text-right w-100 mt-5 d-flex justify-content-end">
          <button type="submit" class="btn btn-danger">Send Request <span class="fa fa-angle-right ms-2"></span></button>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import Vue from "vue"

import {
  TextBoxPlugin
} from '@syncfusion/ej2-vue-inputs';

Vue.use(TextBoxPlugin);

import {
  DatePickerPlugin
} from '@syncfusion/ej2-vue-calendars';

Vue.use(DatePickerPlugin);

import {
  DropDownListPlugin
} from '@syncfusion/ej2-vue-dropdowns';

Vue.use(DropDownListPlugin);
import countryData from "../components/country_list"

import {
  CheckBoxPlugin
} from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);

import {
  enableRipple
} from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  name: "TourQuote",
  data() {
    return {
      waterMark: 'Select a date',
      countryData: countryData.countryList,
      dayList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      zanzibar_activity: false,
      kiliman_activity: false,
      safari_activity: false,
    };
  },
  methods: {},
};
</script>

<style>
.tour-quote-page {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
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
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import "@syncfusion/ej2-vue-calendars/styles/material.css";
</style>
