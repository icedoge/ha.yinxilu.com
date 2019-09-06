(function ($, root, undefined) {

	$(function () {

		'use strict';

		// DOM ready, take it away

		$(document).ready(function(){
			jQuery('#slippry').slippry({
			  	// options
				adaptiveHeight: false, // height of the sliders adapts to current slide
				captions: false, // Position: overlay, below, custom, false
				pager: false,
				auto: false

			});

			jQuery('.redils-responsive-height .redils').redils({
				autoResize: true,
				setHeight: true
			});

		});



	});

})(jQuery, this);