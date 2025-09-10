document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.portfolio-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (!slider) return;

    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    let currentIndex = 0;
    const slideIntervalTime = 4000;
    let slideInterval;

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        const slideWidth = slider.clientWidth;
        slider.scrollLeft = currentIndex * slideWidth;
    }

    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        const slideWidth = slider.clientWidth;
        slider.scrollLeft = currentIndex * slideWidth;
    }

    function startSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(goToNextSlide, slideIntervalTime);
    }

    nextBtn.addEventListener('click', () => {
        goToNextSlide();
        startSlideInterval();
    });

    prevBtn.addEventListener('click', () => {
        goToPrevSlide();
        startSlideInterval();
    });

    startSlideInterval();
});