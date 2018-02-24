// ==UserScript==
// @name         uscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  starting point
// @author       vladyslav.holtsev@gmail.com
// @match        https://*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function () {
    'use strict';
    start();

    function start() {
        setTimeout(() => {
            // Hide unnecessary
            $(".download-app").hide();
            $(".subscribe").hide();
            $(".conversion-entrypoints").hide();

            //change-elements-form-and-style
            $(".search").css("padding", "0 10px");

            // Rload script when reload data on page
            $(".nav-link, .profile, .search-submit")
                .click(function () {
                    start();
                });
            // Hover row with the song
            $(".datagrid-row")
                .hover(function () {

                }, function () {

                });
        }, 700);
    }

    document.addEventListener('keydown', check);

    function check(e) {
        if (e.keyCode === 38) {
            $('.control-repeat').click(); /*up arrow*/
        } else if (e.keyCode === 37) {
            $('.control-prev').click(); /*right arrow*/
        } else if (e.keyCode === 39) {
            $('.control-next').click(); /*left arrow*/
        } else if (e.keyCode === 40) {
            $('.control-shuffle').click(); /*down arrow*/
        } else if (e.keyCode === 13) /*Enter*/ {
            (function () {
                setTimeout(() => {
                    // For change page with Enter jump;
                }, 300);
            });
        }
    }
})();