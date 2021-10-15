const express = require("express");
const config = require("./config");
const cors = require("cors");
require("dotenv").config();

const { usersRoute, tasksRoute, projectsRoute } = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/projects", projectsRoute);
app.use("/api/tasks", tasksRoute);
app.use("/api/users", usersRoute);

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`logic micro-service running on port:${PORT}`)
);
