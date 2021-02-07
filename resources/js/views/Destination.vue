<template>
<div class="destination-page">
  <div class="container">
    <section>
      <header class="section-header mt-5">
        <h3>DESTINATIONS</h3>
      </header>

      <div class="row gx-0">
        <div class="col-lg-4 col-md-6 col-xs-12" v-for="(blog, index) in popularBlogs" v-bind:key="index">
          <DestinationCard :destination="blog"></DestinationCard>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import DestinationCard from "../components/DestinationCard";
export default {
  name: "DestinationPage",
  components: {
    DestinationCard,
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
        post_title: "sdfasdfa sdfasd fasdfads asdf asd fads fads fads fads fads fads fads fads fads fads fads fads fads fads fads asdfasdfa dsasdfasd fadsfd asfdsfa",
        short_description: "sdfa sdfa dasdfa dasdfa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa fa dasdfa dasdfa dasdfa dasdfa dasdfa dasdfa dasdfa dasdfa dasdfa dasdfa dasfdsfa",
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
.destination-page {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
}

.destination-page section {
  margin-top: 100px;
}
</style>
