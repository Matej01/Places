console.log( 'server - places script' );

var express = require( 'express' );

var fs = require( 'fs' );
var bp = require( 'body-parser' );

var app = express();

var server = app.listen( 26893, function() {
    console.log( 'Places server running on port 26893' )
} )


app.use( function( request, response, next ) {
    response.setHeader( 'Access-Control-Allow-Origin', '*' );
    response.setHeader( 'Access-Control-Allow-Methods', 'GET' );
    next();
} )

app.get( '/', function( request, response ){
    response.end( 'Ich bins, dein Server' );
} );