const Product = require("../models/product");
const ApiError = require("../api-error");

//Chèn 1 sản phẩm vào DB (đã chạy đúng)
 const createProduct = async (req, res, next) => {
    const productInfo = new Product(req.body); //biến chưa thông tin sản phẩm từ req.body
    try{
        const newProduct = await productInfo.save();
        return res.send(newProduct);
    }catch(err){
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));
    }
}

//Tìm kiếm sản phẩm theo loại hoặc tất cả sản phẩm (đã chạy đúng)
// const findProductByType = async (req, res, next) => {
//     try{
//         const type_of_product = req.params.type;
//         if(type_of_product != "all"){
//             const list_of_product = await ProductModel.find({type: type_of_product});
//             return res.send(list_of_product);   //Không cần return cũng được
//         }else{
//             const list_of_product = await ProductModel.find();
//             return res.send(list_of_product);   //Không cần return cũng được
//         }

//     }catch(err){
//         // return res.status(501).send(err);
//         return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));
//     }
// }


//filtering, sorting, pagination
const getProduct = async (req, res, next)=>{
    try{
        // const queries = {...req.query}
        // //Tách các trường đặc biệt ra khỏi filter

        // const excludeFields = ['limit', 'sort', 'page', 'fields']
        // excludeFields.forEach(el => delete queries[el])
        // //Format lại các operator theo đúng mongoose

        const products = await Product.find();
        return res.send(products); 
    }catch{
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));  //Không cần return cũng được
    }
}
//Hiển thị chi tiết sản phẩm (đã chạy đúng)
const findDetailProduct = async (req, res, next) => {
    try{
        const id_of_product = req.params.id;
        const detail_of_product = await Product.findById(id_of_product);
        return res.send(detail_of_product); //Không cần return cũng được
    }catch{
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));  //Không cần return cũng được
    }
}

//Tìm sản phẩm theo tên qua keyword (đã chạy đúng)
const searchProductByKeyword = async (req, res, next) => { 
    try{
        const keyword = req.query.keyword;
        const list_product = await Product.find({ name: { $regex: `${keyword}`, $options: 'i'}});
        return res.send(list_product);
    }catch{
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));  //Không cần return cũng được
    }
}

//Cập nhật thông tin 1 sản phẩm (đã chạy đúng)
const updateProduct = async (req, res, next) => {
    try{
        const updateDoc = req.body;
        console.log("updateDoc", updateDoc)
        const options = {returnDocument: "after"};
        const update = await Product.findByIdAndUpdate(req.params.id, updateDoc, options);
        return res.send(update);
    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi cập nhật thông tin sản phẩm!"));  //Không cần return cũng được
    }
}

const deleteProduct = async (req, res, next) => {
    try{
        const getId = req.params.id
        const response = await Product.findByIdAndDelete(getId);
        return res.send(response)
    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi xóa sản phẩm!"));  //Không cần return cũng được
    }
}

module.exports = {createProduct, updateProduct, findDetailProduct, searchProductByKeyword, deleteProduct, getProduct}