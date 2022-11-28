import SellerBuilder from "../Builder/sellerBuilder.js"

class SellerModel {
// дописать конструктор чтобы он в себя принимал все значения
    constructor(id,) { 
        this.id = id
    }

    static  jsonBuilder(jsonData) {
        return new SellerBuilder(jsonData);
    }

    // static jsonArrayBuilder(jsonArrayData)

}

export default  SellerModel;