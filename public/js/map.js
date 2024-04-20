
  mapboxgl.accessToken =mapToken;
  const map= new mapboxgl.Map({
  container: 'map',
  // container ID
  // Choose from Mapbox•s core sty s, or make your own style with Mapbox Studi
  style:'mapbox://styles/mapbox/streets-v12',
  // style URL
  center: listing.geometry.coordinates, // starting position [Ing, tat I
  zoom: 9 // starting zoom
  });



// //ADD MARKER TO MAP

  const marker = new mapboxgl.Marker({color:"red"})
. setLngLat(listing.geometry.coordinates)   //Coordinates of location
. setPopup(
    new mapboxgl.Popup({offset: 25}) 
    .setHTML(
        `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
    )
)
    
. addTo(map);