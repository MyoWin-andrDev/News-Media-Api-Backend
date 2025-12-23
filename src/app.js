require('dotenv').config();
const express = require('express');
    mongoose = require('mongoose');
    connectDB  = require('../src/configs/db.js')
    app = express();

    connectDB();
    app.use(express.json())

module.exports = app;