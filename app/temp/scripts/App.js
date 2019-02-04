/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var BeforeStartPlaying = __webpack_require__(/*! ./modules/BeforeStartPlaying */ \"./app/assets/scripts/modules/BeforeStartPlaying.js\");\r\nvar Rules = __webpack_require__(/*! ./modules/Rules */ \"./app/assets/scripts/modules/Rules.js\");\r\nvar Game = __webpack_require__(/*! ./modules/Game */ \"./app/assets/scripts/modules/Game.js\");\r\n\r\nvar beforeStartPlaying = new BeforeStartPlaying();\r\nvar rules = new Rules();\r\nvar game = new Game();\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/BeforeStartPlaying.js":
/*!**********************************************************!*\
  !*** ./app/assets/scripts/modules/BeforeStartPlaying.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function BeforeStartPlaying() {\r\n  var player1 = prompt('\\t\\t Player 1 \\n Please enter your name', 'Player 1');\r\n  var player2 = prompt('\\t\\t Player 2 \\n Please enter your name', 'Player 2');\r\n  if( player1 === null) {\r\n    document.getElementById('name-0').innerHTML = 'Player 1';\r\n  } else {\r\n    document.getElementById('name-0').innerHTML = player1;\r\n  }\r\n  if (player2 === null) {\r\n    document.getElementById('name-1').innerHTML = 'Player 2';\r\n  } else {\r\n    document.getElementById('name-1').innerHTML = player2;\r\n  }\r\n}\r\n\r\nmodule.exports = BeforeStartPlaying;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/BeforeStartPlaying.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Game.js":
/*!********************************************!*\
  !*** ./app/assets/scripts/modules/Game.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Game() {\r\n  var scores, activePlayer, currentScore, isPlaying;\r\n  \r\n  init();\r\n  \r\n  // variables declaration\r\n  var newGameBtn = document.querySelector('.btn--new');\r\n  var rollBtn = document.querySelector('.btn--roll');\r\n  var holdBtn = document.querySelector('.btn--hold');\r\n  \r\n  // clicking the New Game button\r\n  newGameBtn.addEventListener('click', init);\r\n  \r\n  // clicking the Roll button\r\n  rollBtn.addEventListener('click',function() {\r\n    if (isPlaying) {\r\n      // random number\r\n      var dice1 = Math.floor((Math.random() * 6) + 1);\r\n      var dice2 = Math.floor((Math.random() * 6) + 1);\r\n      \r\n      // display the dices\r\n      document.querySelector('#dice-1').className = '';\r\n      document.querySelector('#dice-1').classList.add('dice')\r\n      document.querySelector('#dice-1').classList.add('icon-dice-' + dice1);\r\n      document.getElementById('dice-1').style.display = 'block';\r\n      document.querySelector('#dice-2').className = '';\r\n      document.querySelector('#dice-2').classList.add('dice')\r\n      document.querySelector('#dice-2').classList.add('icon-dice-' + dice2);\r\n      document.getElementById('dice-2').style.display = 'block';\r\n      \r\n      // upload the CURRENT score if the rolled number was not 1 \r\n      if (dice1 !== 1 && dice2 !== 1) {\r\n        currentScore += dice1 + dice2;\r\n        document.querySelector('#current-' + activePlayer).textContent = currentScore;\r\n      } else {\r\n        nextPlayer();\r\n      }\r\n    }\r\n  });\r\n  \r\n  // clicking the Hold button\r\n  holdBtn.addEventListener('click', function() {\r\n    if (isPlaying) {\r\n      // add CURRENT score to GLOBAL score\r\n      scores[activePlayer] += currentScore;\r\n      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];\r\n      \r\n      var input = document.querySelector('.final-score').value;\r\n      var winningScore;\r\n      // Undefined, 0, null or '' are COERCED to false\r\n      if (input) {\r\n        var winningScore = input;\r\n      } else {\r\n        winningScore = 100;\r\n      }\r\n      \r\n      // check if player won the game\r\n      if (scores[activePlayer] >= winningScore) {\r\n        \r\n        document.querySelector('.player--' + activePlayer + '-panel').classList.add('winner');\r\n        \r\n        document.querySelector('.player--0-panel').classList.remove('active');\r\n        document.querySelector('.player--1-panel').classList.remove('active');\r\n        \r\n        document.getElementById('dice-1').style.display = 'none';\r\n        document.getElementById('dice-2').style.display = 'none';\r\n        \r\n        isPlaying = false;\r\n      } else {\r\n        nextPlayer();\r\n      }\r\n      \r\n      \r\n    }\r\n  });\r\n  \r\n  function init() {\r\n    scores = [0,0];\r\n    activePlayer = 0;\r\n    currentScore = 0;\r\n    isPlaying = true;\r\n    \r\n    document.getElementById('score-0').textContent = '0';\r\n    document.getElementById('score-1').textContent = '0';\r\n    document.getElementById('current-0').textContent = '0';\r\n    document.getElementById('current-1').textContent = '0';\r\n    \r\n    document.querySelector('.player--0-panel').classList.remove('winner');\r\n    document.querySelector('.player--1-panel').classList.remove('winner');\r\n    document.querySelector('.player--1-panel').classList.remove('active');\r\n    document.querySelector('.player--0-panel').classList.remove('active');\r\n    document.querySelector('.player--0-panel').classList.add('active');\r\n    \r\n    document.getElementById('dice-1').style.display = 'none';\r\n    document.getElementById('dice-2').style.display = 'none';\r\n  }\r\n  \r\n  function nextPlayer() {\r\n    currentScore = 0;\r\n    document.getElementById('current-0').textContent = '0';\r\n    document.getElementById('current-1').textContent = '0';\r\n    \r\n    activePlayer === 0? activePlayer = 1 : activePlayer = 0;\r\n    document.querySelector('.player--0-panel').classList.toggle('active');\r\n    document.querySelector('.player--1-panel').classList.toggle('active');\r\n    \r\n    document.getElementById('dice-1').style.display = 'none';\r\n    document.getElementById('dice-2').style.display = 'none';\r\n  }\r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Game.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Rules.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/Rules.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Rules() {\r\n  // variables\r\n  var openRulesBtn = document.getElementById('open-rules');\r\n  var closeRulesBtn = document.getElementById('close-rules');\r\n  var rules = document.getElementById('rules');\r\n  \r\n  // open Rules on pressing '?' btn\r\n  openRulesBtn.addEventListener('click', function() {\r\n    rules.classList.remove('rules--not-visible');\r\n  });\r\n  \r\n  // close Rules on pressing 'X' btn\r\n  closeRulesBtn.addEventListener('click', function() {\r\n    rules.classList.add('rules--not-visible');\r\n  });\r\n  \r\n  // close Rules on pressing 'Esc' on keyboard\r\n  document.addEventListener('keyup', function keyPress(e) {\r\n    if (e.keyCode == 27) {\r\n      rules.classList.add('rules--not-visible');\r\n    }\r\n  });\r\n}\r\n\r\nmodule.exports = Rules;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Rules.js?");

/***/ })

/******/ });