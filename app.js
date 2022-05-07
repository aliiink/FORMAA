$(function () {

    var header, introH, scrollOffset;
    header = $("#header");
    introH = $("#intro").innerHeight();
    scrollOffset = $(window).scrollTop();

    /*Header Fixed*/
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smooth scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blickId = $this.data('scroll'),
            blockOffset = $(blickId).offset().top;


        $("html, body").animate({

            scrollTop: blockOffset
        });
    });

    /* Menu nav toggle*/
    $("#nav_toggle").on("click", function (event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

});