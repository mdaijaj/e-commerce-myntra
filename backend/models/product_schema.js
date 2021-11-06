const mongoose= require('../database/db');
const Bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Schema = mongoose.Schema;

var product_schema=  new Schema({
    name: {
       type: String,
       required: true,
       trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        maxLength: [8, "Price cannot exteed 8 charactor"]
    },
    rating: {
        type: Number,
        required: true
    },
    collections: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: [true, "please enter your stock"],
        default:1
    },
    category: {
        type: String,
        required: [true, "please enter your category"],
        default: Date.now
    },
    images: [
        {
            public_id: {
            type: String,
            required: true,
            },
            url: {
                type: String,
                required: true,
            } 
        }
    ],
    numOfReviews: {
        type: Number,
        default: 1
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "Product",
                required: true,
            },
            name:{
                type: String,
                required: true
            },
            rating:{
                type: Number,
                required: true
            },
            comment:{
                type: String,
                required: true
            },
        }
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true,
    },
}, {
    timestamps: true
});

const Product=mongoose.model('Product', product_schema);
module.exports= Product;