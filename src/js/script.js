function gotoDiv(which) {
  var txt;
  switch (which) {
    case 0:
      txt = "#home";
      break;
    case 1:
      txt = "#about";
      break;
    case 3:
      txt = "#thirdDiv";
      break;
    case 4:
      txt = "#fourthDiv";
      break;
    case 5:
      txt = "#fifthDiv";
      break;
  }
  $('html, body').animate({
    scrollTop: $(txt).offset().top
  }, 1200);
}
