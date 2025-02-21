const mongoose = require("mongoose");
const AppointSchema = new mongoose.Schema({
  doctorId: {
    type: Object,
    required: [true, "name is required"],
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  duration: {
    type: Number,
    required: [true, "duration is required"],
  },
  appointmentType: {
    type: String,
    required: [true, "appointment is required"],
  },
  patientName: {
    type: String,
    required: [true, "patientName is required"],
  },
  notes: {
    type: String,
    required: [true, " notes is required"],
  },
});

const AppointModel = mongoose.model("Appoint", AppointSchema);

module.exports = AppointModel;
