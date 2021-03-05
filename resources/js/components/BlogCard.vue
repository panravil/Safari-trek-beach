<template>
<div class="card mb-3 mx-2" id="blog-card" @click="toInnerPage">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light" :style="{
                  'background-image': 'url(' + blog.post_image + ')',
                }" :title="blog.post_title">
    <a>
      <div class="mask"></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title fw-bold text-center" :title="blog.post_title">
      <div>{{ blog.post_title }}</div>
    </h5>
    <hr class="mx-3" />
    <p class="card-text" :title="blog.short_description">
      {{ blog.short_description }}
    </p>
    <button type="button" class="btn btn-warning">
      Read More <span class="fa fa-angle-double-right ms-2"></span>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: Object,
  },
  components: {

  },
  data() {
    return {};
  },
  created() {},
  methods: {
    toInnerPage() {
      let routeData = this.$router.resolve({
        name: "Blog Inner Page",
        params: {
          slug: this.blog.post_slug
        },
      });

      window.open(routeData.href, "_blank");
    }
  },
};
</script>

<style>
#blog-card .bg-image {
  background-size: cover;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}

#blog-card {
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);
  cursor: pointer;
}
#blog-card:hover {
box-shadow: 0px 1px 13px #666;
}


#blog-card .card-text {
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
#blog-card .card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  position: relative;
  --max-lines: 2;
  min-height: 48px;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem;
}
</style>