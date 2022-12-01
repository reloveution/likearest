import { CustomerModel } from "../Models/customerModel.js"

class CustomerArrayBuilder {
    constructor(jsonData) {
        this.jsonData = jsonData
    }

    build() {
        let customerArray = []
        for (let i = 0; i < (this.jsonData.length); i++) {
            customerArray[i] = new CustomerBuilder(this.jsonData[i]).build()
        }
        return customerArray;
    }
}

class CustomerBuilder {
    constructor(jsonData) {
        this.customerInfo = jsonData.customerInfo
        this.customerId = jsonData.customerId
    }

    build() {
        let customerModel = new CustomerModel(this.customerId,this.customerInfo);
        return customerModel;
    }
}

export { CustomerBuilder, CustomerArrayBuilder }