exports.id = "main";
exports.modules = {

/***/ "":
false,

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./src/page/Home/style.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./src/page/Home/style.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"red":"_3hVovIFyq3-rLETqB-SWAR"};

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

var _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _routers = __webpack_require__(/*! @/routers */ "./src/routers.js");

var _routers2 = _interopRequireDefault(_routers);

var _store = __webpack_require__(/*! @/store */ "./src/store/index.js");

var _layout = __webpack_require__(/*! ./layout */ "./src/server/layout.js");

var _layout2 = _interopRequireDefault(_layout);

var _config = __webpack_require__(/*! @/utils/config */ "./src/utils/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public')); // 服务器渲染使用静态文件

//相当于拦截到了前端请求地址中的/api部分，然后换成另一个地址
app.use('/api', (0, _expressHttpProxy2.default)(_config.SERVER_BASEURL, {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    return '/api' + req.url;
  }
}));

app.get('*', function (req, res) {
  var store = (0, _store.getStore)();
  var branch = (0, _reactRouterConfig.matchRoutes)(_routers2.default, req.path);
  var promises = [];
  var context = {
    css: []
  };
  branch.forEach(function (item) {
    if (item.route.loadData) {
      // 包裹一层 promise 实例，阻止服务端请求错误导致 Promise.all 方法错误
      var promise = new Promise(function (resolve) {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });

  Promise.all(promises).then(function () {
    var content = (0, _layout2.default)(req, store, _routers2.default, context);

    // 如果当前页面不存在，则设置http请求的状态码
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3001, function () {
  console.log('3001');
});

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9Ib21lL3N0eWxlLmNzcz9kNjJiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwiZXhwcmVzcyIsInN0YXRpYyIsIlNFUlZFUl9CQVNFVVJMIiwicHJveHlSZXFQYXRoUmVzb2x2ZXIiLCJyZXEiLCJ1cmwiLCJnZXQiLCJyZXMiLCJzdG9yZSIsImJyYW5jaCIsInJvdXRlcnMiLCJwYXRoIiwicHJvbWlzZXMiLCJjb250ZXh0IiwiY3NzIiwiZm9yRWFjaCIsIml0ZW0iLCJyb3V0ZSIsImxvYWREYXRhIiwicHJvbWlzZSIsIlByb21pc2UiLCJ0aGVuIiwicmVzb2x2ZSIsImNhdGNoIiwicHVzaCIsImFsbCIsImNvbnRlbnQiLCJub3RGb3VuZCIsInN0YXR1cyIsInNlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxrQkFBa0IsaUM7Ozs7Ozs7Ozs7Ozs7O0FDRGxCOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxNQUFNLHdCQUFaO0FBQ0FBLElBQUlDLEdBQUosQ0FBUUMsa0JBQVFDLE1BQVIsQ0FBZSxRQUFmLENBQVIsRSxDQUFtQzs7QUFFbkM7QUFDQUgsSUFBSUMsR0FBSixDQUNFLE1BREYsRUFFRSxnQ0FBTUcsc0JBQU4sRUFBc0I7QUFDcEJDLHdCQUFzQiw4QkFBU0MsR0FBVCxFQUFjO0FBQ2xDLG9CQUFjQSxJQUFJQyxHQUFsQjtBQUNEO0FBSG1CLENBQXRCLENBRkY7O0FBU0FQLElBQUlRLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0YsR0FBRCxFQUFNRyxHQUFOLEVBQWM7QUFDekIsTUFBTUMsUUFBUSxzQkFBZDtBQUNBLE1BQU1DLFNBQVMsb0NBQVlDLGlCQUFaLEVBQXFCTixJQUFJTyxJQUF6QixDQUFmO0FBQ0EsTUFBTUMsV0FBVyxFQUFqQjtBQUNBLE1BQU1DLFVBQVU7QUFDZEMsU0FBSztBQURTLEdBQWhCO0FBR0FMLFNBQU9NLE9BQVAsQ0FBZSxnQkFBUTtBQUNyQixRQUFJQyxLQUFLQyxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFDdkI7QUFDQSxVQUFNQyxVQUFVLElBQUlDLE9BQUosQ0FBWSxtQkFBVztBQUNyQ0osYUFBS0MsS0FBTCxDQUNHQyxRQURILENBQ1lWLEtBRFosRUFFR2EsSUFGSCxDQUVRQyxPQUZSLEVBR0dDLEtBSEgsQ0FHU0QsT0FIVDtBQUlELE9BTGUsQ0FBaEI7QUFNQVYsZUFBU1ksSUFBVCxDQUFjTCxPQUFkO0FBQ0Q7QUFDRixHQVhEOztBQWFBQyxVQUFRSyxHQUFSLENBQVliLFFBQVosRUFBc0JTLElBQXRCLENBQTJCLFlBQU07QUFDL0IsUUFBTUssVUFBVSxzQkFBYXRCLEdBQWIsRUFBa0JJLEtBQWxCLEVBQXlCRSxpQkFBekIsRUFBa0NHLE9BQWxDLENBQWhCOztBQUVBO0FBQ0EsUUFBSUEsUUFBUWMsUUFBWixFQUFzQjtBQUNwQnBCLFVBQUlxQixNQUFKLENBQVcsR0FBWDtBQUNEO0FBQ0RyQixRQUFJc0IsSUFBSixDQUFTSCxPQUFUO0FBQ0QsR0FSRDtBQVNELENBN0JEOztBQStCQTVCLElBQUlnQyxNQUFKLENBQVcsSUFBWCxFQUFpQixZQUFNO0FBQ3JCQyxVQUFRQyxHQUFSLENBQVksTUFBWjtBQUNELENBRkQsRSIsImZpbGUiOiJtYWluLmUwMTVlZGEwM2YzODk4YmUwMzQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicmVkXCI6XCJfM2hWb3ZJRnlxMy1yTEVUcUItU1dBUlwifTsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IG1hdGNoUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5pbXBvcnQgcHJveHkgZnJvbSAnZXhwcmVzcy1odHRwLXByb3h5JztcbmltcG9ydCByb3V0ZXJzIGZyb20gJ0Avcm91dGVycyc7XG5pbXBvcnQgeyBnZXRTdG9yZSB9IGZyb20gJ0Avc3RvcmUnO1xuaW1wb3J0IHJlbmRlckxheW91dCBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQgeyBTRVJWRVJfQkFTRVVSTCB9IGZyb20gJ0AvdXRpbHMvY29uZmlnJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpOyAvLyDmnI3liqHlmajmuLLmn5Pkvb/nlKjpnZnmgIHmlofku7ZcblxuLy/nm7jlvZPkuo7mi6bmiKrliLDkuobliY3nq6/or7fmsYLlnLDlnYDkuK3nmoQvYXBp6YOo5YiG77yM54S25ZCO5o2i5oiQ5Y+m5LiA5Liq5Zyw5Z2AXG5hcHAudXNlKFxuICAnL2FwaScsXG4gIHByb3h5KFNFUlZFUl9CQVNFVVJMLCB7XG4gICAgcHJveHlSZXFQYXRoUmVzb2x2ZXI6IGZ1bmN0aW9uKHJlcSkge1xuICAgICAgcmV0dXJuIGAvYXBpJHtyZXEudXJsfWA7XG4gICAgfVxuICB9KVxuKTtcblxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBzdG9yZSA9IGdldFN0b3JlKCk7XG4gIGNvbnN0IGJyYW5jaCA9IG1hdGNoUm91dGVzKHJvdXRlcnMsIHJlcS5wYXRoKTtcbiAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICBjc3M6IFtdXG4gIH07XG4gIGJyYW5jaC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmIChpdGVtLnJvdXRlLmxvYWREYXRhKSB7XG4gICAgICAvLyDljIXoo7nkuIDlsYIgcHJvbWlzZSDlrp7kvovvvIzpmLvmraLmnI3liqHnq6/or7fmsYLplJnor6/lr7zoh7QgUHJvbWlzZS5hbGwg5pa55rOV6ZSZ6K+vXG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGl0ZW0ucm91dGVcbiAgICAgICAgICAubG9hZERhdGEoc3RvcmUpXG4gICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgICAgICAuY2F0Y2gocmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgfVxuICB9KTtcblxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlckxheW91dChyZXEsIHN0b3JlLCByb3V0ZXJzLCBjb250ZXh0KTtcblxuICAgIC8vIOWmguaenOW9k+WJjemhtemdouS4jeWtmOWcqO+8jOWImeiuvue9rmh0dHDor7fmsYLnmoTnirbmgIHnoIFcbiAgICBpZiAoY29udGV4dC5ub3RGb3VuZCkge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpO1xuICAgIH1cbiAgICByZXMuc2VuZChjb250ZW50KTtcbiAgfSk7XG59KTtcblxuYXBwLmxpc3RlbigzMDAxLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCczMDAxJyk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=