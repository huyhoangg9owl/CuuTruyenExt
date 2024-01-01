/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./ts/popup/model/mangas.ts
var mangas = __webpack_require__(531);
;// CONCATENATED MODULE: ./ts/popup/getData.ts
async function getData(cookies, mangaId, host) {
    if (mangaId) {
        const manga = cookies.find((cookie) => cookie.manga === mangaId);
        if (!manga)
            return null;
        const chapters = manga.chapters;
        const data = await Promise.all(chapters.map(async (chapter) => {
            const url = `https://${host}/api/v2/chapters/${chapter}`;
            const response = await fetch(url);
            const json = await response.json();
            return json.data;
        }));
        return data;
    }
    else {
        const data = await Promise.all(cookies.map(async (cookie) => {
            const chapters = cookie.chapters;
            const data = await Promise.all(chapters.map(async (chapter) => {
                const url = `https://${host}/api/v2/chapters/${chapter}`;
                const response = await fetch(url);
                const json = await response.json();
                return json.data;
            }));
            return data;
        }));
        return data;
    }
}

;// CONCATENATED MODULE: ./ts/popup/model/chapters.ts
function Chapters(data) {
    const html = `
		<thead>
			<th>STT</th>
			<th>Tên truyện</th>
			<th>Tên nhóm dịch</th>
			<th>Chapter</th>
			<th>Tên chapter</th>
		</thead>
		<tbody>
		${data
        .map((manga, index) => `
				<tr>
				<td>${index + 1}</td>
				<td>${manga.manga.name}</td>
				<td>${manga.team.name}</td>
				<td>${manga.number}</td>
				<td>${manga.name || "Oneshot"}</td>
				<td><button id="remove" data-id="${manga.manga.id}">Xóa</button></td>
				</tr>
				`)
        .join('')}
		</tbody>
	`;
    return html;
}

;// CONCATENATED MODULE: ./ts/popup/render.ts



async function render(value) {
    const cookies = JSON.parse(value.cookies);
    const data = await getData(cookies, value.mangaId, value.host);
    console.log('RENDER', data);
    if (!data)
        return '<p>Bạn chưa đọc chapter nào từ lúc tải extension này, hoặc bạn đang dùng nó ở một nơi không được phép.</p>';
    if (value.mangaId) {
        const html = Chapters(data);
        return html;
    }
    else {
        const html = (0,mangas/* default */.Z)(data);
        return html;
    }
}

;// CONCATENATED MODULE: ./manifest.json
const manifest_namespaceObject = {"i8":"1.0.1"};
;// CONCATENATED MODULE: ./popup.ts



const port = chrome.runtime.connect({ name: 'getInfo' });
fetch('https://raw.githubusercontent.com/huyhoangg9owl/CuuTruyenExt/main/manifest.json')
    .then((res) => res.json())
    .then((res) => {
    document.getElementById('app').innerHTML = `<div style="padding: 20px; text-align: center;"><h1>Code by 9OwL</h1><p>Version ${manifest_namespaceObject.i8}</p><p>Newest Version: ${res.version}</p></div>`;
    port.onMessage.addListener(async ({ value }) => {
        document.getElementById('app').innerHTML = await render(value);
        const remove = document.querySelectorAll('#remove');
        remove.forEach((r) => {
            r.addEventListener('click', () => {
                (0,mangas/* removeManga */.u)(r.getAttribute('data-id'), value.host);
                r.parentElement?.parentElement?.remove();
            });
        });
    });
    document.querySelector('#search')?.addEventListener('click', () => {
        chrome.runtime.connect({ name: 'openSearch' });
    });
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
/******/ 		__webpack_require__.j = 93;
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
/******/ 			93: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [747], () => (__webpack_require__(686)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;