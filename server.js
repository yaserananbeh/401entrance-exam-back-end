const express = require('express')
const cors = require('cors');
const axios = require('axios');
const mongoose = require("mongoose");
const app = express()
const ApiData=require('./controllers/ApiData.controller')

require('dotenv').config();
const PORT=process.env.PORT
app.use(cors())
app.use(express.json())
const {
    createFavorite,getFavorite,deleteFavorite,updateFavorite
}=require('./controllers/crud.controller')
mongoose.connect("mongodb://localhost:27017/drinks", { useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true });


app.get('/',(req,res)=>res.send('proof of live'))
app.get('/apidata',ApiData)
//crud operation 
app.post('/favorite',createFavorite)
app.get('/favorite',getFavorite)
app.delete('/favorite/:id',deleteFavorite)
app.put('/favorite/:id',updateFavorite)

app.listen(PORT,()=>{
    console.log(`running on ${PORT}`)
})