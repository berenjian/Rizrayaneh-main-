                                $(document).ready(function () {
	
	/* Background */
	if ($('body').hasClass('slideshow')) {
		$.supersized({
		
			// Functionality
			slide_interval          :   4000,		// Length between transitions
			transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
			transition_speed		:	2000,		// Speed of transition

			horizontal_center		:	1,
			min_width				:	$(window).width(),
													   
			// Slideshow Images							
			slides 					:  	[
				{image : 'images/pics/backgrounds/1.jpg', thumb: ''},
				{image : 'images/pics/backgrounds/2.jpg', thumb: ''},
				{image : 'images/pics/backgrounds/3.jpg', thumb: ''},
				{image : 'images/pics/backgrounds/4.jpg', thumb: ''},
				{image : 'images/pics/backgrounds/5.jpg', thumb: ''},
				{image : 'images/pics/backgrounds/7.jpg', thumb: ''}
				
			]
			
		});
	}

	/* Hovered items */
	$('.thumb').append('<div class="hover"><span>&nbsp;</span></div>');
	$('.thumb').hover(function () {
		$(this).children('.hover').stop(true, true).fadeIn(700);
	}, function () {
		$(this).children('.hover').stop(true, true).fadeOut(700);
	});
	
	/* Contact form */
	$('#contact_form').submit(function () {
		$.ajax({
			type: 'POST',
			url: 'contact.php',
			data: {
				name: $('#contact_form input[type=text]').val(),
				email: $("#contact_form input[type=email]").val(),
				text: $("#contact_form textarea").val()
			},
			success: function(data) {
				if ( data == 'sent' ) {
					$('#contact_form .status').html('E-mail has been sent.');
				} else if ( data == 'invalid' ) {
					$('#contact_form .status').html('Your name, email or message is invalid.');
				} else {
					$('#contact_form .status').html('E-mail could not be sent.');					
				}
			},
			error: function () {
				$('#contact_form .status').html('E-mail could not be sent.');
			}
		});
		return false;
	});

	/* Contact map */
	if (typeof(showMap) == 'function') showMap();

	/* Fancybox */
	$('a.photo').fancybox({
		'transitionIn'		: 'elastic',
		'padding'			: 0,
		'overlayColor'		: '#000'
	});
	$('a.video, a.audio').fancybox({
		'transitionIn'		: 'elastic',
		'padding'			: 0,
		'overlayColor'		: '#000',
		'type'				: 'iframe'
	});

	/* Equal height columns */
	$('.eq').each(function () {
		var tallest = 0;
		siblings = $(this).parent().children('.eq');
		siblings.each(function () {
			tallest = Math.max($(this).height(), tallest);
		})
		siblings.each(function () {
			$(this).height(tallest);
		});
	});

	/* Homepage navigation */
	$('nav li').each(function () {
		degs = $(this).attr('data-degree');
		$(this).append($('<span>').css('width', $(this).attr('data-distance')));
		$(this).css({
			'-webkit-transform': 'rotate(' + degs + 'deg)',
			'-moz-transform': 'rotate(' + degs + 'deg)',
			'msTransform': 'rotate(' + degs + 'deg)',
			'-o-transform': 'rotate(' + degs + 'deg)',
			'transform': 'rotate(' + degs + 'deg)'
		});
		$(this).children('a').css({
			'-webkit-transform': 'rotate(-' + degs + 'deg)',
			'-moz-transform': 'rotate(-' + degs + 'deg)',
			'msTransform': 'rotate(-' + degs + 'deg)',
			'-o-transform': 'rotate(-' + degs + 'deg)',
			'transform': 'rotate(-' + degs + 'deg)'
		});
		$(this).children('a').each(function () {
			$(this).css({'margin-left': '-' + Math.floor($(this).width()/1.99) + 'px'});
		});
		
	});

	/* Category filter */
	$('.filter a').click(function () {
		/* Selected menu item */
		$('.filter a').removeClass('selected');
		$(this).addClass('selected');
		/* Fade in category */
		$('.filterable li, .filterable li img').fadeTo('slow', 0.2);
		$('.filterable li.' + $(this).attr('data-category') + ', .filterable li.' + $(this).attr('data-category') +' img').stop().fadeTo('slow', 1);
	});

});

$(window).load(function () {

	/* Masonry */
	$('.masonry').masonry({
		itemSelector: '.box'
	});
	
}); 
                            