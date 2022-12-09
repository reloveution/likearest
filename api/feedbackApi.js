import { BaseApiService } from"./baseApiService.js"
import { FeedbackModel } from"../Models/feedbackModel.js"

class FeedbackApi extends BaseApiService {
    
    url = 'http://localhost:3000/feedback'

    get() {
        return super.get(this.url)
        .then(result => {
            // console.log(result)
            return FeedbackModel.feedbackArrayBuilder(result).build();
        })
        .catch(error => {
            console.log(`Error with get feedbacks by FeedbackApi from DB on error code ${error}`)
        })
    }

    getFeedbacksBySeller(sellerID) {
        return super.get(this.url)
        .then(result => {
            // console.log(result)
            let feedbacksModel = result
            let feedbacksBySellerModel = []
            for (let i = 0; i < feedbacksModel.length; i++) {
                if (feedbacksModel[i].feedbackInfo.sellerId === sellerID) {
                    feedbacksBySellerModel.push(feedbacksModel[i])
                }
            }
            // console.log(feedbacksBySellerModel)
            return feedbacksBySellerModel
        })
        .catch(error => {
            console.log('Error with getFeedbacksBySeller by feedbackApi from DB')
        })
    }

    // post(seller) {
    //     axios.post(this.url, {
    //         "sellerInfo": {
    //             "firstName": seller.sellerInfo.firstName,
    //             "lastName": seller.sellerInfo.lastName,
    //             "email" : seller.sellerInfo.email
    //         }
    //     })
    //     .then(function (response) {
    //         // console.log(response)
    //         console.log(`---seller _${seller.sellerInfo.firstName} ${seller.sellerInfo.lastName} added to DB---`)
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     });
    // }

    // put() {}

    // delete() {}

    // deleteDefinite() {}


}

export { FeedbackApi }