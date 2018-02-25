// ==UserScript==
// @name         youtube-minimization
// @namespace    http://tampermonkey.net/
// @include      https://www.youtube.com/*
// @version      0.1
// @description  starting point
// @author       vladyslav.holtsev@gmail.com
// @match        https://www.youtube.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function () {
    'use strict';
    $('document').ready(main());

    function main() {
        $("#sections ytd-guide-section-renderer:not(:nth-child(3))").hide();
        $("#footer").hide();
        //$("#sections ytd-guide-section-renderer:nth-child(3) ytd-guide-collapsible-entry-renderer a").css("background-color", "red");
        //$("#sections ytd-guide-section-renderer:nth-child(3) ytd-guide-collapsible-entry-renderer a").click();
    }
})();