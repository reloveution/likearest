axios.get('http://localhost:3000/seller')
.then(response => {
    return SellerModel.sellerArrayBuilder(response.data).build()
})
.catch(error => {
    console.log('Error with get sellers from DB')
})

axios.get('http://localhost:3000/customer')
.then(response => {
    return CustomerModel.customerArrayBuilder(response.data).build()
})
.catch(error => {
    console.log('Error with get customers from DB')
})

axios.get('http://localhost:3000/feedback')
.then(response => {
    return FeedbackModel.feedbackArrayBuilder(response.data).build()
})
.catch(error => {
    console.log('Error with get feedbacks from DB')
})