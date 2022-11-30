import { SellerBuilder } from "../Builder/sellerBuilder.js"
import { SellerArrayBuilder } from "../Builder/sellerBuilder.js";

class SellerModel {
// дописать конструктор чтобы он в себя принимал все значения
constructor(json) {
    console.log(json.sellerInfo)
    this.sellerInfo = json.sellerInfo;
    this.sellerId = json.sellerId;
    console.log(this.sellerId)
    // 
    this.sellersArray = []
}

    // static jsonBuilder(jsonData) {
    //     return new SellerBuilder(jsonData);
    // }

    static sellerArrayBuilder(jsonData) {
        return new SellerArrayBuilder(jsonData);
    }

}

export { SellerModel } ;