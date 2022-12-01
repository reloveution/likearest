import { SellerModel } from "../Models/sellerModel.js"

class SellerArrayBuilder {
    constructor(jsonData) {
        this.jsonData = jsonData
    }

    build() {
        let sellerArray = []
        for (let i = 0; i < (this.jsonData.length); i++) {
            sellerArray[i] = new SellerBuilder(this.jsonData[i]).build()
        }
        return sellerArray;
    }
}

class SellerBuilder {
    constructor(jsonData) {
        this.sellerInfo = jsonData.sellerInfo
        this.sellerId = jsonData.sellerId
    }

    build() {
        let sellerModel = new SellerModel(this.sellerId,this.sellerInfo);
        return sellerModel;
    }
}

export { SellerBuilder, SellerArrayBuilder }
