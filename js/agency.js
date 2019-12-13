/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        $.scrollLock(false);
        //$('.lightbox').hide();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// lightbox control
$(document).ready(function() {
    $('.gallery-link').click(function() {
      $.scrollLock(true);
    });

    $('div.lightbox').click(function() {
      $.scrollLock(false);
    });
});

// jQuery for projects-caption height
var maxHeight = 0;

$(".projects-caption").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});

$(".projects-caption").height(maxHeight);



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
