<template>
<div id="become-partner-page">
  <div class="container">
    <section>
      <header class="section-header">
        <h3>BECOME OUR PARTNER</h3>
      </header>
      <div class="card mt-5 p-3">
        <form @submit.prevent="submitCompanyData">

          <div class="row g-0">
            <div class="col-md-6 col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="companyName" floatLabelType="Auto" type="text" placeholder="Company Name" required></ejs-textbox>
            </div>
            <div class="col-md-6 col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="personalName" floatLabelType="Auto" type="text" placeholder="Contact Person Name" required></ejs-textbox>
            </div>
            <div class="col-md-6 col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="email" floatLabelType="Auto" type="email" placeholder="Email" required></ejs-textbox>
            </div>
            <div class="col-md-6 col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="password" floatLabelType="Auto" type="password" placeholder="Password" required></ejs-textbox>
            </div>
            <div class="col-md-6 col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="phone" floatLabelType="Auto" type="text" placeholder="Phone" required></ejs-textbox>
            </div>
            <div class="col-md-6 col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="address" floatLabelType="Auto" type="text" placeholder="Address" required></ejs-textbox>
            </div>
            <div class="col-md-6 col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="stuffs" floatLabelType="Auto" type="number" placeholder="Number of Stuffs" required></ejs-textbox>
            </div>
            <div class="col-md-6 col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="tourType" floatLabelType="Auto" type="text" placeholder="Tour Type" required></ejs-textbox>
            </div>
            <!-- <div class="col-md-6 col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="office_location" floatLabelType="Auto" type="text" placeholder="Office Location" required></ejs-textbox>
            </div>
            <div class="col-md-6 col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="website_url" floatLabelType="Auto" type="text" placeholder="Website URL" required></ejs-textbox>
            </div> -->
            <div class="col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="companyBrief" :multiline="true" floatLabelType="Auto" placeholder="Company Brief" required></ejs-textbox>
            </div>
            <div class="col-sm-12 px-3 mt-3">
              <ejs-textbox v-model="companyDescription" :multiline="true" floatLabelType="Auto" placeholder="Company Description" required></ejs-textbox>
            </div>

            <p class="px-3 mt-3" v-bind:key="updateCheckbox">
              <ejs-checkbox v-model="conditions" label="I agree to the Safari-Trek-Beach" required></ejs-checkbox>
              <!-- <a href="/terms" target="_blank"><span class="text-decoration-underline text-dark" style="font-size: 13px">Terms and Condition.</span></a> -->
              <router-link :to="{ name: 'Terms and Condition' }" target="_blank"><span class="text-decoration-underline text-dark" style="font-size: 13px">Terms and Condition.</span></router-link>
            </p>

            <div class="px-3 my-3">
              <button type="submit" class="btn btn-danger">Send Request</button>
            </div>
          </div>
        </form>
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

import {
  mapState,
  mapGetters,
  mapMutations
} from "vuex";

export default {
  name: "BecomePartner",
  data() {
    return {
      companyName: '',
      email: '',
      phone: '',
      stuffs: '',
      personalName: '',
      password: '',
      address: '',
      tourType: '',
      companyBrief: '',
      companyDescription: '',
      conditions: false,
      office_location: '',
      website_url: '',

      updateCheckbox: 0,
    };
  },
  created() {
    document.title = "Become a Partner of Safari-Trek-Beach.com"
    this.search_result = this.where_to_list;
  },
  computed: {
    ...mapGetters({
      packageData: "tourController/packageData",
      request_status: "request_status",
    }),
  },
  methods: {
    submitCompanyData() {
      let companyData = {};

      companyData = {
        'companyName': this.companyName,
        'email': this.email,
        'phone': this.phone,
        'stuffs': this.stuffs,
        'personalName': this.personalName,
        'password': this.password,
        'address': this.address,
        'tourType': this.tourType,
        'companyBrief': this.companyBrief,
        'companyDescription': this.companyDescription,
        'conditions': this.conditions,
      };

      this.$store
        .dispatch("operatorController/becomePartner", companyData)
        .then(() => {
          if (this.request_status == true) {
            // this.$notify({
            //   group: 'success',
            //   title: 'Submit Success !',
            //   text: 'Thank you! We have received your company data.'
            // });
            this.$router.push('/thankyou-partner');
          } else {
            this.$notify({
              group: 'warning',
              title: 'Submit Error !',
              text: 'Sorry, Something went wrong...'
            });
          }

          this.companyName = ''
          this.email = ''
          this.phone = ''
          this.stuffs = ''
          this.personalName = ''
          this.password = ''
          this.address = ''
          this.tourType = ''
          this.companyBrief = ''
          this.companyDescription = ''
          this.conditions = false

          this.updateCheckbox++
        })
        .catch(() => {
          this.$notify({
            group: 'warning',
            title: 'Submit Error !',
            text: 'Sorry, Something went wrong...'
          });

          this.companyName = ''
          this.email = ''
          this.phone = ''
          this.stuffs = ''
          this.personalName = ''
          this.password = ''
          this.address = ''
          this.tourType = ''
          this.companyBrief = ''
          this.companyDescription = ''
          this.conditions = false
          this.updateCheckbox++
        });

    }
  }
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
