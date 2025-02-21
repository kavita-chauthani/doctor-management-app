const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/user-controller");

const router = express.Router();

//login||POST
router.post("/login", loginController);

//register||POST

router.post("/register", registerController);

module.exports = router;
