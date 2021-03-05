const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

/* GET home page. */
router.get('/',productController.index );
router.get('/get',productController.get);
router.get('/post',productController.post);
router.get('/put', productController.put);
router.get('/patch', productController.patch);
router.get('/delete', productController.delete);

module.exports = router;