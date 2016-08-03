    $(function() {

                var loc = location.href;
                if (loc.indexOf("#") != 0) {
                    var id = loc.split("#")[1];
                    $("#" + id).ScrollTo({
                        duration: 1000,
                        easing: 'linear'
                    });
                }

                $('.visa-service .sub-title').click(function() {
                    var e = $(this);
                    e.toggleClass("active");
                    var panelId = e.data("target-id");
                    $("#" + panelId).toggleClass("open");
                    var isOpen = e.find('span');
                    if (e.hasClass("active")) {
                        isOpen.text("-");
                    } else {
                        isOpen.text("+");
                    }
                });
                $('.migration .know-more').click(function() {
                    $('.migrate').toggleClass('hidden');
                    if($(this).text()==="Know more"){
                        $(this).text("Know less");
                    }else{
                        $(this).text("Know more");
                    }
                    // $('body').scrollTop($('.migrate').offset().top - 150);
                    $('body').animate({scrollTop: $('.migrate').offset().top - 150}, '400');
                });
                $('.education .know-more').click(function() {
                    $('.edu').toggleClass('hidden');
                    if($(this).text()==="Know more"){
                        $(this).text("Know less");
                    }else{
                        $(this).text("Know more");
                    }
                    //  $('body').scrollTop($('.edu').offset().top - 150);
                    $('body').animate({scrollTop: $('.edu').offset().top - 150}, '400');
                });
            });