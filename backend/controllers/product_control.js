const Product = require("../models/product_schema");
const Bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

//add product
const createProduct= async(req, res)=>{
    try{
        console.log("api is working...")
        const product_data= await Product.create(req.body)
        return res.status(200).send({message:"user resitered save data", data: product_data})
    }
    catch(err){
        console.log(err.message)
    }   
}

//show all product
const getAllProduct= async (req, res)=>{
    try{
        const all_products= await Product.find();
        console.log("all_products", all_products)
        return res.json(all_products)
    }
    catch(err){
        console.log(err.message)
    }
}

//get product details
const productInf= async (req, res)=>{
    try{
        const prodInf= await Product.findById({_id:req.params._id});
        console.log("userInf", prodInf)
        return res.send({prodInf})
    }
    catch(err){
        console.log(err.message)
    }
}

delete product
const deleteData= async(req,res)=>{
    console.log("req", req.params.id)
    try{
        const deleteInf=await Product.findByIdAndRemove({_id: req.params.id});
        console.log("delete successfully!", deleteInf)
        res.send({message: "delete successfully!", status: "success"})
        return deleteInf
    }
    catch(err){
        console.log(err.message)
    }
}

//update product information
const updateProduct= async(req,res)=>{
    try{
        const productBody=req.body
        Product.findByIdAndUpdate({_id: req.params.id}, {
            $set:{
                name: productBody.name,
                price: productBody.price,
                rating: productBody.rating,
                stock: productBody.stock,
                images: productBody.images,
                description: productBody.description
            }
        })
        .then((edit)=>{
            console.log(edit)
            res.send({status: "update data successfully! ", "result": edit})
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    catch(err){
        console.log(err.message)
    }
}






module.exports={
    createProduct,
    getAllProduct,
    productInf,
    deleteData,
    updateProduct
}