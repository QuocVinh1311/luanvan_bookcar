const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
        },
        
        phonenumber: {
            type: String,
            require: true,
            minlength: 10,
        },
        address: {
            type: String,
            require: true,
        },
        note: {
            type: String,
        },
        total: {
            type: Number,
            require: true,
        },
        payment: {
            type: String,
            require: true,
            default: "Thanh toán tiền mặt",
        },
        method:{
            type: String,
            require: true
        },
        type:{
            type:String,
            require: true
        },
        driver:{
            type: String,
            require: true
        },
        daystart:{
            type: Date,
            require: true
        },
        dayend:{
            type: Date,
            require: true
        },
        wherestart:{
            type: String,
            require: true
        },
        whereend:{
            type: String,
            require: true
        },
        product:[
            {type: mongoose.Types.ObjectId, ref: 'Product'}
        ],
        user: [
            {type: mongoose.Types.ObjectId, ref: 'User'}
        ],
        

    },
    {timestamps: true}
);

module.exports = mongoose.model("Order", orderSchema);