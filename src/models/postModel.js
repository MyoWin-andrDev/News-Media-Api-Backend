const mongoose  = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title : {type : String, required : true},
    content : {type : String, required : true},
    image : {type : Array},
    categoryId : {type : Schema.Types.ObjectId, required : true},
    tagId : {type : Schema.Types.ObjectId, required : true},
    authorId : {type : Schema.Types.ObjectId, required : true},
    like : {type : Number},
    comment : {type : Schema.Types.ObjectId}
})

const PostModel = mongoose.model('post', PostSchema);
module.exports = PostModel;