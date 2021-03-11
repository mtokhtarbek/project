$(function(){
    $('.main__silder').slick({
        arrows: false,
        dots: true,
        autoplay:true,
        fade:true,
        responsive:[
            {
            breakpoint: 1200,
            settings:{
                dots:false
            }
            },
        ]
    });

$('.reviwes__slider').slick({
        arrows: false,  
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive:[
            {
            breakpoint: 1141,
            settings:{
                slidesToShow: 3,
            }
            },
            {
                breakpoint: 845,
                settings:{
                    slidesToShow: 2,
                }
                },
            {
                breakpoint: 585,
                settings:{
                slidesToShow: 1,
                }
            },
            
        ]
    });

$('.header__menu').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
});
});
