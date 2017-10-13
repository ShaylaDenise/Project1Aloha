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
  