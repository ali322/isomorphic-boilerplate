webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(158);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);

	__webpack_require__(158);
	var User = React.createClass({
	    displayName: "User",

	    render: function render() {
	        console.log(this.props);
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(UserButton, { name: this.props.name })
	        );
	    }
	});
	var UserButton = React.createClass({
	    displayName: "UserButton",

	    handleClick: function handleClick() {
	        alert("clicked3!");
	    },
	    render: function render() {
	        // console.log(this.props);
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "p",
	                null,
	                this.props.name
	            ),
	            React.createElement(
	                "button",
	                { onClick: this.handleClick },
	                "button"
	            )
	        );
	    }
	});
	module.exports = User;

	if (typeof window !== "undefined") {
	    window.onload = function () {
	        React.render(React.createElement(User, null), document.body);
	    };
	}

/***/ },

/***/ 158:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});