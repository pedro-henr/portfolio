$(document).ready(function () {
  
  // Logo
  var $logo = $('#logo');
  var $hellologo = $('#helloworld');
  if (location.href.indexOf("#") != -1) {
    if (location.href.substr(location.href.indexOf("#")) != '#about') {
      $logo.show();
    }
    else {
      $hellologo.show();
    }
  }

  // Show logo 
  $('#tab-container .tab a').click(function () {

    $logo.slideDown('slow');
    $hellologo.slideUp('slow');

  });
  // Hide logo
  $('#tab-about').click(function () {
    $logo.slideUp('slow');
    $hellologo.slideDown('slow');
  });
  function animMeter() {
    $(".meter > span").each(function () {
      $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate({
          width: $(this).data("origWidth")
        }, 1200);
    });
  }
  animMeter();

  $('#tab-container').easytabs({
    animate: true,
    updateHash: true,
    transitionIn: 'slideDown',
    transitionOut: 'slideUp',
    animationSpeed: 800,
    tabActiveClass: 'active'
  }).bind('easytabs:midTransition', function (event, $clicked, $targetPanel) {
    if ($targetPanel.selector == '#resume') {
      animMeter();
    }
  });
});


$(document).keydown(function (e) {
  var code = e.keyCode || e.which;
  try {
    if (code == 27) $("#modal-wrapper").hide();
  }
  finally {
  }
  try {
    if (code == 27) $("#modal-wrapper-2").hide();
  }
  finally {
  }
  try {
    if (code == 27) $("#modal-wrapper-3").hide();
  }
  finally {
  }
  try {
    if (code == 27) $("#modal-wrapper-4").hide();
  }
  finally {
  }
  try {
    if (code == 27) $("#modal-wrapper-5").hide();
  }
  finally {
  }
  try {
    if (code == 27) $("#modal-wrapper-6").hide();
  }
  finally {
  }
  try {
    if (code == 27) $("#modal-wrapper-7").hide();
  }
  finally {
  }


  //try {
  //  if (code == 37 || code == 40) {
  //    plusSlides(-1);
  //  }
  //}
  //finally {
  //}
  //try {
  //  if (code == 38 || code == 39) {
  //    plusSlides(1);
  //  }
  //}
  //finally {
  //}
});


var slideIndex = 1;
showSlides(slideIndex);


///////////////////////////STARTDUPLICAR
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activedot";
}
///////////////////////////EDNDUPLICAR



// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}
function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activedot";
}




// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex = n);
}
function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activedot";
}





// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4(slideIndex = n);
}
function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("dot4");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activedot";
}



// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex += n);
}

// Thumbnail image controls
function currentSlide5(n) {
  showSlides5(slideIndex = n);
}
function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides5");
  var dots = document.getElementsByClassName("dot5");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activedot";
}



// Next/previous controls
function plusSlides6(n) {
  showSlides6(slideIndex += n);
}

// Thumbnail image controls
function currentSlide6(n) {
  showSlides6(slideIndex = n);
}
function showSlides6(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides6");
  var dots = document.getElementsByClassName("dot6");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activedot";
}




