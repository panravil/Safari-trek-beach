<template>
<div id="app">
  <div>
    <NavBar v-if="$route.name != '404 Page'"></NavBar>
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
      <router-view></router-view>
    </transition>
  </div>
  <Footer v-if="$route.name != '404 Page'"></Footer>
  <notifications group="success" classes="success-notify" />
  <notifications group="warning" classes="warning-notify" />
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

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between
}
</style>