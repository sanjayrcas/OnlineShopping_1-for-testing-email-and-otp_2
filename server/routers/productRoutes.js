const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/addProduct', productController.addProduct);
router.get('/getAllProducts', productController.getAllProducts);
router.get('/getProductById/:id', productController.getProductById);
router.patch('/updateProduct/:id', productController.updateProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;