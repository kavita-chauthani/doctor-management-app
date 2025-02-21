const express = require("express");
const addDoctor = require("../controllers/admin-controller");
const upload = require("../middleware/multer");

router = express.Router();

router.post("/addDoctor", upload.single("image"), addDoctor);

module.exports = router;
