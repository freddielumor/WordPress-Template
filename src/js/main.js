var website = (function () {
	
	// Responsive states
	var responsiveStates = (function() {

		function init() {
			ssm.addStates([
				{
					id: 'xs',
					maxWidth: 767,
					colorbox: false,
					onEnter: function(){
						console.log('Enter mobile');
					},
					onLeave: function(){
						console.log('Leave mobile');
					}
				},
				{
					id: 'sm',
					minWidth: 768,
					maxWidth: 991,
					colorbox: false
				},
				{
					id: 'md',
					minWidth: 992,
					maxWidth: 1199
				},
				{
					id: 'lg',
					minWidth: 1200
				}
			]);
			ssm.ready();
		}

		function current(state) {
			var states = ssm.getCurrentStates();

			for (var prop in states) {
				if (states.hasOwnProperty(prop)) {
					if (states[prop].id === state) {
						return true;
					}
				}
			}

			return false;
		}

        return {
            init: init,
            current: current
        };
	}());

	// Form validation, add class of .form-vaildate around the form to validate
	var siteForms = (function () {
		var $forms = $('.form-validate');

		function init() {
			$forms.bootstrapValidator({
				excluded: [':disabled'],
				feedbackIcons: {
				valid: 'icon-ok',
				invalid: 'icon-cancel',
				validating: 'icon-loading'
				}
			});
		}

		return {
			init: function () {
				if ($forms.length) {
					init();
				}
			}
		};
	}());

	// Sliebars 
	var navSlidebar = (function() {
		var slidebar = new slidebars();
		
		function init() {
			
			slidebar.init();

			$( ".mobile-nav__toggle" ).on( "touchend click", function ( event ) {
			  // Stop default action and bubbling
			  event.stopPropagation();

			  // Toggle the Slidebar with id "id-1"
			  slidebar.toggle( "id-1" );
			} );

			$(".close-any").on("touchend click", function (event) {
				if ( slidebar.getActiveSlidebar() ) {
		            event.preventDefault();
		            event.stopPropagation();
		            slidebar.close();
		        }
			});
		}

		function mobileOnly() {
			var windowWidth = $( window ).width();

			if ( windowWidth > 768 ) {
			  // Window is more than 600px wide
			  // Only exit Slidebars if it currently active.
			  if ( slidebar.isActive() ) {
			    slidebar.close();
			  }
			}
		}

		return {
			init: init,
			mobileOnly: mobileOnly
		};
	}());


	// Global init function
	return {
		init: function () {
			responsiveStates.init();

			navSlidebar.init();

			navSlidebar.mobileOnly();

			siteForms.init();

			// Slick Slider
			$('.cycle-slideshow').slick({
				prevArrow: '<a href="#" class="cycle-prev"><i class="icon-chevron-left"></i></a>',
				nextArrow: '<a href="#" class="cycle-next"><i class="icon-chevron-right"></i></a>'
			});

			// SVG fallback
			if (!Modernizr.svg) {
				$('img[src*="svg"]').attr('src', function () {
					return $(this).attr('src').replace('.svg', '.png');
				});
			}
		}

	};

}());

$(document).ready(website.init);
