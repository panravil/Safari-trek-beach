import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
    base: process.env.BASE_URL,
    routes: [
        // ======================
        // Blank Layout
        // ======================
        {
            path: "",
            component: () => import("./layout/blank/Blank.vue"),
            children: [
                {
                    path: "/",
                    redirect: "/home"
                },
                {
                    path: "/home",
                    name: "Home Page",
                    index: 1,
                    component: () => import("./views/homepage.vue")
                },
                {
                    path: "/our-tours",
                    name: "Our Tours",
                    index: 2,
                    component: () => import("./views/OurTours.vue")
                },
                {
                    path: "/tour-operators",
                    name: "Tour Operators",
                    index: 3,
                    component: () => import("./views/TourOperators.vue")
                },
                {
                    path: "/contact",
                    name: "Contact Us",
                    index: 4,
                    component: () => import("./views/ContactUs.vue")
                },
                {
                    path: "/about",
                    name: "About Us",
                    index: 5,
                    component: () => import("./views/AboutUs.vue")
                },
                {
                    path: "/blog",
                    name: "Blog Post",
                    index: 6,
                    component: () => import("./views/BlogPost.vue")
                },
                {
                    path: "/destinations",
                    name: "Destination",
                    index: 7,
                    component: () => import("./views/Destination.vue")
                },
                {
                    path: "/blog-inner-page",
                    name: "Blog Inner Page",
                    index: 8,
                    component: () => import("./views/BlogInnerPage.vue")
                },
                {
                    path: "/destination-package",
                    name: "Destination Package",
                    index: 9,
                    component: () => import("./views/DestinationPackage.vue")
                },
                {
                    path: "/tour-quote",
                    name: "Tour Quote",
                    index: 10,
                    component: () => import("./views/TourQuote.vue")
                },
                {
                    path: "/tour-package/:id",
                    name: "Tour Package",
                    index: 11,
                    component: () => import("./views/TourPackage.vue")
                },
                {
                    path: "/tour-landing-one",
                    name: "Tour Landing",
                    index: 12,
                    component: () => import("./views/TourLandingOne.vue")
                },
                {
                    path: "/tour-landing-two",
                    name: "Tour Landing",
                    index: 13,
                    component: () => import("./views/TourLandingTwo.vue")
                },
                {
                    path: "/operator",
                    name: "Tour Operator",
                    index: 14,
                    component: () => import("./views/TourOperator.vue")
                },
                {
                    path: "/become-a-partner",
                    name: "Become A Partner",
                    index: 15,
                    component: () => import("./views/BecomePartner.vue")
                },
            ]
        },
        {
            path: "/Error404",
            name: "404 Page",
            index: 15,
            component: () => import("./views/Error404.vue")
        },
        {
      path: "*",
      redirect: "/Error404",
    },
    ],
});

// import NProgress from 'nprogress';

// router.beforeResolve((to, from, next) => {
//     // If this isn't an initial page load.
//     if (to.name) {
//         // Start the route progress bar.
//         NProgress.start()
//     }
//     next()
// })

// router.afterEach(() => {
//     // Complete the animation of the route progress bar.
//     NProgress.done()
// })
export default router;
