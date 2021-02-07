<template>
<div class="blog-post-page">
  <div class="container">
    <section>
      <header class="section-header mt-5">
        <h3>OUR BLOG POSTS</h3>
      </header>

      <div class="row gx-0">
        <div class="col-lg-4 col-md-6 col-xs-12" v-for="(blog, index) in listBlog" v-bind:key="index" @click="toBlogInnerPage">
          <BlogCard :blog="blog"></BlogCard>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import BlogCard from "../components/BlogCard";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "BlogPost",
  components: {
    BlogCard,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      listBlog: "blogController/listBlog",
    }),
  },
  created() {
    this.getListDestinations();
  },
  methods: {
    toBlogInnerPage() {
      this.$router.push('./blog_inner_page');
    },
    getListDestinations() {
      this.$store.dispatch("blogController/getListBlogs");
    }
  }
};
</script>

<style>
.blog-post-page {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
}

.blog-post-page section {
  margin-top: 100px;
}
</style>
