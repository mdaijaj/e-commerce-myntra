const mongoose= require('../database/db');
const Schema = mongoose.Schema;

const categorySchema=new Schema({
    category_name: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const Category=mongoose.model('Category', categorySchema);
module.exports= Category;