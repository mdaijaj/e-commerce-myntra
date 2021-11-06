const Product= require('../models/product_schema')
const Order= require('../models/order_schema')

const newOrder= async(req,res)=>{
    const { shippingInfo, paymentInfo, orderItems, itemPrice, shippingPrice, taxPrice, totalPrice}= req.body
    const order= await Order.create({
        shippingInfo, paymentInfo, orderItems, itemPrice, shippingPrice, taxPrice, totalPrice,
        paidAt: Date.now(),
        user: req.user.id,
    })
    return res.status(200).send({success: true, result: order})
}


module.exports={
    newOrder
}