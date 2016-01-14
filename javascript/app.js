// function to open and close modal with button and X

$("#open-modal").on('click', function(event) {
  event.preventDefault(); // stop form from trying to make server request
  $("input").val("");  // clear text from input form
  $("#modal").toggle();
});


$("#close-modal").on("click", function() {
  $("#modal").toggle();
});


// function to make smooth scrolling between sections

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
        scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});