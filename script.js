document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slider-track");
  const slides = Array.from(track.children);
  const trackWidth = track.scrollWidth;
  const clones = [];

  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
    clones.push(clone);
  });

  track.style.width = `${trackWidth * 2}px`; // Doubling the width for seamless looping

  track.addEventListener("animationiteration", () => {
    track.style.transform = "translateX(0)"; // Resetting to the beginning
  });
});

