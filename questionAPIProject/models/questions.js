const mongoose = require("mongoose");
const Joi = require("joi");

const quesetionSchema = mongoose.Schema({
  question: String,
  answers: [String],
  isActive: Boolean,
});

const validateQuestion = (question) => {
  const quesetionSchema = new Joi.object({
    question: Joi.string(),
    answers: Joi.array().items(Joi.string()),
    isActive: Joi.boolean(),
  });

  return quesetionSchema.validate(question);
};

const Question = mongoose.model("Question", quesetionSchema);

module.exports = { Question, validateQuestion };
