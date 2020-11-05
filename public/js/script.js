$(function() {

  if (window.matchMedia('(min-width: 768px)').matches) {
    $(window).scroll(function() {
      if($(window).scrollTop() > 100) {
        $('#index-btn-wrapper').fadeIn();
      } else {
        $('#index-btn-wrapper').fadeOut();
      }
    });
  }

  $('.index-btn').click(function(){
    var pagelink = $(this).attr('data-href');
    var pageset = $(pagelink).offset().top;
    $('html, body').animate({
      'scrollTop': pageset
    }, 300);
  });

});