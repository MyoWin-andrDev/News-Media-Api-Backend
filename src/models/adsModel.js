const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdsSchema = new Schema({
    image : {type : String, required: true},
    status : {type : String}
})
const AdsModel = mongoose.model("advertisement", AdsSchema);
module.exports = AdsModel;