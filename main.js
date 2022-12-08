'use strict'
console.clear()

import axios from 'axios';

import { Sort } from "./Controllers/sort.js"

import { SellerBuilder } from "./Builder/sellerBuilder.js"
import { SellerArrayBuilder } from "./Builder/sellerBuilder.js"
import { SellerModel } from "./Models/sellerModel.js"

import { CustomerBuilder } from "./Builder/customerBuilder.js"
import { CustomerArrayBuilder } from "./Builder/customerBuilder.js"
import { CustomerModel } from "./Models/customerModel.js"

import { FeedbackBuilder } from "./Builder/feedbackBuilder.js"
import { FeedbackArrayBuilder } from "./Builder/feedbackBuilder.js"
import { FeedbackModel } from "./Models/feedbackModel.js"

import { BaseApiService } from "./api/rest.js"
import { SellerApi } from "./api/rest.js"


// the argument is the seller's lastname
// const sortDB = new Sort
// sortDB.sort1(1)
// sortDB.sort2(3)
// sortDB.sort3()

const sellerApi = new SellerApi

let seller = {
    "sellerInfo": {
        "firstName": "Seller",
        "lastName": "1",
        "email": "seller1@seller.com"
    }
}

sellerApi.post(seller)





































// let sellerModel
// let customerModel
// let feedbackModel

// axios.get('http://localhost:3000/seller')
// .then(response => {
//     const sellerModel = SellerModel.sellerArrayBuilder(response.data).build()
//     console.log('----sellers----')
//     console.log(sellerModel)
// })
// .catch(error => {
//     console.log('Error with get sellers from DB')
// })

// axios.get('http://localhost:3000/customer')
// .then(response => {
//     const customerModel = CustomerModel.customerArrayBuilder(response.data).build()
//     console.log('----customers--')
//     console.log(customerModel)
// })
// .catch(error => {
//     console.log('Error with get customers from DB')
// })

// axios.get('http://localhost:3000/feedback')
// .then(response => {
//     const feedbackModel = FeedbackModel.feedbackArrayBuilder(response.data).build()
//     console.log('----feedbacks--')
//     console.log(feedbackModel)
// })
// .catch(error => {
//     console.log('Error with get feedbacks from DB')
// })

// setTimeout(listingDB, 3000)
// function listingDB() {
//     console.log('----sellers----')
//     console.log(sellerModel)
//     console.log('----customers--')
//     console.log(customerModel)
// }