


$(document).ready(function() {

    var h = $("h2, h4");
    var i = $(".icons");
    var b = $(".fa-angle-double-down");
    var is_touch_device = 'ontouchstart' in document.documentElement;
    var isSticking = false;
    var ios = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

    if (!ios) {
        $(window).scroll(function() {
            var windowpos = $(window).scrollTop();
            var posh = h.position();
            var shouldSetSticky0 = windowpos >= posh.top + 270;
            var device = navigator.userAgent.toLowerCase();
            var ios = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

            $(".main-header").css("top", Math.max(0, 200 - $(this).scrollTop() - 50));


            if (jQuery(this).scrollTop() > 90) {

                if (jQuery('#desc').hasClass('visible') == false) {
                    
                    jQuery('#desc').stop().animate({
                        right: '0px'
                    }, function() {
                        jQuery('#desc').addClass('visible')
                    });
                }
            } else {
                if (jQuery('#desc').hasClass('visible') == true) {
                    jQuery('#desc').stop().animate({
                        right: '50%'
                    }, function() {
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





});
