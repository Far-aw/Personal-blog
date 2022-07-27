"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _test = _interopRequireDefault(require("./test.vue"));

require("./style/global.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _vue["default"]({
  render: function render(h) {
    return h(_test["default"]);
  }
}).$mount('#app');