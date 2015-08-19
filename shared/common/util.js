'use strict'
const util = {
    apiRequest(url,param = {}){
        return reqwest({
            url,
            data:param,
            type:json,
            method:"GET"
        })
    }
}

export default util;