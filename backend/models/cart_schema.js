const mongoose= require('../database/db');
const Schema = mongoose.Schema;

const cartSchema=new Schema({
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

const Cart=mongoose.model('Cart', cartSchema);
module.exports= Cart;   