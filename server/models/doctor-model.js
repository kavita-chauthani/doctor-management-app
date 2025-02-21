const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    image: {
      type: String,
      required: [true, "imageis required"],
    },
    speciality: {
      type: String,
      required: [true, "password is required"],
    },

    degree: {
      type: String,
      required: [true, "degree is required"],
    },
    date: {
      type: Number,
      required: [true, "date is required"],
    },
    working_hour: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);

const doctorModel = mongoose.model("doctor", doctorSchema);

module.exports = doctorModel;
