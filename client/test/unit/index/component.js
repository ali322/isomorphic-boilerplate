import test from "ava"
import sinon from "sinon"
import React from "react";
import { shallow } from "enzyme"
import { Index } from "../../../index/app.jsx"

let wrapper, props

test.before(() => {
    props = {
        actions: {
            fetchEvents: sinon.spy()
        },
        events: []
    }
    wrapper = shallow(<Index {...props} />)
})

test("should render correct", t => {
    t.is(wrapper.find(".content").length, 1)
})

test("should call handleRefresh once after click", t => {
    const button = wrapper.find(".refresh-btn")
    button.simulate("click", { target: { value: "" }, preventDefault: () => {} })
    t.is(props.actions.fetchEvents.callCount, 1)
})
