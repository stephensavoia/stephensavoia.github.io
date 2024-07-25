const menuBtn = document.getElementById("menuBtn");
let isMenuOpen = false;
let menuShouldClose = false;

menuBtn.addEventListener("focus", () => {
  isMenuOpen = true;
});

menuBtn.addEventListener("blur", () => {
  isMenuOpen = false;
  menuShouldClose = false;
});

menuBtn.addEventListener("mousedown", (e) => {
  if (isMenuOpen) {
    menuShouldClose = true;
  }
});

menuBtn.addEventListener("click", () => {
  if (menuShouldClose) {
    document.activeElement.blur();
  }
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.activeElement.blur();
  });
});
