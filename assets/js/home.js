// Typing effect
const phrases = [
  "Biomedical Researcher",
  "AI Enthusiast",
  "Science Communicator"
];
let currentPhrase = 0;
let currentChar = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (!typingText) return;

  const current = phrases[currentPhrase];
  typingText.textContent = current.substring(0, currentChar++);
  if (currentChar > current.length) {
    setTimeout(() => {
      currentChar = 0;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(type, 500);
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
}
type();

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
function showOnScroll() {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
