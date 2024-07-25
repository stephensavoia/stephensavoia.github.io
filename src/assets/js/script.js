// Remove focus from menu (i.e. close menu, because that's how daisyui works),
// when the menu button is clicked after it is already in focus (i.e. opened)

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
let menuShouldClose = false;

menuBtn.addEventListener("mousedown", () => {
  if (
    document.activeElement === menuBtn ||
    menu.contains(document.activeElement)
  ) {
    menuShouldClose = true;
  }
});

menuBtn.addEventListener("click", () => {
  if (menuShouldClose) {
    document.activeElement.blur();
  }
});

menuBtn.addEventListener("blur", () => {
  menuShouldClose = false;
});

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.activeElement.blur();
  });
});
