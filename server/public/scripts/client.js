$( document ).ready( onReady );

function onReady(){
    //click handlers
    $( '#submitButton' ).on( 'click', sendObject );
    $( '#addButton' ).on( 'click', addition );
    $( '#subtractButton' ).on( 'click', subtraction );
    $( '#multiplyButton' ).on( 'click', multiplication );
    $( '#divideButton' ).on( 'click', division );
    $( '#clearButton' ).on( 'click', clear );
    //initialization
    getObject();
}//end onReady
let operator = '';



function sendObject (){
    console.log( 'in calculate' );
    //get user input and place in an object
    let objectToSend ={
        value1: $( '#value1' ).val(),
        value2: $( '#value2' ).val(),
        selectedOperator: operator
    }//end of object to send
    console.log( 'sending:', objectToSend );
    //send object to server via POST
    $.ajax({
        type: 'POST',
        url: '/input',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from the POST with:', response );
    //if successful update DOM
    getObject();
    }).catch( function( err ){
    //catch any errors 
    alert( 'error adding item' );
    console.log( err );
    })//end AJAX
    clear();
}//end of calculate 

function getObject(){
    //make a get AJAX call
    $.ajax({
        type: 'GET',
        url: '/input'
    }).then( function( response ){
        console.log( 'back from GET:', response );
        //target ul and empty
        el = $( '#infoOut' );
        el.empty();
        //if successful loop through response
        for ( let i=0; i<response.length; i++){
            //append to DOM
            el.append( `<li>${response[i].val1} ${response[i].symbol} ${response[i].val2} = ${response[i].answer}</li>`);
        }//end for
        //catch any errors
    }).catch( function( err ){
        alert( 'error adding item' );
    })//end AJAX   
}

function addition(){
    if( operator != '' ){
        console.log( 'operator has already been selected:', operator );
    }//end if already selected
    else {
        operator = '+';
    }//end operator change
}//end addition 

function subtraction(){
    if( operator != '' ){
        console.log( 'operator has already been selected:', operator );
    }//end if already selected
    else {
        operator = '-' ;
    }//end operator change
}//end subtraction 

function division(){
    if( operator != '' ){
        console.log( 'operator has already been selected:', operator );
    }//end if already selected
    else {
        operator = '/';
    }//end operator change
}//end division 

function multiplication(){
    if( operator != '' ){
    console.log( 'operator has already been selected:', operator );
    }//end if already selected
    else {
        operator = '*';
    }//end operator change
}//end multiplication 


function clear(){
    $( '#value1' ).val('');
    $( '#value2' ).val('');
    operator = '';
}//end of clear 