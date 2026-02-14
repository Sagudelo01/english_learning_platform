
// DESVANECER PRELOADER
window.addEventListener('load', () => {
    setTimeout(() => {
        const ocultarPreloader = document.querySelectorAll('.loader, #overlayer');
        ocultarPreloader.forEach(preloader => {
            preloader.style.transition = 'opacity 0.5s ease';
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        });
    }, 1000); // 1 segundo de espera extra
});
// FIN DESVANECER PRELOADER

// INICIO ANIMACIÓN DE LA IMAGEN DEL LOGO
setInterval(() => {
    const img = document.querySelector('.animate__bounce');
    img.classList.remove('animate__bounce'); 
    void img.offsetWidth;  
    img.classList.add('animate__bounce'); 
}, 10000); //10 se repite cada 10 segundos
// FIN ANIMACIÓN DE LA IMAGEN DEL LOGO