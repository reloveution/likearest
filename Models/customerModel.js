import { CustomerBuilder } from "../Builder/customerBuilder.js"
import { CustomerArrayBuilder } from "../Builder/customerBuilder.js"

class CustomerModel {
    constructor(customerId,customerInfo) {
        this.customerInfo = customerInfo
        this.customerId = customerId
    }

    static customerArrayBuilder(jsonData) {
        return new CustomerArrayBuilder(jsonData)
    }

}

export { CustomerModel } ;
