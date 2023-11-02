const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const questions = require("./routes/questions");

const username = "enesaktas";
const password = "LmzBVBkVpW8sy3HN";
const database = "questions";

const connectDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@cluster0.vmezfft.mongodb.net/${database}`
    );
    console.log("mongoDb bağlantısı gerçekleştirldi.");
  } catch (err) {
    console.log(err);
  }
};

connectDb();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.use("/api", questions);
app.use("/", (req, res) => {
  res.send("enes");
});

app.listen(3001, () => {
  console.log("app is working on 3000 port");
});
