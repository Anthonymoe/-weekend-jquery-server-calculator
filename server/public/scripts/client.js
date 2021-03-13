$( document ).ready( onReady );

function onReady(){
    //click handlers
    $( '#submitButton' ).on( 'click', calculate )
    //initialization
}//end onReady

function calculate (){
    console.log( 'in calculate' );
    //get user input and place in an object
    //send object to server via POST
    //if succsesful update DOM 
    //catch any errors 
}//end of calculate 
