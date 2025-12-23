const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name :  { type: String, required: true },
    phone : { type: String, required: true },
    password : {type : String, required: true},
    displayName : { type: String},
    role : {type : Number},
    profile : {type : String}
})

const UserModel = mongoose.model('user', UserSchema);
module.exports.UserModel = UserModel;