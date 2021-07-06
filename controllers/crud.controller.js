const DrinksModel = require('../models/mongoose.model');
const createFavorite = (req, res) => {
    const { id, name, img } = req.body
    DrinksModel.find({ id: id }, (error, data) => {
        if (data.length > 0) {
            res.send('already exist')
        }
        else {
            const newDrinksModel = new DrinksModel({
                id: id,
                name: name,
                img: img
            })
            newDrinksModel.save()
            res.send(newDrinksModel)
        }
    })

}
const getFavorite = (req, res) => {
    DrinksModel.find({},(error,data)=>{
        if (error){
            res.send (error.message)
        }
        else{
            res.send(data)
        }
    })

}
const deleteFavorite = (req, res) => {
    const id=req.params.id;
    DrinksModel.deleteOne({id:id},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })

}
const updateFavorite = (req, res) => {
    const previosId=req.params.id;
    const {name, img } = req.body
    DrinksModel.findOne({id:previosId},(error,data)=>{
        if(error){
            res.send(error.message)
        }
        else{
            data.name=name;
            data.img=img;
            data.save();
            res.send(data)
        }
    })

}
module.exports = {
    createFavorite, getFavorite, deleteFavorite, updateFavorite
}