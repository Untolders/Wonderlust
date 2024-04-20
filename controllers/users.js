const User =require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

//signup form
module.exports.userSignupForm = (req,res)=>{
    res.render("users/signup.ejs");
};

//user signup
module.exports.userSignup = async(req,res)=>{

    try{
    let {username,email,password}=req.body;

    let newUser= new User({
        email:email,
        username:username,

    });

    let user= await User.register(newUser,password);
    req.login(user,(err)=>{
        if(err){
          
            return next(err);
            
        }
        req.flash("success","Welcome to Wonderlust");
        res.redirect("/listing");
    });
  
}
catch(err){
    req.flash("error",err.message);
    res.redirect("/signup");
    
}
    
};

//login form
module.exports.userLoginForm = (req,res)=>{


    res.render("users/login.ejs");
};


//user login
module.exports.userLogin = async(req,res)=>{
    
    req.flash("success","Logined success!");
    let redirectUrl =(res.locals.redirectUrl||"/listing");
    res.redirect(redirectUrl);
 
 };

//user logout
 module.exports.userLogout = (req,res)=>{
    
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You Logout.");
        res.redirect("/listing");
    });

};