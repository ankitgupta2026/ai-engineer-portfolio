// ==============================
// MOBILE NAVIGATION
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close menu after clicking a link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ==============================
// STATS COUNTER
// ==============================

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = target / 40;

    const updateCounter = () => {

        if (current < target) {

            current += increment;

            counter.textContent = Math.ceil(current);

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target;

        }
    };

    updateCounter();
};


// Start counters when visible

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                counters.forEach(animateCounter);

                observer.disconnect();

            }

        });

    },
    {
        threshold: 0.4
    }
);


const statsSection = document.querySelector(".stats-section");

if (statsSection) {
    observer.observe(statsSection);
}
