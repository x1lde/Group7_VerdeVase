// =======================
// Toggle Menu
// =======================
const navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// =======================
// Slider Behavior
// =======================
const items = document.querySelectorAll('.item');
const container = document.querySelector('.container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Set initial background
function updateBackground(index) {
    container.style.backgroundImage = items[index].style.backgroundImage;
}

// Update dots
function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Show slide by index
function showSlide(index) {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentIndex = index;

    updateBackground(currentIndex);
    updateDots(currentIndex);
}

// Next/Prev button events
prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

// Thumbnail click
items.forEach((item, i) => {
    item.addEventListener('click', () => showSlide(i));
});

// Initialize slider
showSlide(currentIndex);

// =======================
// Smooth Scroll
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        const headerOffset = 0; // Change if you have a fixed header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        // If mobile menu is open, close it
        if (navLinks.style.right === "0px") {
            hideMenu();
        }
    });
});
