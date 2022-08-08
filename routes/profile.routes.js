const router = require("express").Router();

router.get("/profile", (req, res, next) => {
    const user = req.session.user
    res.render("profile/profile", {user});
});


router.get("/edit-profile", (req, res, next) => {
    res.render("profile/edit-profile");
});

module.exports = router;