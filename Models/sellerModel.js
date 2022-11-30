import { SellerBuilder } from "../Builder/sellerBuilder.js"
import { SellerArrayBuilder } from "../Builder/sellerBuilder.js";

class SellerModel {
// дописать конструктор чтобы он в себя принимал все значения
constructor(jsonData) {
    // console.log(jsonData)
    this.sellerInfo = jsonData.sellerInfo;
    this.sellerId = jsonData.sellerId;
    console.log(this.sellerId)
}

    // static jsonBuilder(jsonData) {
    //     return new SellerBuilder(jsonData);
    // }

    static sellerArrayBuilder(jsonArrayData) {
        return new SellerArrayBuilder(jsonArrayData);
    }

}

export { SellerModel } ;