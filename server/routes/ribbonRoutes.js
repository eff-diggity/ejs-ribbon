const express = require('express');
const router = express.Router();
const ribbonController = require('../controllers/ribbonController');

/**
 * App Routes 
*/
router.get('/', ribbonController.homepage);


module.exports = router;
