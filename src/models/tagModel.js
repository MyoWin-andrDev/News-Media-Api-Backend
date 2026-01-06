const {mongoose, Schema} = require('../configs/shares');

const TagSchema = new Schema({
    name : {type : String, unique : true, required: true},
})

const TagModel = mongoose.model('tag', TagSchema);
module.exports = TagModel;