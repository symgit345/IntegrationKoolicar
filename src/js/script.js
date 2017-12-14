$( document ).ready(function() {
 
 	// Gestion ouverture fermeture menu responsive
	$(".js-header-toggle-nav").bind("click", function(){
		if ($('.js-header-nav').hasClass('header-nav--flex')) {
			$(".js-header-nav").removeClass("header-nav--flex");
		} else {
			$(".js-header-nav").addClass("header-nav--flex");
		}
	});

	// Gestion ouverture fermeture menu responsive lors du resize window
	window.onresize = function() {
		$(".js-header-nav").removeClass("header-nav--flex");
	}

	// Evénement datepicker
	$('.input-daterange').datepicker({
	    language: "fr"
	});

});