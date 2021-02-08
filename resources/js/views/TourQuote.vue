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
        <div class="mt-3 row">
          <div class="col-lg-6 col-sm-12">
             <ejs-datepicker :placeholder="waterMark"></ejs-datepicker>
          </div>
          <div class="col-lg-6 col-sm-12">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Name" required></ejs-textbox>
          </div>
          <div class="col-lg-6 col-sm-12">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Name" required></ejs-textbox>
          </div>
          <div class="col-lg-6 col-sm-12">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Name" required></ejs-textbox>
          </div>
          <div class="col-lg-6 col-sm-12">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Name" required></ejs-textbox>
          </div>
          <div class="col-lg-6 col-sm-12">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Name" required></ejs-textbox>
          </div>
          <div class="col-lg-12 col-sm-12">
            <ejs-textbox :multiline="true" floatLabelType="Auto" type="text" placeholder="Name" required></ejs-textbox>
          </div>
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

export default {
  name: "TourQuote",
  data() {
    return {
      waterMark : 'Select a date',
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

@import "@syncfusion/ej2-vue-inputs/styles/material.css";
@import "@syncfusion/ej2-base/styles/material.css";

@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import "@syncfusion/ej2-vue-calendars/styles/material.css";
</style>
