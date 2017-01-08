'use strict'

import test from "ava"
import sinon from "sinon"
import React from "react";
import { shallow, mount } from "enzyme"
import Weather from "../../../shared/chunk/index/component.jsx";
import initialState from "./initialstate.json"

let wrapper, el

test.before(t => {
    const props = {
        changeFiwrapperd: sinon.spy(),
        fetchWeather: sinon.spy(),
        handleChange: sinon.spy(),
        weatherByCityName: initialState
    }
    wrapper = shallow(<Weather {...props}/>)
    el = wrapper.instance()
})

test("should render correct", t => {
    t.is(wrapper.find("input").prop("value"), "长沙")
    t.is(wrapper.find("p").first().children().last().text(), "changsha")
})

test.skip("should call handleChange once after change value", t => {
    const input = wrapper.find("input")
    input.simulate("change", { target: { value: "上海" }, preventDefault: () => {} })
    t.is(el.props.handleChange.callCount, 1)
})

test("should call handleQuery once after click", t => {
    const button = wrapper.find("button")
    button.simulate("click")
    t.is(el.props.fetchWeather.callCount, 1)
})
