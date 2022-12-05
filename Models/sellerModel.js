import { SellerBuilder } from "../Builder/sellerBuilder.js"
import { SellerArrayBuilder } from "../Builder/sellerBuilder.js"

class SellerModel {
    constructor(sellerId,sellerInfo) {
        this.sellerInfo = sellerInfo
        this.sellerId = sellerId
    }

    static sellerArrayBuilder(jsonData) {
        return new SellerArrayBuilder(jsonData)
    }

}

export { SellerModel }