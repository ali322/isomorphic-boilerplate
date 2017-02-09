'use strict'

import test from "ava"
import sinon from "sinon"
import React from "react";
import { shallow, mount } from "enzyme"
import Index from "../../../client/bundle/index/module/container.jsx";
import initialState from "./initialstate.json"

let wrapper, el

test.before(t => {
    const props = {
        fetchRepo: sinon.spy(),
        handleChange: sinon.spy(),
        initialState
    }
    wrapper = shallow(<Index {...props}/>)
    el = wrapper.instance()
})

test.skip("should render correct", t => {
    t.is(wrapper.find("input").prop("value"), "")
})

test.skip("should call handleChange once after change value", t => {
    const input = wrapper.find("input")
    input.simulate("change", { target: { value: "redux" }, preventDefault: () => {} })
    t.is(el.props.handleChange.callCount, 1)
})

test.skip("should call handleQuery once after click", t => {
    const button = wrapper.find("button")
    button.simulate("click")
    t.is(el.props.fetchRepo.callCount, 1)
})
