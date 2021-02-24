<template>
    <div class="blog-post-page">
        <div class="container">
            <section>
                <header class="section-header mt-5">
                    <h3>OUR BLOG POSTS</h3>
                </header>

                <div class="row gx-0" v-if="loading">
                    <div
                        class="col-lg-4 col-md-6 col-xs-12"
                        v-for="(blog, index) in 6"
                        v-bind:key="index + 'bloglist'"
                    >
                        <TourCardSkelecton></TourCardSkelecton>
                    </div>
                </div>
                <div class="row gx-0" v-else>
                    <div
                        class="col-lg-4 col-md-6 col-xs-12"
                        v-for="(blog, index) in current_page_blogs"
                        v-bind:key="index"
                    >
                        <BlogCard :blog="blog"></BlogCard>
                    </div>
                    <div
                        class="d-flex justify-content-center mt-4"
                        v-if="listBlog != null"
                    >
                        <Pagination
                            v-model="current_blog_page"
                            :records="listBlog.length"
                            :per-page="blogs_per_page"
                            :options="pagenation_options"
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import BlogCard from "../components/BlogCard";
import { mapState, mapGetters, mapMutations } from "vuex";
import TourCardSkelecton from "../components/TourCardSkelecton";
import Pagination from "vue-pagination-2";
export default {
    name: "BlogPost",
    components: {
        BlogCard,
        TourCardSkelecton,
        Pagination
    },
    data() {
        return {
            current_blog_page: 1,
            blogs_per_page: 6,
            current_page_blogs: [],
            pagenation_options: {
                chunk: 5
            }
        };
    },
     watch: {
        current_blog_page: function(newValue) {
            this.getCurrentPageDestinations(newValue);
        }
    },
    computed: {
        ...mapGetters({
            listBlog: "blogController/listBlog",
            loading: "tourcard_loading"
        })
    },
    created() {
        let page_title = "Safari-Trek-Beach.com Blog";
        document.title = page_title;
        this.getlistBlog();
    },
    methods: {
        // toBlogInnerPage(slug) {
        //   this.$router.push('/blog-inner-page/' + slug);
        // },
        getlistBlog() {
            this.$store.dispatch("blogController/getListBlogs").then(() => {
                    this.getCurrentPageDestinations(
                        this.current_blog_page
                    );
                });
        },
        getCurrentPageDestinations(page_num) {
            this.current_page_blogs = [];
            let index = 0;
            for (
                let i = (page_num - 1) * this.blogs_per_page;
                i < page_num * this.blogs_per_page;
                i++
            ) {
                if (this.listBlog[i] != undefined) {
                    this.current_page_blogs[
                        index
                    ] = this.listBlog[i];
                    index++;
                }
            }
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
