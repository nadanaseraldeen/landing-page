// Selectors
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// Dynamically build the navigation menu
sections.forEach((section) => {
  const navItem = document.createElement("li");
  const navLink = document.createElement("a");
  navLink.textContent = section.getAttribute("data-nav");
  navLink.setAttribute("href", `#${section.id}`);
  navLink.classList.add("menu__link");
  navItem.appendChild(navLink);
  navList.appendChild(navItem);

  // Scroll behavior for smooth scrolling
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight section in viewport
document.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const navLink = document.querySelector(`a[href="#${section.id}"]`);
    if (rect.top >= 0 && rect.top <= 300) {
      section.classList.add("active");
      navLink.classList.add("active");
    } else {
      section.classList.remove("active");
      navLink.classList.remove("active");
    }
  });
});

// Scroll to top button
const scrollToTopButton = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
