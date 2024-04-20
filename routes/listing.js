const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn} = require("../middleware.js");
const { isOwner ,validateListing  } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

  
//listing route
router.get("/",wrapAsync(listingController.index));


//new listing route
router.route("/new")
.get(isLoggedIn,listingController.renderNewForm)
//adding new listing
.post(isLoggedIn,
  upload.single('image'),
  validateListing,
   wrapAsync(listingController.createListing));


//Show route
router
.route("/:id")
.get(wrapAsync(listingController.showListing))
//Editing listing
.put(
  isLoggedIn,
  isOwner,
  upload.single('image'),
  validateListing,
   wrapAsync(listingController.editListing));


//route for editing listing
router.get("/:id/edit" ,
isLoggedIn,
isOwner,
 wrapAsync(listingController.renderEditForm));


// Delete route
router.get("/:id/delete" ,
isLoggedIn,
isOwner,
wrapAsync(listingController.destroyListing));




module.exports = router;


