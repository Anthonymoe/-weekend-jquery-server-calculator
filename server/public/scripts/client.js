$( document ).ready( onReady );

function onReady(){
    //click handlers
    $( '#submitButton' ).on( 'click', calculate )

    //initialization
}//end onReady

function calculate (){
    console.log( 'in calculate' );
    //get user input and place in an object
    let objectToSend ={
        value1: $( '#value1' ).val(),
        value2: $( '#value2' ).val(),
        //operator: $( this).data('operator')
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
    
}//end of calculate 
