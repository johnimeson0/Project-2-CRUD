const User = require("../models/User.model");

const router = require("express").Router();

/* search box */
router.post("/search", (req, res, next) => {
  const {parameters, search} = req.body
  console.log(parameters, search)
  User.find({[parameters]: search})
  .then((users) => {
    console.log(users)
    res.render("resultsearch", {users})
  })
  .catch((error) => (error));
});



module.exports = router;