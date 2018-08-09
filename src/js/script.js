$(document).ready(function() {
  $(".toggle-menu").click(function() {
    $(".sandwich").toggleClass("active");
  });

  $(".toggle-menu").click(function() {
    if ($(".top-menu").is(":visible")) {
      $(".top_text").css("opacity", "1");
      $(".top-menu").fadeOut(600);
    } else {
      $(".top_text").css("opacity", ".1");
      $(".top-menu").fadeIn(600);
    }
  });
});

function gotoDiv(which) {
  var txt;
  switch (which) {
    case 0:
      txt = "#home";
      break;
    case 1:
      txt = "#about";
      break;
    case 2:
      txt = "#resume";
      break;
    case 3:
      txt = "#works";
      break;
  }
  $(".top-menu").fadeOut(300);
  $(".sandwich").removeClass("active");
  $('html, body').animate({
    scrollTop: $(txt).offset().top
  }, 1200);
}
