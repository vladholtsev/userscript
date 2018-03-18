// ==UserScript==
// @name         uscript
// @namespace    http://tampermonkey.net/
// @include      https://www.deezer.com/*
// @version      0.2
// @description  starting point
// @author       vladyslav.holtsev@gmail.com
// @match        https://*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function () {
    'use strict';
    let startFunctionID = setInterval(() => {
        if ($(".datagrid-row").length !== 0) {
            clearInterval(startFunctionID);
            onFirstLoad();
        }
    }, 50);

    function check(e) {
        if (e.keyCode === 38) {
            $(".control-repeat").click(); /*up arrow*/
        } else if (e.keyCode === 37) {
            $(".control-prev").click(); /*right arrow*/
        } else if (e.keyCode === 39) {
            $(".control-next").click(); /*left arrow*/
        } else if (e.keyCode === 40) {
            $(".control-shuffle").click(); /*down arrow*/
        }
    }

    function onFirstLoad() {
        //ALL_PAGE
        document.addEventListener("keydown", check);
        //.page-sidebar
        $(".download-app").hide();
        $(".subscribe").hide();
        $(".conversion-entrypoints").hide();
        $(".search").css("padding", "0 10px");
        $("a.nav-link").click(onFirstLoad());
    }
})();