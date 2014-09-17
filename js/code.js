$(window).scroll(function(){
    $(".main-header").css("top",Math.max(0,250-$(this).scrollTop()));
    // $(".icons").css("bottom",Math.max(0,-500-$(this).scrollTop()));
    // $("p").css("position",Math.max(0,250-$("p").scrollTop()));

});

$(document).ready(function() {
    // var s = $(".background");
    var h = $("h2, h4");
    var i = $(".icons");
    var isSticking = false;

    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        // var pos = s.position();
        var posh = h.position();
        // var posi = i.position();

        var shouldSetSticky0 = windowpos >= posh.top + 700;
        // var shouldSetSticky = windowpos >= pos.top + 600;
        // var shouldSetSticky1 = windowpos >= posi.top;

        if (shouldSetSticky0 && !isSticking) {
            i.removeClass("icons");
            i.addClass("iconMove");
            h.addClass("vanish");
            isSticking = true;
        } else if (!shouldSetSticky0 && isSticking) {
            i.removeClass("iconMove");
            i.addClass("icons");
            h.removeClass("vanish");
            isSticking = false;
        }
        // } else if (shouldSetSticky0 && !isSticking) {
        //     isSticking = true;
        // } else if(!shouldSetSticky0 && isSticking){
        //     isSticking = false;
        // } else if (shouldSetSticky0 && isSticking) {
        //     h.addClass("vanish");
        //     isSticking = true;
        // } else if (!shouldSetSticky0 && !isSticking) {
        //     h.removeClass("vanish");
        //     isSticking = false;
        // } 

    });
});
