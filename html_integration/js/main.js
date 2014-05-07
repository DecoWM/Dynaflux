$( document ).ready(function() {
  $('.bxslider').bxSlider({
  	mode: 'fade',
    pagerCustom: '#bx-pager',
    captions: true,
    auto: true
  });

  $('.bxslider-projects').bxSlider({
  	pager: false,
  	auto: true
  });

  $('#bx-pager').serialScroll({
		items:'a img', // Selector to the items ( relative to the matched elements, '#sections' in this case )
		prev:'a.prev',// Selector to the 'prev' button (absolute!, meaning it's relative to the document)
		next:'a.next',// Selector to the 'next' button (absolute too)
		axis:'y',// The default is 'y' scroll on both ways
		duration:300,// Length of the animation (if you scroll 2 axes and use queue, then each axis take half this time)
		force:true, // Force a scroll to the element specified by 'start' (some browsers don't reset on refreshes)
		step:1 // How many items to scroll each time ( 1 is the default, no need to specify )
	});

  function initialize() {
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map_canvas, map_options)
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);

});