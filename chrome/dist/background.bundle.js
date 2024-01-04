/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ tags)
/* harmony export */ });
const tags = [
    'manga',
    'dang-tien-hanh',
    'the-thao',
    'hai-huoc',
    'shounen',
    'hoc-duong',
    'chat-luong-cao',
    'comedy',
    'action',
    'horror',
    'sci-fi',
    'aliens',
    'martial-arts',
    'military',
    'monsters',
    'supernatural',
    'web-comic',
    'phieu-luu',
    'hau-tan-the',
    'hanh-dong',
    'da-hoan-thanh',
    'sinh-ton',
    'du-hanh-thoi-gian',
    'khoa-hoc',
    'tam-ngung',
    'nsfw',
    'bao-luc',
    'khoa-than',
    'bi-an',
    'trinh-tham',
    'kinh-di',
    'mau-me',
    'tinh-duc',
    'co-mau',
    'manhwa',
    'webtoon',
    'sieu-nhien',
    'fantasy',
    'vo-thuat',
    'drama',
    'he-thong',
    'lang-man',
    'doi-thuong',
    'cong-so',
    'sat-thu',
    'phep-thuat',
    'toi-pham',
    'seinen',
    'isekai',
    'chuyen-sinh',
    'harem',
    'mecha',
    'trung-co',
    'lgbt',
    'yaoi',
    'game',
    'bi-kich',
    'dong-vat',
    'tam-ly',
    'manhua',
    'nam-bien-nu',
    'romcom',
    'award-winning',
    'oneshot',
    'khoa-hoc-vien-tuong',
    'dark-fantasy',
    'zombie',
    'nam-x-nam',
    'giat-gan',
    'canh-sat',
    'ntr',
    'cooking',
    'am-thuc',
    'ecchi',
    'quai-vat',
    'vampires',
    'nam-gia-nu',
    'yakuza',
    'romance',
    'sport',
    'shoujo',
    'ninja',
    'lich-su',
    'doujinshi',
    'databook',
    'adventure',
    'y-hoc',
    'mien-ban-quyen',
    'josei',
    'psychological',
    'anime',
    'yuri',
    'yonkoma',
    'quan-doi',
    'nu-gia-nam',
    'chinh-tri',
    'tuyen-tap',
    'tu-tien',
    'vo-cp',
    'xuyen-khong',
    'viet-nam',
    'toan-hoc',
    'tinh-yeu-khong-duoc-dap-lai',
    'tinh-yeu-thuan-khiet',
    'thieu-nien',
    'tinh-yeu',
    'chinh-kich',
    'ngot-ngao',
    'wholesome',
    'smut',
    'gore',
    'school-life',
    'slice-of-life',
    'tragedy',
    'mystery',
    'atlus',
    'sega',
    'rpg',
    'chuyen-the',
    'historical',
    'medical',
    'ghosts',
    'thriller',
    'animals',
    'survival',
    'samurai',
    'virtual-reality',
    'video-games',
    'monster-girls',
    'adaption',
    'idol',
];


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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./data.ts
var data = __webpack_require__(436);
;// CONCATENATED MODULE: ./ts/process/global.ts
/* // !!! BIẾN CỤC BỘ, ĐỪNG NGHỊCH NẾU BẠN KHÔNG PHẢI CODER ĐÃ HỌC QUA !!! // */

const global = {
    nameStore: 'cuutruyenExtension',
    regex: 'https?:\\/\\/(cuutruyen\\.net|hetcuutruyen\\.net|cuutruyent9sv7\\.xyz)\\/mangas\\/(.+?)\\/chapters\\/(.+?)\\/?$',
    allowHost: ['cuutruyen.net', 'hetcuutruyen.net', 'cuutruyent9sv7.xyz'],
    apiCheck: '/api/v2/chapters/',
    tags: data/* tags */.p,
};

;// CONCATENATED MODULE: ./background.ts

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed!');
});
chrome.runtime.onConnect.addListener(function (port) {
    if (port.name === 'getInfo') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const currentTab = tabs[0];
            if (currentTab) {
                const host = new URL(currentTab.url).host;
                if (global.allowHost.includes(host)) {
                    chrome.cookies.get({ url: `https://${host}/*`, name: 'cuutruyenExtension' }, function (cookies) {
                        if (cookies && cookies.value) {
                            if (currentTab.url.startsWith(`https://${host}/mangas/`)) {
                                const mangaId = currentTab.url
                                    .replace(`https://${host}/mangas/`, '')
                                    .split('/')[0];
                                if (mangaId) {
                                    port.postMessage({
                                        message: 'sendInfo',
                                        value: { cookies: cookies.value, mangaId, host },
                                    });
                                    return;
                                }
                            }
                            port.postMessage({
                                message: 'sendInfo',
                                value: { cookies: cookies.value, mangaId: null, host },
                            });
                        }
                    });
                }
            }
        });
    }
    if (port.name === 'openSearch') {
        const newTabUrl = chrome.runtime.getURL('../search/index.html');
        chrome.tabs.create({ url: newTabUrl });
    }
});

})();

/******/ })()
;