// JQuery Plugin

$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
    });
    
    
    $('.imgSearch input').hide();
    
    $('.imgSearch i').click(function(){
        $('.imgSearch input').show('fast');
    });
    
    
    $('body').materialScrollTop({
       revealElement: 'header',
       revealPosition: 'bottom',
       onScrollEnd: function() {
        console.log('Scrolling End');
      }
    });
    
});


// *************** Isotope Jquery Plugin *****************

// init Isotope
var $grid = $('.mborder').isotope({
  // options
});
// filter items on button click
$('.mSelector').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});







