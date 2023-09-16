const express = require("express");
const Order = require("../controllers/order");

const router = express.Router();

//Tạo đơn hàng mới (đã chạy đúng)
router.route("/create")
    .post(Order.createOrder);

//Lấy tất cả đơn hàng (đã chạy đúng)
router.route("/")  
    .get(Order.getAllOrder);

//Lấy đơn hàng theo mã đơn hàng (đã chạy đúng)
router.route("/detail/:id")
    .get(Order.getOrderById);
    
//Lấy đơn hàng theo email (đã chạy đúng)
router.route("/email/:email") 
    .get(Order.getOrderByEmail);

//Update đơn hàng theo id (đã chạy đúng)
router.route("/update/:id")
    .put(Order.updateOrder);

//Hủy đơn hàng
router.route("/complete/:id")
    .put(Order.completeOrder);

//Tìm kiếm đơn hàng theo số điện thoại
router.route("/phonenumber/:phonenumber")
    .get(Order.getOrderByPhoneNumber);

module.exports = router;    