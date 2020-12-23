/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm */ \"./esm/index.js\");\n\n\nwindow.onload = () => {\n  const listener = new _esm__WEBPACK_IMPORTED_MODULE_0__.BrowserTabVisibilityListener();\n  listener.on(_esm__WEBPACK_IMPORTED_MODULE_0__.BrowserTabVisibilityEvent.VISIBLE, () => {\n    console.log(\"visible\");\n  });\n  listener.on(_esm__WEBPACK_IMPORTED_MODULE_0__.BrowserTabVisibilityEvent.INVISIBLE, () => {\n    console.log(\"invisible\");\n  });\n};\n\n//# sourceURL=webpack://browser-tab-visibility-listener/./demoSrc/demo.js?");

/***/ }),

/***/ "./esm/BrowserTabVisibilityListener.js":
/*!*********************************************!*\
  !*** ./esm/BrowserTabVisibilityListener.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrowserTabVisibilityListener\": () => /* binding */ BrowserTabVisibilityListener,\n/* harmony export */   \"BrowserTabVisibilityEvent\": () => /* binding */ BrowserTabVisibilityEvent\n/* harmony export */ });\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ \"./node_modules/eventemitter3/index.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * ブラウザタブの表示/非表示イベントを監視するクラス\n */\n\nclass BrowserTabVisibilityListener extends eventemitter3__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {\n  /**\n   * コンストラクタ\n   *\n   * htmlドキュメント生成後、BrowserTabVisibilityListenerのコンストラクタを実行しても\n   * BrowserTabVisibilityEvent.VISIBLEイベントは発生しないことに注意。\n   * Webアプリケーションの起動を監視したい場合、コンストラクタ実行後に\n   * 手動でBrowserTabVisibilityListener.emit(BrowserTabVisibilityEvent.VISIBLE)を実行する。\n   */\n  constructor() {\n    super();\n\n    this.watchVisibilityEvent = () => {\n      if (document.visibilityState === \"hidden\") {\n        this.emit(BrowserTabVisibilityEvent.INVISIBLE);\n      } else {\n        this.emit(BrowserTabVisibilityEvent.VISIBLE);\n      }\n    };\n\n    this.watchUnloadEvent = () => {\n      this.emit(BrowserTabVisibilityEvent.INVISIBLE);\n      this.dispose();\n    };\n\n    const isEnableEnv = BrowserTabVisibilityListener.checkBrowserEnvironment();\n    if (!isEnableEnv) return;\n    document.addEventListener(PageVisibilityEventType.CHANGE, this.watchVisibilityEvent, false);\n    window.addEventListener(UnloadEventType.BEFORE, this.watchUnloadEvent, false);\n  }\n\n  static checkBrowserEnvironment() {\n    if (!window || !document || !document.addEventListener || typeof document.hidden === \"undefined\") {\n      return false;\n    }\n\n    return true;\n  }\n\n  dispose() {\n    document.removeEventListener(PageVisibilityEventType.CHANGE, this.watchVisibilityEvent, false);\n    window.removeEventListener(UnloadEventType.BEFORE, this.watchUnloadEvent, false);\n  }\n\n}\nvar PageVisibilityEventType;\n\n(function (PageVisibilityEventType) {\n  PageVisibilityEventType[\"CHANGE\"] = \"visibilitychange\";\n})(PageVisibilityEventType || (PageVisibilityEventType = {}));\n\nvar UnloadEventType;\n\n(function (UnloadEventType) {\n  UnloadEventType[\"BEFORE\"] = \"beforeunload\";\n})(UnloadEventType || (UnloadEventType = {}));\n\nvar BrowserTabVisibilityEvent;\n\n(function (BrowserTabVisibilityEvent) {\n  BrowserTabVisibilityEvent[\"VISIBLE\"] = \"visible\";\n  BrowserTabVisibilityEvent[\"INVISIBLE\"] = \"invisible\";\n})(BrowserTabVisibilityEvent || (BrowserTabVisibilityEvent = {}));\n\n//# sourceURL=webpack://browser-tab-visibility-listener/./esm/BrowserTabVisibilityListener.js?");

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrowserTabVisibilityEvent\": () => /* reexport safe */ _BrowserTabVisibilityListener__WEBPACK_IMPORTED_MODULE_0__.BrowserTabVisibilityEvent,\n/* harmony export */   \"BrowserTabVisibilityListener\": () => /* reexport safe */ _BrowserTabVisibilityListener__WEBPACK_IMPORTED_MODULE_0__.BrowserTabVisibilityListener\n/* harmony export */ });\n/* harmony import */ var _BrowserTabVisibilityListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowserTabVisibilityListener */ \"./esm/BrowserTabVisibilityListener.js\");\n\n\n//# sourceURL=webpack://browser-tab-visibility-listener/./esm/index.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demo": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./demoSrc/demo.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbrowser_tab_visibility_listener"] = self["webpackChunkbrowser_tab_visibility_listener"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;