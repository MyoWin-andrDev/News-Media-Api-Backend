const mongoose  = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title : {type : String, required : true},
    content : {type : String, required : true},
    image : {type : Array},
    categoryId : {type : Schema.Types.ObjectId, ref : 'category'},
    tagId : {type : Schema.Types.ObjectId, ref : 'tag'},
    authorId : {type : Schema.Types.ObjectId, ref : 'user'},
    like : {type : Number},
    comment : {type : Schema.Types.ObjectId}
})

const PostModel = mongoose.model('post', PostSchema);
module.exports = PostModel;