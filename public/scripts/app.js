
$(() => {


  $('.card-toggle').on('click', function() {
    $('.card-details').slideToggle();
    $('.fa-chevron-up').toggleClass('chev-rotate');
    $('.fa-chevron-up').toggleClass('chev-rotate-again');
    $('.card').toggleClass('expanded');
  })
});
