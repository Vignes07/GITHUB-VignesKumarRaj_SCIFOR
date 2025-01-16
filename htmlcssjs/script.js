// NAvigation
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    event.target.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth < 768;
  const carouselInner = document.querySelector(".carousel-inner");

  if (isMobile) {
    // Get all columns (cards) in the carousel
    const allCols = document.querySelectorAll(".carousel-item .col-lg-4");
    carouselInner.innerHTML = ""; // Clear the current carousel structure

    // Create a new slide for each column (card)
    allCols.forEach((col, index) => {
      const newItem = document.createElement("div");
      newItem.className = "carousel-item" + (index === 0 ? " active" : "");
      newItem.innerHTML = `<div class="row">${col.outerHTML}</div>`;
      carouselInner.appendChild(newItem);
    });
  }
});
