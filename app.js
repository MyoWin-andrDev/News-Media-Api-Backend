
require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const { connectDB } = require('./src/configs/db.js')
const fileUpload = require('express-fileupload');

//Changing to Https
const {createServer} = require('http');
const server = createServer(app);

const UserRouter = require('./src/routes/user.router');
//Mongoose
connectDB()
app.use(express.static('public'));
app.use(express.json());
app.use(fileUpload())

//Routers
app.use('/user', UserRouter)


app.use((err, req, res,next) => {
    err.status = err.status || 404;
    res.status(err.status).send({con : false, msg : err.message});
})

app.use((req, res) => {
    res.status(404).send({ con: false, msg: "Not Route Found" });
})

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})
