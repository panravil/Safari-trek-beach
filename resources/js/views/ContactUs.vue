<template>
<div id="contact-us-page">
  <div class="container">

    <section>
      <header class="section-header" >
        <h3>QUERIES ABOUT SAFARI OR TOUR OPERATOR</h3>
      </header>
      <h3 class="text-center mt-5" >Safari Packages in Safari-Trek-Beach are offered by individual tour operator and not Safari-Trek-Beach company.</h3>
      <h4 class="mt-3 text-center" >For questions about a specific tour, we recommend that you contact tour operator directly.</h4>
      <h4 class="mt-5 fw-bold text-center" >Follow these three steps:</h4>
      <h5 class="mt-4 mb-0" >1. Select the tour package you like!</h5>
      <h5 class="mt-3" >2. Then Click Get Free Quote button to contact.</h5>
      <h5 class="mt-3" >3. Fill your email and message then send.</h5>
      <div class="text-center mt-5">
        <router-link class="btn btn-danger text-light" :to="{ name: 'Our Tours' }"> Start Here <span class="fa fa-angle-right ms-2"></span></router-link>
      </div>
    </section>

    <section>
      <header class="section-header" >
        <h3>CONTACT US</h3>
      </header>
      <h3 class="text-center mt-5" >
        For queries about Safari-Trek-Beach Company
      </h3>
      <div class="card p-5 mx-auto contact-form-card">
        <form @submit.prevent="sendEmail">
          <div class="row align-items-center">
            <div class="col-sm-12">
              <ejs-textbox floatLabelType="Auto" type="text" placeholder="Name" name="user_name" v-model="name" required></ejs-textbox>
            </div>
            <div class="col-sm-12 mt-3">
              <ejs-textbox floatLabelType="Auto" type="email" placeholder="Email" name="user_email" v-model="email" required></ejs-textbox>
            </div>
            <div class="col-sm-12 mt-3">
              <ejs-textbox :multiline="true" floatLabelType="Auto" name="message" placeholder="Write a message" v-model="message" required></ejs-textbox>
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
                <a href="#" target="_blank"><span class="fa fa-facebook-f fa-2x text-danger me-5"></span></a>
                <a href="#" target="_blank"><span class="fa fa-instagram fa-2x text-danger me-5"></span></a>
                <a href="#" target="_blank"><span class="fa fa-twitter fa-2x text-danger me-5"></span></a>
                <a href="#" target="_blank"><span class="fa fa-youtube fa-2x text-danger"></span></a>
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
import emailjs from 'emailjs-com';

export default {
  name: "ContactUs",
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  created() {
    let page_title = "Contact Safari-Trek-Beach.com"
    document.title = page_title;
  },
  methods: {
    // submitContactInfo() {

    //   // this is for mail app
    //   let url = "mailto:";
    //   url +=
    //     "info@safari-trek-beach.com" +
    //     "?subject=" +
    //     this.name +
    //     "&body=" +
    //     this.message.replace(/\n/g, "%0D%0A");
    //   "%0D%0A%0D%0A This is my email:%0D%0A" +
    //   this.email +
    //   window.open(url, "_blank");

    //   // this is for gmail in browser

    //   //   let url = "https://mail.google.com/mail/u/0/?fs=1&to=";
    //   // url +=
    //   //   "info@safari-trek-beach.com" +
    //   //   "&su=" +
    //   //   this.name +
    //   //   "&body=" +
    //   //   this.message.replace(/\n/g, "%0D%0A") +
    //   //   "%0D%0A%0D%0A This is my email:%0D%0A" +
    //   //   this.email +
    //   //   "&tf=cm";
    //   // window.open(url, "_blank");

    // },

    sendEmail(e) {
      // console.log('tag', e.target)
      try {
        emailjs.sendForm('service_5wlzkqg', 'template_39c1z2t', e.target, 'user_K5HSyHWK6LhDHg35fCPQz').then(() => {
           this.$notify({
            group: 'success',
            title: 'Email Sent!',
            text: 'Thank you! We have received your email. We will soon reply.'
          });
          // console.log('it works!!!')
        })
        .catch(() => {
          this.$notify({
            group: "warning",
            title: "Sending Error !",
            text: "Sorry, Something went wrong...",
          });
        })
       
      } catch (error) {
        this.$notify({
          group: "warning",
          title: "Sending Error !",
          text: "Sorry, Something went wrong...",
        });
          // console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },

    // sendEmail: (e) => {
    //    this.$notify({
    //           group: "warning",
    //           title: "Sending Error !",
    //           text: "Sorry, Something went wrong...",
    //         });
    //       console.log('tag', e.target)
    //   emailjs.sendForm('service_5wlzkqg', 'template_vgycw1m', e.target, 'user_K5HSyHWK6LhDHg35fCPQz')
    //     .then((result) => {
    //         console.log('SUCCESS!', result.status, result.text);
    //         this.$notify({
    //           group: 'success',
    //           title: 'Email Sent!',
    //           text: 'Thank you! We have received your email. We will soon reply.'
    //         });
            
    //     }, (error) => {
    //         console.log('FAILED...', error);
    //         this.$notify({
    //           group: "warning",
    //           title: "Sending Error !",
    //           text: "Sorry, Something went wrong...",
    //         });
    //     });
    // }


  }
};
</script>

<style>
#contact-us-page {
  /* background-color: #f2f2f2; */
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
