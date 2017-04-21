$( document ).ready( function(){

  $( '#addItemButton' ).on( 'click', function(){
    console.log( 'in addItemButton on click' );
    // get user input
    // package into an object
    var objectToSend = {
      name: $( '#nameIn' ).val(),
      description: $( '#descriptionIn' ).val()
    }; // end objectToSend
    console.log( 'sending:', objectToSend );
    // send object to server via AJAX

    // ***NOTE*** what is url '/addItem'
    // ***NOTE*** what is type and what is POST
    // ***NOTE*** what is data and what is objectToSend
    $.ajax({
      url: '/addItem',
      type: 'POST',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from server with:', response );
        // update DOM
        getInventory();
      } // end success
    }); // end ajax
  }); // end addItemButton on click

  // start up functions
  getInventory();
});

function getInventory(){
  // make ajax call to server for inventory array
  // ***NOTE*** what is url '/item'
  // ***NOTE*** what is type and what is GET
  // ***NOTE*** what is data and what is objectToSend
  // ***NOTE*** what is response and where is inventory
  $.ajax({
    url: '/items',
    type: 'GET',
    success: function( response ){
      console.log( 'back from server with:', response.inventory );
      // empty outputDiv
      $( '#outputDiv' ).empty();
      // loop through inventory and append each to outputDiv
      for (var i = 0; i < response.inventory.length; i++) {
        $( '#outputDiv' ).append( '<p>The <strong>' + response.inventory[i].name + '</strong> is ' +
        response.inventory[i].description + '</p>' );
      } // end for
    } // end success
  }); // end ajax
} // end getInventory
