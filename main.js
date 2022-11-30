'use strict'
console.clear()

import { SellerBuilder } from "./Builder/sellerBuilder.js"
import { SellerArrayBuilder } from "./Builder/sellerBuilder.js"
import { SellerModel } from "./Models/sellerModel.js"

import axios from 'axios';




// axios.get('http://localhost:3000/seller').then(function(response){
//     // console.log(response)
//     const sellerArray = response.data;
//     let sellerModel = SellerModel.jsonBuilder(sellerArray[sellerArray.length-1]).build();
//     console.log(sellerModel);
// });

let sellerModel = axios.get('http://localhost:3000/seller').then(function(response){
    console.log(response.data.length)
    return SellerModel.sellerArrayBuilder(response.data).build();
});

console.log(sellerModel)