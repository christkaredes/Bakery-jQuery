$(function() {
  $("#amount").hide( );
  // initialization code when DOM is ready
  $("#cakes li, #pretzels li, #breads li, #cookies li").draggable({
    helper: "clone"
  }).css("cursor", "pointer");

  $("#cart").droppable({
    tolerance: "touch",
    drop: function(evt, ui) {
      console.log("Drop event!");
      console.log(evt);
      console.log(ui);
      // droppedUI = ui;
      // alert("Dropping: " + ui.draggable.html());
      $("#cart").append("<li>" + ui.draggable.html() + 
                        " (<a href='dummy.html' class='remove'>" + "Remove</a>)" +
                       "</li>"
                       )
        .css("height", "auto");;
    }
  });
  $("#cart").on("click", "a.remove", function() {
    console.log("About to remove an element");
    $(this).parent().remove();
    return false;
  });
  
  getCart = function() {
    /* returns all of the items in the cart
     this version just returns the whole string with html
     elements --- we want a version that returns an array of
     just the items  */
    return $("#cart").html();
    
  }
  
  $("#submit").click(function( ) {
      
      
      
  });
    
         $("#mixButton").click(function () {
             
             window.location.href = "ingredients.html";
         
  });
    

});
