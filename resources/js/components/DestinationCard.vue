<template>
  <div class="card mb-3 mx-2" id="destination-card">
    <div
      class="bg-image hover-overlay ripple"
      data-mdb-ripple-color="light"
      :style="{
        'background-image': 'url(' + destination.post_image + ')',
      }"
      :title="destination.post_title"
    >
      <a href="/destination-package">
        <div class="mask"></div>
      </a>
    </div>
    <div class="card-body">
      <h5
        class="card-title fw-bold text-center text-danger"
        :title="destination.post_title"
      >
        <div>{{ destination.post_title }}</div>
      </h5>
      <h6
        class="fw-bold text-dark mt-4 mb-2 subtitle"
        :title="destination.post_sub_title"
        style="text-overflow: ellipsis"
      >
        {{ destination.post_sub_title }}
      </h6>
      <p class="card-text" :title="destination.short_description">
        {{ destination.short_description }}
      </p>
      <button
        type="button"
        class="btn btn-white"
        @click="goToDestinationDetailPage"
      >
        Read More <span class="fa fa-angle-double-right ms-2"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DestinationCard",
  props: {
    destination: Object,
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    goToDestinationDetailPage() {
      this.$router.push("/destination-package");
    },
  },
};
</script>

<style>
#destination-card .bg-image {
  background-size: cover;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}

#destination-card {
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);
  cursor: pointer;
}
#destination-card:hover {
  box-shadow: 0px 1px 13px #666;
}
#destination-card .card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  position: relative;
  --max-lines: 3;
  min-height: 75px;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem;
}
#destination-card .card-title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  position: relative;
  --max-lines: 1;
  min-height: 24px;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem;
}
#destination-card .subtitle {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#destination-card .subtitle::first-letter {
  text-transform: uppercase;
}
</style>
