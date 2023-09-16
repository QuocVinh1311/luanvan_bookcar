const Order = require("../models/order");
const Product = require("../models/product");
const ApiError = require("../api-error");

//Tạo đơn hàng (đã chạy đúng)
exports.createOrder = async(req, res, next) => {
    const OrderInfo = new Order(req.body);
    try {
        const newOrder = await OrderInfo.save();

        //Chạy vòng lặp trừ amountinstock trong products ra
        //Đầu tiên lấy thông tin các sản phẩm sẽ được thêm vào order ra 
        // const list_products_in_cart = req.body.products;

        // for (let i = 0; i < list_products_in_cart.length; i++) {

        //     //Lấy thông tin sản phẩm 
        //     const infoProduct = await Product.findById(list_products_in_cart[i]._id);

        //     const options = { returnDocument: "after" };
        //     //Dữ liệu sẽ được cập nhật
        //     const updateData = {
        //         productname: infoProduct.productname,
        //         price: infoProduct.price,
        //         type: infoProduct.type,
        //         description: infoProduct.description,
        //         color: infoProduct.color,
        //         brand: infoProduct.brand,
        //         imageURL: infoProduct.imageURL,
        //         origin: infoProduct.origin,
        //         amountinstock: infoProduct.amountinstock - list_products_in_cart[i].quantity,
        //     }

            // const productUpdate = await Product.findByIdAndUpdate(list_products_in_cart[i]._id, updateData, options);
        // }
        return res.send(newOrder);
    } catch (error) {
        return next(new ApiError(500, "Có lỗi xảy ra khi tạo đơn hàng"));
    }
}

//Lấy tất cả đơn hàng (đã chạy đúng)
exports.getAllOrder = async(req, res, next) => {
    try {
        const order_list = await Order.find();
        return res.send(order_list);
    } catch (error) {
        return next(new ApiError(500, "Có lỗi xảy ra khi lấy thông tin đơn hàng"));
    }
}

//Lấy đơn hàng theo mã đơn hàng (đã chạy đúng)
exports.getOrderById = async(req, res, next) => {
    try {
        const detailOrder = await Order.findById(req.params.id);
        return res.send(detailOrder);
    } catch (error) {
        return next(new ApiError(500, "Có lỗi xảy ra khi lấy thông tin đơn hàng"));
    }
}

//Lấy danh sách đơn hàng theo email (đã chạy đúng)
exports.getOrderByEmail = async(req, res, next) => {
    try {
        const list_of_order_by_email = await Order.find({ email: req.params.email });
        return res.send(list_of_order_by_email);
    } catch (error) {
        return next(new ApiError(500, "Có lỗi xảy ra khi lấy thông tin đơn hàng"));
    }
}

//Update đơn hàng theo id
exports.updateOrder = async(req, res, next) => {
    try {
        const options = { returnDocument: "after" };
        const order_update = await Order.findByIdAndUpdate(req.params.id, req.body, options);
        return res.send(order_update);
    } catch (error) {
        return next(new ApiError(500, "Có lỗi xảy ra khi cập nhật thông tin đơn hàng"));
    }
}

//Hủy đơn hàng (đã chạy đúng)
exports.completeOrder = async(req, res, next) => {
    try {
        const options = { returnDocument: "after" };
        const complete_order = await Order.findByIdAndDelete(req.params.id, req.body, options);
        const infoProduct = await Product.findById(req.params.id);
            const updateData = infoProduct.amountingarage + 1;
        const productUpdate = await Product.findByIdAndUpdate(req.params.id, updateData, options);
       

        return res.send(productUpdate);
    } catch (error) {
        return next(error);
    }
}

//Lấy danh sách đơn hàng theo số điện thoại
exports.getOrderByPhoneNumber = async(req, res, next) => {
    try {
        const list_order = await Order.find({ phonenumber: req.params.phonenumber });
        return res.send(list_order);
    } catch (e) {
        return next(new ApiError(500, "Có lỗi xảy ra khi hủy đơn hàng"));
    }
}

exports.deleteOrder = async (req, res, next) => {
    try{
        const getId = req.params.id
        const response = await Order.findByIdAndDelete(getId);
        return res.send(response)
    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi xóa đơn hàng!"));  //Không cần return cũng được
    }
}

