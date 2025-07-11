const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".experience-slide");
const carousel = document.querySelector(".experience-carousel");
let currentSlide = 0;
let isTransitioning = false;

function showSlide(index) {
  if (!carousel || isTransitioning) return;
  isTransitioning = true;

  const offset = index * -100;
  carousel.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index]?.classList.add("active");

  setTimeout(() => {
    isTransitioning = false;
  }, 600);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 8000);

document.querySelector(".carousel-arrow.left")?.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.querySelector(".carousel-arrow.right")?.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
