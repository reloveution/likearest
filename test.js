'use strict'
console.clear()

import { SellerBuilder } from "./Builder/sellerBuilder.js"
import { SellerArrayBuilder } from "./Builder/sellerBuilder.js"
import { SellerModel } from "./Models/sellerModel.js"
import axios from 'axios';

let sellerModel







let promise1 = axios.get('http://localhost:3000/seller')

console.log(promise1)

let promise2 = promise1.then(response => {
    // console.log(response.data)
    return SellerModel.sellerArrayBuilder(response.data).build()
    })
    .catch(error => {
        console.log("Rejected in promise1 " + error) // error - аргумент reject
    }
)

console.log(promise2)

let promise3 = await promise2.then(responce => {
    return promise2
    })
    .catch(error => {
        console.log("Rejected in promise2 " + error)
    }
)

console.log('----promise3----')
console.log(promise3)
console.log('----promise2----')
console.log(promise2)
console.log('----promise1----')
console.log(promise1.data)