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
let solution = [];
let inputs;
//spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})

//routes
app.get( '/input', ( req, res )=>{
    console.log( 'in /input GET' );
    res.send( solution );
})//end input GET

app.post( '/input', ( req, res )=>{
    inputs = req.body;
    let sum;
    console.log( 'in /input POST:', inputs );
    //calculate
    if (inputs.selectedOperator === '+'){
        sum = Number(inputs.value1) + Number(inputs.value2);
    }//end addition
    if (inputs.selectedOperator === '-'){
        sum = Number(inputs.value1) - Number(inputs.value2);
    }//end subtraction
    if (inputs.selectedOperator === '*'){
        sum = Number(inputs.value1) * Number(inputs.value2);
    }//end multiplication
    if (inputs.selectedOperator === '/'){
        sum = Number(inputs.value1) / Number(inputs.value2);
    }//end division
    let finalObject ={
        val1: inputs.value1,
        val2: inputs.value2,
        symbol: inputs.selectedOperator,
        answer: sum
    }//end final object
    //push the received object into input array
    solution.push( finalObject );
    //send created code OK (200)
    res.send( 200 );
})//end input GET

