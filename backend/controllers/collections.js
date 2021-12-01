const Product = require("../models/product_schema"); 
const Category= require('../models/category_schema');


//create category
const createCategory= async(req,res)=>{
    try{
        console.log("api is working...")
        const product_data= await Category.create(req.body)
        return res.status(200).send({message:"user resitered save data", data: product_data})
    }
    catch(err){
        return res.status(400).send(err.message)
    }
}

const allCategories= async (req,res)=>{
    try{
        console.log("api is running bro..")
        const allData= await Category.find({});
        console.log(allData)
        return res.status(200).send({message: "show data", result: allData})
    }
    catch(err){
        console.log(err.message)
        return res.status(400).send(err.message)
    }
}

//all shirts   we have to use populate here???
const category= async(req,res)=>{
    try{
        console.log(req.params.collections)
        const all_shirts=await Category.findById({_id: req.params._id})
        .populate({path: "p_id", model: "Product"})        
        console.log("all_shirts", all_shirts)
        return res.status(200).send({message: "show data", result: all_shirts})
    }
    catch(err){
        console.log(err.message)
        return res.status(400).send(err.message)
    }
}

module.exports={
    category,
    createCategory ,
    allCategories
}