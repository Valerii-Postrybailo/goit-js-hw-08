!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||a.default(e,t)||f.default(e,t)||l.default()};var u=c(o("8slrw")),a=c(o("7AJDX")),l=c(o("ifqQW")),f=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s,d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",v=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,O="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,_=O||x||Function("return this")(),j=Object.prototype.toString,S=Math.max,h=Math.min,w=function(){return _.Date.now()};function M(e,t,r){var n,o,i,u,a,l,f=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function v(t){var r=n,i=o;return n=o=void 0,f=t,u=e.apply(i,r)}function m(e){return f=e,a=setTimeout(g,t),c?v(e):u}function y(e){var r=e-l;return void 0===l||r>=t||r<0||s&&e-f>=i}function g(){var e=w();if(y(e))return b(e);a=setTimeout(g,function(e){var r=t-(e-l);return s?h(r,i-(e-f)):r}(e))}function b(e){return a=void 0,d&&n?v(e):(n=o=void 0,u)}function O(){var e=w(),r=y(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return m(l);if(s)return a=setTimeout(g,t),v(l)}return void 0===a&&(a=setTimeout(g,t)),u}return t=N(t)||0,T(r)&&(c=!!r.leading,i=(s="maxWait"in r)?S(N(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),f=0,n=l=o=a=void 0},O.flush=function(){return void 0===a?u:b(w())},O}function T(t){var r=void 0===t?"undefined":e(d)(t);return!!t&&("object"==r||"function"==r)}function N(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(T(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=T(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=y.test(t);return n||g.test(t)?b(t.slice(2),n?2:8):m.test(t)?NaN:+t}s=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return T(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),M(e,t,{leading:n,maxWait:t,trailing:o})};var E,I,P="feedback-form-state",A=document.querySelector(".feedback-form"),q=(document.querySelector('input[name="email"]'),document.querySelector('textarea[name="message"]'),{});E=localStorage.getItem(P),(I=JSON.parse(E))&&(console.log(I),Object.entries(I).forEach((function(t){var r=e(i)(t,2),n=r[0],o=r[1];q[n]=o,A.elements[n].value=o}))),A.addEventListener("input",e(s)((function(e){var t=e.target,r=t.name,n=t.value,o=localStorage.getItem(P);o=o?JSON.parse(o):{};o[r]=n,localStorage.setItem(P,JSON.stringify(o))}),500)),A.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,n=t.message;if(""===r.value||""===n.value)return alert("Please fill in all the fields!");console.log("Email: ".concat(r.value,", Message: ").concat(n.value)),e.currentTarget.reset(),localStorage.removeItem(P)}))}();
//# sourceMappingURL=03-feedback.56a10f43.js.map