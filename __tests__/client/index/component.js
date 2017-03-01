import test from "ava"
import sinon from "sinon"
import React from "react";
import { shallow } from "enzyme"
import { Events } from "../../../client/bundle/index/module/app.jsx"

let wrapper, props

test.before(() => {
    props = {
        actions: {
            fetchRepo: sinon.spy(),
            changeField: sinon.spy()
        },
        events: []
    }
    wrapper = shallow(<Events {...props} />)
})

test("should render correct", t => {
    t.is(wrapper.find("input").length, 1)
})

test("should call handleChange once after change value", t => {
    const input = wrapper.find("input")
    input.simulate('change', { target: { value: "redux" }, preventDefault: () => {} })
    t.is(props.actions.changeField.callCount, 1)
})

test("should call handleQuery once after click", t => {
    const button = wrapper.find("button")
    button.simulate("click")
    t.is(props.actions.fetchRepo.callCount, 1)
})
