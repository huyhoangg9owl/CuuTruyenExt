/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 428:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./ts/process/check.ts
var check = __webpack_require__(138);
// EXTERNAL MODULE: ./ts/process/dataExt.ts
var dataExt = __webpack_require__(720);
// EXTERNAL MODULE: ./ts/process/global.ts
var global = __webpack_require__(227);
// EXTERNAL MODULE: ./ts/process/hasRead.ts
var hasRead = __webpack_require__(140);
;// CONCATENATED MODULE: ./ts/process/process.ts



function process(manga, chapter) {
    processData(manga, chapter);
    const titleChapter = document.querySelector('#heading > div > div.mb-12.flex-grow > h1');
    if ((0,hasRead/* default */.Z)(manga, chapter) && titleChapter) {
        if (!titleChapter.innerHTML.includes('(Đã đọc)'))
            titleChapter.innerHTML = `${titleChapter.innerHTML} <span style="color: red">(Đã đọc)</span>`;
    }
}
function processLink(link) {
    const regex = new RegExp(global/* global */.C.regex);
    try {
        const manga = link.match(regex)[2];
        const chapter = link.match(regex)[3];
        return { manga, chapter };
    }
    catch (error) {
        return { manga: '0', chapter: '0' };
    }
}
function processData(manga, chapter) {
    const data = (0,dataExt/* DataExt */.q)();
    const index = data.findIndex((item) => item.manga === manga);
    if (index === -1) {
        data.push({ manga, chapters: [chapter] });
    }
    else {
        const indexChapter = data[index].chapters.findIndex((item) => item === chapter);
        if (indexChapter === -1) {
            data[index].chapters.push(chapter);
        }
    }
    document.cookie = `${global/* global */.C.nameStore}=${JSON.stringify(data)};path=/`;
}

;// CONCATENATED MODULE: ./content.ts


async function run(link) {
    const { manga, chapter } = processLink(link);
    const { data } = await (0,check/* checkCorrectChapter */.O)(chapter);
    if (data)
        process(manga, chapter);
}
function main() {
    let previousHref = window.location.href;
    const observer = new MutationObserver(async () => {
        const currentHref = window.location.href;
        const currentBodyStyle = {
            position: window.getComputedStyle(document.body).position,
            top: window.getComputedStyle(document.body).top,
        };
        if (currentBodyStyle.position === 'static' && currentBodyStyle.top === 'auto') {
            const hrefUsed = (0,check/* checkCorrectPage */.k)(currentHref) ? currentHref : previousHref;
            console.log('Start!', hrefUsed);
            new Promise(async (res) => {
                console.log(`Href changed: ${previousHref} to ${currentHref}`);
                if ((0,check/* checkCorrectPage */.k)(currentHref) || (0,check/* checkCorrectPage */.k)(previousHref))
                    await run(hrefUsed);
                res(true);
            }).finally(() => {
                previousHref = currentHref;
                console.log('Done!');
            });
        }
    });
    const config = { attributes: true };
    observer.observe(document.body, config);
}
main();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 717;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			717: 0
/******/ 		};
/******/ 		
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcuutruyen_save_history"] = self["webpackChunkcuutruyen_save_history"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [747], () => (__webpack_require__(428)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;