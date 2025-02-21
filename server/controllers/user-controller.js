const User = require("../models/user-model");
const bcrypt = require("bcrypt");

//register callback
const loginController = async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Successfully", success: true });
  } catch (error) {
    res
      .status(500)
      .send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
  }
};

const registerController = () => {};

module.exports = { loginController, registerController };
