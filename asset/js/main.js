$(function() {
    $(".btn-menu").click(function() {
        $(".menu-items").slideToggle();
    });
    $(document).click(function(event) {
        if (!$(event.target).is('.menu-items') && !$(event.target).is('.btn-menu') && !$(event.target).is('.btn-menu span')) {
            if ($('.menu-items').is(":visible")) {
                $('.menu-items').slideToggle();
            }
        }
        if (!$(event.target).is('.menu-wrap') && !$(event.target).is('.btn-mnu') && !$(event.target).is('.btn-mnu span')) {
            if ($('.menu-wrap').is(":visible")) {
                if ($('.fixed-top').hasClass("full-height")) {
                    $('.fixed-top .menu-wrap').slideUp(function() {
                        $('.fixed-top').removeClass("full-height");
                        $('body').css('overflow', 'visible');
                    });
                }
            }
        }
    });
    $(".btn-big-menu,.close-menu").click(function() {
        $(".big-menu,.big-menu-bar").toggleClass("hidden");
        $('body').toggleClass('hide-overflow');
    });
    $('.btn-mnu').click(function() {
        if (!$('.fixed-top').hasClass("full-height")) {
            $('.fixed-top').addClass("full-height");
            $('.fixed-top').removeClass("opaq");
            $('.fixed-top .menu-wrap').slideDown();
            $('body').css('overflow', 'hidden');
        } else {
            $('.fixed-top .menu-wrap').slideUp(function() {
                $('.fixed-top').removeClass("full-height");
                $('body').css('overflow', 'visible');
            });
        }
    });
    $(document).scroll(function() {
        if ($('body').scrollTop() >= 100) {
            $('body').addClass('smallHeader');
        } else {
            $('body').removeClass('smallHeader');
        }
    });
    $(".goto").click(function() {
//        $("#" + $(this).attr("data-go")).ScrollTo({
//            duration: 1000,
//            easing: 'linear'
//        });
        var data = $(this).attr("data-redirect");
        window.location = data;
    });
    
     $('.accordian .acc-title').click(function() {
                    if (!$(this).parent().hasClass('active')) {
                        $('.accordian .panel').each(function() {
                            $(this).removeClass('active');
                            $(this).find('.acc-content').slideUp(400);
                        });
                        $(this).parent().addClass('active');
                        $(this).next().slideDown(400);
                    } else {
                        $(this).parent().removeClass('active');
                        $(this).next().slideUp(400);
                    }
                });
                $(".hero-block").click(function() {
                    $(".hero-block").each(function() {
                        $(this).removeClass('active');
                    });
                    $(this).addClass("active");
                });
});
