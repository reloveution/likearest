'use strict'
console.clear()
import axios from 'axios';

// // filling sellers in DB
// axios({
//     method: 'post',
//     url: 'http://localhost:3000/seller',
//     data: {
//         "sellerInfo": {
//             "firstName": "Seller",
//             "lastName": "1",
//             "email": "seller1@seller.com"
//         }
//     }
// })
// console.log('Seller 1 exist in DB')

// axios({
//     method: 'post',
//     url: 'http://localhost:3000/seller',
//     data: {
//         "sellerInfo": {
//             "firstName": "Seller",
//             "lastName": "2",
//             "email": "seller2@seller.com"
//         }
//     }
// })
// console.log('Seller 2 exist in DB')

// axios({
//     method: 'post',
//     url: 'http://localhost:3000/seller',
//     data: {
//         "sellerInfo": {
//             "firstName": "Seller",
//             "lastName": "3",
//             "email": "seller3@seller.com"
//         }
//     }
// })
// console.log('Seller 3 exist in DB')

// axios({
//     method: 'post',
//     url: 'http://localhost:3000/seller',
//     data: {
//         "sellerInfo": {
//             "firstName": "Seller",
//             "lastName": "4",
//             "email": "seller4@seller.com"
//         }
//     }
// })
// console.log('Seller 4 exist in DB')

// // filling customers in DB
// axios({
//     method: 'post',
//     url: 'http://localhost:3000/customer',
//     data: {
//         "customerInfo": {
//             "firstName": "Customer",
//             "lastName": "1",
//             "email": "customer1@customer.com"
//         }
//     }
// })
// console.log('Customer 1 exist in DB')

// axios({
//     method: 'post',
//     url: 'http://localhost:3000/customer',
//     data: {
//         "customerInfo": {
//             "firstName": "Customer",
//             "lastName": "2",
//             "email": "customer2@customer.com"
//         }
//     }
// })
// console.log('Customer 2 exist in DB')

// axios({
//     method: 'post',
//     url: 'http://localhost:3000/customer',
//     data: {
//         "customerInfo": {
//             "firstName": "Customer",
//             "lastName": "3",
//             "email": "customer3@customer.com"
//         }
//     }
// })
// console.log('Customer 3 exist in DB')

// axios({
//     method: 'post',
//     url: 'http://localhost:3000/customer',
//     data: {
//         "customerInfo": {
//             "firstName": "Customer",
//             "lastName": "4",
//             "email": "customer4@customer.com"
//         }
//     }
// })
// console.log('Customer 4 exist in DB')

// filling feedbacks in DB
// customer 1
axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785f7",
            "sellerId": "6392f65672b28d53354785ef",
            "date": "2022-01-01T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 1
        }
    }
})
console.log('Feedback customer 1 for seller 1 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785f7",
            "sellerId": "6392f65672b28d53354785f1",
            "date": "2022-01-02T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 2
        }
    }
})
console.log('Feedback customer 1 for seller 2 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785f7",
            "sellerId": "6392f65672b28d53354785f3",
            "date": "2022-01-03T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 3
        }
    }
})
console.log('Feedback customer 1 for seller 3 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785f7",
            "sellerId": "6392f65672b28d53354785f5",
            "date": "2022-01-04T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 4
        }
    }
})
console.log('Feedback customer 1 for seller 4 added in DB')

// customer 2
axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785f9",
            "sellerId": "6392f65672b28d53354785ef",
            "date": "2022-01-05T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 5
        }
    }
})
console.log('Feedback customer 2 for seller 1 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785f9",
            "sellerId": "6392f65672b28d53354785f1",
            "date": "2022-01-06T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 6
        }
    }
})
console.log('Feedback customer 2 for seller 2 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785f9",
            "sellerId": "6392f65672b28d53354785f3",
            "date": "2022-01-07T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 7
        }
    }
})
console.log('Feedback customer 2 for seller 3 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785f9",
            "sellerId": "6392f65672b28d53354785f5",
            "date": "2022-01-08T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 8
        }
    }
})
console.log('Feedback customer 2 for seller 4 added in DB')

// customer 3
axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785fb",
            "sellerId": "6392f65672b28d53354785ef",
            "date": "2022-01-09T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 9
        }
    }
})
console.log('Feedback customer 3 for seller 1 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785fb",
            "sellerId": "6392f65672b28d53354785f1",
            "date": "2022-01-10T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 10
        }
    }
})
console.log('Feedback customer 3 for seller 2 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785fb",
            "sellerId": "6392f65672b28d53354785f3",
            "date": "2022-01-11T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 1
        }
    }
})
console.log('Feedback customer 3 for seller 3 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785fb",
            "sellerId": "6392f65672b28d53354785f5",
            "date": "2022-01-12T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 2
        }
    }
})
console.log('Feedback customer 3 for seller 4 added in DB')

// customer 4
axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785fd",
            "sellerId": "6392f65672b28d53354785ef",
            "date": "2022-01-13T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 3
        }
    }
})
console.log('Feedback customer 4 for seller 1 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785fd",
            "sellerId": "6392f65672b28d53354785f1",
            "date": "2022-01-14T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 4
        }
    }
})
console.log('Feedback customer 4 for seller 2 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785fd",
            "sellerId": "6392f65672b28d53354785f3",
            "date": "2022-01-15T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 5
        }
    }
})
console.log('Feedback customer 4 for seller 3 added in DB')

axios({
    method: 'post',
    url: 'http://localhost:3000/feedback',
    data: {
        "feedbackInfo": {
            "customerId": "6392f65672b28d53354785fd",
            "sellerId": "6392f65672b28d53354785f5",
            "date": "2022-01-16T13:51:50.417-03:00",
            "description": "blahblah",
            "rate": 6
        }
    }
})
console.log('Feedback customer 4 for seller 4 added in DB')