var onScroll = function() {
    var scrolled = $(window).scrollTop() >= 1; // true or false
    if  (scrolled) {
        $('.main_header').addClass("scrolled");
    } else {
        $('.main_header').removeClass("scrolled");
    }
}
$(window).scroll(onScroll);


function redirect( url ) {    
    window.open(
    url,
    '_blank')
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})