<template>
  <div class="card mb-3 mx-2" id="tour-card">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light" :style="{
                'background-image': 'url(' + tourData.image + ')',
              }">
      <a href="#">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
      </a>
      <div class="tour_title">
        {{ tourData.title }}
      </div>
      <img :src="'./images/operator_logo.png'" style="width: 100px; height: auto; top: 0px; left: 30px;" class="position-absolute" />
    </div>
    <div class="card-body" style="position: relative; border-bottom: 1px dotted black">
      <div class="tag-image">
        <img v-if="tourData.tagImage == './images/best-review.png'" :src="tourData.tagImage" style="margin-top: -15px; width: 60px; height: auto" />
        <img v-else-if="tourData.tagImage == './images/bestseller.png'" :src="tourData.tagImage" style="width: 80px; height: auto" />
        <img v-else :src="tourData.tagImage" style="width: 100px; height: auto" />
      </div>
      <p class="card-text mb-1">
        <strong> Acommodation: </strong>
        {{ tourData.acommodation }}
      </p>
      <p class="card-text mb-1">
        <strong> Tour Type: </strong>
        {{ tourData.type }}
      </p>
      <p class="card-text mb-1">
        <strong> Trip Route: </strong>
        {{ tourData.route }}
      </p>
    </div>
    <div class="row gx-0" style="position: relative">
      <div>
        <p class="card-text mb-1 ps-3">
          {{ tourData.company }}
        </p>
        <p class="card-text ps-3">
          <span class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span><strong>{{ tourData.rating }}</strong></span>
            <span> / </span>
            <span v-if="tourData.reviews == 1">{{ tourData.reviews }} Review</span>
            <span v-else>{{ tourData.reviews }} Reviews</span>
          </span>
        </p>
      </div>
      <div class="price">
        <strong><span class="fa fa-dollar"></span>{{ tourData.price }}</strong>&nbsp;<small>pp</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tourData: Object
  },
  computed: {},
  data() {
    return {
    }
  }
};
</script>

<style>
#tour-card .price {
  width: 80px;
  color: #0f6d24;
  right: 15px;
  bottom: 0px;
  top: 0px;
  padding-left: 15px;
  border-left: 1px dotted black;
  position: absolute;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#tour-card .tag-image {
  top: -12px;
  position: absolute;
  right: 25px;
}


#tour-card .bg-image {
  background-size: cover;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}

#tour-card .tour_title {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: left;
  padding: 20px 10px;
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 45%,
    rgba(0, 0, 0, 0.9) 100%
  );
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  margin: 40px 0 0px 0;
  font-family: "Montserrat", sans-serif;
}

#tour-card.card {
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);
  cursor: pointer;
}

#tour-card.card:hover {
  box-shadow: 0px 1px 13px #666;
}
</style>