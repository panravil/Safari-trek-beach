(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Destination_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  name: "DestinationCard",
  props: {
    destination: Object
  },
  components: {},
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {// goToDestinationDetailPage() {
    //   this.$router.push("/destination-package/" + this.destination.post_slug);
    // },
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TourCardSkelecton",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _components_DestinationCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DestinationCard */ "./resources/js/components/DestinationCard.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_TourCardSkelecton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TourCardSkelecton */ "./resources/js/components/TourCardSkelecton.vue");
/* harmony import */ var vue_pagination_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-pagination-2 */ "./node_modules/vue-pagination-2/compiled/main.js");
/* harmony import */ var vue_pagination_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_pagination_2__WEBPACK_IMPORTED_MODULE_2__);
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
  name: "DestinationPage",
  components: {
    DestinationCard: _components_DestinationCard__WEBPACK_IMPORTED_MODULE_0__.default,
    TourCardSkelecton: _components_TourCardSkelecton__WEBPACK_IMPORTED_MODULE_1__.default,
    Pagination: (vue_pagination_2__WEBPACK_IMPORTED_MODULE_2___default())
  },
  data: function data() {
    return {
      current_destination_page: 1,
      destinations_per_page: 6,
      current_page_destinations: [],
      pagenation_options: {
        chunk: 5
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)({
    listDestinations: "destinationController/listDestinations",
    loading: "tourcard_loading"
  })),
  watch: {
    current_destination_page: function current_destination_page(newValue) {
      this.getCurrentPageDestinations(newValue);
    }
  },
  created: function created() {
    var page_title = "Safari-Trek-Beach.com Destination";
    document.title = page_title;
    this.getListDestinations();
  },
  methods: {
    getListDestinations: function getListDestinations() {
      var _this = this;

      this.$store.dispatch("destinationController/getListDestinations").then(function () {
        _this.getCurrentPageDestinations(_this.current_destination_page);
      });
    },
    getCurrentPageDestinations: function getCurrentPageDestinations(page_num) {
      this.current_page_destinations = [];
      var index = 0;

      for (var i = (page_num - 1) * this.destinations_per_page; i < page_num * this.destinations_per_page; i++) {
        if (this.listDestinations[i] != undefined) {
          this.current_page_destinations[index] = this.listDestinations[i];
          index++;
        }
      }
    } // toDestinationInnerPage(slug) {
    //   this.$router.push('/destination-package/' + slug);
    // },

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#destination-card .bg-image {\n  background-size: cover;\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 56.25%;\n}\n#destination-card {\n  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;\n  box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);\n  cursor: pointer;\n}\n#destination-card:hover {\n  box-shadow: 0px 1px 13px #666;\n}\n#destination-card .card-text {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  position: relative;\n  --max-lines: 3;\n  min-height: 75px;\n  max-height: calc(var(--lh) * var(--max-lines));\n  overflow: hidden;\n  padding-right: 1rem;\n}\n#destination-card .card-title {\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  position: relative;\n  --max-lines: 1;\n  min-height: 24px;\n  max-height: calc(var(--lh) * var(--max-lines));\n  overflow: hidden;\n  padding-right: 1rem;\n}\n#destination-card .subtitle {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n#destination-card .subtitle::first-letter {\n  text-transform: uppercase;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.vue-content-placeholders-img,\n.vue-content-placeholders-text__line {\n    background: #c9c9c9 !important;\n}\n.vue-content-placeholders-img {\n  height: 200px !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.destination-page {\n    padding-top: 50px;\n    padding-bottom: 100px;\n    background-color: #f2f2f2;\n}\n.destination-page section {\n    margin-top: 100px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/merge/merge.js":
/*!*************************************!*\
  !*** ./node_modules/merge/merge.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/*!
 * @name JavaScript/NodeJS Merge v1.2.1
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				if (key === '__proto__') continue;

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})( true && module && typeof module.exports === 'object' && module.exports);

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DestinationCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DestinationCard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DestinationCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DestinationCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCardSkelecton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourCardSkelecton.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCardSkelecton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCardSkelecton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Destination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Destination.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Destination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Destination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/DestinationCard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/DestinationCard.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _DestinationCard_vue_vue_type_template_id_fe5d8cba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DestinationCard.vue?vue&type=template&id=fe5d8cba& */ "./resources/js/components/DestinationCard.vue?vue&type=template&id=fe5d8cba&");
/* harmony import */ var _DestinationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DestinationCard.vue?vue&type=script&lang=js& */ "./resources/js/components/DestinationCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _DestinationCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DestinationCard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/DestinationCard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _DestinationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DestinationCard_vue_vue_type_template_id_fe5d8cba___WEBPACK_IMPORTED_MODULE_0__.render,
  _DestinationCard_vue_vue_type_template_id_fe5d8cba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DestinationCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TourCardSkelecton.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/TourCardSkelecton.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _TourCardSkelecton_vue_vue_type_template_id_22e01bd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TourCardSkelecton.vue?vue&type=template&id=22e01bd3& */ "./resources/js/components/TourCardSkelecton.vue?vue&type=template&id=22e01bd3&");
/* harmony import */ var _TourCardSkelecton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourCardSkelecton.vue?vue&type=script&lang=js& */ "./resources/js/components/TourCardSkelecton.vue?vue&type=script&lang=js&");
/* harmony import */ var _TourCardSkelecton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TourCardSkelecton.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/TourCardSkelecton.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _TourCardSkelecton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TourCardSkelecton_vue_vue_type_template_id_22e01bd3___WEBPACK_IMPORTED_MODULE_0__.render,
  _TourCardSkelecton_vue_vue_type_template_id_22e01bd3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TourCardSkelecton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Destination.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Destination.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Destination_vue_vue_type_template_id_3426acbf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Destination.vue?vue&type=template&id=3426acbf& */ "./resources/js/views/Destination.vue?vue&type=template&id=3426acbf&");
/* harmony import */ var _Destination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Destination.vue?vue&type=script&lang=js& */ "./resources/js/views/Destination.vue?vue&type=script&lang=js&");
/* harmony import */ var _Destination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Destination.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Destination.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Destination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Destination_vue_vue_type_template_id_3426acbf___WEBPACK_IMPORTED_MODULE_0__.render,
  _Destination_vue_vue_type_template_id_3426acbf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Destination.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DestinationCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/DestinationCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DestinationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DestinationCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DestinationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/TourCardSkelecton.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/TourCardSkelecton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCardSkelecton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourCardSkelecton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCardSkelecton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Destination.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Destination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Destination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Destination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Destination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/DestinationCard.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/DestinationCard.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DestinationCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DestinationCard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/TourCardSkelecton.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/TourCardSkelecton.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCardSkelecton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourCardSkelecton.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/Destination.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Destination.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Destination_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Destination.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/DestinationCard.vue?vue&type=template&id=fe5d8cba&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/DestinationCard.vue?vue&type=template&id=fe5d8cba& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DestinationCard_vue_vue_type_template_id_fe5d8cba___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DestinationCard_vue_vue_type_template_id_fe5d8cba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DestinationCard_vue_vue_type_template_id_fe5d8cba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DestinationCard.vue?vue&type=template&id=fe5d8cba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=template&id=fe5d8cba&");


/***/ }),

/***/ "./resources/js/components/TourCardSkelecton.vue?vue&type=template&id=22e01bd3&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/TourCardSkelecton.vue?vue&type=template&id=22e01bd3& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCardSkelecton_vue_vue_type_template_id_22e01bd3___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCardSkelecton_vue_vue_type_template_id_22e01bd3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourCardSkelecton_vue_vue_type_template_id_22e01bd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourCardSkelecton.vue?vue&type=template&id=22e01bd3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=template&id=22e01bd3&");


/***/ }),

/***/ "./resources/js/views/Destination.vue?vue&type=template&id=3426acbf&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Destination.vue?vue&type=template&id=3426acbf& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Destination_vue_vue_type_template_id_3426acbf___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Destination_vue_vue_type_template_id_3426acbf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Destination_vue_vue_type_template_id_3426acbf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Destination.vue?vue&type=template&id=3426acbf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=template&id=3426acbf&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=template&id=fe5d8cba&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DestinationCard.vue?vue&type=template&id=fe5d8cba& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      attrs: { id: "destination-card" },
      on: {
        click: function($event) {
          return _vm.$router.push(
            "/destination-package/" + _vm.destination.post_slug
          )
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "bg-image hover-overlay ripple",
          style: {
            "background-image": "url(" + _vm.destination.post_image + ")"
          },
          attrs: {
            "data-mdb-ripple-color": "light",
            title: _vm.destination.post_title
          }
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "h5",
          {
            staticClass: "card-title fw-bold text-center text-danger",
            attrs: { title: _vm.destination.post_title }
          },
          [_c("div", [_vm._v(_vm._s(_vm.destination.post_title))])]
        ),
        _vm._v(" "),
        _c(
          "h6",
          {
            staticClass: "fw-bold text-dark mt-4 mb-2 subtitle",
            staticStyle: { "text-overflow": "ellipsis" },
            attrs: { title: _vm.destination.post_sub_title }
          },
          [
            _vm._v(
              "\n      " + _vm._s(_vm.destination.post_sub_title) + "\n    "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "card-text",
            attrs: { title: _vm.destination.short_description }
          },
          [
            _vm._v(
              "\n      " + _vm._s(_vm.destination.short_description) + "\n    "
            )
          ]
        ),
        _vm._v(" "),
        _vm._m(1)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("div", { staticClass: "mask" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-warning", attrs: { type: "button" } },
      [
        _vm._v("\n      Read More "),
        _c("span", { staticClass: "fa fa-angle-double-right ms-2" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=template&id=22e01bd3&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TourCardSkelecton.vue?vue&type=template&id=22e01bd3& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card mb-3 mx-2" },
    [
      _c(
        "content-placeholders",
        { attrs: { rounded: true } },
        [
          _c("content-placeholders-img"),
          _vm._v(" "),
          _c("content-placeholders-heading"),
          _vm._v(" "),
          _c("content-placeholders-heading"),
          _vm._v(" "),
          _c("content-placeholders-heading")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=template&id=3426acbf&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Destination.vue?vue&type=template&id=3426acbf& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "destination-page" }, [
    _c("div", { staticClass: "container" }, [
      _c("section", [
        _vm._m(0),
        _vm._v(" "),
        _vm.loading
          ? _c(
              "div",
              { staticClass: "row gx-0" },
              _vm._l(6, function(blog, index) {
                return _c(
                  "div",
                  {
                    key: index + "bloglist",
                    staticClass: "col-lg-4 col-md-6 col-xs-12"
                  },
                  [_c("TourCardSkelecton")],
                  1
                )
              }),
              0
            )
          : _c(
              "div",
              { staticClass: "row gx-0" },
              [
                _vm._l(_vm.current_page_destinations, function(
                  destination,
                  index
                ) {
                  return _c(
                    "div",
                    {
                      key: "destination" + index,
                      staticClass: "col-lg-4 col-md-6 col-xs-12"
                    },
                    [
                      _c("DestinationCard", {
                        attrs: { destination: destination }
                      })
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _vm.listDestinations != null
                  ? _c(
                      "div",
                      { staticClass: "d-flex justify-content-center mt-4" },
                      [
                        _c("Pagination", {
                          attrs: {
                            records: _vm.listDestinations.length,
                            "per-page": _vm.destinations_per_page,
                            options: _vm.pagenation_options
                          },
                          model: {
                            value: _vm.current_destination_page,
                            callback: function($$v) {
                              _vm.current_destination_page = $$v
                            },
                            expression: "current_destination_page"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ],
              2
            )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "section-header mt-5" }, [
      _c("h3", [_vm._v("DESTINATIONS")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/Pagination.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/Pagination.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _template = __webpack_require__(/*! ./template */ "./node_modules/vue-pagination-2/compiled/template.js");

var _template2 = _interopRequireDefault(_template);

var _RenderlessPagination = __webpack_require__(/*! ./RenderlessPagination */ "./node_modules/vue-pagination-2/compiled/RenderlessPagination.js");

var _RenderlessPagination2 = _interopRequireDefault(_RenderlessPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'Pagination',
    components: { RenderlessPagination: _RenderlessPagination2.default },
    provide: function provide() {
        var _this = this;

        return {
            Page: function Page() {
                return _this.value;
            },
            perPage: function perPage() {
                return _this.perPage;
            },
            records: function records() {
                return _this.records;
            }
        };
    },
    render: function render(h) {
        return h('renderless-pagination', { scopedSlots: {
                default: function _default(props) {
                    return props.override ? h(props.override, {
                        attrs: { props: props }
                    }) : (0, _template2.default)(props)(h);
                }
            }
        });
    },

    props: {
        value: {
            type: Number,
            required: true,
            validator: function validator(val) {
                return val > 0;
            }
        },
        records: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            default: 25
        },
        options: {
            type: Object
        }
    },
    data: function data() {
        return {
            aProps: {
                role: "button"
            }
        };
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/RenderlessPagination.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/RenderlessPagination.js ***!
  \************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _config = __webpack_require__(/*! ./config */ "./node_modules/vue-pagination-2/compiled/config.js");

var _config2 = _interopRequireDefault(_config);

var _merge = __webpack_require__(/*! merge */ "./node_modules/merge/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    inject: ['Page', 'records', 'perPage'],
    props: {
        itemClass: {
            required: false,
            default: 'VuePagination__pagination-item'
        }
    },
    render: function render() {
        var _this = this;

        return this.$scopedSlots.default({
            override: this.opts.template,
            showPagination: this.totalPages > 1,
            pages: this.pages,
            pageEvents: function pageEvents(page) {
                return {
                    click: function click() {
                        return _this.setPage(page);
                    },
                    keydown: function keydown(e) {
                        if (e.key === 'ArrowRight') {
                            _this.next();
                        }

                        if (e.key === 'ArrowLeft') {
                            _this.prev();
                        }
                    }
                };
            },
            activeClass: this.activeClass,
            hasEdgeNav: this.opts.edgeNavigation && this.totalChunks > 1,
            setPage: this.setPage,
            setFirstPage: this.setPage.bind(this, 1),
            setLastPage: this.setPage.bind(this, this.totalPages),
            hasChunksNav: this.opts.chunksNavigation === 'fixed',
            setPrevChunk: this.prevChunk,
            setNextChunk: this.nextChunk,
            setPrevPage: this.prev,
            firstPageProps: {
                class: this.Theme.link,
                disabled: this.page === 1
            },
            lastPageProps: {
                class: this.Theme.link,
                disabled: this.page === this.totalPages
            },
            prevProps: {
                class: this.Theme.link,
                disabled: !!this.allowedPageClass(this.page - 1)
            },
            nextProps: {
                class: this.Theme.link,
                disabled: !!this.allowedPageClass(this.page + 1)
            },
            pageClasses: function pageClasses(page) {
                return _this.itemClass + ' ' + _this.Theme.item + ' ' + _this.activeClass(page);
            },
            prevChunkProps: {
                class: this.Theme.link,
                disabled: !this.allowedChunk(-1)
            },
            nextChunkProps: {
                class: this.Theme.link,
                disabled: !this.allowedChunk(1)
            },
            setNextPage: this.next,
            theme: {
                nav: this.Theme.nav,
                list: 'VuePagination__pagination ' + this.Theme.list,
                item: this.Theme.item,
                disabled: this.Theme.disabled,
                prev: this.itemClass + ' ' + this.itemClass + '-prev-page ' + this.Theme.item + ' ' + this.Theme.prev + ' ' + this.allowedPageClass(this.page - 1),
                next: this.itemClass + '  ' + this.itemClass + '-next-page ' + this.Theme.item + ' ' + this.Theme.next + ' ' + this.allowedPageClass(this.page + 1),
                prevChunk: this.itemClass + ' ' + this.Theme.item + ' ' + this.Theme.prev + ' ' + this.itemClass + '-prev-chunk ' + this.allowedChunkClass(-1),
                nextChunk: this.itemClass + ' ' + this.Theme.item + ' ' + this.Theme.next + ' ' + this.itemClass + '-next-chunk ' + this.allowedChunkClass(1),
                firstPage: this.itemClass + ' ' + this.Theme.item + ' ' + (this.page === 1 ? this.Theme.disabled : '') + ' ' + this.itemClass + '-first-page',
                lastPage: this.itemClass + ' ' + this.Theme.item + ' ' + (this.page === this.totalPages ? this.Theme.disabled : '') + ' ' + this.itemClass + '-last-page',
                link: this.Theme.link,
                page: this.itemClass + ' ' + this.Theme.item,
                wrapper: this.Theme.wrapper,
                count: 'VuePagination__count ' + this.Theme.count
            },
            hasRecords: this.hasRecords,
            count: this.count,
            texts: this.opts.texts,
            opts: this.opts,
            allowedChunkClass: this.allowedChunkClass,
            allowedPageClass: this.allowedPageClass,
            setChunk: this.setChunk,
            prev: this.prev,
            next: this.next,
            totalPages: this.totalPages,
            totalChunks: this.totalChunks,
            page: this.Page(),
            records: this.records(),
            perPage: this.perPage(),
            formatNumber: this.formatNumber
        });
    },

    data: function data() {
        return {
            firstPage: this.$parent.value,
            For: this.$parent.for,
            Options: this.$parent.options
        };
    },
    watch: {
        page: function page(val) {
            if (this.opts.chunksNavigation === 'scroll' && this.allowedPage(val) && !this.inDisplay(val)) {
                if (val === this.totalPages) {
                    var first = val - this.opts.chunk + 1;
                    this.firstPage = first >= 1 ? first : 1;
                } else {
                    this.firstPage = val;
                }
            }

            this.$parent.$emit('paginate', val);
        }
    },
    computed: {
        Records: function Records() {
            return this.records();
        },
        PerPage: function PerPage() {
            return this.perPage();
        },
        opts: function opts() {
            return _merge2.default.recursive((0, _config2.default)(), this.Options);
        },
        Theme: function Theme() {

            if (_typeof(this.opts.theme) === 'object') {
                return this.opts.theme;
            }

            var themes = {
                bootstrap3: __webpack_require__(/*! ./themes/bootstrap3 */ "./node_modules/vue-pagination-2/compiled/themes/bootstrap3.js"),
                bootstrap4: __webpack_require__(/*! ./themes/bootstrap4 */ "./node_modules/vue-pagination-2/compiled/themes/bootstrap4.js"),
                bulma: __webpack_require__(/*! ./themes/bulma */ "./node_modules/vue-pagination-2/compiled/themes/bulma.js")
            };

            if (_typeof(themes[this.opts.theme]) === undefined) {
                throw 'vue-pagination-2: the theme ' + this.opts.theme + ' does not exist';
            }

            return themes[this.opts.theme];
        },
        page: function page() {
            return this.Page();
        },

        pages: function pages() {

            if (!this.Records) return [];

            return range(this.paginationStart, this.pagesInCurrentChunk);
        },
        totalPages: function totalPages() {
            return this.Records ? Math.ceil(this.Records / this.PerPage) : 1;
        },
        totalChunks: function totalChunks() {
            return Math.ceil(this.totalPages / this.opts.chunk);
        },
        currentChunk: function currentChunk() {
            return Math.ceil(this.page / this.opts.chunk);
        },
        paginationStart: function paginationStart() {
            if (this.opts.chunksNavigation === 'scroll') {
                return this.firstPage;
            }

            return (this.currentChunk - 1) * this.opts.chunk + 1;
        },
        pagesInCurrentChunk: function pagesInCurrentChunk() {
            return this.paginationStart + this.opts.chunk <= this.totalPages ? this.opts.chunk : this.totalPages - this.paginationStart + 1;
        },
        hasRecords: function hasRecords() {
            return parseInt(this.Records) > 0;
        },

        count: function count() {

            if (/{page}/.test(this.opts.texts.count)) {

                if (this.totalPages <= 1) return '';

                return this.opts.texts.count.replace('{page}', this.page).replace('{pages}', this.totalPages);
            }

            var parts = this.opts.texts.count.split('|');
            var from = (this.page - 1) * this.PerPage + 1;
            var to = this.page == this.totalPages ? this.Records : from + this.PerPage - 1;
            var i = Math.min(this.Records == 1 ? 2 : this.totalPages == 1 ? 1 : 0, parts.length - 1);

            return parts[i].replace('{count}', this.formatNumber(this.Records)).replace('{from}', this.formatNumber(from)).replace('{to}', this.formatNumber(to));
        }
    },
    methods: {
        setPage: function setPage(page) {
            if (this.allowedPage(page)) {
                this.paginate(page);
            }
        },
        paginate: function paginate(page) {
            var _this2 = this;

            this.$parent.$emit('input', page);

            this.$nextTick(function () {
                if (_this2.$el) {
                    _this2.$el.querySelector('li.active a').focus();
                }
            });
        },

        next: function next() {
            return this.setPage(this.page + 1);
        },
        prev: function prev() {
            return this.setPage(this.page - 1);
        },
        inDisplay: function inDisplay(page) {

            var start = this.firstPage;
            var end = start + this.opts.chunk - 1;

            return page >= start && page <= end;
        },

        nextChunk: function nextChunk() {
            return this.setChunk(1);
        },
        prevChunk: function prevChunk() {
            return this.setChunk(-1);
        },
        setChunk: function setChunk(direction) {
            this.setPage((this.currentChunk - 1 + direction) * this.opts.chunk + 1);
        },
        allowedPage: function allowedPage(page) {
            return page >= 1 && page <= this.totalPages;
        },
        allowedChunk: function allowedChunk(direction) {
            return direction == 1 && this.currentChunk < this.totalChunks || direction == -1 && this.currentChunk > 1;
        },
        allowedPageClass: function allowedPageClass(direction) {
            return this.allowedPage(direction) ? '' : this.Theme.disabled;
        },
        allowedChunkClass: function allowedChunkClass(direction) {
            return this.allowedChunk(direction) ? '' : this.Theme.disabled;
        },
        activeClass: function activeClass(page) {
            return this.page == page ? this.Theme.active : '';
        },
        formatNumber: function formatNumber(num) {

            if (!this.opts.format) return num;

            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
};


function range(start, count) {
    return Array.apply(0, Array(count)).map(function (element, index) {
        return index + start;
    });
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/config.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/config.js ***!
  \**********************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

exports.default = function () {
    return {
        format: true,
        chunk: 10,
        chunksNavigation: 'fixed',
        edgeNavigation: false,
        theme: 'bootstrap3',
        template: null,
        texts: {
            count: 'Showing {from} to {to} of {count} records|{count} records|One record',
            first: 'First',
            last: 'Last',
            nextPage: '>',
            nextChunk: '>>',
            prevPage: '<',
            prevChunk: '<<'
        }
    };
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/main.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/main.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Pagination = __webpack_require__(/*! ./Pagination */ "./node_modules/vue-pagination-2/compiled/Pagination.js");

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Pagination2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/template.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/template.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (props) {

    return function (h) {

        var theme = this.theme;
        var prevChunk = '';
        var nextChunk = '';
        var firstPage = '';
        var lastPage = '';
        var items = this.pages.map(function (page) {

            return h(
                'li',
                { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + this.activeClass(page),
                    on: {
                        'click': this.setPage.bind(this, page)
                    }
                },
                [h(
                    'a',
                    { 'class': theme.link + ' ' + this.activeClass(page),
                        attrs: { role: 'button' }
                    },
                    [this.formatNumber(page)]
                )]
            );
        }.bind(this));

        if (this.opts.edgeNavigation && this.totalChunks > 1) {
            firstPage = h(
                'li',
                { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === 1 ? theme.disabled : '') + ' VuePagination__pagination-item-first-page',
                    on: {
                        'click': this.setPage.bind(this, 1)
                    }
                },
                [h(
                    'a',
                    { 'class': theme.link,
                        attrs: { disabled: this.page === 1 }
                    },
                    [this.opts.texts.first]
                )]
            );

            lastPage = h(
                'li',
                { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === this.totalPages ? theme.disabled : '') + ' VuePagination__pagination-item-last-page',
                    on: {
                        'click': this.setPage.bind(this, this.totalPages)
                    }
                },
                [h(
                    'a',
                    { 'class': theme.link,
                        attrs: { disabled: this.page === this.totalPages }
                    },
                    [this.opts.texts.last]
                )]
            );
        }

        if (this.opts.chunksNavigation === 'fixed') {

            prevChunk = h(
                'li',
                { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-chunk ' + this.allowedChunkClass(-1),
                    on: {
                        'click': this.setChunk.bind(this, -1)
                    }
                },
                [h(
                    'a',
                    { 'class': theme.link,
                        attrs: { disabled: !!this.allowedChunkClass(-1) }
                    },
                    [this.opts.texts.prevChunk]
                )]
            );

            nextChunk = h(
                'li',
                { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-chunk ' + this.allowedChunkClass(1),
                    on: {
                        'click': this.setChunk.bind(this, 1)
                    }
                },
                [h(
                    'a',
                    { 'class': theme.link,
                        attrs: { disabled: !!this.allowedChunkClass(1) }
                    },
                    [this.opts.texts.nextChunk]
                )]
            );
        }

        return h(
            'div',
            { 'class': 'VuePagination ' + theme.wrapper },
            [h(
                'nav',
                { 'class': '' + theme.nav },
                [h(
                    'ul',
                    {
                        directives: [{
                            name: 'show',
                            value: this.totalPages > 1
                        }],

                        'class': theme.list + ' VuePagination__pagination' },
                    [firstPage, prevChunk, h(
                        'li',
                        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-page ' + this.allowedPageClass(this.page - 1),
                            on: {
                                'click': this.prev.bind(this)
                            }
                        },
                        [h(
                            'a',
                            { 'class': theme.link,
                                attrs: { disabled: !!this.allowedPageClass(this.page - 1)
                                }
                            },
                            [this.opts.texts.prevPage]
                        )]
                    ), items, h(
                        'li',
                        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-page ' + this.allowedPageClass(this.page + 1),
                            on: {
                                'click': this.next.bind(this)
                            }
                        },
                        [h(
                            'a',
                            { 'class': theme.link,
                                attrs: { disabled: !!this.allowedPageClass(this.page + 1)
                                }
                            },
                            [this.opts.texts.nextPage]
                        )]
                    ), nextChunk, lastPage]
                ), h(
                    'p',
                    {
                        directives: [{
                            name: 'show',
                            value: parseInt(this.records)
                        }],

                        'class': 'VuePagination__count ' + theme.count },
                    [this.count]
                )]
            )]
        );
    }.bind(props);
};

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/themes/bootstrap3.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/themes/bootstrap3.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
    nav: '',
    count: '',
    wrapper: '',
    list: 'pagination',
    item: 'page-item',
    link: 'page-link',
    next: '',
    prev: '',
    active: 'active',
    disabled: 'disabled'
};

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/themes/bootstrap4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/themes/bootstrap4.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
    nav: '',
    count: '',
    wrapper: '',
    list: 'pagination',
    item: 'page-item',
    link: 'page-link',
    next: '',
    prev: '',
    active: 'active',
    disabled: 'disabled'
};

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/themes/bulma.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/themes/bulma.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
    nav: '',
    count: '',
    wrapper: 'pagination',
    list: 'pagination-list',
    item: '',
    link: 'pagination-link',
    next: '',
    prev: '',
    active: 'is-current',
    disabled: '' // uses the disabled HTML attirbute
};

/***/ })

}]);