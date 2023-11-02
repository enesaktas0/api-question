const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const questions = require("./routes/questions");

const connectDb = require("./config");

connectDb;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.use("/api", questions);
app.use("/", (req, res) => {
  res.send("enes");
});

app.listen(3000, () => {
  console.log("app is working on 3000 port");
});
