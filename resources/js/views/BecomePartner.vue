<template>
<div id="become-partner-page">
  <div class="container">
    <section data-aos="fade-up">
      <header class="section-header">
        <h3>BECOME OUR PARTNER</h3>
      </header>
      <div class="card mt-5 p-3">
        <div class="row g-0">
          <div class="col-md-6 col-sm-12 px-3 mt-3">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Company Name" required></ejs-textbox>
          </div>
          <div class="col-md-6 col-sm-12 px-3 mt-3">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Contact Person Name" required></ejs-textbox>
          </div>
          <div class="col-md-6 col-sm-12 px-3 mt-3">
            <ejs-textbox floatLabelType="Auto" type="email" placeholder="Email" required></ejs-textbox>
          </div>
          <div class="col-md-6 col-sm-12 px-3 mt-3">
            <ejs-textbox floatLabelType="Auto" type="password" placeholder="Password" required></ejs-textbox>
          </div>
          <div class="col-md-6 col-sm-12 px-3 mt-3">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Phone" required></ejs-textbox>
          </div>
          <div class="col-md-6 col-sm-12 px-3 mt-3">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Address" required></ejs-textbox>
          </div>
          <div class="col-md-6 col-sm-12 px-3 mt-3">
            <ejs-textbox floatLabelType="Auto" type="number" placeholder="Number of Stuffs" required></ejs-textbox>
          </div>
          <div class="col-md-6 col-sm-12 px-3 mt-3">
            <ejs-textbox floatLabelType="Auto" type="text" placeholder="Tour Type" required></ejs-textbox>
          </div>
          <div class="col-sm-12 px-3 mt-3">
            <ejs-textbox :multiline="true" floatLabelType="Auto" placeholder="Company Brief" required></ejs-textbox>
          </div>
          <div class="col-sm-12 px-3 mt-3">
            <ejs-textbox :multiline="true" floatLabelType="Auto" placeholder="Company Description" required></ejs-textbox>
          </div>

          <p class="px-3 mt-3">
            <ejs-checkbox label="I agree to the Safari-Trek-Beach "></ejs-checkbox>
            <a href="/terms"><span class=" text-decoration-underline text-dark">Terms and Condition.</span></a>
          </p>

          <div class="px-3 my-3">
            <button class="btn btn-danger">Send Request</button>
          </div>

        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import Vue from 'vue';

import {
  TextBoxPlugin
} from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);

import {
  CheckBoxPlugin
} from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);

import {
  enableRipple
} from "@syncfusion/ej2-base";
enableRipple(true);

export default {
  name: "BecomePartner",
  data() {
    return {};
  },
};
</script>

<style>
#become-partner-page {
  background-color: #f2f2f2;
  padding-top: 50px;
  padding-bottom: 100px;
}

#become-partner-page section {
  margin-top: 100px;
}

#become-partner-page .e-multi-line-input textarea {
  height: 100px;
}

@import "@syncfusion/ej2-buttons/styles/material.css";
@import "@syncfusion/ej2-popups/styles/material.css";
@import "@syncfusion/ej2-vue-inputs/styles/material.css";
@import "@syncfusion/ej2-base/styles/material.css";
@import "@syncfusion/ej2-buttons/styles/material.css";
</style>
