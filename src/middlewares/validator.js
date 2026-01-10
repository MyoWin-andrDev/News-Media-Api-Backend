const jwt = require("jsonwebtoken");

module.exports = {
    validateBody : schema => {
        return (req, res, next) => {
            let result = schema.validate(req.body);
            if(result.error) {
                next(new Error(result.error.details[0].message))
            }else{
                next()
            }
        }
    },
    validateParams : (schema , name) => {
        return (req, res, next) => {
            let obj = {}
            obj[`${name}`] = req.params[`${name}`];
            let result = schema.validate(obj);
            if(result.error){
                next(new Error(result.error.details[0].message))
            }else{
                next()
            }
        }
    },
    validateToken : () => {
        return (req, res, next) => {
            if(req.headers.authorization){
                let token = req.headers.authorization.split(' ')[1];
                const decoded = jwt.verify(token, process.env.SECRET_KEY);
                req.user = decoded.data;
                next()
            }
            else{
                next(new Error("No Token Found !!!"))
            }
        }
    },
    validateRole : (role) => {
        return async(req, res, next) => {
            if(req.user.role === role){
                next()
            }else{
                next(new Error("You are not permitted to user this route."))
            }
        }
    },
    validateStaff : (staff) => {
        return async(req, res, next) => {
            if(req.user.role === 1 || 0 ){
                next(new Error("You are not permitted to user this route."))
            }
            else{
                next()
            }
        }
    }

}