//requires
const express = require( 'express' );
//NECESSARY FOR POST TO WORK
const bodyParser = require( 'body-parser' );

//create web app
const app = express();

//uses
// this tells the app where to look for "index.html" (sets the default folder)
app.use( express.static( 'server/public' ) );
//NECESSARY FOR POST TO WORK pt. 2
app.use( bodyParser.urlencoded( { extended: true } ) );

//globals
const port = 5000;
let inputs = [];
//spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})

//routes
app.get( '/input', ( req, res )=>{
    console.log( 'in /input GET' );
    res.send( inputs );
})//end input GET

app.post( '/input', ( req, res )=>{
    console.log( 'in /input POST:', req.body );
    //push the received object into input array
    inputs.push( req.body );
    //send created code OK (200)
    res.send( 200 );
})//end input GET

