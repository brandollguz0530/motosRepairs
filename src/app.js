const express = require("express");
const userRouter = require("./routes/user.routes");
const repairsRouter = require("./routes/repairs.routes");
const app = express();

app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/repairs", repairsRouter);

module.exports = app;
