<template>
<div class="card mb-3 mx-2">
  <content-placeholders :rounded="true">
    <content-placeholders-img />
    <content-placeholders-heading />
    <content-placeholders-heading />
    <content-placeholders-heading />
  </content-placeholders>
</div>
</template>

<script>
export default {
  name: "TourCardSkelecton",
  data() {
    return {};
  },
};
</script>

<style>
.vue-content-placeholders-img,
.vue-content-placeholders-text__line {
    background: #c9c9c9 !important;
}

.vue-content-placeholders-img {
  height: 200px !important;
}

</style>
