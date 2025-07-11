document.addEventListener("DOMContentLoaded", () => {
  const pubList = document.querySelector(".publications-list");
  const scrollUpBtn = document.querySelector(".scroll-btn.up");
  const scrollDownBtn = document.querySelector(".scroll-btn.down");

  scrollUpBtn.addEventListener("click", () => {
    pubList.style.animationPlayState = "paused";
    pubList.scrollTop -= 40;
  });

  scrollDownBtn.addEventListener("click", () => {
    pubList.style.animationPlayState = "paused";
    pubList.scrollTop += 40;
  });
});
