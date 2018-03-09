import axios from 'axios';
import Pubsub from "pubsub-js";
import co from "co";
import {config} from "./config";
import Promise from "bluebird"
export default function dataFetch(url,params){
    if(arguments.length==1){
        return new Promise(function (resolve,reject) {
            axios.get(url,config)
                 .then(function(response){
                     if((typeof response.data)==="string"){
                         response.data = JSON.parse(response.data);
                     }
                     else if(response.data===undefined&&response.request){
                         response.data = JSON.parse(response.request.responseText);
                     }
                    if (response.data.ret ==0) {
                        reject("服务器错误")
                    }else if(response.data.ret ==1){

                        resolve(response.data)
                    }else if(response.data.ret ==2){
                    }else if(response.data.ret ==3){
                        reject("没有登录")
                    }
                })
                .catch(function (err) {
                    reject(err);
                })


        })
    }else {
        return new Promise(function (resolve,reject) {
            axios.post(url,params,config)
                 .then(function(response){
                     if((typeof response.data)==="string"){
                         response.data = JSON.parse(response.data);
                     }
                     else if(response.data===undefined&&response.request){
                                response.data = JSON.parse(response.request.responseText);
                     }

                    if (response.data.ret ==0) {
                        reject("服务器错误")
                    }else if(response.data.ret==1){

                        resolve(response.data)
                    }else if(response.data.ret ==3){
                        reject("没有登录");
                    }else if(response.data.ret ===4){
                        resolve(response.data)
                    }
                })
                .catch(function (err) {
                    console.log(err);
                    reject(err);
                })


        })
    }

};
export function reduxForReact(callback) {
    return (dispatch, getState) => {
        co(function*(){
           yield callback(dispatch,getState);//callback也要是generator函数
        }).then(function (result) {
        }).catch(function (err) {
            if(err == "服务器错误"){
                Pubsub.publish("serverError", {error:"服务器错误"})
            }
            else if(err=="没有登录"){
                Pubsub.publish("serverError",{error:"notLogin"})
            }else {
                Pubsub.publish("serverError",{error:"网络错误"})
            }
        })
    }
}

