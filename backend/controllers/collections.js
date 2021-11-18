const Product = require("../models/product_schema"); 
const Category= require('../models/category_schema');

//all shirts
const all_shirts= async(req,res)=>{
    Category.findById({_id: req.params.categoryId})
}
