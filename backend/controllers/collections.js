const Product = require("../models/product_schema"); 
const Category= require('../models/category_schema');


//create category
const category= async(req,res)=>{
    try{
        console.log("api is working...")
        const product_data= await Category.create(req.body)
        return res.status(200).send({message:"user resitered save data", data: product_data})
    }
    catch(err){
        return res.status(400).send(err.message)
    }
}

//all shirts
const shirts= async(req,res)=>{
    try{
        console.log(req.params.category_id)
        console.log(req.params.id)
        const all_shirts=await Category.findById({_id: req.params.id})
        .populate("product").exec()
        console.log(all_shirts)
        return res.status(200).send({message: "show data", result: all_shirts})
    }
    catch(err){
        return res.status(400).send(err.message)
    }
}


module.exports={
    shirts,
    category
}