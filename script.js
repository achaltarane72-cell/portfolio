// ======================================
// Portfolio JavaScript
// ======================================

// Dark Mode Toggle
const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            themeButton.textContent = "☀️";
        } else {
            themeButton.textContent = "🌙";
        }
    });
}

// Smooth Scrolling (works for links like #about, #contact)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Highlight Active Navigation Link
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
    const page = link.getAttribute("href");

    if (page === currentPage || (currentPage === "" && page === "index.html")) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});