"use strict";

/* =========================
   슬라이드쇼
========================= */
let slideTimer = null;

function initSlideshow() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  let index = 0;

  slides.forEach((s, i) => {
    s.classList.toggle("active", i === 0);
  });

  clearInterval(slideTimer);

  slideTimer = setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 2000);
}

/* =========================
   배경 음악
========================= */
function playBgm() {
  const bgm = document.getElementById("bgm");
  if (!bgm) return;

  bgm.volume = 0.4;
  bgm.play().catch(() => {});
}
