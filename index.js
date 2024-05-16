var express = require("express");
var router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("your api key put here");
/* GET home page. */
router.get("/", async (req, res, next) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log(response)
  const text = response.text();
  res.send(text);
});


module.exports = router;
