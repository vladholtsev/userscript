// ==UserScript==
// @name         for Deezer
// @namespace    http://tampermonkey.net/
// @include     https://www.deezer.com/*
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.deezer.com/ru/profile/1935133242/loved
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function () {
    'use strict';

    function start() {
        setTimeout(() => {
            //hedi-unnecessary
            $(".download-app").hide();
            $(".subscribe").hide();
            $(".svg-icon-app").parent().hide();

            //change-elements-form-and-style
            $(".search").css("padding", "0 10px");
            $(".datagrid-row").css("font-weight", "900");
            $(".navbar-link").css("font-weight", "900");
            $(".nav-link, .profile").click(function () {});

            //functions
            $(".navbar-link, .dropdown-menu").click(function () {
                setTimeout(() => {
                    unstable();
                }, 400);
            });
            $(".nav-link, .profile, .search-submit").click(function () {
                start();
            });
            //bg-color
            $("#menu_search").css("background-color", "#EEEEEE");
            $(".naboo-catalog").css("background-color", "#23232C");
            $(".container").css("background-color", "#EEEEEE");
            $(".datagrid").css("background-color", "#EEEEEE");
            $(".datagrid-row").hover(function () {
                $(this).css("background-color", "#CFD8DC");
            }, function () {
                $(this).css("background-color", "#EEEEEE");
            });

        }, 700);
    }
    start();

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
        if (e.keyCode === 17) {
            $('.control-repeat').click();
        } else if (e.keyCode === 37) {
            $('.control-prev').click();
        } else if (e.keyCode === 39) {
            $('.control-next').click();
        } else if (e.keyCode === 96) {
            $('.control-shuffle').click();
        } else if (e.keyCode === 13) {
            $(".navbar-link").click(function () {
                setTimeout(() => {
                    unstable();
                }, 300);
            });
        }
    }
})();