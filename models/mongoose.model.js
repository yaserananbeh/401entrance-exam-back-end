const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinksSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        trum: true,
        tolowercase: true
    },
    name: {
        type:String
    },
    img: {
        type:String
    }
});

// This creates our model from the above schema, using mongoose's model method
const DrinksModel = mongoose.model("favorites", DrinksSchema);

// Export the Article model
module.exports = DrinksModel;