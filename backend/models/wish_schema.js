const mongoose= require('../database/db');
const Schema = mongoose.Schema;

const wishSchema=new Schema({
    quantity: {
        type: Number,
        required: true,
    },
    p_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Product"
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const Wish=mongoose.model('Wish', wishSchema);
module.exports= Wish;   