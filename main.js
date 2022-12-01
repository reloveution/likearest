'use strict'
console.clear()

import { SellerBuilder } from "./Builder/sellerBuilder.js"
import { SellerArrayBuilder } from "./Builder/sellerBuilder.js"
import { SellerModel } from "./Models/sellerModel.js"

import axios from 'axios';

// let sellerModel = axios.get('http://localhost:3000/seller').then(response =>{
//     // console.log(response.data)
//     // console.log(response.data.length)
//     return SellerModel.sellerArrayBuilder(response.data).build()
// });

// axios.get('http://localhost:3000/seller').then(function(response){
//     // console.log(response.data)
//     // console.log(response.data.length)
//     console.log(SellerModel.sellerArrayBuilder(response.data).build());
// });

let sellerModel
axios.get('http://localhost:3000/seller').then(response => {
    // console.log(response.data)
    // console.log(response.data.length)
    sellerModel = SellerModel.sellerArrayBuilder(response.data).build();
});

// for (let time = 0; typeof(sellerModel[0]) == undefined; time++) {
//     console.log(time)
// } 


setTimeout(listingDB, 3000);
function listingDB() {
  console.log(sellerModel);
}