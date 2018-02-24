// ==UserScript==
// @name         uscript
// @namespace    http://tampermonkey.net/
// @include      https://www.deezer.com/*
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
            $(".datagrid-row").css("font-weight", "900");
            $(".navbar-link").css("font-weight", "900");
            $("#menu_search").css("background-color", "#EEEEEE");
            $(".naboo-catalog").css("background-color", "#23232C");
            $(".container").css("background-color", "#EEEEEE");
            $(".datagrid").css("background-color", "#EEEEEE");

            // Reload script when reload data on page
            $(".nav-link, .profile, .search-submit").click(function () {
                start();
            });

            //functions
            $(".navbar-link, .dropdown-menu").click(function () {
                setTimeout(() => {
                    unstable();
                }, 400);
            });

            // Hover row with the song
            $(".datagrid-row").hover(function () {
                $(this).css("background-color", "#CFD8DC");
            }, function () {
                $(this).css("background-color", "#EEEEEE");
            });
        }, 700);
    }
    window.onscroll = () => {
        unstable();
    };

    function unstable() {
        $(".datagrid-row").css("background-color", "#EEEEEE");
        $(".datagrid-row").css("font-weight", "900");
        $(".datagrid-row").hover(function () {
            $(this).css("background-color", "#CFD8DC");
        }, function () {
            $(this).css("background-color", "#EEEEEE");
        });
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
            })();
        }
    }
})();