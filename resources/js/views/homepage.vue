<template>
  <div>
    <!--
    main banner
    -->
    <section
      class="main-banner"
      style="background-image: url('/images/mainbanner2.png')"
    >
      <div class="wrapper">
        <h2 class="text-center" data-wow-delay="1">
          Choose Best African Safaris
        </h2>
        <h4 class="text-light text-center">Offered by Top Tour Operators</h4>

        <!-- Search filter  -->

        <form class="row search-form" autocomplete="off" method="GET">
          <div class="row gx-0">
            <div
              class="col-md-4 col-xs-12 mobile-filter position-relative onepixel-padding"
              v-click-outside-dropdown="closeWhereToDropDown"
            >
              <div
                class="bg-white h-100 align-items-center d-flex justify-content-between px-3 shadow-sm"
              >
                <span class="fa fa-map-marker"></span>
                <div class="w-100 px-2" @click="showWhereToDropdown(true)">
                  <input
                    v-model="where_to_search"
                    placeholder="Where To"
                    type="text"
                    ref="whereTo"
                    class="w-100"
                  />
                </div>
                <span
                  v-if="visible_whereto_dropdown == true"
                  class="fa fa-search"
                ></span>
                <span
                  v-else-if="
                    where_to_search != '' && visible_whereto_dropdown == false
                  "
                  class="fa fa-times-circle-o"
                  @click="setInitWhereTo"
                ></span>
                <span v-else class="fa fa-search invisible"></span>
              </div>
              <!-- <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"> -->
              <div
                class="shadow where_to_dropdown left-0 w-100 bg-white mt-3 triangule-where"
                v-if="visible_whereto_dropdown == true && search_result != ''"
              >
                <div
                  class="bg-warning text-white p-2 d-flex justify-content-between align-items-center"
                >
                  Start typing or select below
                  <span
                    class="fa fa-times-circle-o"
                    style="font-size: 25px"
                    @click="visible_whereto_dropdown = false"
                  ></span>
                </div>
                <div v-for="(item, index) in search_result" v-bind:key="index">
                  <div
                    class="py-1 px-3 border-bottom border-1 text-start"
                    v-if="index < 6"
                    @click="setCurrentWhereTo(item.title)"
                  >
                    <div class="p-0 m-0">
                      <strong>{{ item.title }}</strong>
                    </div>
                    <div class="p-0 m-0">
                      <small>{{ item.country }}</small>
                    </div>
                  </div>
                </div>
              </div>
              <!-- </transition> -->
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="row gx-0 h-100">
                <div class="col-md-4 col-xs-12 mobile-filter onepixel-padding">
                  <div
                    class="bg-white w-100 h-100 align-items-center d-flex justify-content-between px-3 shadow-sm"
                  >
                    <span class="fa fa-calendar"></span>
                    <div class="w-100 px-2">
                      <datepicker
                        :disabledDates="disabledFn"
                        v-model="start_date"
                        :placeholder="'Start Date'"
                        :highlighted="highlighted"
                      ></datepicker>
                    </div>
                    <span
                      v-if="start_date != '' && start_date != null"
                      class="fa fa-times-circle-o"
                      @click="initStartDate"
                    ></span>
                    <span v-else class="fa fa-times-circle-o invisible"></span>
                  </div>
                </div>
                <div
                  class="col-md-4 col-xs-12 mobile-filter position-relative onepixel-padding"
                  v-click-outside-dropdown="closeTravelerDropdown"
                >
                  <div
                    class="bg-white w-100 h-100 align-items-center d-flex justify-content-between px-3 shadow-sm"
                    @click="showTravelerDropdown"
                  >
                    <span class="fa fa-users"></span>
                    <div class="w-100 px-2">
                      <input
                        v-model="traveler_number"
                        id="traveler_input"
                        type="text"
                        placeholder="Travelers"
                        class="w-100"
                        readonly
                      />
                    </div>
                    <span
                      v-if="traveler_number != ''"
                      class="fa fa-times-circle-o"
                      @click="setTravelerInit"
                    ></span>
                    <span v-else class="fa fa-times-circle-o invisible"></span>
                  </div>
                  <!-- <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"> -->
                  <div
                    v-if="visible_traveler_dropdown"
                    class="shadow traveler-dropdown left-0 bg-white mt-3 triangule-where"
                  >
                    <div class="bg-warning text-white p-2 text-center">
                      Travelers
                      <span
                        class="fa fa-times-circle-o"
                        style="float: right; font-size: 25px; color: black"
                        @click="closeTravelerDropdown"
                      ></span>
                    </div>
                    <div
                      class="py-2 px-3 mt-2 border-1 text-start d-flex justify-content-between"
                    >
                      <div><strong>Adult </strong>(16+ years):</div>
                      <div>
                        <vue-numeric-input
                          v-model="adults_number"
                          :min="1"
                          :max="100"
                          :step="1"
                        ></vue-numeric-input>
                      </div>
                    </div>
                    <div
                      class="py-2 px-3 mt-2 border-1 text-start d-flex justify-content-between"
                    >
                      <div><strong>Child </strong>(0~15 years):</div>
                      <div>
                        <vue-numeric-input
                          v-model="children_number"
                          :min="0"
                          :max="100"
                          :step="1"
                        ></vue-numeric-input>
                      </div>
                    </div>

                    <!--
                      @this is for children age select options
                     -->

                    <!-- <p class="mt-3 text-center" v-if="children_number">
                      Age at the end of the tour
                    </p>
                    <hr class="mx-3" v-if="children_number" />
                    <div class="py-2 px-3 border-1 text-start d-flex justify-content-end align-items-center" v-for="(item, index) in selectedAge" :key="index">
                      <div class="me-3">Child {{ index + 1 }}:</div>
                      <div style="width: 150px">
                        <v-select :options="options" v-model="item.Age" />
                      </div>
                    </div> -->

                    <div class="text-right">
                      <button
                        class="btn btn-warning mx-3 my-3"
                        @click="setTravelerInfo"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                  <!-- </transition> -->
                </div>
                <div class="col-md-4 col-xs-12 ps-2 mobile-filter">
                  <button
                    type="button"
                    class="btn btn-danger w-100 h-100"
                    @click="searchButton"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>

    <!--
    popular tours
    -->

    <div class="container bg-gray" id="popular-tour">
      <header class="section-header">
        <h3>Popular Tours</h3>
      </header>
      <!-- test -->
      <div v-if="loading" class="row gx-0">
        <div
          class="col-lg-4 col-md-6 col-xs-12"
          v-for="(item, index) in 6"
          v-bind:key="index + 'skel'"
        >
          <TourCardSkelecton></TourCardSkelecton>
        </div>
      </div>
      <!-- end of test  -->
      <div v-else class="row gx-0">
        <div
          class="col-lg-4 col-md-6 col-xs-12"
          v-for="(item, index) in popularTours"
          v-bind:key="index"
        >
          <TourCard :tourData="item"></TourCard>
        </div>
      </div>

      <div class="text-center mt-3">
        <a href="/our-tours" class="btn btn-danger" target="_blank"> View All Packages </a>
      </div>
    </div>

    <!--
    Why Us banner
    -->

    <section class="why-us">
      <div class="text-center text-light">
        <div class="pt-5 why-us position-relative">
          <header class="section-header">
            <h3 class="text-light">Why Choose Us?</h3>
          </header>
          <h4>8 Reasons why Safari-Trek-Beach</h4>

          <carousel
            :per-page="1"
            :speed="2000"
            :loop="true"
            :autoplayTimeout="6000"
            :autoplay="true"
            :paginationEnabled="false"
            v-model="whyus_value"
          >
            <slide>
              <img :src="'./images/why_pool.png'" />
              <p>We set <br />compliance standards.</p>
            </slide>
            <slide>
              <img :src="'./images/why_service.png'" />
              <p>Unbiased Reviews <br />from previous client.</p>
            </slide>
            <slide>
              <img :src="'./images/why_dollar.png'" />
              <p>Connecting with <br />the best/licenced tour operator.</p>
            </slide>

            <slide>
              <img :src="'./images/why_service.png'" />
              <p>Comparing quotes <br />from different tour operators.</p>
            </slide>
            <slide>
              <img :src="'./images/why_pool.png'" />
              <p>
                Advise clients on questions <br />to ask before booking and
                <br />how to get best details.
              </p>
            </slide>
            <slide>
              <img :src="'./images/why_service.png'" />
              <p>
                We ensure clients get <br />large pool of Tour Operator of their
                choice!
              </p>
            </slide>
            <slide>
              <img :src="'./images/why_pool.png'" />
              <p>
                Very competitive offers (packages)<br />
                to choose from over 10,000 packages <br />from different Tour
                Operators.
              </p>
            </slide>
            <slide>
              <img :src="'./images/why_africa.png'" />
              <p>
                We offer packages <br />that cover all destinations <br />in
                Tanzania and Zanzibar.
              </p>
            </slide>
          </carousel>
          <span class="fa fa-angle-left whyus-prev" @click="prevClick"></span>
          <span class="fa fa-angle-right whyus-next" @click="nextClick"></span>
        </div>
      </div>
    </section>

    <!--
    Our top destination Section
    -->

    <div class="container bg-gray" id="top-destination">
      <header class="section-header">
        <h3>OUR TOP DESTINATIONS</h3>
      </header>
      <div class="row gx-0">
        <div
          class="col-lg-3 col-md-4 col-xs-12"
          v-for="item in topDestinations"
          v-bind:key="item.post_id"
          @click="toDestinationInner(item.post_slug)"
        >
          <div class="card mb-3 mx-2">
            <div
              class="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
              :style="{
                'background-image': 'url(' + item.post_image + ')',
              }"
            >
              <a href="">
                <div class="mask"></div>
              </a>
              <div class="overlay-text">
                {{ item.post_title }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-3">
        <a href="/destination/page/1" class="btn btn-danger" target="_blank">
          View All Destinations <span class="fa fa-angle-right ms-2"></span
        ></a>
      </div>
    </div>

    <!--
    Reviews and testimonial
    -->

    <section class="reviews_testimonial">
      <div class="text-center text-light">
        <div class="pt-5 review-testimonial-section">
          <carousel
            :per-page="1"
            :speed="1000"
            :loop="true"
            :autoplayTimeout="3000"
            :autoplayDirection="'backward'"
            :paginationEnabled="false"
            :autoplay="true"
          >
            <slide>
              <div class="wrap">
                <header class="section-header">
                  <h3 class="text-light">REVIEWS & TESTIMONIES</h3>
                </header>
                <p>
                  We booked a safari with Travel Africa Safari Agency through Safari Trek Beach platform after comparing many 
                  offers from tour operators in the platform. Through Safari trek beach we got a reliable operator very easily 
                  and guidance on the questions to ask tour operators so we can get the best deals. I recommend the use of this 
                  platform in your search for a good tour operator and best prices.
                </p>
              </div>
            </slide>
            <!-- <slide>
              <div class="wrap">
                <header class="section-header">
                  <h3 class="text-light">REVIEWS & TESTIMONIES</h3>
                </header>
                <p>
                  Used to be part of Serengeti National Park. It is conservation
                  area because there are Maasai people living in this area, but
                  not in national park. The crater is "safer" for older animals,
                  so one may see old bull elephants, or cape buffaloes. Lion
                  prides are common, as well as bird species. One sees most of
                  the animal here, except for the elusive leopard. On the way
                  out of the ...
                </p>
              </div>
            </slide>
            <slide>
              <div class="wrap">
                <header class="section-header">
                  <h3 class="text-light">REVIEWS & TESTIMONIES</h3>
                </header>
                <p>
                  Thank you for the excellent organization, the driver is
                  professional, the food from the cook is delicious, our all all
                  all all all problems have been resolved! Special thanks to
                  Mohamed. Very nice person in communication !!!
                </p>
              </div>
            </slide>
            <slide>
              <div class="wrap">
                <header class="section-header">
                  <h3 class="text-light">REVIEWS & TESTIMONIES</h3>
                </header>
                <p>
                  Used to be part of Serengeti National Park. It is conservation
                  area because there are Maasai people living in this area, but
                  not in national park. The crater is "safer" for older animals,
                  so one may see old bull elephants, or cape buffaloes. Lion
                  prides are common, as well as bird species. One sees most of
                  the animal here, except for the elusive leopard. On the way
                  out of the ...
                </p>
              </div>
            </slide> -->
          </carousel>
        </div>
      </div>
    </section>

    <!--
   About us and Our Blog section
    -->

    <div class="container bg-gray" id="about-us">
      <section>
        <div class="container">
          <div class="row gx-0 text-center align-items-center">
            <div class="col-md-6">
              <div
                class="bg-image shadow-lg"
                style="background-image: url('./images/img5.jpg')"
              ></div>
            </div>
            <div class="col-md-6 px-3 mt-5 mt-md-0">
              <h2 class="">About Us</h2>
              <div>
                <p>
                  Safari Trek Beach is the biggest market place for Tanzania
                  tour packages. We help travellers find the best Tour Operators
                  with the tour packages of their choice, to suit their budget
                  and standard. We are the experts when it involves Tours and
                  Holidays in Tanzania. Safari Trek Beach enables you to compare
                  different tour operators on different categories such as
                  Luxury, Lodge, Camping safaris or Mountain Climbing tours as
                  well as Beach Holidays.
                </p>
              </div>
              <div class="mt-3">
                <a class="btn btn-danger" href="/about" target="_blank">
                  Read More <span class="fa fa-angle-right ms-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-3">
        <header class="section-header mt-5">
          <h3>FROM OUR BLOG</h3>
        </header>
        <div class="row gx-0 mt-3" v-if="blog_loading">
          <div
            class="col-lg-4 col-md-6 col-xs-12"
            v-for="(blog, index) in 3"
            v-bind:key="index + 'blog'"
          >
            <TourCardSkelecton></TourCardSkelecton>
          </div>
        </div>
        <div class="row gx-0" v-else>
          <div
            class="col-lg-4 col-md-6 col-xs-12"
            v-for="(blog, index) in popularBlogs"
            v-bind:key="index"
          >
            <BlogCard :blog="blog"></BlogCard>
          </div>
        </div>
        <div class="text-center mt-3">
          <a href="/blog/page/1" class="btn btn-danger"  target="_blank">
            View All BLOGS<span class="fa fa-angle-right ms-2"></span
          ></a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import VueNumericInput from "vue-numeric-input";
import Datepicker from "vuejs-datepicker";
import TourCard from "../components/TourCard";
import BlogCard from "../components/BlogCard";
import TourCardSkelecton from "../components/TourCardSkelecton";

export default {
  components: {
    VueNumericInput,
    Datepicker,
    TourCard,
    BlogCard,
    TourCardSkelecton,
  },
  data() {
    return {
      visible_whereto_dropdown: false,
      visible_traveler_dropdown: false,
      adults_number: 0,
      children_number: 0,
      traveler_number: "",
      start_date: "",
      selectedAge: [],
      disabledFn: {
        customPredictor(date) {
          var current_date = new Date();
          if (date - current_date <= 0) {
            return true;
          }
        },
      },
      highlighted: {
        dates: [new Date()],
      },
      where_to_search: "",
      search_result: [],
      whyus_value: 0,
    };
  },

  computed: {
    ...mapGetters({
      popularTours: "tourController/popularTours",
      topDestinations: "destinationController/topDestinations",
      popularBlogs: "blogController/popularBlogs",
      loading: "tourcard_loading",
      blog_loading: "blogcard_loading",
      where_to_list_state: "tourController/tourActivity",

      where_to_search_state: "tourController/where_to_search",
      start_date_state: "tourController/start_date",
      adults_number_state: "tourController/adults_number",
      children_number_state: "tourController/children_number",
      traveler_number_state: "tourController/traveler_number",
    }),
  },

  created() {

    this.getTourActivity();

    this.where_to_search = this.where_to_search_state;
    this.traveler_number = this.traveler_number_state;
    this.start_date = this.start_date_state;
    this.adults_number = this.adults_number_state;
    this.children_number = this.children_number_state;

    this.traveler_number_calc();

    this.getPopularTours();
    this.getTopDestinations();
    this.getPopularBlogs();
  },

  directives: {
    "click-outside-dropdown": {
      bind: function (el, binding) {
        // Define ourClickEventHandler
        const ourClickEventHandler = (event) => {
          if (!el.contains(event.target) && el !== event.target) {
            // as we are attaching an click event listern to the document (below)
            // ensure the events target is outside the element or a child of it
            binding.value(event); // before binding it
          }
        };
        // attached the handler to the element so we can remove it later easily
        el.__vueClickEventHandler__ = ourClickEventHandler;

        // attaching ourClickEventHandler to a listener on the document here
        document.addEventListener("click", ourClickEventHandler);
      },
      unbind: function (el) {
        // Remove Event Listeners
        document.removeEventListener("click", el.__vueClickEventHandler__);
      },
    },
  },

  watch: {
    children_number: function (newValue, oldValue) {
      if (newValue > oldValue) {
        this.selectedAge.push({
          Age: "- Age -",
        });
      } else {
        this.selectedAge.splice(this.selectedAge.length - 1, 1);
      }
    },
    where_to_search: function () {
      if (this.where_to_search && this.where_to_list != undefined) {
        this.search_result = this.where_to_list.filter((item) => {
          return this.where_to_search
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        this.search_result = this.where_to_list;
      }
    },
  },

  methods: {
    getTourActivity() {
      this.$store.dispatch("tourController/getTourActivity").then(() => {
        let first_activity = [
            {
            "title": "Serengeti National Park",
            "input_id": "serengeti-national-park",
            },
            {
            "title": "Mount Kilimanjaro",
            "input_id": "mount-kilimanjaro",
            },
            {
            "title": "Zanzibar",
            "input_id": "zanzibar",
            },
            {
            "title": "Ngorongoro Crater",
            "input_id": "ngorongoro-crater",
            },
            {
            "title": "Tarangire National Park",
            "input_id": "tarangire-national-park",
            },
            {
            "title": "Ruaha National Park",
            "input_id": "ruaha-national-park",
            },
          ];

          let ar = this.where_to_list_state;

          for(var i=0; i < ar.length; i++) {
            if(ar[i].title == "Serengeti National Park" || ar[i].title == "Mount Kilimanjaro" || ar[i].title == "Ngorongoro Crater" || ar[i].title == "Tarangire National Park" || ar[i].title == "Zanzibar" || ar[i].title == "Ruaha National Park")
            {
                ar.splice(i,1);
            }
          }
          this.where_to_list = first_activity.concat(ar);
          this.search_result = this.where_to_list;
      });
    },
    getTourFilter() {
      this.$store.dispatch("tourController/getTourFilter");
    },
    getPopularBlogs() {
      this.$store.dispatch("blogController/getPopularBlogs");
    },

    async getPopularTours() {
      await this.$store.dispatch("tourController/getPopularTours").then(() => {
        // console.log('tag', this.popularTours)
      });
    },

    getTopDestinations() {
      this.$store.dispatch("destinationController/getTopDestinations");
    },

    traveler_number_calc() {
      let traveler = this.adults_number + this.children_number;
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else if (traveler == 0) this.traveler_number = "";
      else this.traveler_number = traveler + " Travelers";
    },

    closeWhereToDropDown() {
      this.visible_whereto_dropdown = false;
    },
    showWhereToDropdown(visible_flag) {
      this.visible_whereto_dropdown = visible_flag;
    },
    setCurrentWhereTo(value) {
      this.where_to_search = value;
      this.visible_whereto_dropdown = false;
    },
    setInitWhereTo() {
      this.where_to_search = "";
    },
    showTravelerDropdown() {
      var current_flag = this.visible_traveler_dropdown;
      this.visible_traveler_dropdown = !current_flag;
    },
    closeTravelerDropdown: function (event) {
      this.visible_traveler_dropdown = false;
    },
    setTravelerInfo(event) {
      event.preventDefault();
      let traveler = this.adults_number + this.children_number;
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else this.traveler_number = traveler + " Travelers";
      this.closeTravelerDropdown();
    },
    setTravelerInit() {
      this.traveler_number = "";
      this.adults_number = 0;
      this.children_number = 0;
    },
    initStartDate() {
      this.start_date = "";
    },
    prevClick() {
      if (this.whyus_value == 0) {
        this.whyus_value = 7;
      } else {
        this.whyus_value--
      }
    },
    nextClick() {
      if (this.whyus_value == 7) {
        this.whyus_value = 0;
      } else {
        this.whyus_value++
      }
    },

    toDestinationInner(slug){
      let routeData = this.$router.resolve({
        name: "Destination Package",
        params: {
          id: slug
        },
      });

      window.open(routeData.href, "_blank");
    },
    searchButton() {
      let searchData = {};
      searchData = {
        where_to_search: this.where_to_search,
        start_date: this.start_date,
        adults_number: this.adults_number,
        children_number: this.children_number,
        traveler_number: this.traveler_number,
      };

      this.$store.dispatch("tourController/setSearchData", searchData);

      let url_query = {
        destination: this.where_to_search,
      };

      if (url_query["destination"] != "") {
        let destination_item = this.where_to_list.find(function (el) {
          return el.title == url_query["destination"];
        });

        if (destination_item != undefined) {
          url_query["destination"] = destination_item.input_id;
        } else {
          url_query["destination"] = url_query["destination"]
            .split(" ")
            .join("_");
          url_query["destination"] = url_query["destination"]
            .split("&")
            .join("~");
        }
        this.$router.push("/our-tours/" + url_query["destination"]);
      } else {
        this.$router.push("/our-tours");
      }
    },
  },
};
</script>

<style scoped>
.whyus-prev,
.whyus-next {
  position: absolute;
  top: 50%;
  font-size: 40px;
  cursor: pointer;
  transform: translateY(-50%);
}

.whyus-prev {
  left: 10%;
}

.whyus-next {
  right: 10%;
}
</style>