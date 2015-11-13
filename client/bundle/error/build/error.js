webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(190);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)["default"];

	var _sharedChunkCommonErrorJsx = __webpack_require__(3);

	var _sharedChunkCommonErrorJsx2 = _interopRequireDefault(_sharedChunkCommonErrorJsx);

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	function bootstrap() {
	    var initialState = JSON.parse(document.getElementById("initial-state").textContent);
	    _react2["default"].render(_react2["default"].createElement(_sharedChunkCommonErrorJsx2["default"], { initialState: initialState }), document.getElementById('error'));
	}

	if (typeof window.addEventListener) {
	    window.addEventListener("DOMContentLoaded", bootstrap);
	} else {
	    window.attachEvent('onload', bootstrap);
	}

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)["default"];

	var _inherits = __webpack_require__(20)["default"];

	var _createClass = __webpack_require__(29)["default"];

	var _classCallCheck = __webpack_require__(32)["default"];

	var _interopRequireDefault = __webpack_require__(2)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	var ErrorContent = (function (_Component) {
	    _inherits(ErrorContent, _Component);

	    function ErrorContent() {
	        _classCallCheck(this, ErrorContent);

	        _get(Object.getPrototypeOf(ErrorContent.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(ErrorContent, [{
	        key: "render",
	        value: function render() {
	            var msg = this.props.initialState.msg;

	            return _react2["default"].createElement(
	                "div",
	                { className: "error-content" },
	                _react2["default"].createElement(
	                    "div",
	                    { className: "error-layer" },
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "error-panel" },
	                        _react2["default"].createElement("img", { src: "/client/asset/image/error.png" }),
	                        _react2["default"].createElement(
	                            "p",
	                            null,
	                            msg
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ErrorContent;
	})(_react.Component);

	ErrorContent.defaultProps = {
	    error: {
	        msg: ""
	    }
	};

	exports["default"] = ErrorContent;
	module.exports = exports["default"];

/***/ },

/***/ 190:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});