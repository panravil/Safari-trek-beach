<template>
<div class="card p-3 mt-5 skelecton-operator">
  <div class="wrapper">
    <div class="operator-logo text-center">
      <content-placeholders :rounded="false">
        <content-placeholders-img />
      </content-placeholders>
    </div>
    <div class="px-3 operator-content">
      <content-placeholders-heading />
    <content-placeholders-heading />
    <content-placeholders-heading />
    </div>
    <div class="logo-layout-skelecton text-center">
      <content-placeholders :rounded="false">
        <content-placeholders-img />
      </content-placeholders>
    </div>
  </div>


</div>
</template>

<script>
export default {
  name: "TourOperatorsSkelecton",
  data() {
    return {};
  },
};
</script>

<style>
.skelecton-operator .operator-logo .vue-content-placeholders-img {
  height: 150px !important;
  min-width: 150px;
  width: 150px;
  margin: auto;
}

.skelecton-operator .wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.skelecton-operator .logo-layout-skelecton {
  min-width: 400px;
  width: 400px;
}

.skelecton-operator .logo-layout-skelecton .vue-content-placeholders-img {
  height: 225px !important;
  margin: auto;
}

.vue-content-placeholders-img,
.vue-content-placeholders-text__line {
  background: #c9c9c9 !important;
}

@media (max-width: 1200px) {
.skelecton-operator .logo-layout-skelecton {
    margin: auto;
  }
}

@media (max-width: 420px) {
.skelecton-operator .logo-layout-skelecton {
    width: 100%;
  }
}
</style>
