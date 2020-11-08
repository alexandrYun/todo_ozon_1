/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Todo.ts":
/*!********************!*\
  !*** ./js/Todo.ts ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var Todo = /** @class */ (function () {
    /*
        priority - важность дела
        text - контент, содержимое
        dt -  дата создания дела
        dl - deadline
     */
    function Todo(priority, text, dl) {
        this.id;
        this.priority = priority;
        this.text = text;
        this.dt = Date.now();
        this.dl = dl;
    }
    return Todo;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./js/code.ts":
/*!********************!*\
  !*** ./js/code.ts ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./js/Todo.ts");
 // чтобы было больше выдачи ошибок и проверки кода и работали всякие новые фишки
 // импортируем класс нашего дела
var important_color = [
    "has-background-danger has-text-white is-size-3",
    "has-background-warning has-text-black is-size-3",
    "has-background-link has-text-white is-size-3",
]; // массив prioritet - насколько дела могут быть важными / неважными
var field = (document.querySelector(".input"));
var select = (document.querySelector("#prioritet"));
var date_picker = (document.getElementById("date_picker"));
var button_plus = (document.querySelector(".button_plus"));
var deals = document.querySelector("#deals");
var getPostRequest = 'http://isakura3131.zonopo.ru/deals';
/*
Функция добавления дела, котора вызвает функцию отрисовки
и добавляет дело в LocalStorage
И не забывает обнулять значения
 */
function addTask() {
    var content = field.value;
    if (content === "" || date_picker.value === "") {
        return;
    }
    var todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(parseInt(select.value), content, date_picker.value);
    var todo_to_JSON = JSON.stringify(todo);
    console.table(todo);
    // localStorage.setItem(String(+todo.dt), todo_to_JSON);
    GenerateDom(todo);
    // POST
    var body = {
        text: field.value,
        dt: new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear(),
        priority: parseInt(select.value),
        dl: date_picker.value
    };
    var headers = {
        'Content-Type': 'application/json'
    };
    return fetch(getPostRequest, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers
    })
        .then(function (data) { return console.log(data); })
        .then(function () {
        field.value = '';
    });
}
// назначение листенеров на нашу кнопку
button_plus.onclick = addTask;
document.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        addTask();
    }
});
// функция отрисовки нашего приложения, когда оно включается
//данные берутся из localStorage
// function draw_on_load() {
//   // эта функция сразу вызовется
//   // потом ее переменные вывезет GC
//   for (let i = 0; i < localStorage.length; i++) {
//     let lk_key = localStorage.key(i); // key по индексу получить значение
//     let content = localStorage.getItem(lk_key); // по ключу получаем значение
//     let todo = JSON.parse(content); // parse - метод расконсервации
//     GenerateDom(todo);
//   }
// }
// draw_on_load();
/*
Универсальная функция отрисовки, которая у нас вставляет todo в DOM
 */
function GenerateDom(obj) {
    var id = obj.id, priority = obj.priority, text = obj.text, dt = obj.dt, dl = obj.dl;
    deals.insertAdjacentHTML("afterbegin", "\n        <div class=\"wrap_task " + important_color[priority - 1] + "\" id=\"" + id + "\">\n           <p class=\"todo_text\"> " + text + " </p>\n            <p> " + new Date(dt).getDate() + "/" + new Date(obj.dt).getMonth() + " / " + dl + "</p>\n             <i class=\"material-icons md-delete\"></i>\n            </div>\n    ");
    deleteItem();
}
// обработчики удаления дела
// todo удаление дела
deleteItem();
function deleteItem() {
    var delete_icons = document.getElementsByClassName("md-delete");
    var delete_map = Array.from(delete_icons);
    delete_map.map(function (el) {
        el.onclick = function () {
            var wrap_task = el.parentNode;
            wrap_task.style.display = "none";
            // localStorage.removeItem(wrap_task.id);
            // DELETE
            var delRequest = 'http://isakura3131.zonopo.ru/deal/';
            var id = wrap_task.id;
            return fetch("" + delRequest + id, {
                method: 'DELETE',
            })
                .then(function (data) { return console.log(data); });
        };
    });
}
// deals.addEventListener("click", (e) =>{
//     let thrash = e.target.closest(".md-delete");
//     // e.target - элемент, на котором происходит событие
//     //closest - находит ближайший thrash
//     let wrap_task = thrash.parentNode;
//     wrap_task.remove();
// })
// обработчики редактирования дела
// отрисовка из бд
fetch(getPostRequest)
    .then(function (response) { return response.json(); })
    .then(function (json) {
    for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
        var key = json_1[_i];
        var todo = key;
        GenerateDom(todo);
        console.log(key);
    }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/code.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL2pzL1RvZG8udHMiLCJ3ZWJwYWNrOi8vdG9kby8uL2pzL2NvZGUudHMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBUb2RvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLypcclxuICAgICAgICBwcmlvcml0eSAtINCy0LDQttC90L7RgdGC0Ywg0LTQtdC70LBcclxuICAgICAgICB0ZXh0IC0g0LrQvtC90YLQtdC90YIsINGB0L7QtNC10YDQttC40LzQvtC1XHJcbiAgICAgICAgZHQgLSAg0LTQsNGC0LAg0YHQvtC30LTQsNC90LjRjyDQtNC10LvQsFxyXG4gICAgICAgIGRsIC0gZGVhZGxpbmVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gVG9kbyhwcmlvcml0eSwgdGV4dCwgZGwpIHtcclxuICAgICAgICB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuZHQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZGwgPSBkbDtcclxuICAgIH1cclxuICAgIHJldHVybiBUb2RvO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xyXG4iLCJcInVzZSBzdHJpY3RcIjsgLy8g0YfRgtC+0LHRiyDQsdGL0LvQviDQsdC+0LvRjNGI0LUg0LLRi9C00LDRh9C4INC+0YjQuNCx0L7QuiDQuCDQv9GA0L7QstC10YDQutC4INC60L7QtNCwINC4INGA0LDQsdC+0YLQsNC70Lgg0LLRgdGP0LrQuNC1INC90L7QstGL0LUg0YTQuNGI0LrQuFxyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7IC8vINC40LzQv9C+0YDRgtC40YDRg9C10Lwg0LrQu9Cw0YHRgSDQvdCw0YjQtdCz0L4g0LTQtdC70LBcclxudmFyIGltcG9ydGFudF9jb2xvciA9IFtcclxuICAgIFwiaGFzLWJhY2tncm91bmQtZGFuZ2VyIGhhcy10ZXh0LXdoaXRlIGlzLXNpemUtM1wiLFxyXG4gICAgXCJoYXMtYmFja2dyb3VuZC13YXJuaW5nIGhhcy10ZXh0LWJsYWNrIGlzLXNpemUtM1wiLFxyXG4gICAgXCJoYXMtYmFja2dyb3VuZC1saW5rIGhhcy10ZXh0LXdoaXRlIGlzLXNpemUtM1wiLFxyXG5dOyAvLyDQvNCw0YHRgdC40LIgcHJpb3JpdGV0IC0g0L3QsNGB0LrQvtC70YzQutC+INC00LXQu9CwINC80L7Qs9GD0YIg0LHRi9GC0Ywg0LLQsNC20L3Ri9C80LggLyDQvdC10LLQsNC20L3Ri9C80LhcclxudmFyIGZpZWxkID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikpO1xyXG52YXIgc2VsZWN0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdGV0XCIpKTtcclxudmFyIGRhdGVfcGlja2VyID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZV9waWNrZXJcIikpO1xyXG52YXIgYnV0dG9uX3BsdXMgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25fcGx1c1wiKSk7XHJcbnZhciBkZWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVhbHNcIik7XHJcbnZhciBnZXRQb3N0UmVxdWVzdCA9ICdodHRwOi8vaXNha3VyYTMxMzEuem9ub3BvLnJ1L2RlYWxzJztcclxuLypcclxu0KTRg9C90LrRhtC40Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0LTQtdC70LAsINC60L7RgtC+0YDQsCDQstGL0LfQstCw0LXRgiDRhNGD0L3QutGG0LjRjiDQvtGC0YDQuNGB0L7QstC60Lhcclxu0Lgg0LTQvtCx0LDQstC70Y/QtdGCINC00LXQu9C+INCyIExvY2FsU3RvcmFnZVxyXG7QmCDQvdC1INC30LDQsdGL0LLQsNC10YIg0L7QsdC90YPQu9GP0YLRjCDQt9C90LDRh9C10L3QuNGPXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xyXG4gICAgdmFyIGNvbnRlbnQgPSBmaWVsZC52YWx1ZTtcclxuICAgIGlmIChjb250ZW50ID09PSBcIlwiIHx8IGRhdGVfcGlja2VyLnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHRvZG8gPSBuZXcgVG9kbyhwYXJzZUludChzZWxlY3QudmFsdWUpLCBjb250ZW50LCBkYXRlX3BpY2tlci52YWx1ZSk7XHJcbiAgICB2YXIgdG9kb190b19KU09OID0gSlNPTi5zdHJpbmdpZnkodG9kbyk7XHJcbiAgICBjb25zb2xlLnRhYmxlKHRvZG8pO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RyaW5nKCt0b2RvLmR0KSwgdG9kb190b19KU09OKTtcclxuICAgIEdlbmVyYXRlRG9tKHRvZG8pO1xyXG4gICAgLy8gUE9TVFxyXG4gICAgdmFyIGJvZHkgPSB7XHJcbiAgICAgICAgdGV4dDogZmllbGQudmFsdWUsXHJcbiAgICAgICAgZHQ6IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgXCItXCIgKyBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyBcIi1cIiArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICBwcmlvcml0eTogcGFyc2VJbnQoc2VsZWN0LnZhbHVlKSxcclxuICAgICAgICBkbDogZGF0ZV9waWNrZXIudmFsdWVcclxuICAgIH07XHJcbiAgICB2YXIgaGVhZGVycyA9IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZldGNoKGdldFBvc3RSZXF1ZXN0LCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gY29uc29sZS5sb2coZGF0YSk7IH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICB9KTtcclxufVxyXG4vLyDQvdCw0LfQvdCw0YfQtdC90LjQtSDQu9C40YHRgtC10L3QtdGA0L7QsiDQvdCwINC90LDRiNGDINC60L3QvtC/0LrRg1xyXG5idXR0b25fcGx1cy5vbmNsaWNrID0gYWRkVGFzaztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICBhZGRUYXNrKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4vLyDRhNGD0L3QutGG0LjRjyDQvtGC0YDQuNGB0L7QstC60Lgg0L3QsNGI0LXQs9C+INC/0YDQuNC70L7QttC10L3QuNGPLCDQutC+0LPQtNCwINC+0L3QviDQstC60LvRjtGH0LDQtdGC0YHRj1xyXG4vL9C00LDQvdC90YvQtSDQsdC10YDRg9GC0YHRjyDQuNC3IGxvY2FsU3RvcmFnZVxyXG4vLyBmdW5jdGlvbiBkcmF3X29uX2xvYWQoKSB7XHJcbi8vICAgLy8g0Y3RgtCwINGE0YPQvdC60YbQuNGPINGB0YDQsNC30YMg0LLRi9C30L7QstC10YLRgdGPXHJcbi8vICAgLy8g0L/QvtGC0L7QvCDQtdC1INC/0LXRgNC10LzQtdC90L3Ri9C1INCy0YvQstC10LfQtdGCIEdDXHJcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgIGxldCBsa19rZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpOyAvLyBrZXkg0L/QviDQuNC90LTQtdC60YHRgyDQv9C+0LvRg9GH0LjRgtGMINC30L3QsNGH0LXQvdC40LVcclxuLy8gICAgIGxldCBjb250ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obGtfa2V5KTsgLy8g0L/QviDQutC70Y7Rh9GDINC/0L7Qu9GD0YfQsNC10Lwg0LfQvdCw0YfQtdC90LjQtVxyXG4vLyAgICAgbGV0IHRvZG8gPSBKU09OLnBhcnNlKGNvbnRlbnQpOyAvLyBwYXJzZSAtINC80LXRgtC+0LQg0YDQsNGB0LrQvtC90YHQtdGA0LLQsNGG0LjQuFxyXG4vLyAgICAgR2VuZXJhdGVEb20odG9kbyk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIGRyYXdfb25fbG9hZCgpO1xyXG4vKlxyXG7Qo9C90LjQstC10YDRgdCw0LvRjNC90LDRjyDRhNGD0L3QutGG0LjRjyDQvtGC0YDQuNGB0L7QstC60LgsINC60L7RgtC+0YDQsNGPINGDINC90LDRgSDQstGB0YLQsNCy0LvRj9C10YIgdG9kbyDQsiBET01cclxuICovXHJcbmZ1bmN0aW9uIEdlbmVyYXRlRG9tKG9iaikge1xyXG4gICAgdmFyIGlkID0gb2JqLmlkLCBwcmlvcml0eSA9IG9iai5wcmlvcml0eSwgdGV4dCA9IG9iai50ZXh0LCBkdCA9IG9iai5kdCwgZGwgPSBvYmouZGw7XHJcbiAgICBkZWFscy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cmFwX3Rhc2sgXCIgKyBpbXBvcnRhbnRfY29sb3JbcHJpb3JpdHkgLSAxXSArIFwiXFxcIiBpZD1cXFwiXCIgKyBpZCArIFwiXFxcIj5cXG4gICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b2RvX3RleHRcXFwiPiBcIiArIHRleHQgKyBcIiA8L3A+XFxuICAgICAgICAgICAgPHA+IFwiICsgbmV3IERhdGUoZHQpLmdldERhdGUoKSArIFwiL1wiICsgbmV3IERhdGUob2JqLmR0KS5nZXRNb250aCgpICsgXCIgLyBcIiArIGRsICsgXCI8L3A+XFxuICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucyBtZC1kZWxldGVcXFwiPjwvaT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgXCIpO1xyXG4gICAgZGVsZXRlSXRlbSgpO1xyXG59XHJcbi8vINC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YPQtNCw0LvQtdC90LjRjyDQtNC10LvQsFxyXG4vLyB0b2RvINGD0LTQsNC70LXQvdC40LUg0LTQtdC70LBcclxuZGVsZXRlSXRlbSgpO1xyXG5mdW5jdGlvbiBkZWxldGVJdGVtKCkge1xyXG4gICAgdmFyIGRlbGV0ZV9pY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZC1kZWxldGVcIik7XHJcbiAgICB2YXIgZGVsZXRlX21hcCA9IEFycmF5LmZyb20oZGVsZXRlX2ljb25zKTtcclxuICAgIGRlbGV0ZV9tYXAubWFwKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB3cmFwX3Rhc2sgPSBlbC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB3cmFwX3Rhc2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh3cmFwX3Rhc2suaWQpO1xyXG4gICAgICAgICAgICAvLyBERUxFVEVcclxuICAgICAgICAgICAgdmFyIGRlbFJlcXVlc3QgPSAnaHR0cDovL2lzYWt1cmEzMTMxLnpvbm9wby5ydS9kZWFsLyc7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IHdyYXBfdGFzay5pZDtcclxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKFwiXCIgKyBkZWxSZXF1ZXN0ICsgaWQsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gY29uc29sZS5sb2coZGF0YSk7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG4vLyBkZWFscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xyXG4vLyAgICAgbGV0IHRocmFzaCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubWQtZGVsZXRlXCIpO1xyXG4vLyAgICAgLy8gZS50YXJnZXQgLSDRjdC70LXQvNC10L3Rgiwg0L3QsCDQutC+0YLQvtGA0L7QvCDQv9GA0L7QuNGB0YXQvtC00LjRgiDRgdC+0LHRi9GC0LjQtVxyXG4vLyAgICAgLy9jbG9zZXN0IC0g0L3QsNGF0L7QtNC40YIg0LHQu9C40LbQsNC50YjQuNC5IHRocmFzaFxyXG4vLyAgICAgbGV0IHdyYXBfdGFzayA9IHRocmFzaC5wYXJlbnROb2RlO1xyXG4vLyAgICAgd3JhcF90YXNrLnJlbW92ZSgpO1xyXG4vLyB9KVxyXG4vLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LTQtdC70LBcclxuLy8g0L7RgtGA0LjRgdC+0LLQutCwINC40Lcg0LHQtFxyXG5mZXRjaChnZXRQb3N0UmVxdWVzdClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcclxuICAgIGZvciAodmFyIF9pID0gMCwganNvbl8xID0ganNvbjsgX2kgPCBqc29uXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IGpzb25fMVtfaV07XHJcbiAgICAgICAgdmFyIHRvZG8gPSBrZXk7XHJcbiAgICAgICAgR2VuZXJhdGVEb20odG9kbyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coa2V5KTtcclxuICAgIH1cclxufSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvY29kZS50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9