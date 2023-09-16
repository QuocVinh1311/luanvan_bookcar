const express = require("express");
const Driver = require("../controllers/driver.js");

const router = express.Router();


router.route("/create").post(Driver.createDriver);

router.route("/").get(Driver.getDriver);

router.route("/detail/:id").get(Driver.findDetailDriver);

router.route("/searchdriver/bykeyword").get(Driver.searchDriverByKeyword);

router.route("/update/:id").put(Driver.updateDriver);

router.route("/delete/:id").delete(Driver.deleteDriver);


module.exports = router;    