// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

// globals
var port = 6789;
var allItems = [];

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
});

// base url
// ***NOTE*** where is '/' doing?
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  // send back index.html as response
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url


// ***NOTE*** what is '/addItem'
// ***NOTE*** what is allItems and why is it pushing to req.body?
app.post( '/addItem', function( req, res ){
  console.log( '/addItem hit:', req.body );
  // push req.body content into allItems array
  allItems.push( req.body );
  console.log( 'allItems:', allItems );
  res.send( 200 );
}); // end /addItem

// ***NOTE*** what is '/item'
// ***NOTE*** what is inventory:allItems
app.get( '/items', function( req, res ) {
  console.log( '/items hit' );
  // return al items array in an object
  var responseObject = {
    inventory: allItems
  }; // end responseObject
  res.send( responseObject );
}); // end /items
