const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const adminRoute = require("./routes/admin-route");

dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/admin", adminRoute);

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING AT PORT:${PORT}`.bgCyan.white);
});
