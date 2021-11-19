const express= require('express');
const product= require('../controllers/product_control')
const user= require('../controllers/user_control')
const order= require('../controllers/order_control')
const collection= require('../controllers/collections')
const {authenticate, authorizeRoles} =require('../middleware/auth')
const router=express();


//product routes
router.get('/getAllProduct', product.getAllProduct);
router.get('/productInf/:_id', product.productInf)
router.post('/createProduct', product.createProduct);
router.put('/updateProduct/:id', product.updateProduct)
router.delete('/deleteData/:id', product.deleteData);
router.put('/review', authenticate, product.createProductReview);
router.get('/allReviews', product.allReviews)
router.delete('/deleteReview', authenticate, product.deleteReview)


//users routes
router.get('/profile',authenticate, user.about)
router.get('/logout', user.loggedOut)
router.get('/allUsers', authenticate, authorizeRoles("admin"), user.allUsers)
router.get('/singleUser/:_id', authenticate, user.singleUser)
router.post('/register', user.register);
router.post('/login', user.login)
router.post('/forgetPassword', user.forgetPassword)
router.put('/resetPassword/:token', user.resetPassword)
router.put('/updatePassword', authenticate, user.updatePassword)
router.put('/updateProfile', authenticate, user.updateProfile)
router.delete('/deleteUser/:id', user.deleteUser);


//orders routes
router.post('/createOrder', authenticate, order.newOrder);
router.get('/singleOrder/:_id', authenticate, order.singleOrder)
router.get('/myOrder',authenticate, order.myOrder)
router.get('/allOrders', authenticate, order.allOrders)
router.put('/orderUpdate/:_id', authenticate, order.orderUpdate)
router.delete('/deleteOrder/:_id', authenticate, order.deleteOrder)


//collections
router.post('/create_category', collection.category)
router.get('/all_shirts/:id', collection.shirts)

module.exports= router;

