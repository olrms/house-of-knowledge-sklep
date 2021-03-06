(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCountryCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrencyRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductIdsForCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPriceValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isOnboardingEnabled; });
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Gets the country code from a country:state value string.
 *
 * @param {string} countryState Country state string, e.g. US:GA.
 * @return {string} Country string.
 */

function getCountryCode(countryState) {
  if (!countryState) {
    return null;
  }

  return countryState.split(':')[0];
}
function getCurrencyRegion(countryState) {
  var region = getCountryCode(countryState);
  var euCountries = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["without"])(Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('onboarding', {
    euCountries: []
  }).euCountries, 'GB');

  if (euCountries.includes(region)) {
    region = 'EU';
  }

  return region;
}
/**
 * Gets the product IDs for items based on the product types and theme selected in the onboarding profiler.
 *
 * @param {Object} profileItems Onboarding profile.
 * @param {boolean} includeInstalledItems Include installed items in returned product IDs.
 * @param {Array} installedPlugins Installed plugins.
 * @return {Array} Product Ids.
 */

function getProductIdsForCart(profileItems) {
  var includeInstalledItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var installedPlugins = arguments.length > 2 ? arguments[2] : undefined;
  var onboarding = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('onboarding', {});
  var productIds = []; // The population of onboarding.productTypes only happens if the task list should be shown
  // so bail early if it isn't present.

  if (!onboarding.productTypes) {
    return productIds;
  }

  var productTypes = profileItems.product_types || [];
  productTypes.forEach(function (productType) {
    if (onboarding.productTypes[productType] && onboarding.productTypes[productType].product && (includeInstalledItems || !installedPlugins.includes(onboarding.productTypes[productType].slug))) {
      productIds.push(onboarding.productTypes[productType].product);
    }
  });
  var theme = onboarding.themes.find(function (themeData) {
    return themeData.slug === profileItems.theme;
  });

  if (theme && theme.id && getPriceValue(theme.price) > 0 && (includeInstalledItems || !theme.is_installed)) {
    productIds.push(theme.id);
  }

  return productIds;
}
/**
 * Get the value of a price from a string, removing any non-numeric characters.
 *
 * @param {string} string Price string.
 * @return {number} Number value.
 */

function getPriceValue(string) {
  return Number(Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__["decodeEntities"])(string).replace(/[^0-9.-]+/g, ''));
}
/**
 * Returns if the onboarding feature of WooCommerce Admin should be enabled.
 *
 * While we preform an a/b test of onboarding, the feature will be enabled within the plugin build,
 * but only if the user recieved the test/opted in.
 *
 * @return {boolean} True if the onboarding is enabled.
 */

function isOnboardingEnabled() {
  if (!window.wcAdminFeatures.onboarding) {
    return false;
  }

  return Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('onboardingEnabled', false);
}

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(169);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(784);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var dashboard_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(753);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */



var CustomizableDashboard = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
  return __webpack_require__.e(/* import() | customizable-dashboard */ 23).then(__webpack_require__.bind(null, 910));
});
var ProfileWizard = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
  return Promise.all(/* import() | profile-wizard */[__webpack_require__.e(1), __webpack_require__.e(49), __webpack_require__.e(41)]).then(__webpack_require__.bind(null, 909));
});

var Dashboard = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dashboard);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dashboard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          path = _this$props.path,
          profileItems = _this$props.profileItems,
          query = _this$props.query;

      if (Object(dashboard_utils__WEBPACK_IMPORTED_MODULE_13__[/* isOnboardingEnabled */ "e"])() && !profileItems.completed && !window.wcAdminFeatures.homescreen) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
          fallback: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["Spinner"], null)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ProfileWizard, {
          query: query
        }));
      }

      if (window.wcAdminFeatures['analytics-dashboard/customizable']) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
          fallback: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["Spinner"], null)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(CustomizableDashboard, {
          query: query,
          path: path
        }));
      }

      return null;
    }
  }]);

  return Dashboard;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__[/* getSetting */ "g"])('onboarding', {}).profile ? Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__["withOnboardingHydration"])(Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__[/* getSetting */ "g"])('onboarding', {}).profile) : lodash__WEBPACK_IMPORTED_MODULE_8__["identity"], Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select) {
  if (!Object(dashboard_utils__WEBPACK_IMPORTED_MODULE_13__[/* isOnboardingEnabled */ "e"])()) {
    return;
  }

  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var profileItems = getProfileItems();
  return {
    profileItems: profileItems
  };
}))(Dashboard));

/***/ })

}]);