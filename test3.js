'use strict'
console.clear()

import { SellerBuilder } from "./Builder/sellerBuilder.js"
import { SellerArrayBuilder } from "./Builder/sellerBuilder.js"
import { SellerModel } from "./Models/sellerModel.js"
import axios from 'axios';

let sellerModel;

function getRes(result) {
    console.log(result)
}


// let promise1 = axios.get('http://localhost:3000/seller')
// .then(response => {
//     getRes(response.data)
//     return SellerModel.sellerArrayBuilder(response.data).build()
//     })
//     .catch(error => {
//         console.log("Rejected in promise1 " + error) // error - аргумент reject
//     }
// )
console.log(1);

function syncFunction() {
    var sellers= null;
    console.log(3.1);
    if (sellers == null) {
        asyncGetSellers(function(res) {
            sellers = res;
            //async log
            console.log(sellers);
            console.log(4);
        });
    }
    else {
        console.log(sellers);
    }
    //sync log
    // console.log(sellers);
    console.log(3);

}

function asyncGetSellers(callback) {
    return axios.get('http://localhost:3000/seller')
    .then(response => {
    // getRes(response.data)
    return SellerModel.sellerArrayBuilder(response.data).build()
    }).then(sellers => {
        return callback(sellers);
    })
    .catch(error => {
        console.log("Rejected in promise1 " + error) // error - аргумент reject
        return callback(null);
    })
}

function asyncFunction(callback) {
    asyncGetSellers(callback);
}
//sync log
console.log(2);
syncFunction();


