$(document).ready(function() {
  $(".toggle-menu").click(function() {
    $(".sandwich").toggleClass("active");
  });

  $(".modal").click(function() {
    $(".modal").fadeOut();
    $(".modal-container").fadeOut();
  });

  $(".top-menu").click(function() {
    closeMenu();
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
    $(".modal").fadeOut();
    $(".modal-container").fadeOut();
  });

  $(".toggle-menu").click(function() {
    closeMenu();
  });
});

function closeMenu() {
  if ($(".top-menu").is(":visible")) {
    $(".top_text").css("opacity", "1");
    $(".top-menu").fadeOut(600);
    $(".sandwich").removeClass("active");
  } else {
    $(".top_text").css("opacity", ".1");
    $(".top-menu").fadeIn(600);
  }
}

function plusSlides(imgId, next) {
  jQImgId = "#" + imgId;
  var src = $(jQImgId).attr('src');
  var callerPath = window.location.pathname;
  var path;

  if(callerPath.includes("/de/")){
    path = "../src/img/";
  } else {
    path = "src/img/";
  }
  var nextSrc;
  var prevStr;

  switch (src) {
    case path + "sql_2.png":
      nextSrc = prevSrc = "sql_1.png";
      break;
    case path + "sql_1.png":
      nextSrc = prevSrc = "sql_2.png";
      break;
    case path + "padel_1.png":
      nextSrc = "padel_2.png";
      prevSrc = "padel_3.png";
      break;
    case path + "padel_2.png":
      nextSrc = "padel_3.png";
      prevSrc = "padel_1.png";
      break;
    case path + "padel_3.png":
      nextSrc = "padel_1.png";
      prevSrc = "padel_2.png";
      break;
    case path + "editor_1.png":
      prevSrc = nextSrc = "editor_2.png";
      break;
    case path + "editor_2.png":
      prevSrc = nextSrc = "editor_1.png";
      break;
    case path + "autodoctor_1.png":
      nextSrc = "autodoctor_2.png";
      prevSrc = "autodoctor_3.png";
      break;
    case path + "autodoctor_2.png":
      nextSrc = "autodoctor_3.png";
      prevSrc = "autodoctor_1.png";
      break;
    case path + "autodoctor_3.png":
      nextSrc = "autodoctor_1.png";
      prevSrc = "autodoctor_2.png";
      break;
  }

  if (next == 1) {
    $(jQImgId).attr('src', path + nextSrc);
  } else {
    $(jQImgId).attr('src', path + prevSrc);
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
