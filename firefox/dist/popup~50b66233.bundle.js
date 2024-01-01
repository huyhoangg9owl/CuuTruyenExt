"use strict";
(self["webpackChunkcuutruyen_save_history"] = self["webpackChunkcuutruyen_save_history"] || []).push([[747],{

/***/ 531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Mangas),
/* harmony export */   u: () => (/* binding */ removeManga)
/* harmony export */ });
/* harmony import */ var _process_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(227);

function removeManga(manga, host) {
    chrome.cookies.get({ url: `https://${host}/*`, name: _process_global__WEBPACK_IMPORTED_MODULE_0__/* .global */ .C.nameStore }, function (cookies) {
        if (cookies) {
            const data = JSON.parse(cookies.value);
            const index = data.findIndex((m) => m.manga === manga);
            if (index > -1) {
                data.splice(index, 1);
                chrome.cookies.set({
                    url: `https://${host}/*`,
                    name: _process_global__WEBPACK_IMPORTED_MODULE_0__/* .global */ .C.nameStore,
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


/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ checkCorrectChapter),
/* harmony export */   k: () => (/* binding */ checkCorrectPage)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(227);

function checkCorrectPage(link) {
    const regex = new RegExp(_global__WEBPACK_IMPORTED_MODULE_0__/* .global */ .C.regex);
    return regex.test(link);
}
async function checkCorrectChapter(chapter) {
    return await fetch(_global__WEBPACK_IMPORTED_MODULE_0__/* .global */ .C.apiCheck + chapter).then((res) => res.json());
}



/***/ }),

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AllCookie)
/* harmony export */ });
function AllCookie() {
    const cookies = document.cookie.split(';');
    const obj = {};
    cookies.forEach((cookie) => {
        const [key, value] = cookie.split('=');
        obj[key.trim()] = value;
    });
    return obj;
}


/***/ }),

/***/ 720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ DataExt)
/* harmony export */ });
if (717 == __webpack_require__.j) {
	/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(866);
}
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(227);


const DataExt = () => {
    const allCookie = (0,_cookie__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return allCookie[_global__WEBPACK_IMPORTED_MODULE_0__/* .global */ .C.nameStore] ? JSON.parse(allCookie[_global__WEBPACK_IMPORTED_MODULE_0__/* .global */ .C.nameStore]) : [];
};


/***/ }),

/***/ 227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ global)
/* harmony export */ });
const global = {
    nameStore: 'cuutruyenExtension',
    // no www
    regex: 'https?:\\/\\/(cuutruyen\\.net|hetcuutruyen\\.net|cuutruyent9sv7\\.xyz)\\/mangas\\/(.+?)\\/chapters\\/(.+?)\\/?$',
    allowHost: ['cuutruyen.net', 'hetcuutruyen.net', 'cuutruyent9sv7.xyz'],
    apiCheck: '/api/v2/chapters/',
};


/***/ }),

/***/ 140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ hasRead)
/* harmony export */ });
/* harmony import */ var _dataExt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(720);

function hasRead(manga, chapter) {
    const data = (0,_dataExt__WEBPACK_IMPORTED_MODULE_0__/* .DataExt */ .q)();
    const index = data.findIndex((item) => item.manga === manga);
    if (index === -1)
        return false;
    const indexChapter = data[index].chapters.findIndex((item) => item === chapter);
    return indexChapter !== -1;
}


/***/ })

}]);