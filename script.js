const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.parentElement.classList.add("active"); // add active to li, not just link
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".ul-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");  // show/hide menu
});

