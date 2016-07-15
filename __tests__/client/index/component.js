'use strict'

import test from "ava"
import expect from "expect"
import React from "react";
import {mount,shallow} from "enzyme"
import ReactTestUtils from "react-addons-test-utils";
import Weather from "../../../shared/chunk/index/component.jsx";
import initialState from "./initialState"

let el

test.before(t=>{
    const props = {
        changeField:expect.createSpy(),
        fetchWeather:expect.createSpy(),
        weatherByCityName:initialState
    }
    el = shallow(<Weather {...props}/>)
    // input = ReactTestUtils.findRenderedDOMComponentWithTag(
    //     weatherComponent,"input"
    // )
    // button = ReactTestUtils.findRenderedDOMComponentWithTag(
    //     weatherComponent,"button"
    // )
})

test("should render correct",t=>{
    t.is(el.find("input").prop("value"),"长沙")
    t.is(el.find("p").first().children().last().text(),"changsha")
})

test.skip("should call handleQuery with input value",t=>{
    input.value = "上海";
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.click(button);
    t.is(props.fetchWeather.calls.length,1)
})