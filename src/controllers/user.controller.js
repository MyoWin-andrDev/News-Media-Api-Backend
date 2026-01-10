const { formatMessage , UserService} = require('../utils/facade');

let register = async (req, res, next) => {
    let isUserExist = await UserService.getUserByName(req.body.name);
    let isPhoneNoExist = await UserService.getUserByPhone(req.body.phone);
    if(isUserExist){
        next(new Error('Username already exists'));
        return;
    }
    if(isPhoneNoExist){
        next(new Error('Phone Number is already in used.'));
    }
    let result = await UserService.registerUser(req.body.name, req.body.phone, req.body.password);
    formatMessage(res, "Register Successful", result);
}
module.exports = {
    register,
}