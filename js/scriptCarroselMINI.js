$(document).ready(function() {
    $('.brands-slider').slick({
        // Configurações do Slick Carousel 
        infinite: true, // Loop infinito
        slidesToShow: 5, // 
        slidesToScroll: 1,
        autoplay: true, // Autoplay
        autoplaySpeed: 2000, // Velocidade do autoplay em milissegundos
        arrows: false, // Remover as setas de navegação
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
});
