$(window).scroll(function(){
    $(".main-header").css("top",Math.max(0,250-$(this).scrollTop()));

    // $("p").css("position",Math.max(0,250-$("p").scrollTop()));

    var s = $(".background");

    var isSticking = false;

    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var pos = s.position();
        var shouldSetSticky = windowpos >= pos.top + 700;

        if (shouldSetSticky && !isSticking) {
            s.addClass("stick");
            // t.addClass("tag");
            // g.addClass("head1");
            isSticking = true;
        } else if(!shouldSetSticky && isSticking){
            s.removeClass("stick");
            // t.removeClass("tag");
            // g.removeClass("head1");
            isSticking = false;
        }

    });
});



// $.fn.followTo = function (pos) {
//     var $this = this,
//         $window = $(window);

//     $window.scroll(function (e) {
//         if ($window.scrollTop() > pos) {
//             $this.css({
//                 position: 'absolute',
//                 top: pos
//             });
//         } else {
//             $this.css({
//                 position: 'absolute',
//                 top: 0
//             });
//         }
//     });
// };

// $('.screenShots').followTo(250);



// $(document).ready(function() {
//     var s = $('.main-header');
//     var t = $('.screenShots');
//     // var g = $(".grid-header");

//     var isSticking = false;

//     $(window).scroll(function() {
//         var windowpos = $(window).scrollTop() - s.height();
//         // console.log(windowpos);
//         var pos = s.position();
//         console.log(pos);
//         // console.log(pos);
//         var post = t.position();
//         console.log(post);
//         var shouldSetSticky = windowpos >= post.top;

//         if (shouldSetSticky && !isSticking) {
//             s.addClass("stick");
//             // t.addClass("tag");
//             // g.addClass("head1");
//             isSticking = true;
//         } else if(!shouldSetSticky && isSticking){
//             s.removeClass("stick");
//             // t.removeClass("tag");
//             // g.removeClass("head1");
//             isSticking = false;
//         }

//     });
// });
// $(window).load($(function() {
//     var elem = $(".screenShots");
//     var top = elem.offset().top;
//     var maxTop = $("h2").offset().top - elem.height();
//     var scrollHandler = function() {
//         var scrollTop = $(window).scrollTop();
//         if (scrollTop < top) {
//             elem.css({
//                 position: "static",
//                 // top: "0px"
//             }) //should be "static" I think
//         } else if (scrollTop > maxTop) {
//             elem.css({
//                 position: "absolute",
//                 top: (maxTop + "px")
//             })
//         } else {
//             elem.css({
//                 position: "fixed",
//                 top: "0px"
//             })
//         }
//     }
//     $(window).scroll(scrollHandler);
//     scrollHandler()

// }));
