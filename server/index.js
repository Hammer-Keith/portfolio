require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const app = express();
const axios = require("axios");
const mainCtrl = require("./controllers/mainCtrl.js");

//Middlewares
app.use(express.static(`${__dirname}/../build`));
app.use(json());
app.use(cors());

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening on ${process.env.PORT || 3001}!`);
});
