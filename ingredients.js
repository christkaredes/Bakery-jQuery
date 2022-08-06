
$(function() {

  $("#cakesButton").click(function () {
        $("#insert").load("cakes.html");
  });
    
  $("#pretzelsButton").click(function () {
        $("#insert").load("pretzels.html");
  });
    
  $("#breadsButton").click(function () {
        $("#insert").load("breads.html");
  });
    
  $("#cookiesButton").click(function () {
        $("#insert").load("cookies.html");
  });
    
    
  $("#backButton").click(function () {
  window.location.href = "index.html";
         
  });
    
});
