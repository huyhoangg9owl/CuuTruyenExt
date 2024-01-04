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

;// CONCATENATED MODULE: ./ts/popup/model/mangas.ts

function removeManga(manga, host) {
    chrome.cookies.get({ url: `https://${host}/*`, name: global.nameStore }, function (cookies) {
        if (cookies) {
            const data = JSON.parse(cookies.value);
            const index = data.findIndex((m) => m.manga === manga);
            if (index > -1) {
                data.splice(index, 1);
                chrome.cookies.set({
                    url: `https://${host}/*`,
                    name: global.nameStore,
                    value: JSON.stringify(data),
                });
            }
        }
    });
}
function Mangas(data) {
    const beautifulData = data
        .map((manga) => {
        return {
            id: manga[0].manga.id,
            name: manga[0].manga.name,
            team: manga[0].team.name,
            latest_chapter: manga.sort((a, b) => parseFloat(b.number) - parseFloat(a.number))[0].number,
            latest_chapter_name: manga.sort((a, b) => parseFloat(b.number) - parseFloat(a.number))[0].name || 'Không có',
        };
    })
        .sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    });
    const html = `
		<thead>
			<th>STT</th>
			<th>Tên truyện</th>
			<th>Tên nhóm dịch</th>
			<th>Chapter</th>
			<th>Tên chapter</th>
		</thead>
		<tbody>
		${beautifulData
        .map((manga, index) => `
				<tr>
				<td>${index + 1}</td>
				<td>${manga.name}</td>
				<td>${manga.team}</td>
				<td>${manga.latest_chapter}</td>
				<td>${manga.latest_chapter_name}</td>
				<td><button id="remove" data-id="${manga.id}">Xóa</button></td>
				</tr>
				`)
        .join('')}
		</tbody>
				`;
    return html;
}

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
        const html = Mangas(data);
        return html;
    }
}

;// CONCATENATED MODULE: ./manifest.json
const manifest_namespaceObject = {"i8":"1.0.1"};
;// CONCATENATED MODULE: ./popup.ts



const port = chrome.runtime.connect({ name: 'getInfo' });
document.getElementById('app').innerHTML = `<div style="padding: 20px; text-align: center;"><h1>Code by 9OwL</h1><p>Version ${manifest_namespaceObject.i8}</p></div>`;
port.onMessage.addListener(async ({ value }) => {
    document.getElementById('app').innerHTML = await render(value);
    const remove = document.querySelectorAll('#remove');
    remove.forEach((r) => {
        r.addEventListener('click', () => {
            removeManga(r.getAttribute('data-id'), value.host);
            r.parentElement?.parentElement?.remove();
        });
    });
});
document.querySelector('#search')?.addEventListener('click', () => {
    chrome.runtime.connect({ name: 'openSearch' });
});

})();

/******/ })()
;