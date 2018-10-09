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
        case "modal-5":
          id = "#modal-c-5";
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

  var arrayOfString = src.split("/");
  var filename = arrayOfString[arrayOfString.length - 1];
  var separatedFilename = filename.split("_");
  var projectName = separatedFilename[0];
  var imgId = parseInt(separatedFilename[1], 10);

  var maxImgId = 1;

  switch(projectName){
    case "sql":
    case "editor":
      maxImgId = 2;
      break;
    case "autodoctor":
    case "padel":
      maxImgId = 3;
      break;
    case "schedule":
      maxImgId = 8;
      break;
  }

  imgId += next; // +1 or -1
  if(imgId > maxImgId) imgId = 1;
  if(imgId < 1) imgId = maxImgId;

  $(jQImgId).attr('src', path + projectName + '_' + imgId + '.png');
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
