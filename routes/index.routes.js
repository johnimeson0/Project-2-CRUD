const app = require("../app");
const router = require("express").Router();
const User = require("../models/User.model");


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/home", (req, res, next) => {
  const user = req.session.user
  res.render("home", {user})
});

module.exports = router;
