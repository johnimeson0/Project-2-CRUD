const app = require("../app");
const router = require("express").Router();
const User = require("../models/User.model");


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/home", (req, res, next) => {
  const currentUser = req.session.user
  User.findById(currentUser._id)
  .populate("matchSent matchRecieved matches")
  .then((user) => {
    res.render("home", user)
  })
  .catch((err) => next(err))
});

module.exports = router;
