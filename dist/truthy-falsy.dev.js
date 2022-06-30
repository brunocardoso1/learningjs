"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// boolean 
var userLogado = true;
var contaPaga = false; // truthy ou falsy 
// 0 > false
// 1 > true

var minhaVar;
var varNull = null;
console.log(_typeof(minhaVar));
console.log(_typeof(varNull));