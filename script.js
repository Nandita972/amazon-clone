/* 1. SEARCH BAR */
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

function runSearch() {
    const val = searchInput.value.trim();
    if (val) {
        alert(`Searching for: "${val}"`);
    } else {
        alert("Please enter a product.");
    }
}

if (searchIcon) {
    // Click listener
    searchIcon.addEventListener('click', runSearch);

    // Enter key listener
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') runSearch();
    });
}

/* 2. HERO SLIDER LOGIC */
const slider = document.querySelector('.hero-slider');
const images = document.querySelectorAll('.hero-slider img');
const prevBtn = document.querySelector('.prev-btn'); 
const nextBtn = document.querySelector('.next-btn'); 

let counter = 1; // Start at 1 because 0 is the clone
const size = 100;

// Set initial position
slider.style.transform = 'translateX(-100%)';

// Slide Helper Function
function moveSlide() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${-size * counter}%)`;
}

function slideNext() {
    if (counter >= images.length - 1) return;
    counter++;
    moveSlide();
}

function slidePrev() {
    if (counter <= 0) return;
    counter--;
    moveSlide();
}

// Reset Loop
slider.addEventListener('transitionend', () => {
    // If at the end (Clone of First), jump to real First
    if (images[counter].alt === 'Hero 1 Clone') {
        slider.style.transition = "none";
        counter = 1;
        slider.style.transform = `translateX(-100%)`;
    }
    
    // If at the start (Clone of Last), jump to real Last
    if (images[counter].alt === 'Hero 5 Clone') {
        slider.style.transition = "none";
        counter = images.length - 2;
        slider.style.transform = `translateX(${-size * counter}%)`;
    }
});

// Auto Loop
let autoSlide = setInterval(slideNext, 5000);

// Stop auto-slide when user interacts
const heroBtns = document.querySelectorAll('.hero-btn');
heroBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        clearInterval(autoSlide);
        autoSlide = setInterval(slideNext, 5000);
        
        // Check which button was clicked based on class or context
        if(e.currentTarget.classList.contains('next-btn') || e.currentTarget.onclick?.name === 'slideNext') {}
    });
});

/* 3. HOLIDAY CAROUSEL */
function scrollCarousel(direction) {
    const container = document.getElementById('holidayCarousel');
    container.scrollBy({ left: direction * 300, behavior: 'smooth' }); // Scroll left or right by 300px
}

/* 4. SCROLL TO TOP */
const backTop = document.querySelector('.foot-panel1');

if (backTop) {
    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}