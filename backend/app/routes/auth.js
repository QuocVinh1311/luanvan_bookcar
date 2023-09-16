const express = require("express");
const Auth = require("../controllers/auth");

const router = express.Router();

//Tạo mới 1 tài khoản
router.route("/register").post(Auth.register);

router.route("/registeruser").post(Auth.registerUser);
//Đăng nhập    
router.route("/login")
    .post(Auth.login);

    router.route("/getuser")
    .get(Auth.getUser);

    router.route("/getonedriver/:id")
    .get(Auth.getOneDriver);

    router.route("/getdriver")
    .get(Auth.getDriver);
//Cập nhật thông tin tài khoản
router.route("/updateprofile/:id")
    .put(Auth.updateUserProfile);

    router.route("/updatedriver/:id")
    .put(Auth.updateDriver);

//Cập nhật mật khẩu
router.route("/updatepassword/:id")
    .put(Auth.updatePassword);

//Lấy danh sách tài khoản người dùng (tất cả hoặc theo email)
router.route("/getaccount/:email")
    .get(Auth.getAccount);

//Xóa tài khoản người dùng
router.route("/delete/:id")
    .delete(Auth.deleteAccount);

module.exports = router;