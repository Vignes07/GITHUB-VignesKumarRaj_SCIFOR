const navLinks = document.querySelectorAll(".nav-link");

function removeActiveClass() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    removeActiveClass();
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function removeActiveClasses() {
    navLinks.forEach((link) => link.classList.remove("active"));
  }

  function addActiveClass(id) {
    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        removeActiveClasses();
        addActiveClass(entry.target.id);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
