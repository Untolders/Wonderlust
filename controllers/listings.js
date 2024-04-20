const Listing =require("../models/listings.js");
const { listingSchema }=require("../schema.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken } ) ;


// index 
module.exports.index=async (req, res,next) => {

    // Fetch all listings from the database
    const allListing = await Listing.find({});
  
    // Render the "index.ejs" template with the listings data
    res.render("listings/index.ejs", { allListing });

  };

// get add new
module.exports.renderNewForm =(req,res)=>{

    res.render("listings/new-listing.ejs");

 };

//post add new
 module.exports.createListing =async(req,res,next)=>{
  let response = await geocodingClient.forwardGeocode({
    query: req.body.location,
    limit: 1
  })
    .send();
    
    
  let url=req.file.path;
  let filename=req.file.filename;
  const newListing = new Listing(req.body);
  newListing.owner = req.user._id;
  newListing.image={url,filename};
  newListing.geometry=response.body.features[0].geometry;
  await newListing.save();
  req.flash("success","New listing Saved!");
   
   res.redirect( "/listing") ;

 

};

// show
module.exports.showListing = async(req,res,next)=>{

  let {id} =req.params;

  const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
 
  if(!listing){
    req.flash("error","Not Exist!");
    res.redirect("/listing");
  }

  res.render("listings/show.ejs",{listing});

};

//get edit form
module.exports.renderEditForm = async (req,res,next)=>{
  
  let {id} =req.params;

  const listing = await Listing.findById(id);
  if(!listing){
    req.flash("error","Not Exist!");
    res.redirect("/listing");
  }

  res.render("listings/update.ejs",{listing});
};

// post edit listing
module.exports.editListing = async (req,res,next)=>{
  let response = await geocodingClient.forwardGeocode({
    query: req.body.location,
    limit: 1
  })
    .send();
    

  let {id} =req.params;
  
 
  let listing = await Listing.findByIdAndUpdate(id , {...req.body})
 
 
    
    if(typeof req.file!="undefined"){
      let url=req.file.path;
  let filename=req.file.filename;
      listing.image={url,filename};
        
      }
      listing.geometry=response.body.features[0].geometry;
      await listing.save();
    console.log("updated");
    req.flash("success","Listing Updated!");
    res.redirect(`/listing/${id}`);
 
  };

//destroy listing 
  module.exports.destroyListing = async(req,res,next)=>{

    let {id} =req.params;
  
    const listing = await Listing.findByIdAndDelete(id);
    console.log("deleted successfully");
    req.flash("success","Listing Deleted!");
    res.redirect("/listing");
  
  };