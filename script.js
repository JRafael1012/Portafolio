document.addEventListener("DOMContentLoaded", function () {
  // Manejo de navegación entre secciones
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = this.getAttribute("data-target");

      sections.forEach((section) => {
        section.style.display = "none";
      });

      document.getElementById(target).style.display = "block";
    });
  });
});
