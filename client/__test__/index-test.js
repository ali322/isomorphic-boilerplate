'use strict';
import expect from "expect";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react/lib/ReactTestUtils";
import Weather from "../../shared/index/component.jsx";

describe("index component", function() {
    describe("weather",()=>{
        let weatherOutput,props,renderer,output;
        beforeEach(()=>{
            props = {
                dispatch:()=>{},
                handleChange:expect.createSpy(),
                handleQuery:expect.createSpy(),
                weatherByCityName:require("./mock_data/index.json")
            };
            renderer = ReactTestUtils.createRenderer();
            renderer.render(<Weather {...props}/>);
            output = renderer.getRenderOutput();
        })
        it("weather component should render correct",()=>{
            expect(output.type).toBe("div");
            let form = output.props.children[1];
            let [input,button] = form.props.children;
            expect(input.type).toBe("input");
            expect(button.type).toBe("button");
        })
    })
});

