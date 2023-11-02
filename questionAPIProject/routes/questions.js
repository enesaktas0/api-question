const express = require("express");

const { Question, validateQuestion } = require("../models/questions");

const router = express.Router();

router.get("/questions/:id", async (req, res) => {
  const id = req.params.id;

  const question = await Question.findById({ _id: id });

  if (!question) {
    res.status(404).send("hatalı ürün id");
    return;
  }
  res.send(product);
  console.log(id);
});

router.put("/questions/:id", async (req, res) => {
  const id = req.params.id;

  const product = await Product.findById(id);

  if (!product) {
    res.send("hatalı ürün id");
    return;
  }

  const result = validateProduct(req.body);

  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }

  product.name = req.body.name;
  product.price = req.body.price;
  product.imageURL = req.body.imageURL;
  product.isActive = req.body.isActive;

  const updatedProduct = await product.save();

  res.send(updatedProduct);
});

router.get("/questions", async (req, res) => {
  const question = await Question.find();
  res.send(question);
});

router.post("/questions", async (req, res) => {
  const result = validateQuestion(req.body);

  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }

  const question = new Question({
    question: req.body.question,
    answers: req.body.answers,
    isActive: req.body.isActive,
  });

  try {
    const result = await question.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
