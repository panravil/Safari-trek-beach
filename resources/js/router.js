import Vue from "vue";
import Router from "vue-router";
import qs from 'qs';

Vue.use(Router);

const router = new Router({
    mode: "history",
    // set custom query resolver
    stringifyQuery  : query => {
        let result = qs.stringify(query, { encode: false})
        return result ? ('?' + result) : ''
    },
    scrollBehavior(to, from) {
        if (to.name ==='Our Tours' || to.name === "Our Tours2")
            return false;
        else if (to.hash) {
            return { selector: to.hash }
        }
        else {
            return {
                x: 0,
                y: 0
            };
        }

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
                    path: "/our-tours/:destination?/:single?",
                    name: "Our Tours2",
                    index: 21,
                    component: () => import("./views/OurTours.vue")
                },
                {
                    path: "/tour-operators/page/:id",
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
                    path: "/blog/page/:id",
                    name: "Blog Post",
                    index: 6,
                    component: () => import("./views/BlogPost.vue")
                },
                {
                    path: "/tour-destinations/page/:id",
                    name: "Destination",
                    index: 7,
                    component: () => import("./views/Destination.vue")
                },
                {
                    path: "/blog-inner-page/:id",
                    name: "Blog Inner Page",
                    index: 8,
                    component: () => import("./views/BlogInnerPage.vue")
                },
                {
                    path: "/destination-package/:id",
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
                    name: "Tour Landing One",
                    index: 12,
                    component: () => import("./views/TourLandingOne.vue")
                },
                {
                    path: "/tour-landing-two",
                    name: "Tour Landing Two",
                    index: 13,
                    component: () => import("./views/TourLandingTwo.vue")
                },
                {
                    path: "/operator/:id",
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
                {
                    path: "/terms",
                    name: "Terms and Condition",
                    index: 16,
                    component: () => import("./views/TermsCondition.vue")
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
            path: "/thankyou-review",
            name: "Thank Review",
            index: 16,
            component: () => import("./views/ThankyouReview.vue")
        },
        {
            path: "/thankyou-quote",
            name: "Thank Quote",
            index: 16,
            component: () => import("./views/ThankyouQuote.vue")
        },
        {
            path: "/thankyou-partner",
            name: "Thank Partner",
            index: 16,
            component: () => import("./views/ThankyouPartner.vue")
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
