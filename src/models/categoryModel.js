const {mongoose, Schema} = require('../configs/shares');

const CategorySchema = new Schema({
    name : {type : String, unique : true},
    image : {type : String, required: true},
    description : {type : String, required : true},
})

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;