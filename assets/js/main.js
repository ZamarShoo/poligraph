if (Boolean($('.owl-carousel').length)) {
    var owl = $('.owl-carousel');

    owl.owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:50,
        dots: false,
        responsive:{
            600:{
                items:4
            }
        }
    });

    $('#next').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('#prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })
}

$(window).on('mousemove', function(e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $(".parallax").each(function(i, el) {
        var offset = parseInt($(el).data('offset'));
        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

        $(el).css({
            '-webkit-transform': translate,
            'transform': translate,
            'moz-transform': translate
        });
    });
});