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

//spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})

//routes