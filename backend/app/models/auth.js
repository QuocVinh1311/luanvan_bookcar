const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true, 
        },
        email: {
            type: String,
            require: true,
            unique: true,      
        },
        phonenumber: {
            type: String,
            require: true,
            minlength: 10,
        },
        password: {
            type: String,
            require: true,
        },

        role:{
            type: String,
            enum: ['1', '2'],
            default: '2'
        },

        order: [
            {type: mongoose.Types.ObjectId, ref: 'Order'}
        ],
        // driver: [
        //     {type: mongoose.Types.ObjectId, ref: 'Driver'}
        // ],

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
        status:{
            type: String,
            require: true,
            default: 'Chưa lên lịch'
        },
        isDriver:{
            type: Boolean,
            default: false,
        },

        // refreshtoken:{
        //     type: String
        // },
        // //Quên mật khẩu
        // passwordChangeAt:{
        //     type: String
        // },
        // //Khi đổi mật khẩu sẽ gửi một đoạn token qua mail
        // passwordResetToken:{
        //     type: String
        // },
        // //Thời gian token hết hạn
        // passwordResetExpires:{
        //     type: String
        // }

            
       

    }, 
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);