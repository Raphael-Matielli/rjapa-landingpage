$(document).ready(function(){
    $('.btn-menu').on('click', function(){
        toggleMenu($('.menus'));
    });
    $('.menus').before().on('click', function(){
        toggleMenu($('.menus'));
    });

    function toggleMenu(menu) {
        menu.toggleClass('active');
    }
    $('.videos .lista').slick({
        dots: true,
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow:2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.menus .menu ul li a').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
        targeOffset = $('.'+id).offset().top;

        $('html, body').animate({
            scrollTop: targeOffset - 100
        }, 500);
    });
    
});
