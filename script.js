document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.portfolio-slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const slideIntervalTime = 4000; // Scorrimento ogni 4 secondi
    let slideInterval;

    function updateSlider() {
        if (sliderItems.length === 0) return;
        const itemWidth = slider.clientWidth; // Usa la larghezza del contenitore
        slider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    function goToNextSlide() {
        currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }
    
    function goToPrevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderItems.length - 1;
        updateSlider();
    }

    // Funzione per resettare e avviare l'intervallo automatico
    function startSlideInterval() {
        clearInterval(slideInterval); // Ferma l'intervallo precedente
        slideInterval = setInterval(goToNextSlide, slideIntervalTime);
    }

    // Event listeners per i bottoni
    nextBtn.addEventListener('click', () => {
        goToNextSlide();
        startSlideInterval(); // Resetta il timer quando si clicca
    });
    
    prevBtn.addEventListener('click', () => {
        goToPrevSlide();
        startSlideInterval(); // Resetta il timer quando si clicca
    });

    // Aggiorna lo slider al ridimensionamento della finestra
    window.addEventListener('resize', updateSlider);

    // Inizializza tutto
    updateSlider();
    startSlideInterval();
});