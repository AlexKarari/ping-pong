// User Interface
$(document).ready(function() {
  $("#open-menu").click(function(){
  $("aside").animate({
    "left":0
  },2000);
  });
  $("#close-menu").click(function() {
    $("aside").animate({
      "left": "-100\%"
    }, 2000);
  });
  $("#enter form").submit(function(event) {
    $(".Push").empty();
    event.preventDefault();
    var displayInputtedData = parseInt($("input#ppnumber").val());
    var resultFromInputtedData = arrayAnswer(displayInputtedData);
    $(".Push").text(resultFromDisplay);
    //Closing the menu
    $("#close-menu").click(function() {
      $("aside").animate({
        "left": "-100\%"
      }, 2000);
    });
  });

});




// business logic
var arrayAnswer = function(displayInputtedData) {
  for (i = 1; i <= displayInputtedData; i++) {
    // if the number is divisible by 15, write "Ping Pong"
    if (i % 15 === 0) {
      console.log("pingpong");
      $(".Push").append("<li>" + "pingpong" + "</>");
      //return "PingPong";
    }
    // if the number is divisible by 3, write "Ping"
    else if (i % 3 === 0) {
      $(".Push").append("<li>" + "ping" + "</>");
      //return "Ping";
    }
    // otherwise, write "po"
    else if (i % 5 === 0) {
      $(".Push").append("<li>" + "pong" + "</>");
      //return "Pong";
    } else {
      console.log("qwert");
      $(".Push").append("<li>" + i + "</>");
      //return(i);
    }
  }
}
