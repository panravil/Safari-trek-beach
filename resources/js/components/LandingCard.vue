<template>
  <div class="card mb-3 mx-auto" id="tour-card">
    <div
      class="bg-image hover-overlay ripple"
      data-mdb-ripple-color="light"
      :style="{
        'background-image': 'url(' + tourData.image_url + ')',
      }"
    >
      <a>
        <div
          class="mask"
          style="background-color: rgba(251, 251, 251, 0.15)"
        ></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tourData: Object,
  },
  computed: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
#tour-card .bg-image {
  background-size: cover;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 58.25%;
}

#tour-card.card {
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);
  cursor: pointer;
  width: 75%;
}

#tour-card.card:hover {
  box-shadow: 0px 1px 13px #666;
}
.trip-route {
  min-height: 75px;
}

@media (max-width: 767px) {
  #tour-card.card {
    width: 100%;
  }
}
</style>
