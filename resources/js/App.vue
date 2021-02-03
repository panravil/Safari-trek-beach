<template>
<div id="app">
  <NavBar></NavBar>
  <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
    <router-view></router-view>
  </transition>
  <Footer></Footer>
</div>
</template>

<script>
import NavBar from "../js/components/NavBar.vue";
import Footer from "../js/components/Footer.vue";
export default {
  name: "app",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({}),
};
</script>
