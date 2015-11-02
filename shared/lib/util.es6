'use strict'
import reqwest from "reqwest";

const util = {
    apiRequest(url,param,options={
        method:"get",
        type:"json"
    }) {
        options = Object.assign({},options,{
            url,
            data:param
        });
        return reqwest(options);
    }
}

export default util;