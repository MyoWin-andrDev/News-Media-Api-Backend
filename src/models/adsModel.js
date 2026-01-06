const {mongoose, Schema} = require('../configs/shares');

const AdsSchema = new Schema({
    image : {type : String, required: true},
    status : {type : String, enum : ['PROCESSING', 'ACTIVE', 'IDEAL'], default : 'PROCESSING'},
    createdAt : {type : Date, default : Date.now()}
})
const AdsModel = mongoose.model("advertisement", AdsSchema);
module.exports = AdsModel;