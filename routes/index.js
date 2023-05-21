const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
//route for homepage
router.get('/',homeController.home);    
// route for file
router.use('/file',require('./file'));  

module.exports = router;
