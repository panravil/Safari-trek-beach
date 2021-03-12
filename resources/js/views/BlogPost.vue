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
                        v-bind:key="index + 'blogskelecton'"
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
                        <!-- <Pagination
                            v-model="current_blog_page"
                            :records="listBlog.length"
                            :per-page="blogs_per_page"
                            :options="pagenation_options"
                        /> -->
                        <paginate
                          v-model="current_blog_page"
                          :page-count="total_page_number"
                          :prev-text="'Prev'"
                          :next-text="'Next'"
                          :container-class="'pagination'"
                          :page-class="'page-item'"
                          :prev-class="'page-link'"
                          :next-class="'page-link'"
                          :page-link-class="'page-link'"
                        >
                        </paginate>
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
// import Pagination from "vue-pagination-2";
export default {
    name: "BlogPost",
    components: {
        BlogCard,
        TourCardSkelecton,
        // Pagination
    },
    data() {
        return {
            current_blog_page: null,
            blogs_per_page: 6,
            current_page_blogs: [],
            // pagenation_options: {
            //     chunk: 5
            // },
            total_page_number: 1,
        };
    },
    computed: {
        page_id: function () {
            var id = this.$route.params.id;
            if ( id != undefined )
                return id.slice(0, id.length);
            else 
                return ''
        },
        ...mapGetters({
            listBlog: "blogController/listBlog",
            loading: "tourcard_loading"
        })
    },

    watch: {
        current_blog_page: function (newValue) {
            if ( newValue > 1 ) {
                this.$router.push({name: 'Blog Post', params: {id: newValue, page: 'page'}})
                    .then(() => {
                        this.getlistBlog();
                    })
                    .catch(() => {})
            } else if (newValue == 1) {
                this.$router.push({name: 'Blog Post', params: {}})
                    .then(()=>{
                        this.getlistBlog();
                    })
                    .catch(()=>{})
                        
            }
        },
    },

    created() {        

        if ( this.page_id != '' )
            this.current_blog_page = parseInt(this.page_id);
        else 
            this.current_blog_page = 1;

        this.getlistBlog();

    },
    
    methods: {
        getlistBlog() {
            this.$store.dispatch("blogController/getListBlogs").then(() => {
                    this.getCurrentPageBlogs(
                        this.current_blog_page
                    );
                    
                    this.total_page_number = Math.floor(this.listBlog.length / this.blogs_per_page) ;

                    if ( this.listBlog.length % this.blogs_per_page > 0 ) {
                        this.total_page_number = this.total_page_number + 1;
                    }

                    let page_title = "Safari-Trek-Beach Blog - Page " 
                       + this.current_blog_page
                       + " of " + this.total_page_number;

                    document.title = page_title;
                });
        },
        getCurrentPageBlogs(page_num) {
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
    /* background-color: #f2f2f2; */
}

.blog-post-page section {
    margin-top: 100px;
}
</style>
