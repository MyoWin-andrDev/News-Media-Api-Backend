const {mongoose, Schema} = require('../configs/shares');

const CommentSchema = new Schema({
    postId : {type : Schema.Types.ObjectId, ref : 'post'},
    userId : {type : Schema.Types.ObjectId, ref : 'user'},
    content : {type : String, required : true},
    image : {type : String, default : null},
    status : {type : String, enum : ['PROCESSING', 'ACTIVE', 'IDEAL'], default : 'PROCESSING'},
    createdAt : {type : Date, default : Date.now()}
})

const CommentModel = mongoose.model('comment', CommentSchema);

module.exports = CommentModel