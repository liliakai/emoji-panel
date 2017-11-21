(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("EmojiPanel", [], factory);
	else if(typeof exports === 'object')
		exports["EmojiPanel"] = factory();
	else
		root["EmojiPanel"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(45);
	module.exports = __webpack_require__(46);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	'use strict';

	var size = '32';
	var imageSet = 'apple';
	var changeEmojiStylesheet = function changeEmojiStylesheet() {
	  var stylesheet = document.getElementById('emoji-style');
	  var codeEl = document.getElementById('example-0').querySelector('code');
	  var newHref = 'dist/emoji-panel-' + imageSet + '-' + size + '.min.css';
	  stylesheet.href = newHref;
	  codeEl.innerHTML = codeEl.innerHTML.replace(/dist\/emoji-panel-.*-.*.min.css/g, newHref);
	};
	document.getElementById('select-image-set').addEventListener('change', function (e) {
	  imageSet = e.target.options[e.target.selectedIndex].value;
	  changeEmojiStylesheet();
	});
	document.getElementById('select-size').addEventListener('change', function (e) {
	  size = e.target.options[e.target.selectedIndex].value;
	  changeEmojiStylesheet();
	});

	// ***************************************
	// Start of examples
	// ***************************************

	// Example 1
	new EmojiPanel(document.getElementById('example-1'));

	// Example 2
	new EmojiPanel(document.getElementById('example-2'), {
	  onClick: function onClick(e) {
	    alert(e.index); // eslint-disable-line no-alert
	    alert(e.unified); // eslint-disable-line no-alert
	  }
	});

	// Example 3
	new EmojiPanel(document.getElementById('example-3'));
	document.getElementById('example-3-btn').addEventListener('click', function () {
	  document.getElementById('example-3-container').classList.toggle('open');
	});

	// Example 4
	new EmojiPanel(document.getElementById('example-4'));
	$('#example-4-btn').click(function (e) {
	  $('#example-4').dialog({
	    minWidth: 274,
	    height: 600,
	    width: 800
	  });
	});

	// Example 5
	new EmojiPanel(document.getElementById('example-5'), {
	  animationDuration: 1000
	});

	// ***************************************
	// End of examples
	// ***************************************

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

/******/ })
});
;