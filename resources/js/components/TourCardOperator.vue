<template>
  <div class="card mb-3 mx-2" id="tour-card" @click="toInnerPackage()">
    <div
      class="bg-image hover-overlay ripple"
      data-mdb-ripple-color="light"
      style="max-height: 280px;"
    >
      <img
        v-lazy="tourData.image_url"
        class="img-fluid w-100"
      />
      <div
        class="mask"
        style="background-color: rgba(251, 251, 251, 0.15)"
      ></div>
      <div class="tour_title">
        {{ tourData.no_of_day }}-Day {{ tourData.title }}
      </div>
      <img
        v-lazy="tourData.operator_logo"
        style="width: 70px; height: auto; top: 0px; left: 30px"
        class="position-absolute"
      />
    </div>
    <div
      class="card-body"
      style="
        position: relative;
        border-bottom: 1px dotted black;
        font-size: 1rem;
      "
    >
      <div
        class="tag-image"
        v-if="tag !== null && tag !== undefined && tag !== ''"
      >
        <img
          v-if="tag == 'review'"
          v-lazy="'/images/best-review.png'"
          style="margin-top: -3px; width: 60px; height: auto"
        />
        <img
          v-else-if="tag == 'seller'"
          v-lazy="'/images/bestseller.png'"
          style="width: 80px; height: auto"
        />
        <img
          v-else
          v-lazy="'/images/toprated2.png'"
          style="width: 100px; height: auto"
        />
      </div>
      <p class="card-text mb-1">
        <strong> Accommodation: </strong>
        <span v-if="tourData.no_of_night == 1"
          >{{ tourData.no_of_night }} Night</span
        >
        <span v-else-if="tourData.no_of_night > 1"
          >{{ tourData.no_of_night }} Nights</span
        >
        <span v-else>Not Included</span>
      </p>
      <p class="card-text mb-1">
        <strong> Tour Type: </strong>
        {{ getTourLevel(tourData.level) }}
      </p>
      <p class="card-text mb-0 trip-route">
        <strong> Trip Route: </strong>
        {{ tourData.start_city }}(Start),
        {{ getMidRoute(tourData.destination) }}
        {{ tourData.end_city }} (End)
      </p>
    </div>
    <div class="row gx-0" style="position: relative; font-size: 1rem">
      <div>
        <p class="card-text mb-1 ps-3 text-capitalize">
          {{ company_name }}
        </p>
        <p class="card-text ps-3">
          <CustomStarRating :rating="avg_review"></CustomStarRating>
          <strong v-if="avg_review == '5'"> &nbsp;5.0/5&nbsp;</strong>
          <strong v-else-if="avg_review == '4'"> &nbsp;4.0/5&nbsp;</strong>
          <strong v-else-if="avg_review == '3'"> &nbsp;3.0/5&nbsp;</strong>
          <strong v-else-if="avg_review == '2'"> &nbsp;2.0/5&nbsp;</strong>
          <strong v-else-if="avg_review == '1'"> &nbsp;1.0/5&nbsp;</strong>
          <strong v-else> &nbsp;{{ avg_review }}/5</strong>
          <span>({{ sum_review }}Rvw)</span>
          <!-- <span class="company-review">
                    (
                    <span v-if="sum_review == 1">{{ sum_review }} Review</span>
                    <span v-else>{{ sum_review }} Reviews</span>
                    )
                </span>
                <span class="company-review-small">
                    ({{ sum_review }})
                </span> -->
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
import CustomStarRating from "../components/CustomStarRating";
export default {
  props: {
    tourData: Object,
    company_name: String,
    tag: String,
    avg_review: Number,
    sum_review: Number,
  },
  components: {
    CustomStarRating,
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
      if (route_data.length > 45) return route_data.substr(0, 45) + "...";
      else return route_data;
    },

    getTourLevel(level) {
      if (level == undefined || level == null) return "";
      var level_data = this.tourData.tour_group;

      for (var i = 0; i < level.length; i++) {
        level_data += ", " + level[i];
      }

      level_data = level_data
        .toLowerCase()
        .replace(/\b[a-z]/g, function (letter) {
          return letter.toUpperCase();
        });
      return level_data;
    },

    toInnerPackage() {
      // this.$router
      //   .push("/tour-package/" + this.tourData.package_id)
      //   .catch(() => {});
      let routeData = this.$router.resolve({
        name: "Tour Package",
        params: {
          id: this.tourData.package_id,
        },
      });

      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style>
#tour-card .price {
  width: 90px;
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
  right: 10px;
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
  padding: 15px 10px;
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

.card-body p.card-text {
  font-size: 15px;
  line-height: 20px;
}

.trip-route {
  min-height: 60px;
}

.company-review-small {
  display: none;
}

.company-review {
  display: block;
}

@media (max-width: 1400px) {
  .company-review-small {
    display: block;
  }

  .company-review {
    display: none;
  }
}
</style>
