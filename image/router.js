const { Router } = require("express");
const Image = require("./model");

const router = new Router();

router.get("/image", async (request, response, next) => {
  try {
    const images = await Image.findAll();
    response.send(images);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
