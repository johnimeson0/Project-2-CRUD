const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
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

router.post("/edit-profile", (req, res, next) => {
    const user = req.session.user
    console.log(user)
    User.findByIdAndUpdate(user._id,
        {
            name: req.body.name,
            contact: req.body.contact,
            imgUrl: req.body.imgUrl,
            description: req.body.description,
            firstParameter: req.body.firstParameter,
            secondParameter: req.body.secondParameter,
            thirdParameter: req.body.thirdParameter
        }
        , {new:true}
    ) .then((user) => {
        req.session.user = user
        res.redirect("/profile")
    })
});

router.get("/create-profile", (req, res, next) => {
    const user = req.session.user
        res.render("profile/create-profile", user);
});

router.post("/create-profile", (req, res, next) => {
    const user = req.session.user
    console.log(user)
    User.findByIdAndUpdate(user._id,
        {
            name: req.body.name,
            contact: req.body.contact,
            imgUrl: req.body.imgUrl,
            description: req.body.description,
            firstParameter: req.body.firstParameter,
            secondParameter: req.body.secondParameter,
            thirdParameter: req.body.thirdParameter
        }
        , {new:true}
    ) .then((user) => {
        req.session.user = user
        res.redirect("/home")
    })
});


router.get("/delete-profile", isLoggedIn, (req, res, next) => {
    const user = req.session.user
    User.findByIdAndDelete(user._id)
    .then((user) => {
        req.session.destroy()
        res.redirect('/signup')
    })
})
module.exports = router;