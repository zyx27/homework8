$(document).ready(function() {
  $("img").each(function() {
    console.log(this);
    $(this).mouseover(show); // $ to access JQuery
    $(this).focus(show);
    $(this).mouseleave(hide);
    $(this).blur(hide);
  });
})

function show() {
  // console.log("show!");
  imgUrl = "url('" + $(this).attr("src") + "')";
  $("#display").css("background-image", imgUrl);
  // $("#display").text(this.alt);
  $("#display").html($(this).attr("alt"));
}

function hide() {
  // console.log("hide!");
  var msg = "Hover over an image below to display the image and the alt text"
  imgUrl = "url('')";
  $("#display").css("background-image", imgUrl);
  // $("#display").text(this.alt);
  $("#display").html(msg);
}