function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function scrollProjek(direction) {
  const container = document.getElementById("projekList");
  const scrollAmount = 340; 
  container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

var typed = new Typed(".auto-type", {
    strings: [
        "Rafa Ahmad Zakaria",
        "Student",
        "Front-End Developer",
        "Database Administrator",
        "Web Developer",
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