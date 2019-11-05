$(".order__button").click(function() {
  $(".overlay").fadeIn();
});

$(".overlay__close").click(function(event) {
  $(this).preventDefault();
  $(".overlay").fadeOut();
});

$(".overlay__button").click(function(event) {
  $(this).preventDefault();
  $(".overlay").fadeOut();
});


