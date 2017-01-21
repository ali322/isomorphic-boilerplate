'use strict'
import fetch from "isomorphic-fetch"

const defaultHost = `//localhost:${process.env.LISTEN_PORT || 3000}`

export default {
    get(url,data={},options={
        host:defaultHost
    }){
        let params = []
        Object.keys(data).forEach((param)=>{
            params.push(`${param}=${encodeURIComponent(data[param])}`)
        })
        params = params.join("&")
        url = `${options.host}${url}?${params}`
        return fetch(url).then(ret=>ret.json())
    },
    post(url,data={}){
        return fetch(url,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then((ret)=>{
            if(ret.ok){
                return ret.json()
            }else{
                throw new Error(`post failed,err stack:${ret.error?ret.error():""}`)
            }
        })
    }
}