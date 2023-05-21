const express = require('express');
const router = express.Router();

const csvController = require('../controllers/csv_controller');

//route to open file
router.get('/open',csvController.open); 
//route to upload file
router.post('/upload',csvController.upload);  
//route to delete file     
router.get('/delete',csvController.delete);    

module.exports = router;