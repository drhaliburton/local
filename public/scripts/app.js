
$(() => {
  $('.card-toggle').on('click', function() {
    $('.card-details').slideToggle();
  })
  $('.filter-toggle').on('click', function() {
    $('.filter-content').slideToggle(function() {
      if($('.filter-content').is(':visible')){
        $('.filter-toggle').on('click', function() {
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
});
