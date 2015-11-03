'use strict';
jest.dontMock("../../shared/index/app.jsx");
jest.dontMock("./mock_data/index.json");

describe("index component", function() {
    var React,ReactTestUtils;
    beforeEach(function() {
        React = require("react");
        ReactTestUtils = require("react/lib/ReactTestUtils");
    })
    it("expect index dom node rendered correct", function() {
        var WeatherApp = React.createFactory(require("../../shared/index/app.jsx"));
        var initialState = require("./mock_data/index.json");

        var weatherApp = ReactTestUtils.renderIntoDocument(WeatherApp({initialState:initialState}));
        var weatherForm = ReactTestUtils.findRenderedDOMComponentWithClass(weatherApp,'weather-form');
        expect(weatherForm.children.length).toBe(9);

        // var inputNode = weatherForm.children[0];
        // inputNode.value = "北京";
        // ReactTestUtils.Simulate.change(inputNode);
    })
});

