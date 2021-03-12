<template>
<div id="app">
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
export default {
  name: "app",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({}),
};
</script>