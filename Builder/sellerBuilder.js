import { SellerModel } from "../Models/sellerModel.js"

class SellerArrayBuilder {
    constructor(jsonData) {
        this.jsonData = jsonData
    }

    build() {
        console.log(this.jsonData)
        let sellerArray = []
        for (let i = 0; i < (this.jsonData.length); i++) {
            sellerArray[i] =+ new SellerBuilder(this.jsonData[i]).build()
        }
        return sellerArray;
    }
}

class SellerBuilder {
    constructor(jsonData) {
        this.jsonData = jsonData
    }

    build() {
        let sellerModel = new SellerModel(this.jsonData);
        return sellerModel;
    }
}

export { SellerBuilder, SellerArrayBuilder }