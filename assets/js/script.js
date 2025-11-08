document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let started = false;

  function runCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const duration = 2000; // total animation time
    const stepTime = 15;
    const increment = target / (duration / stepTime);

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.innerText = "+" + Math.floor(current).toLocaleString();
    }, stepTime);
  }

  function checkScroll() {
    const section = document.querySelector(".stats-section");
    const sectionPos = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (!started && sectionPos < screenHeight * 0.8) {
      started = true;
      counters.forEach(runCounter);
    }
  }

  window.addEventListener("scroll", checkScroll);
});
