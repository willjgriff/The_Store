//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
	$(".page-scroll").blur();
});

// Collapse navbar on load
$(document).ready(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
		var page_top;
		var title_padding = 0;
		
		if ($anchor.attr('href') == "#contact") {
			if ($('#contact').outerHeight(true) < $(window).height()) {
				page_top = $(document).height() - $(window).height() - title_padding;
			} else {
				page_top = $($anchor.attr('href')).offset().top - title_padding;
			}
		} else {
			page_top = $($anchor.attr('href')).offset().top - title_padding;
		}
		
        $('html, body').stop().animate({
			scrollTop: page_top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Map
function initialize() {
	var location = new google.maps.LatLng(51.528108, -0.050540)

	var style_array = [
    {
      stylers: [
        { hue: "#cc8833" },
		{ gamma: 0.8 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    }];
	
	var mapOptions = {
		scrollwheel: false,
		zoom: 16,
		center: location,
		mapTypeId: google.maps.MapTypeId.ROADMAP, styles: style_array
	};
	
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		title:"The Store Cafe"
	});
	
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

