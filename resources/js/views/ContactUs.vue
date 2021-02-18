<template>
<div id="contact-us-page">
  <div class="container">

    <section>
      <header class="section-header" data-aos="fade-up">
        <h3>QUERIES ABOUT SAFARI OR TOUR OPERATOR</h3>
      </header>
      <h3 class="text-center mt-5" data-aos="fade-up">Safari Package from Safari-Treck-Beach are offered by individual tour operator and not Safari-Treck-Beach company!</h3>
      <h5 class="mt-5" data-aos="fade-up">For questions/information about a specific tour, we recommend that you contact tour operator directly. Follow these two steps: </h5>
      <h5 class="mt-4 mb-0" data-aos="fade-up">1. Select the tour package you like!</h5>
      <h5 class="mt-1" data-aos="fade-up">2. <i>Then by using Get Free Quote button on tour page the tour operator contact after filling the form.</i></h5>
    </section>

    <section>
      <header class="section-header" data-aos="fade-up">
        <h3>CONTACT US</h3>
      </header>
      <h3 class="text-center mt-5" data-aos="fade-up">
        For queries about Safari-Trek-Beach Company
      </h3>
      <h5 class="mt-5 fst-italic" data-aos="fade-up">Please fill the form >>></h5>
      <div class="card p-5 mx-auto contact-form-card">
        <form @submit.prevent="submitContactInfo">
          <div class="row align-items-center">
            <div class="col-sm-12">
              <ejs-textbox floatLabelType="Auto" type="text" placeholder="Name" v-model="name" required></ejs-textbox>
            </div>
            <div class="col-sm-12 mt-3">
              <ejs-textbox floatLabelType="Auto" type="email" placeholder="Email" v-model="email" required></ejs-textbox>
            </div>
            <div class="col-sm-12 mt-3">
              <ejs-textbox :multiline="true" floatLabelType="Auto" placeholder="Write a message" v-model="message" required></ejs-textbox>
            </div>
            <div>
              <button type="submit" class="btn btn-danger mt-3">Submit</button>
            </div>
            <div class="mt-5">
              <h4 class="fw-bold">Address</h4>
              <div class="d-flex align-items-center">
                <h5 style="min-width: 30px" class="text-danger">
                  <span class="fa fa-map-marker me-3"></span>
                </h5>
                <h5>
                  <a href="http://maps.google.com/?q=Mafao House Arusha Tanzania" target="_blank">
                    Mafao House Arusha Tanzania</a>
                </h5>
              </div>
              <div class="d-flex align-items-center">
                <h5 style="min-width: 30px" class="text-danger">
                  <span class="fa fa-phone-square me-2"></span>
                </h5>
                <h5> <a href="tel:+255758022567">+255 758 022 567</a></h5>
              </div>
              <div class="d-flex align-items-center">
                <h5 style="min-width: 30px" class="text-danger">
                  <span class="fa fa-envelope me-2"></span>
                </h5>
                <h5>
                  <a href="mailto:info@safari-trek-beach.com">info@safari-trek-beach.com</a>
                </h5>
              </div>
            </div>
            <h4 class="fw-bold mt-3">Follow Us On</h4>
            <div class="row gx-0 d-flex py-4 align-item-center">
              <div class="col-md-12 text-center">
                <a href="#"><span class="fa fa-facebook-f fa-2x text-danger me-5"></span></a>
                <a href="#"><span class="fa fa-instagram fa-2x text-danger me-5"></span></a>
                <a href="#"><span class="fa fa-twitter fa-2x text-danger me-5"></span></a>
                <a href="#"><span class="fa fa-youtube fa-2x text-danger"></span></a>
              </div>
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

export default {
  name: "ContactUs",
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitContactInfo() {

      // this is for mail app
      let url = "mailto:";
      url +=
        "info@safari-trek-beach.com" +
        "?subject=" +
        this.name +
        "&body=" +
        this.message.replace(/\n/g, "%0D%0A");
      "%0D%0A%0D%0A This is my email:%0D%0A" +
      this.email +
      window.open(url, "_blank");

      // this is for gmail in browser
      
      //   let url = "https://mail.google.com/mail/u/0/?fs=1&to=";
      // url +=
      //   "info@safari-trek-beach.com" +
      //   "&su=" +
      //   this.name +
      //   "&body=" +
      //   this.message.replace(/\n/g, "%0D%0A") +
      //   "%0D%0A%0D%0A This is my email:%0D%0A" +
      //   this.email +
      //   "&tf=cm";
      // window.open(url, "_blank");


    }
  }
};
</script>

<style>
#contact-us-page {
  background-color: #f2f2f2;
  padding-top: 50px;
  padding-bottom: 100px;
}

#contact-us-page section {
  margin-top: 100px;
}

#contact-us-page .e-multi-line-input textarea {
  height: 100px;
}

#contact-us-page .contact-form-card {
  width: 75%;
}

#contact-us-page a {
  color: #4f4f4f;
}

@media (max-width: 991px) {
  #contact-us-page .contact-form-card {
    width: 100%;
  }

  #contact-us-page h3,
  #contact-us-page h5 {
    text-align: center;
  }

  #contact-us-page .contact-form-card h5 {
    text-align: left;
    font-size: 15px;
  }
}

@import "@syncfusion/ej2-vue-inputs/styles/material.css";
@import "@syncfusion/ej2-base/styles/material.css";
</style>
