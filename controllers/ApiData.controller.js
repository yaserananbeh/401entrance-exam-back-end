const axios = require('axios');
require('dotenv').config();

const ApiData =(req,res)=>{
    axios.get(process.env.API_URL).then(response=>{
        res.send(response.data.drinks)
    }).catch(error=>res.send(error.message))
}
module.exports=ApiData