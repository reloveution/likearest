import axios from 'axios';

class BaseApiService {

    get() {}

    getDefinite() {}

    post() {}

    put() {}

    delete() {}

    deleteDefinite() {}

}

class SellerApi extends BaseApiService {
    
    constructor() {
    this.url = 'http://localhost:3000/seller'
    }



    get() {
        axios.get(this.url)
        .then(response => {
            return SellerModel.sellerArrayBuilder(response.data).build()
        })
        .catch(error => {
            console.log('Error with get sellers by api from DB')
        })
    }

    getDefinite(sellerID) {
        axios.get(this.url)
        .then(response => {
            sellerModel = SellerModel.sellerArrayBuilder(response.data).build()
            for (let i = 0; sellerID != sellerModel[i].sellerId; i++) {}
            return sellerModel[i]
        })
        .catch(error => {
            console.log('Error with get seller by api from DB')
        })
    }

    post(seller) {
        axios.post(this.url, {
            "sellerInfo": {
                "firstName": seller.sellerInfo.firstName,
                "lastName": seller.sellerInfo.lastName,
                "email" : seller.sellerInfo.email
            }
        })
        .then(function (response) {
            // console.log(response)
            console.log(`---seller _${seller.sellerInfo.firstName} ${seller.sellerInfo.firstName} added to DB---`)
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    put() {}

    delete() {}

    deleteDefinite() {}   


}


export { BaseApiService, SellerApi }