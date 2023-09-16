const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    type: {
        type: Number,
        require: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("ProductCategory", productCategorySchema);