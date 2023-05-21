const csvController = require('./csv_controller');

const uploadedFileNames = csvController.uploadedFileNames;
const abc = uploadedFileNames();   

module.exports.home = function(req,res){
    return res.render('home',{
        files: abc
    });
}
