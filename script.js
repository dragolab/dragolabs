document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.portfolio-slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentIndex = 0;
    const slideInterval = 3000; // Scorrimento ogni 3 secondi (3000 ms)

    function updateSlider() {
        if (sliderItems.length === 0) return; // Evita errori se non ci sono elementi
        const itemWidth = sliderItems[0].clientWidth;
        slider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    function goToNextSlide() {
        currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }

    // Abilita lo scorrimento automatico
    setInterval(goToNextSlide, slideInterval);

    // Aggiorna lo slider al ridimensionamento della finestra
    window.addEventListener('resize', updateSlider);

    // Inizializza lo slider alla fine del caricamento del DOM
    updateSlider();
});