$(window).scroll(function(){
    $(".main-header").css("top",Math.max(0,250-$(this).scrollTop()));

    // $("p").css("position",Math.max(0,250-$("p").scrollTop()));

    var s = $(".background");
    var h = $(".main-header");

    var isSticking = false;

    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var pos = s.position();
        var posh = h.position();
        var shouldSetSticky0 = windowpos >= posh.top;
        var shouldSetSticky = windowpos >= pos.top + 700;

        if (shouldSetSticky0 && !isSticking) {
            isSticking = true;
        } else if(!shouldSetSticky0 && isSticking){
            isSticking = false;
        } else if (shouldSetSticky && isSticking) {
            h.addClass("vanish");
            isSticking = false;
        } else if (!shouldSetSticky0 && !isSticking) {
            h.removeClass("vanish");
            isSticking = false;
        }

    });
});
