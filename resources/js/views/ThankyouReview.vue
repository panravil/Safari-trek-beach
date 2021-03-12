<template>
<div id="thankyou">
  <div class="thankyou">
    <div class="thankyou-inner">
      <h1>Thank you</h1>
      <h2>Your review has been successfully sent</h2>
    </div>
    <router-link :to="{ name: 'Home Page' }" class="btn btn-danger m-2">Homepage</router-link>
    <router-link :to="{ name: 'Our Tours' }" class="btn btn-danger m-2">OUR TOURS</router-link>
  </div>
</div>
</template>
<script>
export default {
  name: "ThankyouReview",
  data() {
    return {};
  },

  created() {
    let page_title = "Thank you for your review! - Safari-Trek-Beach.com"
    document.title = page_title;
  }
};
</script>
<style>
#thankyou {
  position: relative;
  height: 100vh;
}

#thankyou .thankyou {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  /* max-width: 520px; */
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.thankyou .thankyou-inner {
    position: relative;
    height: 200px;
    margin: 0px auto 20px;
    z-index: -1;
}

.thankyou .thankyou-inner h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 120px;
    font-weight: 400;
    margin: 0px;
    color: #211b19;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 15%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.thankyou .thankyou-inner h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    color: #211b19;
    background: #f2f2f2;
    padding: 10px 5px;
    margin: auto;
    display: inline-block;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
}

@media (max-width: 767px) {
  .thankyou .thankyou-inner h1 {
    top: -10%;
    font-size: 80px;
  }
}
</style>
