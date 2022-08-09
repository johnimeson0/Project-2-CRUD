const app = require("../app");
const User = require("../models/User.model");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/home", (req, res, next) => {
  res.render("home")
});

module.exports = router;
