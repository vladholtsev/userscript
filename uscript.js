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
	let newCSS = GM_getResourceText("customCSS");
	GM_addStyle(newCSS);

	let switcher = true;
	let button = $('<button>');
	$('document').ready(check(switcher));

	function check() {
		$("#sections ytd-guide-section-renderer:last-child").after(addButton());
	}

	function addButton() {
		// if ($("#swichButton") === null) {}

		button.attr("id", "swichButton");
		button.addClass("mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent");
		button.text("Disable");
		hide();
		button.click(function () {
			swichButton();
		});
		return button;
	}

	function hide() {
		$("#sections ytd-guide-section-renderer:not(:nth-child(3))").hide();
		$("#footer").hide();
		//$("#sections ytd-guide-section-renderer:nth-child(3) ytd-guide-collapsible-entry-renderer a").css("background-color", "red");
		//$("#sections ytd-guide-section-renderer:nth-child(3) ytd-guide-collapsible-entry-renderer a").click();
	}

	function show() {
		$("#sections ytd-guide-section-renderer:not(:nth-child(3))").show();
		$("#footer").show();
	}

	function swichButton() {
		if (switcher === true) {
			switcher = false;
			button.text("Enable");
			show();
		} else {
			switcher = true;
			button.text("Disable");
			hide();
		}
	}
})();