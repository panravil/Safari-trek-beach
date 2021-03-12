<template>
<div id="notfound">
  <div class="notfound">
    <div class="notfound-404">
      <h1>Oops!</h1>
      <h2>404 - The Page can't be found</h2>
    </div>
    <router-link :to="{ name: 'Home Page' }" class="btn btn-danger m-2">Homepage</router-link>
    <router-link :to="{ name: 'Our Tours' }" class="btn btn-danger m-2">OUR TOURS</router-link>
  </div>
</div>
</template>
<script>
export default {
  name: "Error404",
  data() {
    return {};
  },

  created() {
    let page_title = "404 Error Page"
    document.title = page_title;
  }
};
</script>
<style>
#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.notfound .notfound-404 {
    position: relative;
    height: 200px;
    margin: 0px auto 20px;
    z-index: -1;
}

.notfound .notfound-404 h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 236px;
    font-weight: 400;
    margin: 0px;
    color: #211b19;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.notfound .notfound-404 h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    color: #211b19;
    background: #f2f2f2;
    padding: 10px 5px;
    margin: auto;
    display: inline-block;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
}

@media (max-width: 767px) {
  .notfound .notfound-404 h1 {
    top: 30%;
    font-size: 100px;
  }
}
</style>
