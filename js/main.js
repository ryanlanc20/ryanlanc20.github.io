"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function attachMenuOpenAction(menuBtn, menuContainer) {
  menuBtn.click(function () {
    if (menuContainer.css("display") === "none") {
      menuContainer.slideDown(350, "swing");
    } else {
      menuContainer.slideUp(350, "swing", function () {
        menuContainer.attr("style", null);
      });
    }
  });
}
var IntersectionObserverManager = /*#__PURE__*/function () {
  function IntersectionObserverManager(config) {
    var _this = this;
    _classCallCheck(this, IntersectionObserverManager);
    _defineProperty(this, "intersectionStrategies", {});
    _defineProperty(this, "intersectionObserver", null);
    this.intersectionObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && _this.intersectionStrategies.hasOwnProperty(entry.target.id)) {
          _this.intersectionStrategies[entry.target.id](entry);
          observer.unobserve(entry.target);
        }
      });
    }, config);
  }
  _createClass(IntersectionObserverManager, [{
    key: "addIntersectionObserver",
    value: function addIntersectionObserver(element, strategyCallback) {
      this.intersectionObserver.observe(element);
      this.intersectionStrategies[element.id] = strategyCallback;
    }
  }]);
  return IntersectionObserverManager;
}();