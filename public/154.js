(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[154],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/report/ReportPi.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/project/report/ReportPi.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _useReportPi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useReportPi */ "./resources/js/src/views/project/report/useReportPi.js");
/* harmony import */ var _projectStoreModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projectStoreModule */ "./resources/js/src/views/project/projectStoreModule.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_5__);
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






// import reportPiStoreModule from "./reportPiStoreModule";

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTooltip"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BOverlay"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  setup: function setup() {
    var PROJECT_APP_STORE_MODULE_NAME = "project";

    // Register module
    if (!_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasModule(PROJECT_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_2__["default"].registerModule(PROJECT_APP_STORE_MODULE_NAME, _projectStoreModule__WEBPACK_IMPORTED_MODULE_4__["default"]);

    // UnRegister on leave
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"])(function () {
      // if (store.hasModule(PROJECT_APP_STORE_MODULE_NAME))
      // store.unregisterModule(PROJECT_APP_STORE_MODULE_NAME);
    });
    var _useReportPi = Object(_useReportPi__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      items = _useReportPi.items,
      isOverLay = _useReportPi.isOverLay,
      apexChatData = _useReportPi.apexChatData;
    return {
      items: items,
      isOverLay: isOverLay,
      apexChatData: apexChatData,
      store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/report/ReportPi.vue?vue&type=template&id=4a3f7cd8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/project/report/ReportPi.vue?vue&type=template&id=4a3f7cd8& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-overlay",
        {
          attrs: {
            show: _vm.isOverLay,
            opacity: "0.3",
            "spinner-variant": "primary",
          },
        },
        [
          _c(
            "div",
            { staticClass: "m-2" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", [
                    _c("h3", { staticClass: "text-center" }, [
                      _vm._v(
                        "\n                        Report Principal Investigator (" +
                          _vm._s(_vm.store.state.project.year.name) +
                          ")\n                    "
                      ),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "m-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    [
                      Object.keys(_vm.apexChatData).length !== 0
                        ? _c("vue-apex-charts", {
                            attrs: {
                              type: "bar",
                              height: "400",
                              options:
                                _vm.apexChatData.columnChart.chartOptions,
                              series: _vm.apexChatData.columnChart.series,
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "m-2" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        ref: "refProjectListTable",
                        staticClass:
                          "table table-bordered table-relative table-striped",
                        attrs: {
                          "show-empty": "",
                          "empty-text": "No matching records found",
                        },
                      },
                      [
                        _c("thead", [
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                                Principal Investigator (PI)\n                            "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("JOURNAL"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("CONFERENCE"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.items, function (it) {
                            return _c("tr", [
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(it.name)),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(it.journal) +
                                    "\n                                "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(it.conference) +
                                    "\n                                "
                                ),
                              ]),
                            ])
                          }),
                          0
                        ),
                      ]
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/project/report/ReportPi.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/project/report/ReportPi.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportPi_vue_vue_type_template_id_4a3f7cd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportPi.vue?vue&type=template&id=4a3f7cd8& */ "./resources/js/src/views/project/report/ReportPi.vue?vue&type=template&id=4a3f7cd8&");
/* harmony import */ var _ReportPi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportPi.vue?vue&type=script&lang=js& */ "./resources/js/src/views/project/report/ReportPi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportPi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportPi_vue_vue_type_template_id_4a3f7cd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportPi_vue_vue_type_template_id_4a3f7cd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/project/report/ReportPi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/project/report/ReportPi.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/project/report/ReportPi.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportPi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportPi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/report/ReportPi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportPi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/project/report/ReportPi.vue?vue&type=template&id=4a3f7cd8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/project/report/ReportPi.vue?vue&type=template&id=4a3f7cd8& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportPi_vue_vue_type_template_id_4a3f7cd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportPi.vue?vue&type=template&id=4a3f7cd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/report/ReportPi.vue?vue&type=template&id=4a3f7cd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportPi_vue_vue_type_template_id_4a3f7cd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportPi_vue_vue_type_template_id_4a3f7cd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/project/report/useReportPi.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/project/report/useReportPi.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useReportPi; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);








// Notification



function useReportPi() {
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_7__["useToast"])();
  var errorToast = function errorToast(message) {
    toast({
      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
      props: {
        title: "Error : " + message,
        icon: "AlertTriangleIcon",
        variant: "danger"
      }
    });
  };

  // Start List
  var isOverLay = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])(false);
  var items = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])([]);

  // colors
  var chartColors = {
    column: {
      series1: "#826af9",
      series2: "#F9D4B4",
      bg: "#f8d3ff"
    }
  };
  var apexChatData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])({});
  console.log(apexChatData);
  var initDataConvert = function initDataConvert(data) {
    return data;
  };
  var fetchPIs = function fetchPIs(ctx, callback) {
    isOverLay.value = true;
    _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch("project/fetchPIs", {
      sort_by: "name"
    }).then(function (response) {
      var data = response.data.data;
      items.value = data;
      fetchPapers();
      return data;
    })["catch"](function (error) {
      console.log(error);
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
        props: {
          title: "Error fetching PI's list",
          icon: "AlertTriangleIcon",
          variant: "danger"
        }
      });
      isOverLay.value = false;
    });
  };
  var fetchPapers = function fetchPapers(ctx, callback) {
    isOverLay.value = true;
    _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch("project/fetchPapers", {
      year_id: _store__WEBPACK_IMPORTED_MODULE_6__["default"].state.project.year.id
    }).then(function (response) {
      var data = response.data.data;
      var chartPi = [];
      var chartJournal = [];
      var chartConference = [];
      var pi = items.value.map(function (p) {
        p.journal = 0;
        p.conference = 0;
        data.forEach(function (d) {
          if (d.pi_id == p.id) {
            if (d.paper_type_id == 1) {
              p.journal += 1;
            } else {
              p.conference += 1;
            }
          }
        });
        chartPi.push(p.name);
        chartJournal.push(p.journal);
        chartConference.push(p.conference);
        return p;
      });
      items.value = pi;
      apexChatData.value = {
        columnChart: {
          series: [{
            name: "Journal",
            data: chartJournal
          }, {
            name: "Conference",
            data: chartConference
          }],
          chartOptions: {
            chart: {
              stacked: true,
              type: 'bar',
              toolbar: {
                show: false
              }
            },
            colors: [chartColors.column.series1, chartColors.column.series2],
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '30%',
                endingShape: 'rounded'
                // columnWidth: "15%",
                // colors: {
                //     backgroundBarColors: [
                //         chartColors.column.bg,
                //         chartColors.column.bg,
                //         chartColors.column.bg,
                //         chartColors.column.bg,
                //         chartColors.column.bg,
                //     ],
                //     backgroundBarRadius: 20,
                // },
              }
            },

            dataLabels: {
              enabled: false
            },
            legend: {
              show: true,
              position: "top",
              fontSize: "14px",
              fontFamily: "Montserrat",
              horizontalAlign: "left"
            },
            stroke: {
              // show: true,
              // width: 10,
              colors: ["transparent"]
            },
            grid: {
              xaxis: {
                lines: {
                  show: false
                }
              }
            },
            xaxis: {
              categories: chartPi
            },
            yaxis: {
              // opposite: isRtl,
            },
            fill: {
              opacity: 1
            }
          }
        }
      };
      isOverLay.value = false;
    })["catch"](function (error) {
      console.log(error);
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
        props: {
          title: "Error fetching Projects' list",
          icon: "AlertTriangleIcon",
          variant: "danger"
        }
      });
      isOverLay.value = false;
    });
  };
  fetchPIs();
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["watch"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_6__["default"].state.project.year.id;
  }, function (value) {
    fetchPIs();
  });

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  return {
    items: items,
    isOverLay: isOverLay,
    apexChatData: apexChatData
  };
}

/***/ })

}]);