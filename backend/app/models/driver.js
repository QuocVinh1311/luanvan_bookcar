const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true, 
        },
        dayofbirth:{
            type: Date,
            require: true
        },
        address:{
            type: String,
            require: true
        },
        driverlicense:{
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
        },
        phonenumber: {
            type: Number,
            require: true,
            minlength: 10
        },
        status:{
            type: String,
            require: true,
            default: 'Chưa lên lịch'
        },
        user: [
            {type: mongoose.Types.ObjectId, ref: 'User'}
        ],
    }, 
    {timestamps: true}
);

module.exports = mongoose.model("Driver", driverSchema);