///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'tailleur.l8mm4d13'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoidGFpbGxldXIiLCJhIjoiQ1AzXzdzUSJ9.FkWD5SAw1_1STJagSXR8MA'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

//add data
var dataFileToAdd = 'data/bikeway.geojson';

var featureLayer = L.mapbox.featureLayer();

  featureLayer.loadUrl(dataFileToAdd);
  featureLayer.addTo(map);
  
featureLayer.on('ready', function(){
  this.setStyle({
  "marker-color": "#777777",
  "marker-size": "medium"
  });
  map.fitBounds(featureLayer.getBounds());
});

////////////////////////////////
