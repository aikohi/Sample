$(function() {
 
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('#menu').fadeToggle();
    return false;
  });
 
 });

$(function() {
  $('#back a').on('click',function(){
    $('body, html').animate({
      scrollTop:0
    }, 'slow');
      return false;
  });
});
