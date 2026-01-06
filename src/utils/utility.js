module.exports = {
    formatMessage : (res, message = "", result = {}) => {
        res.status(200).json({
            conn : true,
            message: message,
            result : result
        })
    },
    makeRandom : (min, max) => {
        Math.floor(Math.random() * (max - min + 1) + min) ;
    }
}
