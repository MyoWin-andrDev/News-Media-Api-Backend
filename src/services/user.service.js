const UserModel = require('../models/userModel');

const UserService = {
    getUserByName : async (username) => {
        return await UserModel.findOne({username});
    },
    getUserByPhone : async (phone) => {
        return await UserModel.findOne({phone});
    },
    registerUser : async(name ,phone ,password) => {
        return await new UserModel({name : name, phone : phone, password : password}).save();
    }
}

module.exports = {
    UserService
}