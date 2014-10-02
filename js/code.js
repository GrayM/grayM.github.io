//  $(window).scroll(function(){
//     var h = $("h2, h4");
//     var i = $(".icons");
//     var b = $(".fa-angle-double-down");
//     var windowpos = $(window).scrollTop();
//     var posh = h.position();
//     var shouldSetSticky0 = windowpos >= posh.top + 650;
//     var isSticking = false;
//     var is_touch_device = 'ontouchstart' in document.documentElement;

//     var device = navigator.userAgent.toLowerCase();
//     var ios = device.match(/(iphone|ipod|ipad)/);

//     if (ios || is_touch_device) {
//         //ADD CLASSES HERE THAT WILL ONLY APPLY TO IOS
//         $(".parallax").addClass("iOSBackground");
//         $(".iconMove").addClass("iosIcons");
//         h.addClass("mobile-header");
//     }

//     if (shouldSetSticky0 && !isSticking) {
//         i.removeClass("icons");
//         i.addClass("iconMove");
//         b.removeClass("fa-angle-double-down");
//         h.addClass("vanish");
//         isSticking = true;
//     } else if (!shouldSetSticky0 && isSticking) {
//         i.removeClass("iconMove");
//         i.addClass("icons");
//         b.addClass("fa-angle-double-down");
//         h.removeClass("vanish");
//         isSticking = false;
//     }

// });


//  $(document).ready(function(){
//     $(".main-header").css("top", Math.max(0, 250 - $(this).scrollTop()));
// });


$(document).ready(function() {

    var h = $("h2, h4");
    var i = $(".icons");
    var b = $(".fa-angle-double-down");
    var is_touch_device = 'ontouchstart' in document.documentElement;
    var isSticking = false;

    if (!is_touch_device) {
        $(window).scroll(function() {
            var windowpos = $(window).scrollTop();
            var posh = h.position();
            var shouldSetSticky0 = windowpos >= posh.top + 400;
            var device = navigator.userAgent.toLowerCase();
            var ios = device.match(/(iphone|ipod|ipad)/);

            $(".main-header").css("top", Math.max(0, 150 - $(this).scrollTop()));


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
                i.removeClass("icons");
                i.addClass("iconMove");
                b.removeClass("fa-angle-double-down");
                h.addClass("vanish");
                isSticking = true;
            } else if (!shouldSetSticky0 && isSticking) {
                i.removeClass("iconMove");
                i.addClass("icons");
                b.addClass("fa-angle-double-down");
                h.removeClass("vanish");
                isSticking = false;
            }



        });
    }





});
