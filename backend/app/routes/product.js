const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

//Chèn 1 sản phẩm mới vào DB: (đã chạy đúng)
router.route("/create")
    .post(productController.createProduct);

// router.route("/:type")
//     .get(productController.findProductByType);


router.route("/getproduct")
    .get(productController.getProduct);

//Tìm thông tin chi tiết sản phẩm theo req.params.id (đã chạy đúng)
router.route("/detail/:id")
    .get(productController.findDetailProduct);

//Tìm sản phẩm theo tên (đã chạy đúng)
router.route("/searchproduct/bykeyword")
    .get(productController.searchProductByKeyword);

//Cập nhật thông tin sản phẩm 
router.route("/update/:id")
    .put(productController.updateProduct);

router.route("/delete/:id")
    .delete(productController.deleteProduct);


module.exports = router;