let currentSlideIndex = 1;
let slideTimer;

// Initialize slides
function initSlides() {
    showSlide(currentSlideIndex);
    autoSlide();
}

// Change slide manually
function changeSlide(n) {
    clearTimeout(slideTimer);
    showSlide(currentSlideIndex += n);
    autoSlide();
}

// Go to specific slide
function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlide(currentSlideIndex = n);
    autoSlide();
}

// Show slide
function showSlide(n) {
    let slides = document.getElementsByClassName('slide');
    let indicators = document.getElementsByClassName('indicator');

    // Wrap around
    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }

    // Remove active class from all slides and indicators
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
    }

    // Add active class to current slide and indicator
    slides[currentSlideIndex - 1].classList.add('active');
    indicators[currentSlideIndex - 1].classList.add('active');
}

// Auto slide every 5 seconds
function autoSlide() {
    slideTimer = setTimeout(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
        autoSlide();
    }, 5000);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Initialize on page load
window.addEventListener('load', initSlides);