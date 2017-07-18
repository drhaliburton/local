


$(() => {

  renderIndexCards(testCards);

  $('.filter-toggle').on('click', function() {
    $('.fa-chevron-down').toggleClass('chev-rotate');
    $('.filter-content').slideToggle(function() {
      $('.filter-content').toggleClass(':visible');
      if($('.filter-content').is(':visible')){
        $('.filter-toggle').on('click', function() {
          $('.fa-chevron-down').toggleClass('chev-rotate-again');
        });
      }
    });
  });
  $('.filter-toggle').mouseover(function() {
    $('.filter-brand').slideDown("medium", function() {});
  });
  $('.filter-toggle').mouseleave(function() {
    $('.filter-brand').slideUp("medium", function() {});
  });
  $('.filter-button').on('click', function() {
    $(this).toggleClass('active');
  });
});
