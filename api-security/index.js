const express = require("express");
const config = require("./config");
const cors = require("cors");
require("dotenv").config();

const app = express();

const authRoute = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoute);

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`security micro-service running on port:${PORT}`)
);
