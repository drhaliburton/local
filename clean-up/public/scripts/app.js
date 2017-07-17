const testCards = [ {
     title: "Food Place",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "here",
     type: "food",
     duration: 120,
     start_time: "11:00am"
   }, {
     title: "Hike Time",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "There",
     type: "outdoors",
     duration: 180,
     start_time: "1:00pm"
   }, {
     title: "Art Place",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }
];


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
