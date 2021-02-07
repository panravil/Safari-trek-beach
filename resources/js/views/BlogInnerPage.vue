<template>
<div class="blog-inner-page">
  <div class="container mt-5">
    <div class="card">
      <div class="position-relative">
        <img src="https://africasafar.com/wp-content/uploads/2020/01/barranco-camps.jpg" class="card-img-top" />
        <div class="image_title">Can You Climb Mount Kilimanjaro Without A Guide</div>
      </div>
      <div class="card-body px-0">
        <div class="row gx-0">
          <div class="col-md-9 col-sm-12 content-section px-4">
            <div class="mt-5">
              <h3 class="section-title pt-3">Experience A Night Game Drive</h3>
            </div>
            <p>sdf asdf asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sdaf asdf sadf sadf sdaf sadf dsaf</p>
            <p>sdf asdf asdf sadfsdf sdf s asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sddaf sdaf asdf sadf sadf sdaf sadf dsaf</p>
            <p>sdf asdf asdf sadfsdf sdf sdaf sdaf asdf sadf asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd sadf sdaf sadf dsaf</p>

            <div v-for="(item, index) in 6" v-bind:key="index">
              <div class="mt-5">
                <h3 class="section-title-inner pb-3">Section {{ index + 1 }}</h3>
              </div>
              <img src="https://africasafar.com/wp-content/uploads/2020/01/barranco-camps.jpg" class="w-100 mb-3" />
              <p>sdf asdf asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sdaf asdf sadf sadf sdaf sadf dsaf</p>
              <p>sdf asdf asdf sadfsdf sdf s asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sddaf sdaf asdf sadf sadf sdaf sadf dsaf</p>
              <p>sdf asdf asdf sadfsdf sdf sdaf sdaf asdf sadf asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd sadf sdaf sadf dsaf</p>
              <div class="text-start mt-3">
                <a href="#" class="btn btn-danger"> Tour that includes Section {{ index + 1 }} </a>
              </div>
            </div>
            <div class="mt-5">
              <h3 class="section-title-inner pb-3">Comments (234)</h3>
            </div>
            <form class="mt-5">
              <h3 class="section-title-inner pb-3">Speak Your Mind</h3>
              <div class="row">
                <div class="col-md-6 col-sm-12">
                    <ejs-textbox id='textbox' floatLabelType="Auto" type="text" placeholder="Name" required></ejs-textbox>
                </div>
                <div class="col-md-6 col-sm-12">
                    <ejs-textbox id='textbox' floatLabelType="Auto" type="email" placeholder="Email" required></ejs-textbox>
                </div>
                <div class="col-md-12 col-sm-12">
                   <ejs-textbox id='textbox' floatLabelType="Auto" placeholder="First Name" required></ejs-textbox>
                </div>
                <div class="col-md-12 col-sm-12 px-5 text-end">
                  <button type="submit" class="btn btn-danger">Post Comment <span class="fa fa-paper-plane ms-2"></span></button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-3 col-sm-12 quick-link-section px-3">
            sdf asdf asf sadf asdf sdaf dsaf d f asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd asdf sadfsdf sdf sdaf sd
          </div>
        </div>
        <!-- <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p> -->
      </div>
    </div>
    <header class="section-header mt-5 pt-5">
      <h3>Popular Tours</h3>
    </header>
    <div class="row gx-0">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="(item, index) in popularTours" v-bind:key="index">
        <TourCard :tourData="item"></TourCard>
      </div>
    </div>
    <div class="text-center mt-5">
      <a href="#" class="btn btn-danger"> View All Packages </a>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';

import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);

import TourCard from "../components/TourCard";
export default {
  name: "BlogInnerPage",
  components: {
    TourCard,
  },
  data() {
    return {
      popularTours: [{},
        {},
        {},
      ]
    };
  },
};
</script>

<style>
.blog-inner-page {
  padding-top: 60px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
}

.blog-inner-page .image_title {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  padding: 4.375rem 1.875rem 1.875rem 1.5625rem;
  color: white;
  font-size: 2.375rem;
  line-height: 2.5rem;
  font-weight: 600;
  font-family: 'Gentium Basic', serif;
  text-shadow: 1px 1px 5px #000;
  z-index: 3;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0.9) 100%);
}

.blog-inner-page .content-section {
  border-right: 1px solid #ccc;
}

.blog-inner-page .section-title {
  border-top: 1px solid #ccc;
  width: 100%;
}

.blog-inner-page .section-title-inner {
  border-bottom: 1px solid #ccc;
  width: 100%;
  font-weight: 700;
}
@import "@syncfusion/ej2-vue-inputs/styles/material.css";
@import "@syncfusion/ej2-base/styles/material.css";
</style>
