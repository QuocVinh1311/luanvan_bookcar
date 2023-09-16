const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        imageURL: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        type: {
            type: String,
            require: true,
        },
        method:{
            type: String,
            require: true
        },
        color: {
            type: String,
            require: true,
        },
        carcompany: {
            type: String,
            require: true,
        },
        status: {
            type: String,
            require: true,
            default: "Còn xe",
        },
        amountingarage: {
            type: Number,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);