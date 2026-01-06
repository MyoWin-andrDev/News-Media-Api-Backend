const {mongoose, Schema} = require('../configs/shares');

const UserSchema = new Schema({
    name :  { type: String, unique : true, required: true },
    phone : { type: String, unique : true, required: true },
    password : {type : String, required: true},
    displayName : { type: String, required : true},
    role : {type : Number, default : 2},//Subscriber -> 2
    profile : {type : String},
    createdAt : {type : Date, default : Date.now()}
})

const UserModel = mongoose.model('user', UserSchema);
module.exports.UserModel = UserModel;