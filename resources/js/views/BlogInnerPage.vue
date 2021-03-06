<template>
  <div class="blog-inner-page">
    <div class="container mt-5">
      <div class="card">
        <div v-if="loading">
          <content-placeholders :rounded="true">
            <content-placeholders-img />
          </content-placeholders>
        </div>
        <div class="position-relative overflow-hidden" v-else>
          <img :src="blogData.post_inner_image" class="card-img-top" />
          <div class="image_title">
            {{ blogData.title }}
          </div>
        </div>
        <div class="card-body px-0">
          <div class="row gx-0">
            <div class="col-lg-8 col-md-12 content-section px-4">
              <div v-if="loading">
                <content-placeholders-heading />
              </div>
              <div v-else class="mt-5" style="margin-bottom: -60px">
                <h3 class="section-title pt-3">
                  {{ blogData.title }}
                </h3>
                <p>
                  {{ blogData.description }}
                </p>
              </div>

              <div v-if="loading">
                <content-placeholders-heading />
              </div>
              <div v-else>
                <div
                  v-for="(item, index) in blogData.section"
                  v-bind:key="index"
                  :id="'section' + index"
                  class="pt-5"
                >
                  <div class="pt-5">
                    <h3 class="section-title-inner pb-3">
                      {{ item.title }}
                    </h3>
                  </div>
                  <div class="section" v-html="item.description"></div>
                  <div
                    class="text-start mt-3"
                    v-if="item.button_url != null && item.button_name != null"
                  >
                    <a
                      :href="item.button_url"
                      target="_blank"
                      class="btn btn-danger"
                    >
                      {{ item.button_name }}
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="mt-5">
              <h3 class="section-title-inner pb-3">Comments (234)</h3>
            </div> -->
              <!-- <form class="mt-5">
                <h3 class="section-title-inner pb-3">Speak Your Mind</h3>
                <div class="row">
                  <div class="col-md-6 col-sm-12 mt-3">
                    <ejs-textbox
                      floatLabelType="Auto"
                      type="text"
                      placeholder="Name"
                      required
                    ></ejs-textbox>
                  </div>
                  <div class="col-md-6 col-sm-12 mt-3">
                    <ejs-textbox
                      floatLabelType="Auto"
                      type="email"
                      placeholder="Email"
                      required
                    ></ejs-textbox>
                  </div>
                  <div class="col-md-12 col-sm-12 mt-3">
                    <ejs-textbox
                      :multiline="true"
                      floatLabelType="Auto"
                      placeholder="Write a comment"
                      required
                    ></ejs-textbox>
                  </div>
                  <div class="col-md-12 col-sm-12 text-end mt-3">
                    <button type="submit" class="btn btn-danger">
                      Post Comment <span class="fa fa-paper-plane ms-2"></span>
                    </button>
                  </div>
                </div>
              </form> -->
            </div>
            <div
              class="col-lg-4 col-md-12 quick-link-section px-4 position-relative"
            >
              <div style="position: sticky; top: 50px">
                <button
                  class="btn-danger btn w-100 mt-5"
                  @click="goToOurTourPage"
                >
                  Our Tours <span class="fa fa-angle-right ms-2"></span>
                </button>
                <div class="w-100 p-3 blog-category mt-3">
                  <h6 class="fw-bolder text-center text-danger">
                    Table Of Contents
                  </h6>
                  <ul class="m-0 ps-3" v-if="loading">
                    <li
                      v-for="(item, index) in 4"
                      v-bind:key="'skelect' + index"
                      class="mt-2"
                    >
                      <a class="text-primary">
                        <content-placeholders-text :lines="1"
                      /></a>
                    </li>
                  </ul>
                  <ul class="m-0 ps-3" v-else>
                    <li
                      v-for="(content, index) in blogData.section"
                      v-bind:key="index"
                      class="mt-2"
                    >
                      <a class="text-primary" :href="'#section' + index"
                        >{{ content.title }}</a
                      >
                    </li>
                  </ul>
                </div>
                <div
                  class="w-100 p-3 blog-category mt-5"
                  v-if="blogData != null && blogData.blog.length > 0"
                >
                  <h6 class="fw-bolder text-center text-danger">
                    Popular Links
                  </h6>
                  <ul class="m-0 ps-3">
                    <li
                      v-for="(item, index) in blogData.blog"
                      v-bind:key="'Blog' + index"
                    >
                      <a
                        class="text-primary"
                        :href="'/blog/' + item.post_slug"
                        >{{ item.title }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="blogData != null && blogData.package.length > 0">
        <header class="section-header mt-5 pt-5">
          <h3>Popular Tours</h3>
        </header>
        <div class="row gx-0" v-if="blogData != null">
          <div
            class="col-lg-4 col-md-6 col-xs-12"
            v-for="(item, index) in blogData.package"
            v-bind:key="index"
          >
            <TourCard :tourData="item"></TourCard>
          </div>
        </div>
        <div class="text-center mt-5">
          <a href="/our-tours" class="btn btn-danger">
            View All Packages <span class="fa fa-angle-right ms-2"></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(TextBoxPlugin);

import TourCard from "../components/TourCard";
export default {
  name: "BlogInnerPage",

  components: {
    TourCard,
  },

  data() {
    return {};
  },

  created() {
    this.getBlogData();
    // this.getPopularTours();
  },

  computed: {
    blog_id: function () {
      var id = this.$route.params.slug;
      return id.slice(0, id.length);
    },
    ...mapGetters({
      blogData: "blogController/blogData",
      // popularTours: "tourController/popularTours",
      loading: "tourcard_loading",
    }),
  },
  methods: {
    goToOurTourPage() {
      this.$router.push("/our-tours");
    },

    async getBlogData() {
      await this.$store
        .dispatch("blogController/getBlogById", this.blog_id)
        .then(() => {
          let page_title = this.blogData.title + " - Safari-Trek-Beach";
          document.title = page_title;
          this.scrollFix(this.$route.hash)
          // console.log('blog data', this.blogData)
        });
    },

    scrollFix(hashbang)
    {
      this.$router.replace({hash: ''}).catch(() => {})
      setTimeout(() => {
        this.$router.replace({hash: hashbang}).catch(() => {})
      }, 50);
    },
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
  font-family: "Gentium Basic", serif;
  text-shadow: 1px 1px 5px #000;
  z-index: 3;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 45%,
    rgba(0, 0, 0, 0.9) 100%
  );
}

/* .blog-inner-page .content-section {
  border-right: 1px solid #ccc;
} */

.blog-inner-page .section-title {
  width: 100%;
}

.blog-inner-page .section-title-inner {
  /* border-bottom: 1px solid #ccc; */
  width: 100%;
  font-weight: 700;
}

.blog-inner-page .blog-category {
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
}

.blog-inner-page ul li {
  list-style: none;
  position: relative;
  cursor: pointer;
}

.blog-inner-page ul li:before {
  content: "›";
  font-weight: normal;
  top: -10px;
  font-size: 25px;
  position: absolute;
  left: -15px;
}

.e-multi-line-input textarea {
  height: 100px;
}

.quick-link-section {
  display: block;
}

.blog-inner-page .vue-content-placeholders-img {
  height: 300px !important;
  background: white !important;
}

.blog-inner-page .section h3 {
  font-size: 20px;
}

@media (max-width: 991px) {
  .blog-inner-page .quick-link-section {
    display: none;
  }

  .blog-inner-page .content-section {
    border: none;
  }

  .blog-inner-page .image_title {
    font-size: 25px;
    line-height: 35px;
    padding: 10px 20px;
  }

  .blog-inner-page .card-img-top {
    height: 100%;
    width: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  .blog-inner-page .position-relative.overflow-hidden {
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    height: 300px;
  }
}

@import "@syncfusion/ej2-vue-inputs/styles/material.css";
@import "@syncfusion/ej2-base/styles/material.css";
</style>
