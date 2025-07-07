$(document).ready(function() {
    // Configuración general de Fancybox
    $('[data-fancybox]').fancybox({
        animationEffect: 'fade',
        animationDuration: 300,
        transitionEffect: 'fade',
        transitionDuration: 300
    });
    
    // Evento para mostrar video de YouTube
    $('#videoBtn').click(function() {
        $.fancybox.open({
            src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            type: 'iframe',
            iframe: {
                preload: false,
                css: {
                    width: '640px',
                    height: '360px'
                }
            }
        });
    });
    
    // Evento para mostrar mapa de Google
    $('#mapBtn').click(function() {
        $.fancybox.open({
            src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8271262902686!2d-70.6048315!3d-33.4569152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5c6c4b5b9b3%3A0x8820139b4e2f30f7!2sPuente%20Maipú%2C%20Maipú%2C%20Región%20Metropolitana!5e0!3m2!1s!2scl!4v1684567890123!5m2!1s!2scl',
            type: 'iframe',
            iframe: {
                preload: false,
                css: {
                    width: '600px',
                    height: '450px'
                }
            }
        });
    });
});