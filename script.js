document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.portfolio-slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Se non c'è uno slider, interrompi lo script per evitare errori
    if (!slider || sliderItems.length === 0) return;

    let currentIndex = 0;
    const slideIntervalTime = 4000; // 4 secondi
    let slideInterval;

    function updateSlider() {
        // La larghezza di ogni slide è il 100% del contenitore visibile
        const itemWidth = slider.parentElement.clientWidth;
        // Sposta l'intero blocco slider a sinistra
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
        clearInterval(slideInterval); // Ferma l'intervallo precedente per sicurezza
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

    // Aggiorna lo slider al ridimensionamento della finestra per la responsività
    window.addEventListener('resize', updateSlider);

    // Inizializza tutto
    updateSlider();
    startSlideInterval();
});