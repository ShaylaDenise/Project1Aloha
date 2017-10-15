$( document ).ready(function() {
    $('#form').on('submit', function(event) {
    event.preventDefault();
    if ( $('#mail').val() == '' ) {
       alert('You missed the field.');
    } else {
       alert('Thanks for subscribing!');
    }
 });
});
$( document ).ready(function(){
    $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 8,
        slideWidth: 360,
        slideMargin: 0
    });
  });

  $( document ).ready(function(){
     $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
  
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1'); 
          $target.focus(); 
        };
      });
    }
  }
  });
});