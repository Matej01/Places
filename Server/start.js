

var fs = require( 'fs' );
var cp = require( 'child_process' );

var serverfile = 'places-server.js';

var server = cp.fork(  serverfile );

console.log( 'Server gestartet...' );

fs.watchFile ( serverfile, function() {
    server.kill();
    console.log( 'server beendet' )

    var server = cp.fork(  serverfile );

    console.log( 'Server gestartet...' );
});