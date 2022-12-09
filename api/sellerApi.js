import { BaseApiService } from"./baseApiService.js"
import { SellerModel } from"../Models/sellerModel.js"

class SellerApi extends BaseApiService {
    
    url = 'http://localhost:3000/seller'

    get() {
        return super.get(this.url)
        .then(result => {
            // console.log(result)
            return SellerModel.sellerArrayBuilder(result).build()
        })
        .catch(error => {
            console.log('Error with get sellers by SellerApi from DB')
        })
    }

    // getDefiniteSeller(sellerID) {
    //     axios.get(this.url)
    //     .then(response => {
    //         let sellerModel = SellerModel.sellerArrayBuilder(response.data).build()
    //         let seller
    //         for (let i = 0; i < sellerModel.length; i++) {
    //             if (sellerModel[i].sellerId === sellerID) {
    //                 seller = sellerModel[i]
    //             }
    //         }
    //         return seller
    //     })
    //     .catch(error => {
    //         console.log('Error with get seller by api from DB')
    //     })
    // }

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

export { SellerApi }