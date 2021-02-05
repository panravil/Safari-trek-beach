<template>
<div class="blog-post-page">
  <div class="container">
    <section>
      <header class="section-header mt-5">
        <h3>OUR BLOG POSTS</h3>
      </header>

      <div class="row gx-0">
        <div class="col-lg-4 col-md-6 col-xs-12" v-for="(blog, index) in popularBlogs" v-bind:key="index">
          <BlogCard :blog="blog"></BlogCard>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import BlogCard from "../components/BlogCard";
export default {
  name: "BlogPost",
  components: {
    BlogCard,
  },
  data() {
    return {
      popularBlogs: [{
        post_title: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        short_description: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        post_image: "http://operators.safari-trek-beach.com/images/gallery/tanzania/tour/SELOUS_GAME_RESERVE_19.jpg",
      }, {
        post_title: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        short_description: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        post_image: "http://operators.safari-trek-beach.com/images/gallery/tanzania/tour/SELOUS_GAME_RESERVE_19.jpg",
      }, {
        post_title: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        short_description: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        post_image: "http://operators.safari-trek-beach.com/images/gallery/tanzania/tour/SELOUS_GAME_RESERVE_19.jpg",
      }, {
        post_title: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        short_description: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        post_image: "http://operators.safari-trek-beach.com/images/gallery/tanzania/tour/SELOUS_GAME_RESERVE_19.jpg",
      }, {
        post_title: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        short_description: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        post_image: "http://operators.safari-trek-beach.com/images/gallery/tanzania/tour/SELOUS_GAME_RESERVE_19.jpg",
      }, {
        post_title: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        short_description: "sdfasdfasdfasdfasdfadsfdasfdsfa",
        post_image: "http://operators.safari-trek-beach.com/images/gallery/tanzania/tour/SELOUS_GAME_RESERVE_19.jpg",
      }, ]
    };
  },
};
</script>

<style>
.blog-post-page {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
}

.blog-post-page section {
  margin-top: 100px;
}
</style>
