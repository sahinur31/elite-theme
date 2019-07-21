jQuery(function($) {'use strict';
		
	

	/* count to plugin */
        $('.timer').countTo();
		/* sticky plugin */
		 $(".navbar").sticky({topSpacing: 0});
		 /* magnific popup plugin */
        $('.test-popup-link').magnificPopup({
			gallery: {enabled: true},
			type: 'image'
		});
		/* owl carousel plugin */
		$('.site-slider').owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			nav: false,
			dots: true,
			smartSpeed: 1500,
		});
        
        $(".site-slider").on("translate.owl.carousel", function(){
            $(".site-slider__item h2").removeClass("animated fadeInLeft").css("opacity", "0");
        });

        $(".site-slider").on("translated.owl.carousel", function(){
            $(".site-slider__item h2").addClass("animated fadeInLeft").css("opacity", "1");
           
        });
        
		$('.client-slider').owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			nav: true,
             navText: ["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
			dots: true,
			smartSpeed: 1500,
		});
        
			new WOW().init();
	

    
    // external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  

  
    

 

});