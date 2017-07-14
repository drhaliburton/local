
$(() => {


  $('.card-toggle').on('click', function() {
    $('.card-details').slideToggle();
  })
  $('.filter-toggle').on('click', function() {
    $('.filter-details').slideToggle();
  })
});
