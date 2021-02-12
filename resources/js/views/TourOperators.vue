<template>
<div id="tour-operators-page">
  <div class="container">

    <section>
      <header class="section-header" data-aos="fade-up">
        <h3>AFRICA SAFARI BOOKING OPERATORS</h3>
      </header>
    </section>

    <div class="card p-3 mt-5" v-for="(item, index) in 5" v-bind:key="index" data-aos="fade-up">
      <div class="wrapper">
        <div class="operator-logo text-center">
          <img :src="'http://operators.safari-trek-beach.com/images/user/13_1612774884.jpg'" />
        </div>
        <div class="px-3 operator-content">
          <h4 class="fw-bold">See Endless Adventures</h4>
          <h6 class="description">
            We are experts when involving safari in Tanzania. We make you fulfill your dream safari by offering the best safari packages based on Wildlife safaris, Mountain Trekking, Beach Holiday Safaris, Cultural Tour as well as City Tour, in both Private and ...
          </h6>
          <p class="mt-2">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span>5.0 (177 Reviews)</span>
          </p>
          <h6>Learn More about this company</h6>
        </div>
        <div class="logo-layout" style="background-image: url('http://operators.safari-trek-beach.com/images/user/13_1612529259.jpg')">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "TourOperators",
  data() {
    return {};
  },
  methods: {
    example() {

    }
  }
};
</script>

<style>
#tour-operators-page {
  background-color: #f2f2f2;
  padding-top: 50px;
  padding-bottom: 100px;
}

#tour-operators-page section {
  margin-top: 100px;
  margin-bottom: 30px;
}

#tour-operators-page .wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#tour-operators-page .operator-logo img {
  min-width: 150px;
  height: 150px;
}

#tour-operators-page .logo-layout {
  min-width: 400px;
  width: 400px;
  height: 0;
  padding-top: calc(0.5625 * 400px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: auto;
}

#tour-operators-page .operator-content {
  min-width: calc(100% - 550px);
}

@media (max-width: 1200px) {
  #tour-operators-page .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .operator-content {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  #tour-operators-page .operator-content h4 {
    text-align: center;
  }
}

@media (max-width: 420px) {
  #tour-operators-page .logo-layout {
    min-width: 100%;
    width: 100%;
    padding-top: 56.25%;
  }
}
</style>
