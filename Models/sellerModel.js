import { SellerBuilder } from "../Builder/sellerBuilder.js"
import { SellerArrayBuilder } from "../Builder/sellerBuilder.js";

class SellerModel {
// дописать конструктор чтобы он в себя принимал все значения
constructor(json) {
    this.sellerInfo = json.sellerInfo;
    this.sellerId = json.sellerId;
    // console.log(json.sellerId)
    // console.log(json.sellerInfo)
    // 
    // this.sellersArray = []
}

    // static jsonBuilder(jsonData) {
    //     return new SellerBuilder(jsonData);
    // }

    static sellerArrayBuilder(jsonData) {
        // console.log(jsonData)
        return new SellerArrayBuilder(jsonData);
    }

}

export { SellerModel } ;