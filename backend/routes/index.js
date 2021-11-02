const express= require('express');
const product= require('../controllers/product_control')
const user= require('../controllers/user_control')
// const {authenticate} =require('../middleware/auth')
const router=express()

//product
router.get('/getAllProduct', product.getAllProduct);
router.get('/productInf/:_id', product.productInf)
router.post('/createProduct', product.createProduct);
router.put('/updateProduct/:id', product.updateProduct)
router.delete('/deleteData/:id', product.deleteData);

//users
// router.get('/productInf/:_id', product.productInf)
router.post('/register', user.register);
router.post('/login', user.login)
// router.put('/updateProduct/:id', product.updateProduct)
// router.delete('/deleteData/:id', product.deleteData);

module.exports= router;
