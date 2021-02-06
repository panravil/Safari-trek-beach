<template>
  <div class="card mb-3 mx-2" id="tour-card">
    <div
      class="bg-image hover-overlay ripple"
      data-mdb-ripple-color="light"
      :style="{
        'background-image': 'url(' + tourData.image_url + ')',
      }"
    >
      <a href="#">
        <div
          class="mask"
          style="background-color: rgba(251, 251, 251, 0.15)"
        ></div>
      </a>
      <div class="tour_title">
        {{ tourData.title }}
      </div>
      <img
        :src="tourData.operator_logo"
        style="width: 70px; height: auto; top: 0px; left: 30px"
        class="position-absolute"
      />
    </div>
    <div
      class="card-body"
      style="position: relative; border-bottom: 1px dotted black"
    >
      <div
        class="tag-image"
        v-if="
          tourData.tag !== null &&
          tourData.tag !== undefined &&
          tourData.tag !== ''
        "
      >
        <img
          v-if="tourData.tag == 'review'"
          :src="'./images/best-review.png'"
          style="margin-top: -15px; width: 60px; height: auto"
        />
        <img
          v-else-if="tourData.tag == 'seller'"
          :src="'./images/bestseller.png'"
          style="width: 80px; height: auto"
        />
        <img
          v-else
          :src="'./images/toprated2.png'"
          style="width: 100px; height: auto"
        />
      </div>
      <p class="card-text mb-1">
        <strong> Acommodation: </strong>
        No Data
      </p>
      <p class="card-text mb-1">
        <strong> Tour Type: </strong>
        {{ getTourLevel(tourData.level) }}
      </p>
      <p class="card-text mb-1 trip-route">
        <strong> Trip Route: </strong>
        {{ tourData.start_city }}(Start),
        {{ getMidRoute(tourData.destination) }}
        {{ tourData.end_city }} (End)
      </p>
    </div>
    <div class="row gx-0" style="position: relative">
      <div>
        <p class="card-text mb-1 ps-3">
          {{ tourData.company_name }}
        </p>
        <p class="card-text ps-3">
          <span class="star-rating">
            <!-- first star -->
            <span v-if="tourData.avg_review < 0.1" class="fa fa-star-o"></span>
            <span
              v-else-if="tourData.avg_review > 0.1 && tourData.avg_review < 0.5"
              class="fa fa-star-half-full checked"
            ></span>
            <span v-else class="fa fa-star checked"></span>

            <!-- second star -->
            <span v-if="tourData.avg_review < 1" class="fa fa-star-o"></span>
            <span
              v-else-if="tourData.avg_review < 1.5"
              class="fa fa-star-half-full checked"
            ></span>
            <span v-else class="fa fa-star checked"></span>

            <!-- third star -->
            <span v-if="tourData.avg_review < 2" class="fa fa-star-o"></span>
            <span
              v-else-if="tourData.avg_review < 2.5"
              class="fa fa-star-half-full checked"
            ></span>
            <span v-else class="fa fa-star checked"></span>

            <!-- fourth star -->
            <span v-if="tourData.avg_review < 3" class="fa fa-star-o"></span>
            <span
              v-else-if="tourData.avg_review < 3.5"
              class="fa fa-star-half-full checked"
            ></span>
            <span v-else class="fa fa-star checked"></span>

            <!-- fifth star -->
            <span v-if="tourData.avg_review < 4" class="fa fa-star-o"></span>
            <span
              v-else-if="tourData.avg_review < 4.5"
              class="fa fa-star-half-full checked"
            ></span>
            <span v-else class="fa fa-star checked"></span>
            <span
              ><strong>{{ tourData.avg_review }}</strong></span
            >
            <span> / </span>
            <span v-if="tourData.sum_review == 1"
              >{{ tourData.sum_review }} Review</span
            >
            <span v-else>{{ tourData.sum_review }} Reviews</span>
          </span>
        </p>
      </div>
      <div class="price">
        <strong
          ><span class="fa fa-dollar"></span
          >{{ tourData.adult_currency }}</strong
        >&nbsp;<small>pp</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tourData: Object,
  },
  computed: {},
  data() {
    return {};
  },

  methods: {
    getMidRoute(destination) {
      if (destination == undefined || destination == null) return "";
      let route_data = "";
      for (let i = 0; i < destination.length; i++) {
        route_data = route_data + destination[i] + ", ";
      }
      if (route_data.length > 60) return route_data.substr(0, 60) + "...";
      else return route_data;
    },

    getTourLevel(level) {
      if (level == undefined || level == null) return "";
      var level_data = this.tourData.tour_group;

      for (var i = 0; i < level.length; i++) {
        level_data += ", " + level[i];
      }

      level_data = level_data.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
      });
      return level_data;
    }
  },
};
</script>

<style>
#tour-card .price {
  width: 80px;
  color: #0f6d24;
  right: 5px;
  bottom: 0px;
  top: 0px;
  padding-left: 5px;
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
.trip-route {
  min-height: 75px;
}
</style>
