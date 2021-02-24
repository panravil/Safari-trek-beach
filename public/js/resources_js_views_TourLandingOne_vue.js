(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_TourLandingOne_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomStarRating.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomStarRating.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    rating: Number
  },
  computed: {},
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _components_CustomStarRating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/CustomStarRating */ "./resources/js/components/CustomStarRating.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import { mapState, mapGetters, mapMutations } from "vuex";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CustomStarRating: _components_CustomStarRating__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    tourData: Object,
    where_to_search: String,
    start_date: String,
    adults_number: Number,
    children_number: Number
  },
  computed: {},
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {
    getMidRoute: function getMidRoute(destination) {
      if (destination == undefined || destination == null) return "";
      var route_data = "";

      for (var i = 0; i < destination.length; i++) {
        route_data = route_data + destination[i] + ", ";
      }

      if (route_data.length > 60) return route_data.substr(0, 60) + "...";else return route_data;
    },
    getTourLevel: function getTourLevel(level) {
      if (level == undefined || level == null) return "";
      var level_data = this.tourData.tour_group;

      for (var i = 0; i < level.length; i++) {
        level_data += ", " + level[i];
      }

      level_data = level_data.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
      });
      return level_data;
    },
    toInnerPackage: function toInnerPackage() {
      var searchData = {};
      searchData = {
        where_to_search: this.where_to_search,
        start_date: this.start_date,
        adults_number: this.adults_number,
        children_number: this.children_number
      };
      this.$store.dispatch("tourController/setSearchData", searchData); // this.$router
      //   .push("/tour-package/" + this.tourData.package_id)
      //   .catch(() => {});

      var routeData = this.$router.resolve({
        name: "Tour Package",
        params: {
          id: this.tourData.package_id
        }
      });
      window.open(routeData.href, "_blank");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/TourLandingOne.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/TourLandingOne.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_TourCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TourCard */ "./resources/js/components/TourCard.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TourCard: _components_TourCard__WEBPACK_IMPORTED_MODULE_1__.default
  },
  name: "TourLanding",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    popularTours: "tourController/popularTours"
  })),
  data: function data() {
    return {
      tour_data: null
    };
  },
  created: function created() {
    this.getPopularTours();
  },
  methods: {
    getPopularTours: function getPopularTours() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch("tourController/getPopularTours").then(function () {
                  _this.loading = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#tour-card .price[data-v-5583021a] {\n    width: 80px;\n    color: #0f6d24;\n    right: 5px;\n    bottom: 0px;\n    top: 0px;\n    padding-left: 2px;\n    border-left: 1px dotted black;\n    position: absolute;\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#tour-card .tag-image[data-v-5583021a] {\n    top: -12px;\n    position: absolute;\n    right: 10px;\n}\n#tour-card .bg-image[data-v-5583021a] {\n    background-size: cover;\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-top: 56.25%;\n}\n#tour-card .tour_title[data-v-5583021a] {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: left;\n    padding: 15px 10px;\n    background: rgba(0, 0, 0, 0.4);\n    background: linear-gradient(\n        to bottom,\n        rgba(0, 0, 0, 0) 0%,\n        rgba(0, 0, 0, 0.5) 45%,\n        rgba(0, 0, 0, 0.9) 100%\n    );\n    color: white;\n    text-align: center;\n    font-weight: 700;\n    font-size: 20px;\n    margin: 40px 0 0px 0;\n    font-family: \"Montserrat\", sans-serif;\n}\n#tour-card.card[data-v-5583021a] {\n    transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;\n    box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);\n    cursor: pointer;\n}\n#tour-card.card[data-v-5583021a]:hover {\n    box-shadow: 0px 1px 13px #666;\n}\n.trip-route[data-v-5583021a] {\n    min-height: 75px;\n}\n.company-name[data-v-5583021a] {\n    font-size: 18px;\n}\n@media (max-width: 1200px) {\n.company-name[data-v-5583021a] {\n        font-size: 14px;\n        padding-left: 8px !important;\n}\n.company-review[data-v-5583021a]{\n        font-size: 14px;\n        padding-left: 8px !important;\n}\n#tour-card .price[data-v-5583021a] {\n        font-size: 16px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCard_vue_vue_type_style_index_0_id_5583021a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCard_vue_vue_type_style_index_0_id_5583021a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCard_vue_vue_type_style_index_0_id_5583021a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/CustomStarRating.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/CustomStarRating.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _CustomStarRating_vue_vue_type_template_id_3897cf4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomStarRating.vue?vue&type=template&id=3897cf4b& */ "./resources/js/components/CustomStarRating.vue?vue&type=template&id=3897cf4b&");
/* harmony import */ var _CustomStarRating_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomStarRating.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomStarRating.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomStarRating_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomStarRating_vue_vue_type_template_id_3897cf4b___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomStarRating_vue_vue_type_template_id_3897cf4b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomStarRating.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TourCard.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/TourCard.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _TourCard_vue_vue_type_template_id_5583021a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TourCard.vue?vue&type=template&id=5583021a&scoped=true& */ "./resources/js/components/TourCard.vue?vue&type=template&id=5583021a&scoped=true&");
/* harmony import */ var _TourCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourCard.vue?vue&type=script&lang=js& */ "./resources/js/components/TourCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _TourCard_vue_vue_type_style_index_0_id_5583021a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css& */ "./resources/js/components/TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _TourCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TourCard_vue_vue_type_template_id_5583021a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TourCard_vue_vue_type_template_id_5583021a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5583021a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TourCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/TourLandingOne.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/TourLandingOne.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _TourLandingOne_vue_vue_type_template_id_1a62f0a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TourLandingOne.vue?vue&type=template&id=1a62f0a6& */ "./resources/js/views/TourLandingOne.vue?vue&type=template&id=1a62f0a6&");
/* harmony import */ var _TourLandingOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourLandingOne.vue?vue&type=script&lang=js& */ "./resources/js/views/TourLandingOne.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TourLandingOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TourLandingOne_vue_vue_type_template_id_1a62f0a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _TourLandingOne_vue_vue_type_template_id_1a62f0a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/TourLandingOne.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomStarRating.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/CustomStarRating.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomStarRating_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomStarRating.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomStarRating.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomStarRating_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/TourCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/TourCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/TourLandingOne.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/TourLandingOne.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourLandingOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourLandingOne.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/TourLandingOne.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourLandingOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCard_vue_vue_type_style_index_0_id_5583021a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=style&index=0&id=5583021a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/CustomStarRating.vue?vue&type=template&id=3897cf4b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/CustomStarRating.vue?vue&type=template&id=3897cf4b& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomStarRating_vue_vue_type_template_id_3897cf4b___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomStarRating_vue_vue_type_template_id_3897cf4b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomStarRating_vue_vue_type_template_id_3897cf4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomStarRating.vue?vue&type=template&id=3897cf4b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomStarRating.vue?vue&type=template&id=3897cf4b&");


/***/ }),

/***/ "./resources/js/components/TourCard.vue?vue&type=template&id=5583021a&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/TourCard.vue?vue&type=template&id=5583021a&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCard_vue_vue_type_template_id_5583021a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCard_vue_vue_type_template_id_5583021a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCard_vue_vue_type_template_id_5583021a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourCard.vue?vue&type=template&id=5583021a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=template&id=5583021a&scoped=true&");


/***/ }),

/***/ "./resources/js/views/TourLandingOne.vue?vue&type=template&id=1a62f0a6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/TourLandingOne.vue?vue&type=template&id=1a62f0a6& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourLandingOne_vue_vue_type_template_id_1a62f0a6___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourLandingOne_vue_vue_type_template_id_1a62f0a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourLandingOne_vue_vue_type_template_id_1a62f0a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourLandingOne.vue?vue&type=template&id=1a62f0a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/TourLandingOne.vue?vue&type=template&id=1a62f0a6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomStarRating.vue?vue&type=template&id=3897cf4b&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomStarRating.vue?vue&type=template&id=3897cf4b& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "star-rating" }, [
    _vm.rating < 0.1
      ? _c("span", { staticClass: "fa fa-star-o" })
      : _vm.rating > 0.1 && _vm.rating < 0.5
      ? _c("span", { staticClass: "fa fa-star-half-full checked" })
      : _c("span", { staticClass: "fa fa-star checked" }),
    _vm._v(" "),
    _vm.rating < 1
      ? _c("span", { staticClass: "fa fa-star-o" })
      : _vm.rating < 1.5
      ? _c("span", { staticClass: "fa fa-star-half-full checked" })
      : _c("span", { staticClass: "fa fa-star checked" }),
    _vm._v(" "),
    _vm.rating < 2
      ? _c("span", { staticClass: "fa fa-star-o" })
      : _vm.rating < 2.5
      ? _c("span", { staticClass: "fa fa-star-half-full checked" })
      : _c("span", { staticClass: "fa fa-star checked" }),
    _vm._v(" "),
    _vm.rating < 3
      ? _c("span", { staticClass: "fa fa-star-o" })
      : _vm.rating < 3.5
      ? _c("span", { staticClass: "fa fa-star-half-full checked" })
      : _c("span", { staticClass: "fa fa-star checked" }),
    _vm._v(" "),
    _vm.rating < 4
      ? _c("span", { staticClass: "fa fa-star-o" })
      : _vm.rating < 4.5
      ? _c("span", { staticClass: "fa fa-star-half-full checked" })
      : _c("span", { staticClass: "fa fa-star checked" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=template&id=5583021a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCard.vue?vue&type=template&id=5583021a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card mb-3 mx-2",
      attrs: { id: "tour-card" },
      on: {
        click: function($event) {
          return _vm.toInnerPackage()
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "bg-image hover-overlay ripple",
          style: {
            "background-image": "url(" + _vm.tourData.image_url + ")"
          },
          attrs: { "data-mdb-ripple-color": "light" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "tour_title" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.tourData.no_of_day) +
                "-Day " +
                _vm._s(_vm.tourData.title) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "position-absolute",
            staticStyle: {
              width: "70px",
              height: "auto",
              top: "0px",
              left: "30px"
            },
            attrs: { src: _vm.tourData.operator_logo }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "card-body",
          staticStyle: {
            position: "relative",
            "border-bottom": "1px dotted black"
          }
        },
        [
          _vm.tourData.tag !== null &&
          _vm.tourData.tag !== undefined &&
          _vm.tourData.tag !== ""
            ? _c("div", { staticClass: "tag-image" }, [
                _vm.tourData.tag == "review"
                  ? _c("img", {
                      staticStyle: {
                        "margin-top": "-3px",
                        width: "60px",
                        height: "auto"
                      },
                      attrs: { src: "/images/best-review.png" }
                    })
                  : _vm.tourData.tag == "seller"
                  ? _c("img", {
                      staticStyle: { width: "80px", height: "auto" },
                      attrs: { src: "/images/bestseller.png" }
                    })
                  : _c("img", {
                      staticStyle: { width: "100px", height: "auto" },
                      attrs: { src: "/images/toprated2.png" }
                    })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("p", { staticClass: "card-text mb-1" }, [
            _c("strong", [_vm._v(" Accommodation: ")]),
            _vm._v(" "),
            _vm.tourData.no_of_day == 2
              ? _c("span", [
                  _vm._v(_vm._s(_vm.tourData.no_of_day - 1) + " Night")
                ])
              : _vm.tourData.no_of_day > 2
              ? _c("span", [
                  _vm._v(_vm._s(_vm.tourData.no_of_day - 1) + " Nights")
                ])
              : _c("span", [_vm._v("No Accommodation")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "card-text mb-1" }, [
            _c("strong", [_vm._v(" Tour Type: ")]),
            _vm._v(
              "\n            " +
                _vm._s(_vm.getTourLevel(_vm.tourData.level)) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "card-text mb-1 trip-route" }, [
            _c("strong", [_vm._v(" Trip Route: ")]),
            _vm._v(
              "\n            " +
                _vm._s(_vm.tourData.start_city) +
                "(Start),\n            " +
                _vm._s(_vm.getMidRoute(_vm.tourData.destination)) +
                "\n            " +
                _vm._s(_vm.tourData.end_city) +
                " (End)\n        "
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row gx-0", staticStyle: { position: "relative" } },
        [
          _c("div", [
            _c("p", { staticClass: "card-text mb-1 ps-3 company-name" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.tourData.company_name) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "card-text ps-3 d-flex mb-2 company-review" },
              [
                _c("CustomStarRating", {
                  attrs: { rating: _vm.tourData.avg_review }
                }),
                _vm._v(" "),
                _vm.tourData.avg_review == "5"
                  ? _c("strong", [_vm._v("\n                     5.0/5 ")])
                  : _c("strong", [
                      _vm._v(
                        "\n                     " +
                          _vm._s(_vm.tourData.avg_review) +
                          "/5 "
                      )
                    ]),
                _vm._v("\n                (\n                "),
                _vm.tourData.sum_review == 1
                  ? _c("span", [
                      _vm._v(_vm._s(_vm.tourData.sum_review) + " Review")
                    ])
                  : _c("span", [
                      _vm._v(_vm._s(_vm.tourData.sum_review) + " Reviews")
                    ]),
                _vm._v("\n                )\n            ")
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "price" }, [
            _c("strong", [
              _c("span", { staticClass: "fa fa-dollar" }),
              _vm._v(_vm._s(_vm.tourData.adult_currency))
            ]),
            _vm._v(" "),
            _c("small", [_vm._v("pp")])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", {
        staticClass: "mask",
        staticStyle: { "background-color": "rgba(251, 251, 251, 0.15)" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/TourLandingOne.vue?vue&type=template&id=1a62f0a6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/TourLandingOne.vue?vue&type=template&id=1a62f0a6& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tour-landing-page" }, [
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row mt-5 g-0" },
        _vm._l(_vm.popularTours, function(tour_data, index) {
          return _c(
            "div",
            { key: "tour" + index, staticClass: "col-md-4 col-sm-6 col-xs-12" },
            [_c("TourCard", { attrs: { tourData: tour_data } })],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center mt-3", attrs: { "data-aos": "fade-up" } },
        [
          _vm._v(
            "\n      Lorem ipsum dolor sit amet consectetur adipiscing elit. A quis\n      aspernatur tempora eos ad necessitatibus magni vertatis ateque!\n      Veritatis laudantium saepe molestiae nostrum in molestlas. Offlciis ut\n      debitis atque provident. Consectetur, blanditlls excepturl, reiciendis\n      vel lusto repudiandae at ut minima magnam sit quidem quaerat laudantium\n      sed, cum ex nesclunt facere. Alias sed harum accusamus rerum autem,\n      temporibus officiis distinctio ratione?\n    "
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c(
        "header",
        { staticClass: "section-header", attrs: { "data-aos": "fade-up" } },
        [
          _c("h3", { staticClass: "fw-bold text-center" }, [
            _vm._v("Safari Trek Beach Tours In Tanzania")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "text-center", attrs: { "data-aos": "fade-up" } },
        [_vm._v("The Best Place For Tanzania Tours")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center", attrs: { "data-aos": "fade-up" } },
        [
          _vm._v(
            "\n        Lorem ipsum dolor sit amet consectetur adipiscing elit. A quis\n        aspernatur tempora eos ad necessitatibus magni vertatis ateque!\n        Veritatis laudantium saepe molestiae nostrum in molestlas. Offlciis ut\n        debitis atque provident. Consectetur, blanditlls excepturl, reiciendis\n        vel lusto repudiandae at ut minima magnam sit quidem quaerat laudantium\n        sed, cum ex nesclunt facere. Alias sed harum accusamus rerum autem,\n        temporibus officiis distinctio ratione?\n      "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);