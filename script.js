const menuToggle = document.querySelector(".toggle");
const landingPage = document.querySelector(".landing_page");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  landingPage.classList.toggle("active");
});
