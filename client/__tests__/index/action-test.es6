'use strict';
import expect from "expect";
import * as actions from "../../../shared/chunk/index/action.es6";
import * as constants from "../../../shared/chunk/index/constant.es6";

describe("actions",()=>{
    it("should create changeField action",()=>{
        let name = "city",value = "深圳";
        let expectedAction = {
            type:constants.CHANGE_FIELD,
            name:"city",
            value:"深圳"
        }
        expect(actions.changeField(name,value)).toEqual(expectedAction);
    })
})

