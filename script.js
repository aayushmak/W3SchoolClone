let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dark mode toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");

    // Toggle navbar dark/light mode based on dark mode status
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar-light", !document.body.classList.contains("dark-mode"));
    navbar.classList.toggle("bg-light", !document.body.classList.contains("dark-mode"));
    navbar.classList.toggle("navbar-dark", document.body.classList.contains("dark-mode"));
    navbar.classList.toggle("bg-dark", document.body.classList.contains("dark-mode"));
});

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show slides function
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Optional: Automatic slide transition
setInterval(function() {
    plusSlides(1); // Change slide every 5 seconds
}, 5000);
