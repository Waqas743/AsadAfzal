(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	// Slicknav
		$('#main-menu').slicknav({
	        closeOnClick: true,
	        label: '',
	        appendTo:'.mobile-menu',
	    });


	    $(window).scroll(function(){

	    	// Sticky Nav
		    if ($(this).scrollTop() > 50) {
		       $('.sticky').addClass('active');
		    } else {
		       $('.sticky').removeClass('active');
		    }

		    // Scroll To Top Hide/Show
		    if ($(this).scrollTop() >= 1000) {        
		        $('#scroll-to-top').fadeIn(200);
		    } else {
		        $('#scroll-to-top').fadeOut(200);
		    }

		});


		// Scroll To Top Trigger
		$('#scroll-to-top').on("click", function() {
			$('body,html').animate({
		        scrollTop : 0
		    }, 500);
		});


		// Hero Slider
		$('.hero-slider').owlCarousel({
			loop: false,
			rewind: true,
			dots: false,
			nav: true,
			navText: ["<img src='assets/img/icons/arrow-prev.png'>","<img src='assets/img/icons/arrow-next.png'>"],
			responsiveClass: true,
			items: 1,
			onInitialized  : counter, //When the plugin has initialized.
			onTranslated : counter //When the translation of the stage has finished.
		});

		// Hero Slider Counter
		function counter(event) {
			var element   = event.target;         // DOM element, in this example .owl-carousel
			var items     = event.item.count;     // Number of items
			var item      = event.item.index + 1;     // Position of the current item

			// it loop is true then reset counter from 1
			if(item > items) {
				item = item - items
			}

			// Add 0 before one digit Counter
			function pad(number) {
			    return (number < 10 ? '0' : '') + number
			}

			$('.hero-counter').html(pad(item)+" <span>/ "+pad(items)+"</span>");
		}

		// Hero Slider Animation
		$(".hero-slider").on("translated.owl.carousel", function() {
			$(".hero-slider .hero-slider-item .hero-counter").addClass("animated slideInUp").css("opacity", "1");
			$(".hero-slider .hero-slider-item h1").addClass("animated fadeInLeft").css("opacity", "1");
			$(".hero-slider .hero-slider-item p").addClass("animated fadeInRight").css("opacity", "1");
			$(".hero-slider .hero-slider-item .btn").addClass("animated slideInDown").css("opacity", "1");
		});
		$(".hero-slider").on("translate.owl.carousel", function() {
			$(".hero-slider .hero-slider-item .hero-counter").removeClass("animated slideInUp").css("opacity", "0");
			$(".hero-slider .hero-slider-item h1").removeClass("animated fadeInLeft").css("opacity", "0");
			$(".hero-slider .hero-slider-item p").removeClass("animated fadeInRight").css("opacity", "0");
			$(".hero-slider .hero-slider-item .btn").removeClass("animated slideInDown").css("opacity", "0");
		});


		// Hero Slider Two
		$('.hero-slider-two').owlCarousel({
			loop: true,
			dots: false,
			nav: true,
			navText: ["<img src='assets/img/icons/arrow-prev-short.png'>","<img src='assets/img/icons/arrow-next-short.png'>"],
			responsiveClass: true,
			items: 1,
		});

		// Hero Slider Two Animation
		$(".hero-slider-two").on("translated.owl.carousel", function() {
			$(".hero-slider-two .hero-slider-item h1").addClass("animated flipInX").css("opacity", "1");
			$(".hero-slider-two .hero-slider-item p").addClass("animated fadeInUp").css("opacity", "1");
			$(".hero-slider-two .hero-slider-item .btn").addClass("animated fadeInUp").css("opacity", "1");
		});
		$(".hero-slider-two").on("translate.owl.carousel", function() {
			$(".hero-slider-two .hero-slider-item h1").removeClass("animated flipInX").css("opacity", "0");
			$(".hero-slider-two .hero-slider-item p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".hero-slider-two .hero-slider-item .btn").removeClass("animated fadeInUp").css("opacity", "0");
		});


		// Hero Slider Three
		$('.hero-slider-three').owlCarousel({
			loop: true,
			dots: true,
			nav: false,
			responsiveClass: true,
			items: 1,
		});

		// Hero Slider Three Animation
		$(".hero-slider-three").on("translated.owl.carousel", function() {
			$(".hero-slider-three .hero-slider-item h1").addClass("animated fadeInDown").css("opacity", "1");
			$(".hero-slider-three .hero-slider-item p").addClass("animated fadeInUp").css("opacity", "1");
			$(".hero-slider-three .hero-slider-item .btn").addClass("animated fadeInUp").css("opacity", "1");
		});
		$(".hero-slider-three").on("translate.owl.carousel", function() {
			$(".hero-slider-three .hero-slider-item h1").removeClass("animated fadeInDown").css("opacity", "0");
			$(".hero-slider-three .hero-slider-item p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".hero-slider-three .hero-slider-item .btn").removeClass("animated fadeInUp").css("opacity", "0");
		});


		// About Three Slider Three
		$('.about-three-slider').owlCarousel({
			loop: true,
			dots: true,
			nav: false,
			responsiveClass: true,
			items: 1,
		});


		// Stop Modal Video on Close
		$('.modal').on('hide.bs.modal', function(e) {    
		    var $if = $(e.delegateTarget).find('iframe');
		    var src = $if.attr("src");
		    $if.attr("src", '/empty.html');
		    $if.attr("src", src);
		});


		// PGW Slider
		$('.pgwSlider').pgwSlider();

		lightbox.option({
	      'resizeDuration': 500,
	      'wrapAround': true,
	      'alwaysShowNavOnTouchDevices': true,
	    });


	    // Testimonial Slider
	    $('.testimonial-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    responsiveClass: true,
		    responsive: {
		        0: {
		            items: 1
		        },
		        600: {
		            items: 2
		        },
		        1000: {
		            items: 2
		        }
		    }
		});


	    // Testimonial Slider Two
	    $('.testimonial-carousel-two').owlCarousel({
		    loop: true,
		    margin: 30,
		    responsiveClass: true,
		    items: 1,
		});


	    // Testimonial Slider Three
	    $('.testimonial-carousel-three').owlCarousel({
		    loop: true,
		    responsiveClass: true,
		    items: 1,
		    dots: false,
			nav: true,
			navText: ["<img src='assets/img/icons/arrow-prev-short.png'>","<img src='assets/img/icons/arrow-next-short.png'>"],
		});


		// Single Portfolio Slider
		$('.single-portfolio-slider').owlCarousel({
			loop: true,
			dots: false,
			nav: true,
			navText: ["<img src='assets/img/icons/arrow-prev-short.png'>","<img src='assets/img/icons/arrow-next-short.png'>"],
			responsiveClass: true,
			items: 1,
		});


		// Header Search Form
		$("#search-modal-btn").on("click", function(e) {
			e.preventDefault();
			$(".search-modal-wrpr").addClass("active");
		});

		$('.search-modal-wrpr .close-icon').on('click', function() {
		  	$(".search-modal-wrpr").removeClass("active");
		});


		// Sliding Sidebar
		$("#sliding-sidebar-btn").on("click", function(e) {
			 e.preventDefault();
			$(".sliding-sidebar, .body-overlay").addClass("active");
		});

		$(".sliding-sidebar .close-icon").on("click", function() {
			$(".sliding-sidebar, .body-overlay").removeClass("active");
		});

		$(document).mouseup(function(e) 
		{
		    var container = $(".sliding-sidebar");

		    // if the target of the click isn't the container nor a descendant of the container
		    if (!container.is(e.target) && container.has(e.target).length === 0) 
		    {
		        $(".sliding-sidebar, .body-overlay").removeClass("active");
		    }
		});


		// Smooth Scroll to Section
		$('.smooth-scroll').on("click", function(event) {
			if (
		      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		      && 
		      location.hostname == this.hostname
		    ) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		      if (target.length) {
		        event.preventDefault();
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000, function() {
		          var $target = $(target);
		          $target.focus();
		          if ($target.is(":focus")) { 
		            return false;
		          } else {
		            $target.attr('tabindex','-1');
		            $target.focus(); 
		          };
		        });
		      }
		    }
		});
		

		// Active WOW JS
		new WOW().init();


		// Hero Section One Background Parallax
		$("#hero-section-one-bg-parallax").paroller({ 
			factor: 0.5, 
			factorXs: 0.2, 
			type: 'background', 
			direction: 'vertical' 
		});


		// Hero Section Two Background Parallax
		$("#hero-section-two-bg-parallax").paroller({ 
			factor: 0.5, 
			factorXs: 0.2, 
			type: 'background', 
			direction: 'vertical' 
		});


		// Hero Section Three Background Parallax
		$("#hero-section-three-bg-parallax").paroller({ 
			factor: 0.5, 
			factorXs: 0.2, 
			type: 'background', 
			direction: 'vertical' 
		});


		// Active Count Down JS
		$('#countdown').countdown({
            year: 2024, // YYYY Format
            month: 1, // 1-12
            day: 1, // 1-31
            hour: 0, // 24 hour format 0-23
            minute: 0, // 0-59
            second: 0, // 0-59
        });


        // Contact Form
       	$('form[id="contact_form"]').validate({
			rules: {
				name: 'required',
				email: {
					required: true,
					email: true,
				},
				subject: 'required',
				message: 'required',
			},

			messages: {
				name: 'Enter your full name.',
				email: 'Enter a valid email.',
				subject: 'Enter your subject.',
				message: 'Write your message.',
			},
			submitHandler: function(form) {
				// start ajax request 
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $('#contact_form').serialize(),
					cache: false,
					success: function (data) {
						if(data == 'Y'){
							$("#message_sent").modal('show');
							$('#contact_form').trigger("reset");
						}
						else{
							$("#message_fail").modal('show');
						}
					}
				});
			}
		});	

    });


    jQuery(window).load(function(){

    	// Loading Spinner
    	$('.spinner-wrpr').fadeOut();


    	// Isotope Portfolio Item 
		$('.portfolio-item-list').isotope({
		  // options
		  itemSelector: '.portfolio-item',
		  percentPosition: true,
		  masonry: {
		    columnWidth: '.portfolio-item-sizer',
		    horizontalOrder: true
		  }
		});

		$('.portfolio-item-list').isotope();

		// Isotope Portfolio Filter Button 
		$('.portfolio-item-controls').on('click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $('.portfolio-item-list').isotope({ filter: filterValue });
		});

		// Isotope Portfolio Filter Button Active Class 
		$('.portfolio-item-controls').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
		    $buttonGroup.find('.active').removeClass('active');
		    $( this ).addClass('active');
		  });
		});
        
    });

}(jQuery));	