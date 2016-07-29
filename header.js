$(document).ready(function() {
  // checkNav();

  $(window).scroll(function() {
    // checkNav();
  });
});

function solidNav () {
  $("header").css({
    "background-color": "white",
    "color": "rgb(57, 66, 85)",
    "border-bottom": "2px solid rgb(57, 66, 85)"
  });
}
function transparentNav () {
  $("header").css({
    "background-color": "transparent",
    "color": "white",
    "border-bottom": "none"
  });
}
function checkNav () {
  if ($(window).scrollTop() > 500) {
    solidNav();
  } else {
    transparentNav();
  }
}