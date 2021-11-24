const mongoose= require('../database/db');
const Schema = mongoose.Schema;

const categorySchema=new Schema({
    category_name: {
        type: String,
        required: true,
        unique: true
    },
    p_id:[ {
        type: mongoose.Schema.ObjectId,
        ref: "Product"
    }],
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const Category=mongoose.model('Category_model', categorySchema);
module.exports= Category;