$(function() {

  $("#noRecommend").hide( );
  $("#yesRecommend").hide( );
  $("#needRating").hide( );
  $("#needFavorite").hide( );
  $("#needRecommend").hide( );
  
  $("#yes").click(function( ) {
    $("#yesRecommend").slideDown( );
    $("#noRecommend").slideUp( );
  });
    
  $("#no").click(function( ) {
    $("#noRecommend").slideDown( );
    $("#yesRecommend").slideUp( );
  });
  
   $("#notattend").click(function( ) {
    $("#iceCreamSelection").slideUp ();
  });
  
  $("form").submit(function(evt) {

    if (!$("input[name='rating']:checked").val())  {
        console.log("UNCHECKED")
        $("#needRating").slideDown( ).css("color", "red");
        evt.preventDefault( );
    }
    else {
        $("#needRating").slideUp( );
    }
      
    if (!$("input[name='favorite']:checked").val())  {
        console.log("UNCHECKED")
        $("#needFavorite").slideDown( ).css("color", "red");
        evt.preventDefault( );
    }
    else {
        $("#needFavorite").slideUp( );
    }
      
    if (!$("input[name='recommend']:checked").val())  {
        console.log("UNCHECKED")
        $("#needRecommend").slideDown( ).css("color", "red");
        evt.preventDefault( );
    }
    else {
        $("#needRecommend").slideUp( );
    }
    
  });
  $("#backButton").click(function () {
    window.location.href = "index.html";
        
       });

});
