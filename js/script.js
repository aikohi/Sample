$(function() {
 
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('#menu').fadeToggle();
    return false;
  });
 
 });