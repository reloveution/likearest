import SellerModel from "../Models/sellerModel.js"

class SellerBuilder {
    constructor(jsonData) {
        this.json = jsonData;
    }

    build() {
        console.log(this.json)
        let sellerModel = new SellerModel(this.json);
        return sellerModel;
    }
}

export default SellerBuilder;