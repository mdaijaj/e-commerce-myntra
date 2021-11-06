const Product = require("../models/product_schema");
const Bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

//add product
const createProduct= async(req, res)=>{
    try{
        // req.body.user=req.body.id;
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

// delete product
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


// product reviews by user;
const createProductReview=async(req,res)=>{
    console.log("aijaj api is working....")
    const {rating, comment, productId}=req.body

    const product= await Product.findById(productId);
    console.log("product", product)
    const isReviewed= product.reviews.find((rev)=>rev.user.toString()===req.user._id.toString());
    console.log("isReviewed", isReviewed)

    const review={
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    }
    if(isReviewed){
        product.reviews.forEach(rev => {
            if(rev.user.toString() === req.user._id.toString()){
                rev.rating= rating,
                rev.comment= comment
            }
        });
    }else{
        product.reviews.push(review)
        product.numOfReviews= product.reviews.length;
    }

    let avg=0;
    product.ratings= product.reviews.forEach(rev=>{
        avg+= rev.rating
    }) 

    product.ratings= avg
    /product.reviews.length;

    await product.save({validateBeforeSave: false});
    res.status(200).send({success: true})
}

//all reviews
const allReviews= async(req,res)=>{
    console.log("api is working.....")
    console.log(req.body)
    const product= await Product.findById(req.body._id)
    console.log("product", product)
    if(!product){
        return res.status(200).send("error while show all reviews", err.message)
    }
    return res.status(200).send({message: "all reviews success", result: product.reviews})
}


//delete review
const deleteReview= async(req,res, next)=>{
    console.log("api is working.....")
    const product= await Product.findById(req.body._id)
    console.log("product", product)
    if(!product){
        return res.status(200).send("error while show all reviews", err.message)
    }
    console.log("req.query._id", req.query._id.toString())

    const reviews=await product.reviews.filter((rev)=>rev._id.toString()!== req.query._id.toString());
    console.log("reviews...", reviews)
    let avg=0;
    reviews.forEach((rev)=>{
        avg+= rev.rating
    })
    const ratings= avg/reviews.length;
    const numOfReviews= reviews.length;
    await Product.findByIdAndUpdate(req.query._id, {
        reviews,
        ratings,
        numOfReviews
    },{
        new: true,
        runValidators: true,
        useFindAndModify: false
    }
    )
    return res.status(200).send({message: "Reviews delete success", result: product.reviews})
}



module.exports={
    createProduct,
    getAllProduct,
    productInf,
    deleteData,
    updateProduct,
    createProductReview,
    allReviews,
    deleteReview
}