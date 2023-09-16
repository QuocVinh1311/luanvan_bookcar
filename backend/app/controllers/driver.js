const Driver = require("../models/driver");
const ApiError = require("../api-error");

//Thêm tài xế vào DB (đã chạy đúng)
 const createDriver = async (req, res, next) => {
    const driverInfo = new Driver(req.body); 
    try{
        const newDriver = await driverInfo.save();
        return res.send(newDriver);
    }catch(err){
        return next(new ApiError(500,"Có lỗi xảy ra khi thêm tài xế!"));
    }
}

//Tìm kiếm sản phẩm theo loại hoặc tất cả sản phẩm (đã chạy đúng)
const getDriver = async (req, res, next) => {
    try{
        const list_driver = await Driver.find();
        return res.send(list_driver); 
    }catch(err){
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));
    }
}


const findDetailDriver = async (req, res, next) => {
    try{
        const id_driver = req.params.id;
        const detail_driver = await Driver.findById(id_driver);
        return res.send(detail_driver); //Không cần return cũng được
    }catch{
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin sản phẩm"));  //Không cần return cũng được
    }
}

//Tìm sản phẩm theo tên qua keyword (đã chạy đúng)
const searchDriverByKeyword = async (req, res, next) => { 
    try{
        const keyword = req.query.keyword;
        const list_driver = await Driver.find({ name: { $regex: `${keyword}`, $options: 'i'}});
        return res.send(list_driver);
    }catch{
        return next(new ApiError(500,"Có lỗi xảy ra khi lấy thông tin tài xế!"));  //Không cần return cũng được
    }
}


const updateDriver = async (req, res, next) => {
    try{
        const updatedDoc = req.body;
        console.log("updatedDoc", updatedDoc)
        const options = {returnDocument: "after"};
        const update = await Product.findByIdAndUpdate(req.params.id, updatedDoc, options);
        return res.send(update);
    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi cập nhật thông tin sản phẩm!"));  //Không cần return cũng được
    }
}

const deleteDriver = async (req, res, next) => {
    try{
        const getId = req.params.id
        const response = await Driver.findByIdAndDelete(getId);
        return res.send(response)
    }catch(error){
        return next(new ApiError(500,"Có lỗi xảy ra khi xóa tài xế!"));  //Không cần return cũng được
    }
}

module.exports = {createDriver, getDriver,updateDriver, findDetailDriver, searchDriverByKeyword, deleteDriver}