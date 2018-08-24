$(document).ready(function() {
  $(".toggle-menu").click(function() {
    $(".sandwich").toggleClass("active");
  });

  $(".modal").click(function() {
    $(".modal").fadeOut();
    $(".modal-container").fadeOut();
  });

  $('.modal-container').click(function(event) {
    event.stopPropagation();
  });

  $(".work-wrap").click(function() {
    var id;
    switch (this.id) {
      case "modal-1":
        id = "#modal-c-1";
        break;
      case "modal-2":
        id = "#modal-c-2";
        break;
      case "modal-3":
        id = "#modal-c-3";
        break;
      case "modal-4":
        id = "#modal-c-4";
        break;
    }
    $(".modal").fadeIn();
    $(id).fadeIn();
  });

  $(".dismiss").click(function() {
    var id;
    switch (this.id) {
      case "close-modal-1":
        id = "#modal-c-1";
        break;
      case "close-modal-2":
        id = "#modal-c-2";
        break;
      case "close-modal-3":
        id = "#modal-c-3";
        break;
      case "close-modal-4":
        id = "#modal-c-4";
        break;
    }
    $(".modal").fadeOut();
    $(id).fadeOut();
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

function plusSlides(imgId, next) {
  if (imgId == 'modal-i-1') {
    jQImgId = "#modal-i-1";
    var ids = ['sql_1.png', 'sql_2.png'];
    var src = $(jQImgId).attr('src');
    var current;
    var next;
    if (src.includes("1")) {
      $(jQImgId).attr('src', 'src/img/' + ids[1]);
    } else {
      $(jQImgId).attr('src', 'src/img/' + ids[0]);
    }
  }
}

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
