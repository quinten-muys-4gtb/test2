// home.js

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
  
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  
    // Sluit het menu automatisch wanneer een link wordt aangeklikt op mobiel
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          menu.classList.remove("active");
        }
      });
    });
  });

  let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slideshow-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 4000); // Verandert elke 4 seconden
}

  