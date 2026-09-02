// ========================================
// AI ENGINEER PORTFOLIO
// DAY 01
// ========================================


// Current Mission Day

const currentDay = 1;
const totalDays = 90;


// Calculate Progress

const missionProgress =
    (currentDay / totalDays) * 100;


// Update Progress Bar

const progressBar =
    document.getElementById("progressBar");

const progressText =
    document.getElementById("progressText");


if (progressBar) {

    progressBar.style.width =
        `${missionProgress}%`;

}


if (progressText) {

    progressText.textContent =
        `${missionProgress.toFixed(1)}%`;

}


// ========================================
// MOBILE MENU
// ========================================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

});
