const Cart= require('../models/cart_schema');
const WishCart= require('../models/wish_schema')

const insertToCart=async(req,res)=>{
    try{
        const {quantity, p_id, id}=req.body
        var arr = [{
            quantity: quantity,
            p_id: p_id,
            id: _id
          },{
            quantity: quantity,
            p_id: p_id,
            id: _id
          }
        ];
        const resp= await Cart.insertMany(arr);
        console.log("resp", resp)
        return res.status(200).send({message:"product  save cart", data: resp})
    }
    catch(err){
        console.log(err.message)
        return res.status(400).send(err.message)
    }
}

const insertToWish=async(req,res)=>{
    try{
        const {quantity, p_id, id}=req.body
        var arr = [{
            quantity: quantity,
            p_id: p_id,
            id: _id
          },{
            quantity: quantity,
            p_id: p_id,
            id: _id
          }
        ];
        const resp= await WishCart.insertMany(arr);
        console.log("resp", resp)
        return res.status(200).send({message:"product  save cart", data: resp})
    }
    catch(err){
        console.log(err.message)
        return res.status(400).send(err.message)
    }
}


module.exports={
    insertToCart,
    insertToWish
}

