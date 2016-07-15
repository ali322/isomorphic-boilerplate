'use strict'

import test from "ava"
import expect from "expect"
import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import Weather from "../../../shared/chunk/index/component.jsx";
import initialState from "./initialState"

let props,weatherComponent,input,button;

test.skip.before(t=>{
    props = {
        changeField:expect.createSpy(),
        fetchWeather:expect.createSpy(),
        weatherByCityName:initialState
    }
    weatherComponent = ReactTestUtils.renderIntoDocument(
        <Weather {...props}/>
    );
    input = ReactTestUtils.findRenderedDOMComponentWithTag(
        weatherComponent,"input"
    )
    button = ReactTestUtils.findRenderedDOMComponentWithTag(
        weatherComponent,"button"
    )
})

test.skip("should render correct",t=>{
    t.is(input.value,"长沙")
    t.is(button.nextSibling.lastChild.textContent,"changsha")
})

test.skip("should call handleQuery with input value",t=>{
    input.value = "上海";
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.click(button);
    t.is(props.fetchWeather.calls.length,1)
})