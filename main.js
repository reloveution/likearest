'use strict'
console.clear()
import SellerModel from "./Models/sellerModel.js"

import axios from 'axios';

// const axios = require('axios');


console.clear()


axios({
    method: 'post',
    url: 'http://localhost:3000/seller',
    data: {
        "sellerInfo": {
            "firstName": "Valentin",
            "lastName": "Kurakin",
            "email": "Valentin@Kurakin.com"
        }
    }
})

axios.get('http://localhost:3000/seller').then(function(response){
    // console.log(response)
    const sellerArray = response.data;
    let sellerModel = SellerModel.jsonBuilder(sellerArray[sellerArray.length-1]).build();
    // console.log(sellerModel);
});

