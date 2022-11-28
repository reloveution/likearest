'use strict'
import SellerModel from "./Models/sellerModel.js"

import axios from 'axios';

// const axios = require('axios');


console.clear()


// axios({
//     method: 'post',
//     url: 'http://localhost:3000/reseller',
//     data: {
//         "resellerInfo": {
//             "firstName": "Valentin",
//             "lastName": "Kurakin",
//             "email": "Valentin@Kurakin.com"
//         }
//     }
// })

// // axios({
// //     method: 'get',
// //     url: 'http://localhost:3000/reseller',
// //     responseType: 'stream'
// //   })
// //     .then(function (response) {
// //       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
// //     });



// const url = 'http://localhost:3000/reseller';

// axios.get(url)
//     .then(response => console.log(response));



// const data = {
//     resellerInfo: {
//         firstName: "Valentin",
//         lastName: "Kurakin",
//         email: "Valentin@Kurakin.com"
//     }
// }

axios.get('http://localhost:3000/reseller').then(function(response){
    // console.log(response)
    const sellerArray = response.data;
    let sellerModel = SellerModel.jsonBuilder(sellerArray[sellerArray.length-1]).build();
    console.log(sellerModel);
});