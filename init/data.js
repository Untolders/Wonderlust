const sampleListings = [
    {
        title: "Oceanfront Paradise",
        description: "Escape to this luxurious oceanfront villa with 5 bedrooms, a private beach, and panoramic views of the turquoise waters. Perfect for a tropical getaway.",
        price: 22000,
        location: "Maui",
        country: "United States",
        image: {
          url:"https://a0.muscache.com/im/pictures/10b767a2-e1a8-4a80-b6d7-f864fcc4b08d.jpg?im_w=720",
          filename:"listingImage"
        }
        },
      {
        title: "Alpine Chalet Retreat",
        description: "Experience the charm of the Swiss Alps in this cozy chalet with 4 bedrooms, a crackling fireplace, and stunning alpine vistas. Ideal for winter sports enthusiasts.",
        price: 12000,
        location: "Zermatt",
        country: "Switzerland",
        image: {
          url:"https://a0.muscache.com/im/pictures/d8a6fd68-126f-4be3-b522-ac886229ac12.jpg?im_w=720",
          filename:"listingImage"
        }
        },
      {
        title: "Exotic Island Getaway",
        description: "Discover paradise on a private island with this exclusive 2-bedroom villa surrounded by crystal-clear waters. Enjoy tranquility and seclusion.",
        price: 25000,
        location: "Bora Bora",
        country: "French Polynesia",
        image:{

        url:"https://a0.muscache.com/im/pictures/df4f4ce9-f5ad-4dec-99a0-26942422b687.jpg?im_w=720",
        filename:"listingImage"
      }
      },
      {
        title: "Historic Castle Retreat",
        description: "Step back in time with a stay in this grand castle with 8 bedrooms, antique furnishings, and sprawling grounds. Live like royalty for a weekend.",
        price: 35000,
        location: "Edinburgh",
        country: "United Kingdom",
        image:{
          url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA5NjkyMDc0NjE3OTI2NTQ3MQ%3D%3D/original/e3c5b1cc-2569-4fe0-bb9c-b0946538abc8.jpeg?im_w=720",
          filename:"listingImage"
        }
        },
      {
        title: "Majestic Rainforest Lodge",
        description: "Immerse yourself in the beauty of the Amazon rainforest with a stay in this eco-friendly lodge. Explore lush landscapes and encounter exotic wildlife.",
        price: 8000,
        location: "Iquitos",
        country: "Peru",
        image:{
          url: "https://a0.muscache.com/im/pictures/2a46f81d-fb08-4573-a68e-60271d632808.jpg?im_w=720",
          filename:"listingImage"
        }
      },
      {
        title: "Sleek Urban Penthouse",
        description: "Live in luxury with this modern penthouse in the heart of the city. Enjoy 360-degree views, a private terrace, and contemporary design.",
        price: 18000,
        location: "New York City",
        country: "United States",
        image: {
         url:"https://a0.muscache.com/im/pictures/miso/Hosting-36774428/original/15110762-267f-4a08-88ae-2d9d3603284d.jpeg?im_w=720",
         filename:"listingImage"
        }
      },
      {
        title: "Coastal Cottage Getaway",
        description: "Unwind in this charming coastal cottage with 3 bedrooms, a private garden, and easy access to sandy shores. Perfect for a seaside escape.",
        price: 10000,
        location: "Cape Cod",
        country: "United States",
        image: {
          url:"https://a0.muscache.com/im/pictures/cde2916e-eb85-4020-8a5f-fba017eddec8.jpg?im_w=720",
        filename:"listingImage"
      }
    },
      {
        title: "Mountain-View Cabin Retreat",
        description: "Escape to the tranquility of the mountains in this rustic cabin with 2 bedrooms, a wood-burning fireplace, and panoramic mountain views.",
        price: 6000,
        location: "Rocky Mountains",
        country: "United States",
        image: {
          url: "https://a0.muscache.com/im/pictures/e4923537-fb49-40f2-b7d6-5fff94961e7b.jpg?im_w=720",
        filename:"listingImage"
      }
     },
      {
        title: "Seaside Villa in Santorini",
        description: "Discover the charm of Santorini with a stay in this white-washed villa overlooking the Aegean Sea. Enjoy breathtaking sunsets and Greek hospitality.",
        price: 20000,
        location: "Santorini",
        country: "Greece",
        image: {
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-854065432551935839/original/270e6f4f-5fea-4117-a552-523370f62a74.jpeg?im_w=720",
        filename:"listingImage"
      }
    },
      {
        title: "Zen Garden Retreat",
        description: "Find peace and serenity in this Zen-inspired garden retreat. Meditate in the tranquil garden or relax in the cozy interior with 1 bedroom.",
        price: 5000,
        location: "Kyoto",
        country: "Japan",
        image: {
          url: "https://a0.muscache.com/im/pictures/2e75fae1-4be3-46fd-b52a-e56eb0c7795c.jpg?im_w=720",
        filename:"listingImage"
      }
    },
      {
        title: "Historic Townhouse in Charleston",
        description: "Step into the past with a stay in this beautifully preserved historic townhouse. Enjoy 3 bedrooms, period decor, and a charming courtyard.",
        price: 15000,
        location: "Charleston",
        country: "United States",
        image: {
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-23617238/original/a450489f-bd65-44ed-8042-89ba0f1036ec.jpeg?im_w=720",
        filename:"listingImage"
      }
     },
      {
        title: "Modern Beach House in Sydney",
        description: "Experience coastal living in this modern beach house with 4 bedrooms, panoramic ocean views, and direct access to the sandy shores of Sydney.",
        price: 22000,
        location: "Sydney",
        country: "Australia",
        image: {
          url: "https://a0.muscache.com/im/pictures/46c4fb26-6005-4be0-b908-09c68a3a69e0.jpg?im_w=720",
        filename:"listingImage"
      }
     },
      {
        title: "Eco-Friendly Cabin in the Woods",
        description: "Connect with nature in this eco-friendly cabin surrounded by dense woods. Enjoy a cozy atmosphere, 2 bedrooms, and sustainable living.",
        price: 7000,
        location: "Vancouver Island",
        country: "Canada",
        image: {
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-945552515163782010/original/6300df88-af2e-4620-a73e-7660def9895f.jpeg?im_w=720",
        filename:"listingImage"
      }
     },
      {
        title: "Lakeside Cabin Retreat",
        description: "Escape to a cozy cabin by the lake with 2 bedrooms, a private dock, and stunning views. Perfect for fishing, kayaking, and relaxation.",
        price: 7500,
        location: "Lake Placid",
        country: "United States",
        image: {
          url: "https://a0.muscache.com/im/pictures/8a1cccd0-a956-451a-8dd0-435456902caf.jpg?im_w=720",
        filename:"listingImage"
      }
     },
      {
        title: "Cityscape Apartment in Paris",
        description: "Enjoy the Parisian lifestyle in this chic apartment with 1 bedroom, a balcony overlooking the city, and proximity to iconic landmarks.",
        price: 19000,
        location: "Paris",
        country: "France",
        image: {
          url: "https://a0.muscache.com/im/pictures/b8c33ee8-9433-412f-9978-cc28b67b4b2e.jpg?im_w=720",
        filename:"listingImage"
      }
     },
      {
        title: "Riverside Cottage in Kyoto",
        description: "Experience traditional Japanese living in this riverside cottage with tatami rooms, a garden, and serene river views.",
        price: 9000,
        location: "Kyoto",
        country: "Japan",
        image: {
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-948238209740182923/original/45fd0d30-d2b8-4028-b7d5-646397898b12.jpeg?im_w=320",
        filename:"listingImage"
      } },
      {
        title: "Desert Oasis Villa",
        description: "Escape to a luxurious desert villa with 3 bedrooms, a private pool, and panoramic views of the arid landscape.",
        price: 12000,
        location: "Scottsdale",
        country: "United States",
        image:  {
          url:"https://a0.muscache.com/im/pictures/599e3a00-33f1-4c22-982d-14c16fb26698.jpg?im_w=320",
        filename:"listingImage"
      }
     },
      {
        title: "Alpine Chalet in Switzerland",
        description: "Ski-in/ski-out in style with this alpine chalet featuring 4 bedrooms, a fireplace, and stunning views of the Swiss Alps.",
        price: 25000,
        location: "Zermatt",
        country: "Switzerland",
        image: {
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-981606185712826397/original/33bb7a2a-5ff8-4a0c-82e9-6da39b83f21d.jpeg?im_w=320",
        filename:"listingImage"
      }
     },
      {
        title: "Sunset Beach House",
        description: "Relax in a beachfront house with 3 bedrooms, a private beach access, and spectacular sunset views over the ocean.",
        price: 14000,
        location: "Maui",
        country: "United States",
        image: {
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-973612202639577969/original/b537c57b-300e-4c31-b610-b193b06ea7b1.jpeg?im_w=720",
        filename:"listingImage"
      } },

      {
        title: "Historic Riad in Marrakech",
        description: "Immerse yourself in Moroccan culture with a stay in this beautifully restored historic riad with a courtyard and 5 bedrooms.",
        price: 16000,
        location: "Marrakech",
        country: "Morocco",
        image: {
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-765673312810778311/original/297399d7-3d12-4b8b-aa88-21dded609c00.jpeg?im_w=320",
    filename:"listingImage"
        } 
        },

      {
        title: "Cliffside Villa in Amalfi",
        description: "Experience the beauty of the Amalfi Coast in a cliffside villa with 2 bedrooms, a private terrace, and breathtaking sea views.",
        price: 20000,
        location: "Amalfi",
        country: "Italy",
        image: {
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-953179187960352972/original/6b512947-7fee-4c6e-9e40-5abf8da0b718.jpeg?im_w=320",
        filename:"listingImage"
      }
    },
      {
        title: "Rural Farmhouse Getaway",
        description: "Escape to the countryside with a stay in a charming farmhouse with 4 bedrooms, a vineyard, and panoramic rural views.",
        price: 11000,
        location: "Tuscany",
        country: "Italy",
        image: {
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-991850691094522333/original/e2b1abaa-9d17-4d0e-930a-91130b84d56e.jpeg?im_w=320",
        filename:"listingImage"
      }
     },
      {
        title: "Beachfront Condo in Miami",
        description: "Indulge in beachfront luxury with this modern condo featuring 2 bedrooms, a rooftop pool, and stunning views of the Miami skyline.",
        price: 22000,
        location: "Miami",
        country: "United States",
        image: {
          url: "https://a0.muscache.com/im/pictures/b6aa83e7-e9be-491e-890a-5fa8295f8272.jpg?im_w=320",
        filename:"listingImage"
      } },

      
  ];
  module.exports = { data: sampleListings };