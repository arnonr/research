(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/project/Project.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _useProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useProject */ "./resources/js/src/views/project/useProject.js");
/* harmony import */ var _ProjectForm_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectForm.vue */ "./resources/js/src/views/project/ProjectForm.vue");
/* harmony import */ var _projectStoreModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectStoreModule */ "./resources/js/src/views/project/projectStoreModule.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







// import ProjectView from "./ProjectView.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTooltip"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BOverlay"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    ProjectForm: _ProjectForm_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
    // ProjectView,
  },
  setup: function setup() {
    var PROJECT_APP_STORE_MODULE_NAME = "project";

    // Register module
    if (!_store__WEBPACK_IMPORTED_MODULE_4__["default"].hasModule(PROJECT_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_4__["default"].registerModule(PROJECT_APP_STORE_MODULE_NAME, _projectStoreModule__WEBPACK_IMPORTED_MODULE_7__["default"]);

    // UnRegister on leave
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["onUnmounted"])(function () {
      // if (store.hasModule(PROJECT_APP_STORE_MODULE_NAME))
      // store.unregisterModule(PROJECT_APP_STORE_MODULE_NAME);
    });
    var _useProject = Object(_useProject__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      fetchProjects = _useProject.fetchProjects,
      searchQuery = _useProject.searchQuery,
      blankPaper = _useProject.blankPaper,
      items = _useProject.items,
      item = _useProject.item,
      isModal = _useProject.isModal,
      isAddModal = _useProject.isAddModal,
      isSubmit = _useProject.isSubmit,
      refetchData = _useProject.refetchData,
      onSubmit = _useProject.onSubmit,
      onDelete = _useProject.onDelete,
      isOverLay = _useProject.isOverLay,
      selectOptions = _useProject.selectOptions;
    var handleFormClick = function handleFormClick(data) {
      item.value = data;
      isModal.value = true;
    };
    var handleAddFormClick = function handleAddFormClick() {
      item.value = JSON.parse(JSON.stringify(blankPaper));
      isModal.value = true;
    };

    // const handleViewClick = (data) => {
    //     item.value = data.item;
    //     isViewModal.value = true;
    // };

    var handleDeleteClick = function handleDeleteClick(data) {
      item.value = data;
      onDelete();
    };
    var handleChangeYear = function handleChangeYear(val) {
      _store__WEBPACK_IMPORTED_MODULE_4__["default"].commit("project/SET_YEAR", val);
    };
    return {
      fetchProjects: fetchProjects,
      searchQuery: searchQuery,
      items: items,
      item: item,
      isModal: isModal,
      isAddModal: isAddModal,
      // isViewModal,
      isSubmit: isSubmit,
      refetchData: refetchData,
      onSubmit: onSubmit,
      onDelete: onDelete,
      // handleViewClick,
      handleFormClick: handleFormClick,
      handleAddFormClick: handleAddFormClick,
      handleDeleteClick: handleDeleteClick,
      handleChangeYear: handleChangeYear,
      isOverLay: isOverLay,
      store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
      selectOptions: selectOptions
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/ProjectForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/project/ProjectForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_3__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_3__["ValidationObserver"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BOverlay"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroupPrepend"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormFile"],
    required: _validations__WEBPACK_IMPORTED_MODULE_4__["required"],
    email: _validations__WEBPACK_IMPORTED_MODULE_4__["email"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  directives: {
    "b-modal": bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  emits: ["on-submit"],
  model: {
    prop: "isModal",
    event: "update:is-modal"
  },
  props: {
    isModal: {
      type: Boolean,
      required: true
    },
    isSubmit: {
      type: Boolean,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    selectOptions: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var simpleRules = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(null);
    var submit = function submit(bvModalEvent) {
      bvModalEvent.preventDefault();
      simpleRules.value.validate().then(function (success) {
        if (success) {
          emit("on-submit");
        }
      });
    };
    return {
      submit: submit,
      simpleRules: simpleRules
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/project/Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".per-page-selector[data-v-4d4a4b2e] {\n  width: 90px;\n}\n.invoice-filter-select[data-v-4d4a4b2e] {\n  min-width: 190px;\n}\n.invoice-filter-select[data-v-4d4a4b2e]  .vs__selected-options {\n  flex-wrap: nowrap;\n}\n.invoice-filter-select[data-v-4d4a4b2e]  .vs__selected {\n  width: 100px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/project/Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/project/Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/project/Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=template&id=4d4a4b2e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/project/Project.vue?vue&type=template&id=4d4a4b2e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                  _c(
                    "b-col",
                    [
                      _c("h3", { staticClass: "text-center" }, [
                        _vm._v(
                          "\n                        Know-Drive-Research Fund-Project (" +
                            _vm._s(_vm.store.state.project.year.name) +
                            ")\n                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "primary" },
                          on: {
                            click: function ($event) {
                              return _vm.handleAddFormClick()
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n                        ADD\n                    "
                          ),
                        ]
                      ),
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
                            _vm._v("PAPER"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("STATUS"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("TYPE"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                                PRINCIPAL INVESTIGATOR (PI)\n                            "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("ATTACHED FILES"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.items, function (it) {
                          return _c(
                            "tbody",
                            [
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass: "bg-secondary",
                                    attrs: { colspan: "5" },
                                  },
                                  [
                                    _c("h4", { staticClass: "text-white" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(it.code) +
                                          " ( " +
                                          _vm._s(it.pm.name) +
                                          " )\n                                        "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _vm.$store.state.project.year.id != 1 &&
                                      _vm.$store.state.project.year.id != 2
                                        ? _c("span", [_vm._v(_vm._s(it.title))])
                                        : _vm._e(),
                                    ]),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _vm._l(it.papers, function (paper) {
                                return _c("tr", [
                                  _c("td", [_vm._v(_vm._s(paper.title))]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "text-center font-weight-bold",
                                      style: {
                                        "background-color":
                                          paper.paper_status.color,
                                        color: "#000000",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(paper.paper_status.label) +
                                          "\n                                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(paper.paper_type.label) +
                                        "\n                                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(paper.pi.label) +
                                        "\n                                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { width: "20%" },
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "btn-warning",
                                          on: {
                                            click: function ($event) {
                                              return _vm.handleFormClick(
                                                Object.assign({}, paper)
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: { icon: "EditIcon" },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "btn-success",
                                          attrs: {
                                            target: "_blank",
                                            href: paper.file_old,
                                          },
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: { icon: "FileIcon" },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "btn-danger",
                                          on: {
                                            click: function ($event) {
                                              return _vm.handleDeleteClick(
                                                Object.assign({}, paper)
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: { icon: "TrashIcon" },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ])
                              }),
                            ],
                            2
                          )
                        }),
                      ],
                      2
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("project-form", {
            attrs: {
              isSubmit: _vm.isSubmit,
              item: _vm.item,
              selectOptions: _vm.selectOptions,
            },
            on: {
              "on-submit": function ($event) {
                return _vm.onSubmit()
              },
            },
            model: {
              value: _vm.isModal,
              callback: function ($$v) {
                _vm.isModal = $$v
              },
              expression: "isModal",
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/ProjectForm.vue?vue&type=template&id=2f420e66&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/project/ProjectForm.vue?vue&type=template&id=2f420e66& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "modalProjectForm",
          attrs: {
            id: "modal-project-form",
            "cancel-variant": "outline-secondary",
            "ok-title": "Submit",
            "cancel-title": "Close",
            centered: "",
            size: "lg",
            title: "Project Form",
            visible: _vm.isModal,
            "ok-disabled": _vm.isSubmit,
            "cancel-disabled": _vm.isSubmit,
          },
          on: {
            ok: _vm.submit,
            change: function (val) {
              return _vm.$emit("update:is-modal", val)
            },
          },
        },
        [
          _c(
            "b-overlay",
            {
              attrs: {
                show: _vm.isSubmit,
                opacity: "0.17",
                "spinner-variant": "primary",
              },
            },
            [
              _c(
                "validation-observer",
                { ref: "simpleRules" },
                [
                  _c("b-form", [
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c(
                          "b-form-group",
                          { staticClass: "col-md" },
                          [
                            _c("validation-provider", {
                              attrs: { name: "Grant No", rules: "required" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var errors = ref.errors
                                    return [
                                      _c("label", { attrs: { for: "name" } }, [
                                        _vm._v("Grant No:"),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          "input-id": "project",
                                          dir: _vm.$store.state.appConfig.isRTL
                                            ? "rtl"
                                            : "ltr",
                                          options: _vm.selectOptions.project,
                                          placeholder: "Choose Grant No",
                                          clearable: false,
                                        },
                                        model: {
                                          value: _vm.item.project,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.item, "project", $$v)
                                          },
                                          expression: "item.project",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "text-danger" },
                                        [_vm._v(_vm._s(errors[0]))]
                                      ),
                                    ]
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c(
                          "b-form-group",
                          { staticClass: "col-md" },
                          [
                            _c("validation-provider", {
                              attrs: { name: "Journal List" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var errors = ref.errors
                                    return [
                                      _c("label", { attrs: { for: "title" } }, [
                                        _vm._v("Journal List:"),
                                      ]),
                                      _vm._v(" "),
                                      _c("b-form-textarea", {
                                        attrs: {
                                          id: "title",
                                          placeholder: "Journal List",
                                          state:
                                            errors.length > 0 ? false : null,
                                        },
                                        model: {
                                          value: _vm.item.title,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.item, "title", $$v)
                                          },
                                          expression: "item.title",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "text-danger" },
                                        [_vm._v(_vm._s(errors[0]))]
                                      ),
                                    ]
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c(
                          "b-form-group",
                          { staticClass: "col-md" },
                          [
                            _c("validation-provider", {
                              attrs: { name: "Journal Type" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "label",
                                        { attrs: { for: "paper_type" } },
                                        [_vm._v("Journal Type:")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          "input-id": "paper_type_id",
                                          dir: _vm.$store.state.appConfig.isRTL
                                            ? "rtl"
                                            : "ltr",
                                          options: _vm.selectOptions.paper_type,
                                          placeholder: "Choose Type",
                                          clearable: false,
                                        },
                                        model: {
                                          value: _vm.item.paper_type,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.item,
                                              "paper_type",
                                              $$v
                                            )
                                          },
                                          expression: "item.paper_type",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "text-danger" },
                                        [_vm._v(_vm._s(errors[0]))]
                                      ),
                                    ]
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          { staticClass: "col-md" },
                          [
                            _c("validation-provider", {
                              attrs: { name: "Journal Status" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "label",
                                        { attrs: { for: "paper_status" } },
                                        [_vm._v("Journal Status:")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          "input-id": "paper_status_id",
                                          dir: _vm.$store.state.appConfig.isRTL
                                            ? "rtl"
                                            : "ltr",
                                          options:
                                            _vm.selectOptions.paper_status,
                                          placeholder: "Choose Status",
                                          clearable: false,
                                        },
                                        model: {
                                          value: _vm.item.paper_status,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.item,
                                              "paper_status",
                                              $$v
                                            )
                                          },
                                          expression: "item.paper_status",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "text-danger" },
                                        [_vm._v(_vm._s(errors[0]))]
                                      ),
                                    ]
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c(
                          "b-form-group",
                          { staticClass: "col-md" },
                          [
                            _c("validation-provider", {
                              attrs: { name: "Principal Investigator" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var errors = ref.errors
                                    return [
                                      _c("label", { attrs: { for: "pi" } }, [
                                        _vm._v("Principal Investigator:"),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          "input-id": "pi_id",
                                          dir: _vm.$store.state.appConfig.isRTL
                                            ? "rtl"
                                            : "ltr",
                                          options: _vm.selectOptions.pi,
                                          placeholder: "Choose PI",
                                          clearable: false,
                                        },
                                        model: {
                                          value: _vm.item.pi,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.item, "pi", $$v)
                                          },
                                          expression: "item.pi",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "text-danger" },
                                        [_vm._v(_vm._s(errors[0]))]
                                      ),
                                    ]
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c(
                          "b-form-group",
                          { staticClass: "col-md" },
                          [
                            _c("validation-provider", {
                              attrs: { name: "file" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var errors = ref.errors
                                    return [
                                      _c("label", { attrs: { for: "file" } }, [
                                        _vm._v("File:"),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "b-input-group",
                                        [
                                          _c(
                                            "b-input-group-prepend",
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  attrs: {
                                                    variant:
                                                      "outline-" +
                                                      (_vm.item.file_old == null
                                                        ? "dark"
                                                        : "warning"),
                                                    target: "_blank",
                                                    disabled:
                                                      _vm.item.file_old == null,
                                                    href: _vm.item.file_old,
                                                  },
                                                },
                                                [
                                                  _c("feather-icon", {
                                                    attrs: {
                                                      icon: "FileTextIcon",
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                                            View File\n                                        "
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("b-form-file", {
                                            attrs: {
                                              id: "h-file",
                                              placeholder:
                                                "Choose a new file or drop it here...",
                                              "drop-placeholder":
                                                "Drop file here...",
                                            },
                                            model: {
                                              value: _vm.item.file,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.item, "file", $$v)
                                              },
                                              expression: "item.file",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "text-danger" },
                                        [_vm._v(_vm._s(errors[0]))]
                                      ),
                                    ]
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validations.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validations.js ***!
  \*****************************************************************/
/*! exports provided: required, email, min, confirmed, regex, between, alpha, integer, digits, alphaDash, alphaNum, length, positive, credit, password, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmed", function() { return confirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaDash", function() { return alphaDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNum", function() { return alphaNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positive", function() { return positive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credit", function() { return credit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json");
var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json", 1);
/* harmony import */ var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json");
var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json", 1);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validators */ "./resources/js/src/@core/utils/validations/validators.js");





// eslint-disable-next-line object-curly-newline


// ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

var required = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('required', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"]);
var email = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('email', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"]);
var min = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('min', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"]);
var confirmed = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('confirmed', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"]);
var regex = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('regex', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["regex"]);
var between = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('between', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["between"]);
var alpha = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha"]);
var integer = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('integer', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"]);
var digits = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('digits', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["digits"]);
var alphaDash = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-dash', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"]);
var alphaNum = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-num', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]);
var length = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('length', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["length"]);
var positive = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('positive', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPositive"],
  message: 'Please enter positive number!'
});
var credit = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('credit-card', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorCreditCard"],
  message: 'It is not valid credit card!'
});
var password = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('password', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPassword"],
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit'
});
var url = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('url', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorUrlValidator"],
  message: 'URL is invalid'
});

// Install English and Arabic localizations.
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["localize"])({
  en: {
    messages: vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__.messages,
    names: {
      email: 'Email',
      password: 'Password'
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?'
      }
    }
  },
  ar: {
    messages: vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__.messages,
    names: {
      email: 'البريد الإلكتروني',
      password: 'كلمة السر'
    },
    fields: {
      password: {
        min: 'كلمة السر قصيرة جداً سيتم اختراقك'
      }
    }
  }
});
// ////////////////////////////////////////////////////////
// NOTE:
// Quasar validation for reference only
// Remove this note once development is finished and make sure to
// to convert all of them in veevalidate version
// ////////////////////////////////////////////////////////

// export const required = (val) => {
//   return (val && val.length > 0) || '*Field is required'
// }

// export const required_obj = (obj) => {
//   if (obj === null || obj === undefined) return '*Field is required'
//   return (Object.entries(obj).length > 0 && obj.constructor === Object) || '*Field is required'
// }

// export const no_blank_spaces_arr = (arr) => {
//   return arr.every(val => (val.trim() && val.trim().length > 0)) || 'Blank Spaces are not allowed'
// }

// export const url = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   // Used
//   // https://stackoverflow.com/questions/4314741/url-regex-validation

//   // Other
//   // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
//   // https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
//   // https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/

//   /* eslint-disable no-useless-escape */
//   const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
//   /* eslint-enable no-useless-escape */
//   return re.test(val) || 'URL is invalid'
// }

// export const date = val => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   // https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js
//   return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(val) || 'Date is invalid'
// }

// export const max = (val, max) => {

//   // If blank return
//   if (val === undefined || val === null) return true

//   return val.length <= max || `More than ${max} characters are not allowed`
// }

// export const max_arr = (val, max) => {
//   return val.length <= max || `More than ${max} values are not allowed`
// }

// export const min = (val, min) => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   return val.length >= min || `Minimum ${min} characters are required`
// }

// export const num_range = (val, min, max) => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   const msg = 'Value is invalid'
//   if (min === null) return val <= max || msg
//   else if (max === null) return val >= min || msg
//   else return (val >= min && val <= max) || msg
// }

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validators.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validators.js ***!
  \****************************************************************/
/*! exports provided: validatorPositive, validatorPassword, validatorCreditCard, validatorUrlValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPositive", function() { return validatorPositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPassword", function() { return validatorPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorCreditCard", function() { return validatorCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorUrlValidator", function() { return validatorUrlValidator; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);


var validatorPositive = function validatorPositive(value) {
  if (value >= 0) {
    return true;
  }
  return false;
};
var validatorPassword = function validatorPassword(password) {
  /* eslint-disable no-useless-escape */
  var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  /* eslint-enable no-useless-escape */
  var validPassword = regExp.test(password);
  return validPassword;
};
var validatorCreditCard = function validatorCreditCard(creditnum) {
  /* eslint-disable no-useless-escape */
  var cRegExp = /^(?:3[47][0-9]{13})$/;
  /* eslint-enable no-useless-escape */
  var validCreditCard = cRegExp.test(creditnum);
  return validCreditCard;
};
var validatorUrlValidator = function validatorUrlValidator(val) {
  if (val === undefined || val === null || val.length === 0) {
    return true;
  }
  /* eslint-disable no-useless-escape */
  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  /* eslint-enable no-useless-escape */
  return re.test(val);
};

/***/ }),

/***/ "./resources/js/src/views/project/Project.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/project/Project.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project_vue_vue_type_template_id_4d4a4b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=4d4a4b2e&scoped=true& */ "./resources/js/src/views/project/Project.vue?vue&type=template&id=4d4a4b2e&scoped=true&");
/* harmony import */ var _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.vue?vue&type=script&lang=js& */ "./resources/js/src/views/project/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Project_vue_vue_type_style_index_0_id_4d4a4b2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true& */ "./resources/js/src/views/project/Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true&");
/* harmony import */ var _Project_vue_vue_type_style_index_1_id_4d4a4b2e_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss& */ "./resources/js/src/views/project/Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Project_vue_vue_type_template_id_4d4a4b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Project_vue_vue_type_template_id_4d4a4b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d4a4b2e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/project/Project.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/project/Project.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/project/Project.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/project/Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/project/Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_4d4a4b2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=style&index=0&id=4d4a4b2e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_4d4a4b2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_4d4a4b2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_4d4a4b2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_4d4a4b2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/project/Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/project/Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_1_id_4d4a4b2e_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=style&index=1&id=4d4a4b2e&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_1_id_4d4a4b2e_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_1_id_4d4a4b2e_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_1_id_4d4a4b2e_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_1_id_4d4a4b2e_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/project/Project.vue?vue&type=template&id=4d4a4b2e&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/project/Project.vue?vue&type=template&id=4d4a4b2e&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_4d4a4b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=template&id=4d4a4b2e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/Project.vue?vue&type=template&id=4d4a4b2e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_4d4a4b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_4d4a4b2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/project/ProjectForm.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/project/ProjectForm.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectForm_vue_vue_type_template_id_2f420e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectForm.vue?vue&type=template&id=2f420e66& */ "./resources/js/src/views/project/ProjectForm.vue?vue&type=template&id=2f420e66&");
/* harmony import */ var _ProjectForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/project/ProjectForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectForm_vue_vue_type_template_id_2f420e66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectForm_vue_vue_type_template_id_2f420e66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/project/ProjectForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/project/ProjectForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/project/ProjectForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/ProjectForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/project/ProjectForm.vue?vue&type=template&id=2f420e66&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/project/ProjectForm.vue?vue&type=template&id=2f420e66& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectForm_vue_vue_type_template_id_2f420e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectForm.vue?vue&type=template&id=2f420e66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/project/ProjectForm.vue?vue&type=template&id=2f420e66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectForm_vue_vue_type_template_id_2f420e66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectForm_vue_vue_type_template_id_2f420e66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/project/useProject.js":
/*!******************************************************!*\
  !*** ./resources/js/src/views/project/useProject.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useProject; });
/* harmony import */ var _Applications_coding_research_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Applications_coding_research_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Applications_coding_research_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_19__);


















// Notification



function useProject() {
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_17__["useToast"])();
  var errorToast = function errorToast(message) {
    toast({
      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
      props: {
        title: "Error : " + message,
        icon: "AlertTriangleIcon",
        variant: "danger"
      }
    });
  };

  // Start List
  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["ref"])("");
  var isViewModal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["ref"])(false);
  var isModal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["ref"])(false);
  var isAddModal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["ref"])(false);
  var isSubmit = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["ref"])(false);
  var isOverLay = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["ref"])(false);
  var items = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["ref"])([]);
  var blankPaper = {
    id: null,
    file_old: null,
    file: null,
    project: {
      label: null,
      code: null
    },
    paper_type: {
      label: null,
      code: null
    },
    title: null,
    paper_status: {
      label: null,
      code: null
    },
    pi: {
      label: null,
      code: null
    },
    active: 1
  };
  var selectOptions = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["ref"])({
    project: [],
    pi: [],
    paper_type: [],
    paper_status: []
  });
  var item = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["ref"])(JSON.parse(JSON.stringify(blankPaper)));
  var refetchData = function refetchData() {
    refetchClient({
      q: searchQuery.value
    });
  };
  var refetchClient = function refetchClient(config) {
    var _config$q = config.q,
      q = _config$q === void 0 ? "" : _config$q,
      _config$perPage = config.perPage,
      perPage = _config$perPage === void 0 ? 25 : _config$perPage,
      _config$page = config.page,
      page = _config$page === void 0 ? 1 : _config$page,
      _config$sort_by = config.sort_by,
      sort_by = _config$sort_by === void 0 ? "id" : _config$sort_by,
      _config$sort_desc = config.sort_desc,
      sort_desc = _config$sort_desc === void 0 ? false : _config$sort_desc;
    var queryLowered = q.toLowerCase();
    var filteredData = initialItems.value.filter(function (data) {
      var _data$name_th, _data$name_en, _data$province$label, _data$amphur$label, _data$tumbol$label;
      return ((_data$name_th = data.name_th) === null || _data$name_th === void 0 ? void 0 : _data$name_th.toLowerCase().includes(queryLowered)) || ((_data$name_en = data.name_en) === null || _data$name_en === void 0 ? void 0 : _data$name_en.toLowerCase().includes(queryLowered)) || ((_data$province$label = data.province.label) === null || _data$province$label === void 0 ? void 0 : _data$province$label.toLowerCase().includes(queryLowered)) || ((_data$amphur$label = data.amphur.label) === null || _data$amphur$label === void 0 ? void 0 : _data$amphur$label.toLowerCase().includes(queryLowered)) || ((_data$tumbol$label = data.tumbol.label) === null || _data$tumbol$label === void 0 ? void 0 : _data$tumbol$label.toLowerCase().includes(queryLowered));
    });
    var sortedData = filteredData.sort(sortCompare(sort_by));
    if (sort_desc) sortedData.reverse();
    items.value = paginateArray(sortedData, perPage, page);
    totalProjects.value = filteredData.length;
  };
  var initDataConvert = function initDataConvert(data) {
    return data;
  };
  _store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch("project/fetchPaperTypes").then(function (response) {
    var data = response.data.data;
    selectOptions.value.paper_type = data.map(function (d) {
      return {
        label: d.name,
        code: d.id
      };
    });
  })["catch"](function (error) {
    console.log(error);
    toast({
      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
      props: {
        title: "Error fetching Paper Type's list",
        icon: "AlertTriangleIcon",
        variant: "danger"
      }
    });
  });
  _store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch("project/fetchPaperStatuses").then(function (response) {
    var data = response.data.data;
    selectOptions.value.paper_status = data.map(function (d) {
      return {
        label: d.name,
        code: d.id
      };
    });
  })["catch"](function (error) {
    console.log(error);
    toast({
      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
      props: {
        title: "Error fetching Paper Status's list",
        icon: "AlertTriangleIcon",
        variant: "danger"
      }
    });
  });
  _store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch("project/fetchPIs").then(function (response) {
    var data = response.data.data;
    selectOptions.value.pi = data.map(function (d) {
      return {
        label: d.name,
        code: d.id
      };
    });
  })["catch"](function (error) {
    console.log(error);
    toast({
      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
      props: {
        title: "Error fetching PI's list",
        icon: "AlertTriangleIcon",
        variant: "danger"
      }
    });
  });
  var fetchProjects = function fetchProjects(ctx, callback) {
    isOverLay.value = true;
    _store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch("project/fetchProjects", {
      year_id: _store__WEBPACK_IMPORTED_MODULE_16__["default"].state.project.year.id,
      sort_by: 'code'
    }).then(function (response) {
      var data = response.data.data;
      items.value = data.map(function (item) {
        var papers = item.papers.map(function (pItem) {
          var p = Object(_Applications_coding_research_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pItem);
          if (p.file !== undefined) {
            p.file_old = window.location.origin + "/storage" + p.file;
            p.file = [];
          } else {
            p.file_old = null;
            p.file = [];
          }
          if (_store__WEBPACK_IMPORTED_MODULE_16__["default"].state.project.year.id == 1 || _store__WEBPACK_IMPORTED_MODULE_16__["default"].state.project.year.id == 2) {
            p.project = {
              label: item.code,
              code: item.id
            };
          } else {
            p.project = {
              label: item.code + " " + item.title,
              code: item.id
            };
          }
          p.paper_type = {
            label: p.paper_type.name,
            code: p.paper_type.id
          };
          p.paper_status = {
            label: p.paper_status.name,
            code: p.paper_status.id,
            color: p.paper_status.color
          };
          p.pi = {
            label: p.pi.name,
            code: p.pi.id
          };
          return p;
        });
        // project.papers = papers;
        item.papers = papers;
        return item;
      });
      selectOptions.value.project = data.map(function (d) {
        if (_store__WEBPACK_IMPORTED_MODULE_16__["default"].state.project.year.id == 1 || _store__WEBPACK_IMPORTED_MODULE_16__["default"].state.project.year.id == 2) {
          return {
            label: d.code,
            code: d.id
          };
        } else {
          return {
            label: d.code + " " + d.title,
            code: d.id
          };
        }
      });
      isOverLay.value = false;
    })["catch"](function (error) {
      console.log(error);
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
        props: {
          title: "Error fetching Projects' list",
          icon: "AlertTriangleIcon",
          variant: "danger"
        }
      });
      isOverLay.value = false;
    });
  };
  fetchProjects();

  // End List

  // Start Form
  var onSubmit = function onSubmit() {
    isSubmit.value = true;
    isOverLay.value = true;
    var dataSend = {
      title: item.value.title,
      paper_type_id: item.value.paper_type.code,
      paper_status_id: item.value.paper_status.code,
      pi_id: item.value.pi.code,
      file: item.value.file,
      project_id: item.value.project.code,
      active: 1
    };
    if (item.value.id == null) {
      _store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch("project/addPaper", dataSend).then( /*#__PURE__*/function () {
        var _ref = Object(_Applications_coding_research_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Applications_coding_research_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(response) {
          var data;
          return Object(_Applications_coding_research_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (response.status == 200) {
                    data = response.data; // data = initDataConvert(data);
                    // const index = items.value.findIndex((e) => {
                    //     return data.id === e.id;
                    // });
                    // if (index != -1) {
                    //     items.value.splice(index, 1, { ...data });
                    // } else {
                    //     items.value.push(data);
                    // }
                    // const indexInit = initialItems.value.findIndex((e) => {
                    //     return data.id == e.id;
                    // });
                    // if (indexInit != -1) {
                    //     initialItems.value.splice(indexInit, 1, {
                    //         ...data,
                    //     });
                    // } else {
                    //     initialItems.value.push(data);
                    // }
                    // refetchData();
                    fetchProjects();
                    isSubmit.value = false;
                    isModal.value = false;
                    isOverLay.value = false;
                    toast({
                      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
                      props: {
                        title: "Success : Added Paper",
                        icon: "CheckIcon",
                        variant: "success"
                      }
                    });
                  } else {
                    isSubmit.value = false;
                    isOverLay.value = false;
                    errorToast(response.data);
                  }
                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](function (error) {
        isSubmit.value = false;
        isOverLay.value = false;
        var errorText = error.response.data.error.message.replaceAll("project.", "");
        errorText = errorText.replaceAll("\n", "<br>");
        errorText = errorText.slice(0, 0) + "<br>" + errorText.slice(0);
        errorToast(errorText);
      });
    } else {
      // Update
      dataSend["paper_id"] = item.value.id;
      _store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch("project/editProject", dataSend).then( /*#__PURE__*/function () {
        var _ref2 = Object(_Applications_coding_research_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Applications_coding_research_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(response) {
          var data;
          return Object(_Applications_coding_research_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (response.status == 200) {
                    data = response.data; // data = initDataConvert(data);
                    // const indexInit = initialItems.value.findIndex((e) => {
                    //     return item.value.id === e.id;
                    // });
                    // initialItems.value.splice(indexInit, 1, { ...data });
                    // const index = items.value.findIndex((e) => {
                    //     return item.value.id === e.id;
                    // });
                    // items.value.splice(index, 1, { ...data });
                    fetchProjects();
                    isSubmit.value = false;
                    isModal.value = false;
                    isOverLay.value = false;
                    toast({
                      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
                      props: {
                        title: "Success : Updated Project",
                        icon: "CheckIcon",
                        variant: "success"
                      }
                    });
                  } else {
                    isSubmit.value = false;
                    isOverLay.value = false;
                    errorToast(response.data);
                  }
                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }())["catch"](function (error) {
        isSubmit.value = false;
        isOverLay.value = false;
        var errorText = error.response.data.error.message.replaceAll("project.", "");
        errorText = errorText.replaceAll("\n", "<br>");
        errorText = errorText.slice(0, 0) + "<br>" + errorText.slice(0);
        errorToast(errorText);
      });
    }
  };
  var onDelete = function onDelete() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_19___default.a.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-danger ml-1"
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.isConfirmed) {
        isOverLay.value = true;
        _store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch("project/deletePaper", {
          id: item.value.id
        }).then( /*#__PURE__*/function () {
          var _ref3 = Object(_Applications_coding_research_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Applications_coding_research_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3(response) {
            return Object(_Applications_coding_research_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (response.status == 200) {
                      isOverLay.value = false;
                      sweetalert2__WEBPACK_IMPORTED_MODULE_19___default.a.fire({
                        icon: "success",
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        customClass: {
                          confirmButton: "btn btn-success"
                        }
                      });
                      fetchProjects();
                    } else {
                      errorToast(response.data);
                      isOverLay.value = false;
                    }
                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        }())["catch"](function (error) {
          var errorText = error.response.data.error.message.replaceAll("project.", "");
          errorText = errorText.replaceAll("\n", "<br>");
          errorText = errorText.slice(0, 0) + "<br>" + errorText.slice(0);
          errorToast(errorText);
          isOverLay.value = false;
        });
      }
    });
  };
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["watch"])([searchQuery], function () {
    refetchData();
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["watch"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_16__["default"].state.project.year.id;
  }, function (value) {
    // item.value.province_id = item.value.province.code;
    fetchProjects();
  });

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*
  var paginateArray = function paginateArray(array, perPage, page) {
    return array.slice((page - 1) * perPage, page * perPage);
  };
  var sortCompare = function sortCompare(key) {
    return function (a, b) {
      var fieldA = a[key];
      var fieldB = b[key];
      var comparison = 0;
      if (fieldA > fieldB) {
        comparison = 1;
      } else if (fieldA < fieldB) {
        comparison = -1;
      }
      return comparison;
    };
  };
  return {
    fetchProjects: fetchProjects,
    searchQuery: searchQuery,
    blankPaper: blankPaper,
    items: items,
    item: item,
    isModal: isModal,
    isAddModal: isAddModal,
    isViewModal: isViewModal,
    isSubmit: isSubmit,
    refetchData: refetchData,
    onSubmit: onSubmit,
    onDelete: onDelete,
    isOverLay: isOverLay,
    selectOptions: selectOptions
  };
}

/***/ })

}]);