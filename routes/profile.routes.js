const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config")

/* connect with usermodel page */
router.get("/profile", (req, res, next) => {
    const user = req.session.user
    res.render("profile/profile", {user});
});

router.get("/view-profile/:id", (req, res, next) => {
    const {id} = req.params
    User.findById(id).then((user) => {
        res.render("profile/view-profile", user);
    })
    .catch(err => next(err))
})


/* connect the profile page with the edit page */
router.get("/edit-profile", (req, res, next) => {
    const user = req.session.user
        res.render("profile/edit-profile", user);
});

/* edit form */
router.post("/edit-profile", fileUploader.single("imgUrl"), (req, res, next) => {
    const user = req.session.user
    const {name, location, contact, previousUrl, description, firstParameter, secondParameter, thirdParameter} = req.body
    
    let image;

    if(req.file){
        image = req.file.path
    } else {
        image = previousUrl
    }
    console.log(user)
    User.findByIdAndUpdate(user._id,
        {
            name,
            location,
            contact,
            imgUrl : image,
            description,
            firstParameter,
            secondParameter,
            thirdParameter
        }
        , {new:true}
    ) .then((user) => {
        req.session.user = user
        res.redirect("/profile")
    })
});

/* take the created profile and connect to the profile page */
router.get("/create-profile", (req, res, next) => {
    const user = req.session.user
        res.render("profile/create-profile", user);
});


/* show the first create page */
router.post("/create-profile", fileUploader.single("imgUrl"), (req, res, next) => {
    const user = req.session.user
    console.log(user)
    User.findByIdAndUpdate(user._id,
        {
            name: req.body.name,
            location: req.body.location,
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

/* delete function */
router.get("/delete-profile", isLoggedIn, (req, res, next) => {
    const user = req.session.user
    User.findByIdAndDelete(user._id)
    .then((user) => {
        req.session.destroy()
        res.redirect('/signup')
    })
})
module.exports = router;