function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/order/components/dashboard/dashboard.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/components/dashboard/dashboard.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrderComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"NextOrder\" class=\"tabcontent\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-12 p-2 align-self-center\">\n        <form [formGroup]=\"predictForm\" (submit)=\"predict()\">\n            <label for=\"medicine\">Medicine</label>\n            <select id=\"medicine\" name=\"medicine\" formControlName=\"medicine\" required>\n              <option value=\"adorastatin\">Adorastatin 10mg</option>\n              <option value=\"metformin\">Metfromin 500mg</option>\n              <option value=\"losatank\">Lostan Potasium 50mg</option>\n              <option value=\"aspirin\">Aspirin 75mg</option>\n              <option value=\"niffidipine\">Niffidipine 20er</option>\n            </select>\n\n            <label for=\"year\">Year</label>\n            <input type=\"number\" name=\"year\" min=\"2015\" value=\"2021\" style=\"background: #ccc\" formControlName=\"year\" required />\n\n            <label for=\"month\">Month</label>\n            <select id=\"month\" name=\"month\" formControlName=\"month\" required>\n              <option value=\"1\">January</option>\n              <option value=\"2\">February</option>\n              <option value=\"3\">March</option>\n              <option value=\"4\">April</option>\n              <option value=\"5\">May</option>\n              <option value=\"6\">June</option>\n              <option value=\"7\">July</option>\n              <option value=\"8\">August</option>\n              <option value=\"9\">September</option>\n              <option value=\"10\">October</option>\n              <option value=\"11\">November</option>\n              <option value=\"12\">December</option>\n            </select>\n\n\n            <h3 style=\"margin-top: 50px\">Be prepared for</h3>\n            <div class=\"pl-5\">\n\n              <div class=\"radio\">\n                <label><input type=\"radio\" name=\"option\" value=\"a\" formControlName=\"option\" checked>&nbsp;&nbsp;without any conditions</label>\n              </div>\n              <div class=\"radio disabled\">\n                <label><input type=\"radio\" name=\"option\" value=\"b\" formControlName=\"option\">&nbsp;with current covid-19 situation</label>\n              </div>\n\n            </div>\n            <button type=\"submit\" class=\"bg-warning\">GET QUANTITY</button>\n\n          </form>\n    </div>\n    <div class=\"col-lg-4 col-12 align-self-center pl-5\">\n      <div class=\"text-right\">\n        <div class=\"text1\" *ngIf=\"predictedValue\">You should Order</div>\n        <div class=\"text1\" *ngIf=\"!predictedValue\">Select Medicine and A Time</div>\n        <div class=\"text2\" *ngIf=\"predictedValue\">{{predictedValue}} Boxes/Packs</div>\n        <div class=\"text1\" *ngIf=\"!predictedValue\">To Get Predictions</div>\n        <div class=\"text_a\">\n          <button class=\"btn btn-primary w-50\" *ngIf=\"predictedValue\" (click)=\"seeWhy()\">see why>></button>\n        </div>\n\n\n      </div>\n    </div>\n\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/order/components/history/history.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/components/history/history.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrderComponentsHistoryHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"NextOrder\">\n  <div class=\"row\">\n    <form class=\"w-100\" [formGroup]=\"searchForm\" (submit)=\"search()\">\n      <div class=\"form-group row\">\n        <div class=\"col-sm-10\">\n          <select id=\"medicine\" name=\"medicine\" formControlName=\"medicine\" class=\"form-control\" required>\n            <option value=\"adorastatin\" selected>Adorastatin 10mg</option>\n            <option value=\"metfromin\">Metfromin 500mg</option>\n            <option value=\"lostan_potasium\">Lostan Potasium 50mg</option>\n            <option value=\"aspirin\">Aspirin 75mg</option>\n            <option value=\"niffidipine\">Niffidipine 20er</option>\n          </select>\n        </div>\n        <div class=\"col-sm-2\">\n          <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n        </div>\n      </div>\n    </form>\n    <div class=\"col-lg-6 col-12 p-2\">\n      <div class=\"card\" style=\"color: black; margin: 8px\" *ngFor=\"let order of orderColumnOne\">\n        <div class=\"card-header\">\n          Order {{order.orderId}} {{order.medicine}}\n        </div>\n        <div class=\"card-body\">\n          <!--h5 class=\"card-title\">Special title treatment</h5-->\n          <p class=\"card-text\">Year : {{order.year}} <span style=\"float: right\">Month : {{months[order.month - 1]}}</span> </p>\n          <p class=\"card-text\">Quantity : {{order.quantity}} packs <span style=\"color: blue\" *ngIf=\"order.isPredicted\">(A predicted value)</span><span style=\"color: red\" *ngIf=\"!order.isPredicted\">(A custom value)</span></p>\n          <p class=\"card-text\" *ngIf=\"order.notes\">Notes : {{order.notes}} </p>\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"col-lg-6 col-12 p-2\">\n            <div class=\"card\" style=\"color: black; margin: 8px\" *ngFor=\"let order of orderColumnTwo\">\n                    <div class=\"card-header\">\n                      Order {{order.orderId}}  {{order.medicine}}\n                    </div>\n                    <div class=\"card-body\">\n                      <!--h5 class=\"card-title\">Special title treatment</h5-->\n                      <p class=\"card-text\">Year : {{order.year}} <span style=\"float: right\">Month : {{months[order.month - 1]}}</span> </p>\n                      <p class=\"card-text\">Quantity : {{order.quantity}} packs <span style=\"color: blue\" *ngIf=\"order.isPredicted\">(A predicted value)</span><span style=\"color: red\" *ngIf=\"!order.isPredicted\">(A custom value)</span></p>\n                      <p class=\"card-text\" *ngIf=\"order.notes\">Notes : {{order.notes}} </p>\n                    </div>\n                  </div>\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/order/components/dashboard/dashboard.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/order/components/dashboard/dashboard.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrderComponentsDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/order/components/dashboard/dashboard.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/order/components/dashboard/dashboard.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppOrderComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_prediction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/prediction.service */
    "./src/app/services/prediction.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(formBuilder, predictionService, router) {
        _classCallCheck(this, DashboardComponent);

        this.formBuilder = formBuilder;
        this.predictionService = predictionService;
        this.router = router;
        this.predictForm = this.formBuilder.group({
          medicine: 'adorastatin',
          year: 2021,
          month: 1,
          option: ['a']
        });
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "predict",
        value: function predict() {
          var _this = this;

          this.selectedMedicine = this.predictForm.value.medicine;
          this.selectedOption = this.predictForm.value.option[0];
          var predictionRequest = {
            medicine: this.predictForm.value.medicine,
            year: this.predictForm.value.year,
            month: this.predictForm.value.month,
            withCovid: this.selectedOption == 'b' ? true : false
          };
          this.predictionSubscription = this.predictionService.getPrediction(predictionRequest).subscribe(function (data) {
            if (data.success) {
              _this.predictedValue = parseFloat(data.prediction.toFixed(0));
            } else {
              alert('Prediction Failed, Please Try again');
            }
          }, function (error) {
            console.log(error.message);
          });
        }
      }, {
        key: "seeWhy",
        value: function seeWhy() {
          if (this.selectedMedicine) {
            var medicine = this.selectedMedicine + '_' + this.selectedOption + '_' + this.predictedValue + '_' + this.predictForm.value.year + '_' + this.predictForm.value.month;
            this.router.navigate(['/seewhy', medicine]);
          } else {
            alert('Please do a prediction first');
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_prediction_service__WEBPACK_IMPORTED_MODULE_4__["PredictionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/order/components/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/order/components/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/order/components/history/history.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/order/components/history/history.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrderComponentsHistoryHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL2NvbXBvbmVudHMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/order/components/history/history.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/order/components/history/history.component.ts ***!
    \***************************************************************/

  /*! exports provided: HistoryComponent */

  /***/
  function srcAppOrderComponentsHistoryHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryComponent", function () {
      return HistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var HistoryComponent = /*#__PURE__*/function () {
      function HistoryComponent(orderService, formBuilder) {
        _classCallCheck(this, HistoryComponent);

        this.orderService = orderService;
        this.formBuilder = formBuilder;
        this.months = ['Januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.searchForm = this.formBuilder.group({
          medicine: 'adorastatin'
        });
      }

      _createClass(HistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.ordersSubscription = this.orderService.getOrderHistory().subscribe(function (data) {
            _this2.orders = data;

            _this2.divideToOrderColumns(_this2.orders);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "divideToOrderColumns",
        value: function divideToOrderColumns(orders) {
          var _this3 = this;

          this.orderColumnOne = [];
          this.orderColumnTwo = [];
          var appenedColumn = 1;
          orders.forEach(function (order) {
            if (appenedColumn == 1) {
              _this3.orderColumnTwo.push(order);

              appenedColumn = 2;
            } else {
              _this3.orderColumnOne.push(order);

              appenedColumn = 1;
            }
          });
        }
      }, {
        key: "search",
        value: function search() {
          var _this4 = this;

          var orders = this.orders;
          this.orderColumnOne = [];
          this.orderColumnTwo = [];
          var appenedColumn = 1;
          orders.forEach(function (order) {
            if (order.medicine == _this4.searchForm.value.medicine.toUpperCase()) {
              if (appenedColumn == 1) {
                _this4.orderColumnTwo.push(order);

                appenedColumn = 2;
              } else {
                _this4.orderColumnOne.push(order);

                appenedColumn = 1;
              }
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.ordersSubscription) {
            this.ordersSubscription.unsubscribe();
          }
        }
      }]);

      return HistoryComponent;
    }();

    HistoryComponent.ctorParameters = function () {
      return [{
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/order/components/history/history.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.component.css */
      "./src/app/order/components/history/history.component.css"))["default"]]
    })], HistoryComponent);
    /***/
  },

  /***/
  "./src/app/order/order-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/order/order-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: OrderRoutingModule */

  /***/
  function srcAppOrderOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () {
      return OrderRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/order/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/history/history.component */
    "./src/app/order/components/history/history.component.ts");
    /* harmony import */


    var _services_guards_route_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/guards/route.guard.service */
    "./src/app/services/guards/route.guard.service.ts");

    var routes = [{
      path: '',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      canActivate: [_services_guards_route_guard_service__WEBPACK_IMPORTED_MODULE_5__["RouteGuardService"]]
    }, {
      path: 'history',
      component: _components_history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"],
      canActivate: [_services_guards_route_guard_service__WEBPACK_IMPORTED_MODULE_5__["RouteGuardService"]]
    }];

    var OrderRoutingModule = function OrderRoutingModule() {
      _classCallCheck(this, OrderRoutingModule);
    };

    OrderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderRoutingModule);
    /***/
  },

  /***/
  "./src/app/order/order.module.ts":
  /*!***************************************!*\
    !*** ./src/app/order/order.module.ts ***!
    \***************************************/

  /*! exports provided: OrderModule */

  /***/
  function srcAppOrderOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
      return OrderModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-routing.module */
    "./src/app/order/order-routing.module.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/order/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_history_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/history/history.component */
    "./src/app/order/components/history/history.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_guards_route_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/guards/route.guard.service */
    "./src/app/services/guards/route.guard.service.ts");

    var OrderModule = function OrderModule() {
      _classCallCheck(this, OrderModule);
    };

    OrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components_history_history_component__WEBPACK_IMPORTED_MODULE_5__["HistoryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      providers: [_services_guards_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["RouteGuardService"]]
    })], OrderModule);
    /***/
  },

  /***/
  "./src/app/services/prediction.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/prediction.service.ts ***!
    \************************************************/

  /*! exports provided: PredictionService */

  /***/
  function srcAppServicesPredictionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionService", function () {
      return PredictionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PredictionService = /*#__PURE__*/function () {
      function PredictionService(http) {
        _classCallCheck(this, PredictionService);

        this.http = http;
      }

      _createClass(PredictionService, [{
        key: "getPrediction",
        value: function getPrediction(predictionRequest) {
          var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].flaskAPIUrl + "/predict";
          return this.http.post(url, predictionRequest);
        }
      }]);

      return PredictionService;
    }();

    PredictionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    PredictionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PredictionService);
    /***/
  }
}]);
//# sourceMappingURL=order-order-module-es5.js.map