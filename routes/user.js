const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js");


//signup form
router.route("/signup")
.get(userController.userSignupForm)
//user sign-up
.post( wrapAsync(userController.userSignup));


//login form
router.route("/login")
.get(userController.userLoginForm)
//user login
.post(
saveRedirectUrl,
passport.authenticate('local',
 { failureRedirect: '/login'
 ,failureFlash:true}),wrapAsync(userController.userLogin)
);


//user logout
router.get("/logout",userController.userLogout);

module.exports= router;