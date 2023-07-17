const express = require("express");

const app = express();

// app.use(express.json());

app.use("/api/v1/hire", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Found request!!",
  });
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "Didn't find URL",
  });
});

module.exports = app;
