const mongoose= require('../database/db');
const Schema = mongoose.Schema;

const categorySchema=new Schema({
    category_name: {
        type: String,
        required: true,
        unique: true
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    id: {
        type: mongoose.Schema.ObjectId,
        ref: "Product"
    }
});

const Category=mongoose.model('Category_model', categorySchema);
module.exports= Category;