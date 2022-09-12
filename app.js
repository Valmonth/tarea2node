const express = require("express");
const { userRoutes } = require("./routes/users.routes");
const { taskRoutes } = require("./routes/task.routes");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

module.exports = {
  app,
};
