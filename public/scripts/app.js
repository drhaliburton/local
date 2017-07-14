
$(() => {

  $('.card-toggle').on('click', function() {
    $('.card-details').slideToggle();
    $('.fa-chevron-up').toggleClass('chev-rotate');
    $('.fa-chevron-up').toggleClass('chev-rotate-again');
    $('.card').toggleClass('expanded');
  })
  
  $('.filter-toggle').on('click', function() {
    $('.fa-chevron-down').toggleClass('chev-rotate');
    $('.filter-content').slideToggle(function() {
      $('.filter-content').toggleClass(':visible');
      if($('.filter-content').is(':visible')){
        $('.filter-toggle').on('click', function() {
          $('.fa-chevron-down').toggleClass('chev-rotate-again');
          $('.filter-brand').slideUp("slow", function(){
          });
        });
      }
    });
  });
  $('.filter-toggle').mouseover(function() {
    if($('.filter-content').is(':hidden')){
      $('.filter-brand').slideDown("medium", function() {
      });
    }
  });
  $('.filter-button').on('click', function() {
    $(this).toggleClass('active');
  });
});
