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
    
}//end onReady
let operator = '';



function sendObject (){
    console.log( 'in calculate' );
    //get user input and place in an object
    let objectToSend ={
        value1: $( '#value1' ).val(),
        value2: $( '#value2' ).val(),
        Selectedoperator: operator
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

    }).catch( function( err ){
    //catch any errors 
    alert( 'error adding item' );
    console.log( err );
    })//end AJAX
    clear();
}//end of calculate 

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