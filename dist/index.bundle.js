/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Todo.js":
/*!********************!*\
  !*** ./js/Todo.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Todo
/* harmony export */ });
class Todo{
    /*
        priority - важность дела
        text - контент, содержимое
        dt -  дата создания дела
        dl - deadline
     */
    constructor(priority, text, dl) {
        this.priority = priority;
        this.text = text;
        this.dt = Date.now();
        this.dl = dl;
    }
}



/***/ }),

/***/ "./js/code.js":
/*!********************!*\
  !*** ./js/code.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./js/Todo.js");


// class Card_Trello extends Todo{
//     constructor(priority, text, dl, person) {
//         super();
//         this.priority = priority;
//         this.text = text;
//         this.dl = dl;
//         this.person = person;
//     }
// }
// const card_trello = new Card_Trello(1, "text", "10_14", "Vasya")
// console.log(card_trello);

const important_color = [
    "has-background-danger has-text-white is-size-3",
    "has-background-warning has-text-black is-size-3",
    "has-background-link has-text-white is-size-3",
]

const field = document.querySelector(".input")
let select = document.querySelector("select");
let date_picker = document.getElementById("date_picker");
const button_plus = document.querySelector(".button_plus");
let deals = document.querySelector('#deals');


/*
Функция добавления дела, котора вызвает функцию отрисовки
и добавляет дело в LocalStorage
И не забывает обнулять значения
 */
function addTask(){
    let content = field.value;
    if(content === ""  || date_picker.value === ""){
        return;
    }
    let todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(Number(select.value), content, date_picker.value);
    const todo_to_JSON  = JSON.stringify(todo);
    localStorage.setItem(String(+todo.dt), todo_to_JSON);
    GenerateDom(todo);
    field.value = "";
    // дальше у нас будет сохрание в LocalStorage

}

// назначение листенеров на нашу кнопку
button_plus.onclick = addTask;
document.addEventListener("keypress", (e) =>{
    if(e.code === "Enter"){
        addTask();
    }
})


// функция отрисовки нашего приложения, когда оно включается
//данные берутся из localStorage
function draw_on_load(){
    // эта функция сразу сработает
    // потом ее переменные вывезет GC
    for (let i = 0; i < localStorage.length; i++){
        let lk_key = localStorage.key(i); // key по индексу получить значение
        let content = localStorage.getItem(lk_key) // по ключу получаем значение
        let todo = JSON.parse(content); // parse - метод расконсервации
        GenerateDom(todo);
    }
}
draw_on_load();

/*
Универсальная функция отрисовки, которая у нас вставляет todo в DOM
 */
function GenerateDom(obj){
deals.insertAdjacentHTML('afterbegin',
    `
        <div class="wrap_task ${important_color[obj.priority - 1]}" id="${+obj.dt}">
           <p class="todo_text"> ${obj.text} </p>
            <p> ${new Date(obj.dt).getDate()}/ ${new Date(obj.dt).getMonth()} / ${obj.dl}</p>
                <i class="material-icons md-delete"></i>
            </div>
    `)
}

// обработчики удаления дела
deleteItem();

function deleteItem() {
    let delete_icons = document.getElementsByClassName('md-delete');
    let delete_map = [...delete_icons];
    delete_map.map((el) => {
        el.onclick = () => {
        let wrap_task = el.parentNode;
        wrap_task.style.display = 'none';
        localStorage.removeItem(wrap_task.id);
        }
    });
}

// deals.addEventListener('click', (e) => {
//     let thrash = e.target.closest('.md-delete');
//     let wrap_task = thrash.parentNode;
//     wrap_task.remove();
// })

// обработчики редактирования дела



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
/******/ 	__webpack_require__("./js/code.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL2pzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL2pzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG97XHJcbiAgICAvKlxyXG4gICAgICAgIHByaW9yaXR5IC0g0LLQsNC20L3QvtGB0YLRjCDQtNC10LvQsFxyXG4gICAgICAgIHRleHQgLSDQutC+0L3RgtC10L3Rgiwg0YHQvtC00LXRgNC20LjQvNC+0LVcclxuICAgICAgICBkdCAtICDQtNCw0YLQsCDRgdC+0LfQtNCw0L3QuNGPINC00LXQu9CwXHJcbiAgICAgICAgZGwgLSBkZWFkbGluZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcmlvcml0eSwgdGV4dCwgZGwpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmR0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmRsID0gZGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xyXG4vLyBjbGFzcyBDYXJkX1RyZWxsbyBleHRlbmRzIFRvZG97XHJcbi8vICAgICBjb25zdHJ1Y3Rvcihwcmlvcml0eSwgdGV4dCwgZGwsIHBlcnNvbikge1xyXG4vLyAgICAgICAgIHN1cGVyKCk7XHJcbi8vICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4vLyAgICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbi8vICAgICAgICAgdGhpcy5kbCA9IGRsO1xyXG4vLyAgICAgICAgIHRoaXMucGVyc29uID0gcGVyc29uO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGNvbnN0IGNhcmRfdHJlbGxvID0gbmV3IENhcmRfVHJlbGxvKDEsIFwidGV4dFwiLCBcIjEwXzE0XCIsIFwiVmFzeWFcIilcclxuLy8gY29uc29sZS5sb2coY2FyZF90cmVsbG8pO1xyXG5cclxuY29uc3QgaW1wb3J0YW50X2NvbG9yID0gW1xyXG4gICAgXCJoYXMtYmFja2dyb3VuZC1kYW5nZXIgaGFzLXRleHQtd2hpdGUgaXMtc2l6ZS0zXCIsXHJcbiAgICBcImhhcy1iYWNrZ3JvdW5kLXdhcm5pbmcgaGFzLXRleHQtYmxhY2sgaXMtc2l6ZS0zXCIsXHJcbiAgICBcImhhcy1iYWNrZ3JvdW5kLWxpbmsgaGFzLXRleHQtd2hpdGUgaXMtc2l6ZS0zXCIsXHJcbl1cclxuXHJcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKVxyXG5sZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcclxubGV0IGRhdGVfcGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX3BpY2tlclwiKTtcclxuY29uc3QgYnV0dG9uX3BsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbl9wbHVzXCIpO1xyXG5sZXQgZGVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVhbHMnKTtcclxuXHJcblxyXG4vKlxyXG7QpNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQtNC10LvQsCwg0LrQvtGC0L7RgNCwINCy0YvQt9Cy0LDQtdGCINGE0YPQvdC60YbQuNGOINC+0YLRgNC40YHQvtCy0LrQuFxyXG7QuCDQtNC+0LHQsNCy0LvRj9C10YIg0LTQtdC70L4g0LIgTG9jYWxTdG9yYWdlXHJcbtCYINC90LUg0LfQsNCx0YvQstCw0LXRgiDQvtCx0L3Rg9C70Y/RgtGMINC30L3QsNGH0LXQvdC40Y9cclxuICovXHJcbmZ1bmN0aW9uIGFkZFRhc2soKXtcclxuICAgIGxldCBjb250ZW50ID0gZmllbGQudmFsdWU7XHJcbiAgICBpZihjb250ZW50ID09PSBcIlwiICB8fCBkYXRlX3BpY2tlci52YWx1ZSA9PT0gXCJcIil7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHRvZG8gPSBuZXcgVG9kbyhOdW1iZXIoc2VsZWN0LnZhbHVlKSwgY29udGVudCwgZGF0ZV9waWNrZXIudmFsdWUpO1xyXG4gICAgY29uc3QgdG9kb190b19KU09OICA9IEpTT04uc3RyaW5naWZ5KHRvZG8pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RyaW5nKCt0b2RvLmR0KSwgdG9kb190b19KU09OKTtcclxuICAgIEdlbmVyYXRlRG9tKHRvZG8pO1xyXG4gICAgZmllbGQudmFsdWUgPSBcIlwiO1xyXG4gICAgLy8g0LTQsNC70YzRiNC1INGDINC90LDRgSDQsdGD0LTQtdGCINGB0L7RhdGA0LDQvdC40LUg0LIgTG9jYWxTdG9yYWdlXHJcblxyXG59XHJcblxyXG4vLyDQvdCw0LfQvdCw0YfQtdC90LjQtSDQu9C40YHRgtC10L3QtdGA0L7QsiDQvdCwINC90LDRiNGDINC60L3QvtC/0LrRg1xyXG5idXR0b25fcGx1cy5vbmNsaWNrID0gYWRkVGFzaztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PntcclxuICAgIGlmKGUuY29kZSA9PT0gXCJFbnRlclwiKXtcclxuICAgICAgICBhZGRUYXNrKCk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8g0YTRg9C90LrRhtC40Y8g0L7RgtGA0LjRgdC+0LLQutC4INC90LDRiNC10LPQviDQv9GA0LjQu9C+0LbQtdC90LjRjywg0LrQvtCz0LTQsCDQvtC90L4g0LLQutC70Y7Rh9Cw0LXRgtGB0Y9cclxuLy/QtNCw0L3QvdGL0LUg0LHQtdGA0YPRgtGB0Y8g0LjQtyBsb2NhbFN0b3JhZ2VcclxuZnVuY3Rpb24gZHJhd19vbl9sb2FkKCl7XHJcbiAgICAvLyDRjdGC0LAg0YTRg9C90LrRhtC40Y8g0YHRgNCw0LfRgyDRgdGA0LDQsdC+0YLQsNC10YJcclxuICAgIC8vINC/0L7RgtC+0Lwg0LXQtSDQv9C10YDQtdC80LXQvdC90YvQtSDQstGL0LLQtdC30LXRgiBHQ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBsa19rZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpOyAvLyBrZXkg0L/QviDQuNC90LTQtdC60YHRgyDQv9C+0LvRg9GH0LjRgtGMINC30L3QsNGH0LXQvdC40LVcclxuICAgICAgICBsZXQgY29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxrX2tleSkgLy8g0L/QviDQutC70Y7Rh9GDINC/0L7Qu9GD0YfQsNC10Lwg0LfQvdCw0YfQtdC90LjQtVxyXG4gICAgICAgIGxldCB0b2RvID0gSlNPTi5wYXJzZShjb250ZW50KTsgLy8gcGFyc2UgLSDQvNC10YLQvtC0INGA0LDRgdC60L7QvdGB0LXRgNCy0LDRhtC40LhcclxuICAgICAgICBHZW5lcmF0ZURvbSh0b2RvKTtcclxuICAgIH1cclxufVxyXG5kcmF3X29uX2xvYWQoKTtcclxuXHJcbi8qXHJcbtCj0L3QuNCy0LXRgNGB0LDQu9GM0L3QsNGPINGE0YPQvdC60YbQuNGPINC+0YLRgNC40YHQvtCy0LrQuCwg0LrQvtGC0L7RgNCw0Y8g0YMg0L3QsNGBINCy0YHRgtCw0LLQu9GP0LXRgiB0b2RvINCyIERPTVxyXG4gKi9cclxuZnVuY3Rpb24gR2VuZXJhdGVEb20ob2JqKXtcclxuZGVhbHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxcclxuICAgIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcF90YXNrICR7aW1wb3J0YW50X2NvbG9yW29iai5wcmlvcml0eSAtIDFdfVwiIGlkPVwiJHsrb2JqLmR0fVwiPlxyXG4gICAgICAgICAgIDxwIGNsYXNzPVwidG9kb190ZXh0XCI+ICR7b2JqLnRleHR9IDwvcD5cclxuICAgICAgICAgICAgPHA+ICR7bmV3IERhdGUob2JqLmR0KS5nZXREYXRlKCl9LyAke25ldyBEYXRlKG9iai5kdCkuZ2V0TW9udGgoKX0gLyAke29iai5kbH08L3A+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLWRlbGV0ZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgKVxyXG59XHJcblxyXG4vLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGD0LTQsNC70LXQvdC40Y8g0LTQtdC70LBcclxuZGVsZXRlSXRlbSgpO1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlSXRlbSgpIHtcclxuICAgIGxldCBkZWxldGVfaWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZC1kZWxldGUnKTtcclxuICAgIGxldCBkZWxldGVfbWFwID0gWy4uLmRlbGV0ZV9pY29uc107XHJcbiAgICBkZWxldGVfbWFwLm1hcCgoZWwpID0+IHtcclxuICAgICAgICBlbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB3cmFwX3Rhc2sgPSBlbC5wYXJlbnROb2RlO1xyXG4gICAgICAgIHdyYXBfdGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHdyYXBfdGFzay5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGRlYWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICAgIGxldCB0aHJhc2ggPSBlLnRhcmdldC5jbG9zZXN0KCcubWQtZGVsZXRlJyk7XHJcbi8vICAgICBsZXQgd3JhcF90YXNrID0gdGhyYXNoLnBhcmVudE5vZGU7XHJcbi8vICAgICB3cmFwX3Rhc2sucmVtb3ZlKCk7XHJcbi8vIH0pXHJcblxyXG4vLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LTQtdC70LBcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvY29kZS5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9