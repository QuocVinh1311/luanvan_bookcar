const Product = require("./product");
const Auth = require("./auth");
const Order = require("./order");
const ProductCategory = require("./product_category");
const Driver = require("./driver")

const routes = (app) => {
    
//route tài khoản
app.use("/api/auth", Auth);

//route sản phẩm
app.use("/api/products", Product);

//route cho tài xế
app.use("/api/driver", Driver)

//route cho api order
app.use("/api/orders", Order);

//route loại sản phẩm
app.use("/api/productcategory",ProductCategory);

}

module.exports = routes;