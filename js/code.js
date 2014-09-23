$(window).scroll(function() {
    $(".main-header").css("top", Math.max(0, 250 - $(this).scrollTop()));

});

$(document).ready(function() {

    var h = $("h2, h4");
    var i = $(".icons");
    var b = $(".fa-angle-double-down");

    var isSticking = false;

    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();

        var posh = h.position();


        var shouldSetSticky0 = windowpos >= posh.top + 650;

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
});

function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }

          function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("img").src = images[x];
          }

          function startTimer() {
              setInterval(displayNextImage, 3000);
          }

          var images = [], x = -1;
          images[0] = "image1.jpg";
          images[1] = "image2.jpg";
          images[2] = "image3.jpg";
