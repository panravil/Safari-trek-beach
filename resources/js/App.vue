<template>
<div id="app">
  <div>
    <NavBar v-if="$route.name != '404 Page' && $route.name != 'Thank Review' && $route.name != 'Thank Quote' && $route.name != 'Thank Partner'"></NavBar>
    <!-- <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
  <Footer v-if="$route.name != '404 Page' && $route.name != 'Thank Review' && $route.name != 'Thank Quote' && $route.name != 'Thank Partner'"></Footer>
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

<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between
}

#nprogress {
  .bar{
    background: #f93154;
  }
  // .spinner{
  //   top:50%;
  //   right:50%;
  // }
  .spinner-icon{
    width:40px;
    height: 40px;
    border-top-color: #f93154;
    border-left-color: #f93154;
  }
}
</style>