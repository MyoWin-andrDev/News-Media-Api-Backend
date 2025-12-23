const mongoose = require('mongoose');
const {Schema} = mongoose;

const CommentSchema = new Schema({
    postId : {type : Schema.Types.ObjectId, ref : 'post'},
    userId : {type : Schema.Types.ObjectId, ref : 'user'},
    content : {type : String}
})