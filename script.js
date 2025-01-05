import { data } from "./data/translate.js";

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar-container");
  const overlay = document.querySelector(".sidebar-overlay");

  function toggleMenu() {
    hamburgerMenu.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = sidebar.classList.contains("active")
      ? "hidden"
      : "";
  }

  hamburgerMenu.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // Close menu when clicking a link
  const sidebarLinks = sidebar.querySelectorAll("a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (sidebar.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Close menu on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && sidebar.classList.contains("active")) {
      toggleMenu();
    }
  });
});

async function loadTranslations(language) {
  // Loop through the array of translation objects
  data.forEach((translationObj) => {
    // Extract the translations for the selected language
    const translations = translationObj[language];

    // Find all elements with a data-translate attribute
    const translatableElements = document.querySelectorAll("[data-translate]");

    // Iterate through each element and apply the translation
    translatableElements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[key]) {
        element.textContent = translations[key];
      }
    });
  });
}
// Example usage: Switch to Khmer
document
  .querySelector("#translateKhmer")
  .addEventListener("click", () => loadTranslations("km"));

// Example usage: Switch to English
document
  .querySelector("#translateEnglish")
  .addEventListener("click", () => loadTranslations("en"));
