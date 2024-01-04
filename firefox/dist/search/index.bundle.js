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

;// CONCATENATED MODULE: ./node_modules/.pnpm/yocto-queue@1.0.0/node_modules/yocto-queue/index.js
/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/p-limit@5.0.0/node_modules/p-limit/async-hooks-stub.js
const AsyncResource = {
	bind(fn, _type, thisArg) {
		return fn.bind(thisArg);
	},
};

class AsyncLocalStorage {
	getStore() {
		return undefined;
	}

	run(_store, callback) {
		return callback();
	}
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/p-limit@5.0.0/node_modules/p-limit/index.js



function pLimit(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}

	const queue = new Queue();
	let activeCount = 0;

	const next = () => {
		activeCount--;

		if (queue.size > 0) {
			queue.dequeue()();
		}
	};

	const run = async (function_, resolve, arguments_) => {
		activeCount++;

		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		queue.enqueue(
			AsyncResource.bind(run.bind(undefined, function_, resolve, arguments_)),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// when the run function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency && queue.size > 0) {
				queue.dequeue()();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
	});

	return generator;
}

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

;// CONCATENATED MODULE: ./search/process.ts

const queryTags = [];
const limit = pLimit(3);
async function getTag(tag) {
    const apiUrl = 'https://cuutruyent9sv7.xyz/api/v2/tags/' + tag;
    const res = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    const { _metadata: { total_pages, per_page }, } = await res.json();
    const promises = [];
    for (let i = 1; i <= total_pages; i++) {
        const promise = limit(async () => {
            const resp = await fetch(apiUrl + `?page=${i}&per_page=${per_page}`);
            const data = await resp.json();
            return data;
        });
        promises.push(promise);
    }
    const data = await Promise.all(promises);
    return data;
}
function randomColor(returnValue) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor.length < 6)
        randomColor += '0';
    const color = parseInt(randomColor, 16);
    const r = (color >> 16) & 255;
    const g = (color >> 8) & 255;
    const b = color & 255;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const textColor = brightness > 125 ? 'black' : 'white';
    if (returnValue === 'background')
        return `#${randomColor}`;
    else
        return textColor;
}
async function process(e) {
    const target = e.target;
    const value = target.value;
    const checked = target.checked;
    const parent = target.parentElement;
    if (!parent)
        return;
    if (checked) {
        queryTags.push(value);
        parent.style.backgroundColor = randomColor('background');
        parent.style.color = randomColor('color');
    }
    else {
        const index = queryTags.indexOf(value);
        queryTags.splice(index, 1);
        parent.style.backgroundColor = '';
        parent.style.color = '';
    }
    render(queryTags);
}
async function getData(tag) {
    const tagData = await getTag(tag);
    return tagData;
}
function filterDataUsingTag(data, tag) {
    const allMangas = [];
    data.forEach((tagData) => {
        const { mangas } = tagData;
        mangas.forEach((manga) => {
            const { id, name, cover_url, description } = manga;
            const index = allMangas.findIndex((m) => m.id === id);
            if (index === -1)
                allMangas.push({ id, name, cover_url, description });
        });
    });
    const filteredMangas = allMangas.filter((manga) => {
        const { id } = manga;
        const tags = data.filter((tagData) => {
            const { mangas } = tagData;
            const index = mangas.findIndex((manga) => manga.id === id);
            return index !== -1;
        });
        return tags.length === tag.length;
    });
    return filteredMangas;
}
function render(data) {
    const tableRender = document.getElementById('tableContent');
    if (data.length === 0)
        tableRender.innerHTML =
            '<div><h1>Chọn 1 tag bên trái để bắt đầu...</h1><p>Lưu ý: Đợi load xong rồi chọn tiếp, nếu không đừng hỏi sao lag:(</p></div>';
    else {
        tableRender.innerHTML = '<div><h1>Loading...</p></div>';
        const allManags = [];
        data.forEach((tag) => {
            const fetchMangas = new Promise(async (res) => res(await getData(tag)));
            allManags.push(fetchMangas);
        });
        Promise.all(allManags).then((mangas) => {
            const allMangas = filterDataUsingTag(mangas.reduce((acc, cur) => [...acc, ...cur.map((c) => c.data)], []), data);
            tableRender.innerHTML = '';
            allMangas.forEach((manga) => {
                tableRender.innerHTML += `<a href="https://cuutruyent9sv7.xyz/mangas/${manga.id}" class="table-item" style="background: ${randomColor('background')}; color: ${randomColor('color')};">
					<img src="${manga.cover_url}" alt="${manga.name} - ${manga.description}" />
				</a>`;
            });
        });
    }
}

;// CONCATENATED MODULE: ./search/index.ts



const search_limit = pLimit(3);
async function tagHTML(slug) {
    const apiUrl = 'https://cuutruyent9sv7.xyz/api/v2/tags/' + slug;
    const tag = await fetch(apiUrl, {
        method: 'GET',
    });
    const { _metadata, data: { tag: { name }, }, } = await tag.json();
    return `<div class="checkbox-item">
		<input type="checkbox" id="${slug}" name="${slug}" value="${slug}">
		<label for="${slug}">${name} (${_metadata.total_count})</label>
	</div>`;
}
async function main() {
    let HTML = '<h1>Đang tải dữ liệu...</h1>';
    const tagContainer = document.getElementById('checkboxList');
    tagContainer.innerHTML = HTML;
    const promises = global.tags.map(async (tag) => {
        const html = await search_limit(() => tagHTML(tag));
        return html;
    });
    const data = await Promise.all(promises);
    HTML = data.join('');
    tagContainer.innerHTML = HTML;
    const checkboxList = document.querySelectorAll('input[type="checkbox"]');
    checkboxList.forEach((checkbox) => checkbox.addEventListener('change', process));
    render([]);
}
document.addEventListener('DOMContentLoaded', main);

})();

/******/ })()
;