function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-per");

  skillBars.forEach(function (bar) {
    if (isInViewport(bar)) {
      const skillValue = bar.getAttribute("data-skill");
      let currentWidth = parseFloat(bar.style.width) || 0;
      let targetWidth = parseFloat(skillValue);

      if (currentWidth < targetWidth) {
        currentWidth += (targetWidth - currentWidth) * 0.05;
        bar.style.width = currentWidth + "%";
        bar.style.opacity = 1;
      }
    }
  });
  

  requestAnimationFrame(animateSkillBars);
}
window.addEventListener("scroll", animateSkillBars);

var typed = new Typed(".auto-type", {
    strings: [
        "Rafa Ahmad Zakaria",
        "Student",
        "Photografer",
        "Videografer",
        "Information System"
    ],
    typeSpeed: 110,
    backSpeed: 80,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,
});


const headerSection = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (isInViewport(headerSection)) {
        headerSection.classList.add("visible");
    }
});

const articleSection = document.querySelector("article");

window.addEventListener("scroll", function () {
    if (isInViewport(articleSection)) {
        articleSection.classList.add("visible");
    }
});

const timelineItems = document.querySelectorAll(".timeline-item");

function checkTimelineVisibility() {
    timelineItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkTimelineVisibility);
checkTimelineVisibility();