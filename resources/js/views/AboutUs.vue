<template>
<div id="about_us_page">
  <div class="container">

    <!-- 
        How do we help you ?
       -->

    <section data-aos="fade-up">
      <header class="section-header">
        <h3>HOW DO WE HELP YOU!</h3>
      </header>
      <div class="row">
        <div class="col-lg-4 col-xs-12 text-center mt-3" v-for="(item, index) in how_help" v-bind:key="index">
          <span class="fa" :class="item.icon"></span>
          <br />
          <div class="mt-3 description">{{ item.description }}</div>
        </div>
      </div>
    </section>

    <!-- 
       WHY ARE WE THE BEST?
       -->

    <section data-aos="fade-up">
      <header class="section-header">
        <h3>WHY ARE WE THE BEST?</h3>
      </header>
      <div class="row">
        <div class="col-lg-4 col-xs-12 text-center mt-3" v-for="(item, index) in why_best" v-bind:key="index">
          <div class="mt-3 description">{{ item.description }}</div>
        </div>
      </div>
    </section>

    <!-- 
       OUR TEAM
       -->

    <section class="our-team">
      <header class="section-header">
        <h3>OUR TEAM</h3>
      </header>
      <div class="card mb-4 mx-2" data-aos="fade-up" v-for="(item, index) in ourteam" v-bind:key="index">
        <div class="bg-image hover-overlay" :style="{
                'background-image': 'url(' + item.image + ')',
              }">
        </div>
        <div class="card-body p-4 text-center text-md-start">
          <h3 class="fw-bold" :title="item.title">
            <div>{{ item.title }}</div>
          </h3>
          <h5>{{ item.subtitle }}</h5>
          <p class="card-text" :title="item.description">
            {{ item.description }}
          </p>
        </div>
      </div>

      <!-- 
        Developers
       -->

      <div class="card p-3" data-aos="fade-up">
        <div class="card-body text-center">
          <h3 class="fw-bold">
            <div>DEVELOPERS</div>
          </h3>
          <div class="row">
            <div class="col-lg-4 col-xs-12 text-center mt-3" v-for="(item, index) in developers" v-bind:key="index">
              <div class="developer-photo" :style="{
                'background-image': 'url(' + item.image + ')',
              }"></div>
              <h5>{{ item.role }}</h5>
              <p class="card-text px-3">
                {{ item.description }}
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>

    <!-- 
        OUR VISION
       -->

    <section data-aos="fade-up">
      <header class="section-header">
        <h3>OUR VISION</h3>
      </header>
      <div class="mt-3 description text-center">{{ our_vision }}</div>
    </section>

    <!-- 
        OUR COMMUNITY RESPONSIBILITY
       -->

    <section data-aos="fade-up">
      <header class="section-header">
        <h3>OUR COMMUNITY RESPONSIBILITY</h3>
      </header>
      <div class="mt-3 description text-center" v-html="our_community"></div>
    </section>

  </div>
</div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      ourteam: [{
        image: "./images/team_photo/calison.jpg",
        title: "Carlson Mbise",
        subtitle: "Experienced Tour Operator & CEO",
        description: "Carlson Mbise is an experienced Tour Operator and board member of several Companies. Driven by passion he takes prides in providing the best tour services possible. As a CEO his goals includes ensuring compliance from Tour Operators, providing Top notch services and Simplifying tourist process of planning, finding best tour operator and comparing Tanzania Tour Operator.",
      }, {
        image: "./images/team_photo/jac.jpg",
        title: "Jacqueline Mbise",
        subtitle: "One of the owners of Safari Trek Beach",
        description: "Jacqueline Mbise is one of the owners of Safari Trek Beach. For over 5 years she has been a noteworthy leader in the tourism industry. She is also a board member of several companies. In additional to her primary job function Jacqueline Mbise has been recognized by TANAPA for her extraordinary commitment to Tourism in Tanzania.",
      }, {
        image: "./images/team_photo/oliva.jpg",
        title: "Oliva Ngalya",
        subtitle: "Compliance manager",
        description: "Oliva Ngalya joined Safari Trek Beach in 2018 as the compliance manager. Before this, she was the operational manager at Africa Serengeti Safari. Her primary responsibility is to ensure all tour operators in Safari Trek Beach are licensed and live up to the promise or contract with their clients. She loves wildlife and would take every chance to enjoy a safari trip.",
      }, {
        image: "./images/team_photo/jartan.jpg",
        title: "Jartan Mbalakai",
        subtitle: "Director of content in Safari Trek Beach",
        description: "Jartan Mbalakai is the director of content in Safari Trek Beach. Having attending a wildlife university, he has a degree of wildlife tourism. He has being a Tour Guide for over 5 years, during the period amassing the knowledge and experience to inform the world about Tanzania Tourism. We say for the best stories about Tanzania there is no one better to share than Jartan Mbalakai.",
      }, ],

      why_best: [{
        description: 'We ensure clients get large pool of Tour Operator of their choice!',
      }, {
        description: 'Very competitive offers (packages) to choose from over 10,000 packages from different Tour Operators.',
      }, {
        description: 'We offer packages that cover all destinations in Tanzania and Zanzibar.',
      }, ],

      how_help: [{
        icon: 'fa-hand-peace-o',
        description: 'Connecting with the best/licenced tour operator',
      }, {
        icon: 'fa-hand-pointer-o',
        description: 'Comparing quotes from different tour operators',
      }, {
        icon: 'fa-users',
        description: 'Advise clients on questions to ask before booking and how to get best details',
      }, ],

      developers: [{
        image: './images/team_photo/android.jpg',
        role: 'Front-end designer',
        description: 'Lugano E mwakapuku is our front end and graphics designer, He has built the user interface (UI) and (UX) of interactive websites, web-application, and interactive media on other platforms. He uses a number of different programming languages like PHP (Laravel), Python (Django) and JavaScript (jQuery) and web technologies like HTML5 and CSS3 to develop different site. +255 762 506 012',
      }, {
        image: './images/team_photo/dona.jpg',
        role: 'Front-end designer',
        description: 'Donald is also our front end developer, He specialize in design user interfaces and experience on the website.  He is passionate about designing responsive user interfaces, time management in delivering work projects and a tone of knowledge on CSS3, Laravel, Bootstrap and JavaScript. +255 672 426 411',
      },{
        image: './images/team_photo/isack.jpg',
        role: 'Back-end developer',
        description: 'Isaac is our lead developer, caption of team; He built his first web application in 2018, and has never looked back since then. He works on diverse technologies and has successfully delivered a number of complex mobile and Web application projects. He manages our hosting server ensuring everything works perfectly. +255 752 988 988',
      },  ],

      our_vision: "Ensure the whole process of planning and finding the right tour operator for your safari is as easy as Possible.",

      our_community: "We strive to ensure that the number of women employed in tourism sector improves.<br /> We encourage tour companies to employ more women. One among our raking factors for tour companies is the number of women they have employed.",
    };
  },

  created() {
    let page_title = "About Safari-Trek-Beach.com"
    document.title = page_title;
  }
};
</script>

<style scoped>
p {
  text-align: justify;
}
</style>