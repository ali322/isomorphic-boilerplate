import test from "ava"
import sinon from "sinon"
import React from "react";
import { shallow } from "enzyme"
import { Events } from "../../../client/bundle/index/module/app.jsx";

let wrapper, el

test.before(() => {
    const props = {
        fetchRepo: sinon.spy(),
        handleChange: sinon.spy(),
        events: []
    }
    wrapper = shallow(<Events {...props} />)
    el = wrapper
})

test("should render correct", t => {
    t.is(wrapper.find("input").length, 1)
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
