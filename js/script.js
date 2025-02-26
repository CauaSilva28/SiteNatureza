AOS.init();

const beneficiosSwiper = new Swiper('.beneficios_swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
    grabCursor:true,
    centeredSlides:true,
    speed:800,
    slidesPerView:"auto",
    coverflowEffect:{
        rotate:0,
        stretch:80,
        depth:400,
        modifier:1.3,
        slideShadows:true,
    },

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});