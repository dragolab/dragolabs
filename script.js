document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.portfolio-slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateSlider() {
        const itemWidth = sliderItems[0].clientWidth;
        slider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderItems.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Aggiorna lo slider al ridimensionamento della finestra
    window.addEventListener('resize', updateSlider);

    // Inizializza lo slider alla fine del caricamento del DOM
    updateSlider();
});