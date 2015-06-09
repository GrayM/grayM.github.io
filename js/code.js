$(document).ready(function() {
var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if( ismobile ) {
    $( "section" ).attr( "data-speed", "0" );
    }
    
    function parallax() {
     var $window = $(window);

        $('section[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));
        // Put together our final background position
        var coords = '50% '+ yPos + 'px';
        // Move the background
        $bgobj.css({ backgroundPosition: coords });
        });
        });
    }
    function iconSwap() {
        var h = $("h2");
        var i = $(".icons");
        var b = $(".fa-angle-double-down");
        var is_touch_device = 'ontouchstart' in document.documentElement;
        var isSticking = false;
        var ios = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

        if (!ios) {

            $(window).scroll(function() {
                var windowpos = $(window).scrollTop();
                var posh = h.position();
                var shouldSetSticky0 = windowpos >= posh.top + 270;
                var device = navigator.userAgent.toLowerCase();
                var ios = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

                $(".main-header").css("top", Math.max(0, 150 -              $(this).scrollTop() - 150));

                if (jQuery(this).scrollTop() > 150) {

                    if (jQuery('#desc').hasClass('visible') == false) {

                        jQuery('#desc').stop().animate({
                            right: '0px',
                        }, 500, function() {
                            jQuery('#desc').addClass('visible')
                        });
                    }
                } else {
                    if (jQuery('#desc').hasClass('visible') == true) {
                        jQuery('#desc').stop().animate({
                            right: '100%',
                        }, 500, function() {
                            jQuery('#desc').removeClass('visible')
                        });
                    }
                }


                if (shouldSetSticky0 && !isSticking) {
                    i.appendTo('.project-container2');
                    i.removeClass("icons");
                    i.addClass("iconMove");
                    b.removeClass("fa-angle-double-down");
                    h.addClass("vanish");
                    isSticking = true;
                } else if (!shouldSetSticky0 && isSticking) {

                    i.removeClass("iconMove");
                    i.addClass("icons");
                    i.appendTo(".main-header");

                    b.addClass("fa-angle-double-down");
                    h.removeClass("vanish");
                    isSticking = false;
                }



            });
        }
    }
    $(".headerExpand").click(function () {

    $header = $(this);
    //get next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Shrink Me" : "Hi again";
        });
    });

});
  /* responsive navigation */

function nav() {
	// Create the dropdown base
	$("<select />").appendTo("nav");

	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Go to..."
	}).appendTo("nav select");

	// Populate dropdown with menu items
	$("nav a").each(function() {
	 var el = $(this);
	 $("<option />", {
	     "value"   : el.attr("href"),
	     "text"    : el.text()
	 }).appendTo("nav select");
	});

	$("nav select").change(function() {
 	window.location = $(this).find("option:selected").val();
	});
};

iconSwap();
nav();
parallax();







});