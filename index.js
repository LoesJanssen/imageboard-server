const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const db = require("./db.js");
const Image = require("./image/model.js");
app.listen(port, console.log(`Listening on ${port}`));
