const router = require("express").Router();
const User = require("../models/User.model");

router.get("/profile", (req, res, next) => {
    const user = req.session.user
    res.render("profile/profile", {user});
});

router.get("/profile/:id", (req, res, next) => {
    const {id} = req.params
    User.findById(id).then((user) => {
        res.render("profile/profile", user);
    })
    .catch(err => next(err))
})

router.get("/edit-profile", (req, res, next) => {
    const user = req.session.user
        res.render("profile/edit-profile", user);
});

router.post("edit-profile", (req, res, next) => {
    
})

router.get("/create-profile", (req, res, next) => {
    const user = req.session.user
        res.render("profile/create-profile", user);
});


module.exports = router;