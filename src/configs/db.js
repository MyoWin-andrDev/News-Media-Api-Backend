const mongoose = require('mongoose')
require('dotenv').config()

let connectDB = async () => {
    try{
       await mongoose.connect(process.env.MONGODB_URL + process.env.DB_NAME)
    }
    catch{
        process.exit(1)
    }
}

module.exports = {connectDB}