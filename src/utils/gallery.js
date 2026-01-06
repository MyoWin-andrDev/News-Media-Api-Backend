const fs = require('fs');
const { formatMessage } = require('./utility');

let generateFileName = (fileName) => {
     return new Date.now() + '_' + fileName.replace(/\s+/g, '_') ;
}

const saveSingleFile = (req, res, next) => {
    let file = req.files.file
    let fileName = generateFileName(file.name);
    file.mv('./gallery/' + fileName)
    req.body['image'] = fileName
    next()
}

const saveMultipleFile = (req, res, next) => {
    let fileArray = []
    let files = req.files.files
    files.forEach(file => {
        let fileName = generateFileName(file.name);
        file.mv('./gallery/' + fileName)
        //Pushing into Array
        fileArray.push(file);
    })
    req.body["images"] = fileArray;
    next()
}

const deleteFile = async(req, res, next) => {
    let file = req.files.file
    if (file) {
        await fs.unlinkSync(`./gallery/${file}`);
        formatMessage(res, `File deleted successfully`, file)
    }
    next()
}

module.exports = {
    saveSingleFile,
    saveMultipleFile,
    deleteFile
}