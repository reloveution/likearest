"use strict"

import axios from 'axios';

import { SellerBuilder } from "../Builder/sellerBuilder.js"
import { SellerArrayBuilder } from "../Builder/sellerBuilder.js"
import { SellerModel } from "../Models/sellerModel.js"

import { CustomerBuilder } from "../Builder/customerBuilder.js"
import { CustomerArrayBuilder } from "../Builder/customerBuilder.js"
import { CustomerModel } from "../Models/customerModel.js"

import { FeedbackBuilder } from "../Builder/feedbackBuilder.js"
import { FeedbackArrayBuilder } from "../Builder/feedbackBuilder.js"
import { FeedbackModel } from "../Models/feedbackModel.js"

class Sort {

// получаем список отзывов о продавце и сортируем по дате
    sort1(sellerLastName) {
        axios.get('http://localhost:3000/seller')
        .then(response => {
            const sellerModel = SellerModel.sellerArrayBuilder(response.data).build()

        axios.get('http://localhost:3000/feedback')
        .then(result => {
            const feedbackModel = FeedbackModel.feedbackArrayBuilder(result.data).build()

            let i = 0
            do {
              i++
            } while (sellerModel[i].sellerInfo == sellerLastName)
            let sellerID = sellerModel[i].sellerId

            let feedbacksForSeller = []
            let ii = 0
            for (i = 0; i < feedbackModel.length; i++) {
                if (feedbackModel[i].feedbackInfo.sellerId === sellerID) {
                    feedbacksForSeller[ii] = feedbackModel[i]
                    ii++
                }
            }

            let tempFeedback
            for (let ii = 0; ii < (feedbacksForSeller.length - 1); ii++) {
                for (let i = 0; i < (feedbacksForSeller.length - 1); i++) {
                    if (Date(feedbacksForSeller[i+1].feedbackInfo.Date) > Date(feedbacksForSeller[i].feedbackInfo.Date)) {
                        tempFeedback = feedbacksForSeller[i]
                        feedbacksForSeller[i] = feedbacksForSeller[i+1]
                        feedbacksForSeller[i+1] = tempFeedback
                    }
                }
            }
            console.log('-----Sort on date------')
            console.log(feedbacksForSeller)
        })
        .catch(error => {
            console.log('Error with get feedbacks from DB')
        })
        })
        .catch(error => {
            console.log('Error with get sellers from DB')
        })
    }

// получаем список отзывов о продавце и сортируем по рейтингу оценки
    sort2(sellerLastName) {
        axios.get('http://localhost:3000/seller')
        .then(response => {
            const sellerModel = SellerModel.sellerArrayBuilder(response.data).build()

        axios.get('http://localhost:3000/feedback')
        .then(result => {
            const feedbackModel = FeedbackModel.feedbackArrayBuilder(result.data).build()

            let i = 0
            do {
              i++
            } while (sellerModel[i].sellerInfo == sellerLastName)
            let sellerID = sellerModel[i].sellerId

            let feedbacksForSeller = []
            let ii = 0
            for (i = 0; i < feedbackModel.length; i++) {
                if (feedbackModel[i].feedbackInfo.sellerId === sellerID) {
                    feedbacksForSeller[ii] = feedbackModel[i]
                    ii++
                }
            }

            let tempFeedback
            for (let ii = 0; ii < (feedbacksForSeller.length - 1); ii++) {
                for (let i = 0; i < (feedbacksForSeller.length - 1); i++) {
                    if (feedbacksForSeller[i+1].feedbackInfo.rate > feedbacksForSeller[i].feedbackInfo.rate) {
                        tempFeedback = feedbacksForSeller[i]
                        feedbacksForSeller[i] = feedbacksForSeller[i+1]
                        feedbacksForSeller[i+1] = tempFeedback
                    }
                }
            }
            console.log('-----Sort by Rate------')
            console.log(feedbacksForSeller)
        })
        .catch(error => {
            console.log('Error with get feedbacks from DB')
        })
        })
        .catch(error => {
            console.log('Error with get sellers from DB')
        })        
    }

}




export { Sort }