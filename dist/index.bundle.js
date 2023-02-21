"use strict";
(self["webpackChunkwebterm"] = self["webpackChunkwebterm"] || []).push([["index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

var promptStr = ">> ";
var input = document.getElementById('input');
var output = document.getElementById('output');
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        var command = input.value.trim();
        if (command === 'clear') {
            output.innerHTML = '';
        }
        else {
            var result = processCommand(command);
            output.innerHTML += "".concat(promptStr).concat(command, "\n").concat(result, "\n");
        }
        input.value = '';
        e.preventDefault();
    }
});
var processCommand = function (command) {
    // Process the command here and return the output
    return "Command not implemented yet.";
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUV0QixJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFFeEIsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXdCLENBQUM7QUFDdEUsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQW1CLENBQUM7QUFFbkUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtRQUNuQixJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5DLElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUNyQixNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUN6QjthQUFNO1lBQ0gsSUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxTQUFTLElBQUksVUFBRyxTQUFTLFNBQUcsT0FBTyxlQUFLLE1BQU0sT0FBSSxDQUFDO1NBQzdEO1FBRUQsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3RCO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLGNBQWMsR0FBRyxVQUFDLE9BQWU7SUFDbkMsaURBQWlEO0lBQ2pELE9BQU8sOEJBQThCLENBQUM7QUFDMUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnRlcm0vLi9zcmMvc3R5bGUuc2Nzcz9iYzNiIiwid2VicGFjazovL3dlYnRlcm0vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IHByb21wdFN0ciA9IFwiPj4gXCI7XG5cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbmNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBpbnB1dC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgaWYgKGNvbW1hbmQgPT09ICdjbGVhcicpIHtcbiAgICAgICAgICAgIG91dHB1dC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHByb2Nlc3NDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgb3V0cHV0LmlubmVySFRNTCArPSBgJHtwcm9tcHRTdHJ9JHtjb21tYW5kfVxcbiR7cmVzdWx0fVxcbmA7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG5cbmNvbnN0IHByb2Nlc3NDb21tYW5kID0gKGNvbW1hbmQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgLy8gUHJvY2VzcyB0aGUgY29tbWFuZCBoZXJlIGFuZCByZXR1cm4gdGhlIG91dHB1dFxuICAgIHJldHVybiBcIkNvbW1hbmQgbm90IGltcGxlbWVudGVkIHlldC5cIjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==