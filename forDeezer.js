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
    setTimeout(() => {
        //hedi-unnecessary
        $(".download-app").hide();
        $(".subscribe").hide();
        $(".svg-icon-app")
            .parent()
            .hide();

        //change-elements-form-and-style
        $(".search").css("padding", "0 10px");
    }, 700);

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
        }
    }
})();