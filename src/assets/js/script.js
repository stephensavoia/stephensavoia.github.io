// REMOVE FOCUS FROM MENU
// (i.e. close menu, because that's how daisyui works),
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
// END OF REMOVE FOCUS FROM MENU

// CONTACT FORM
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const submitButton = document.getElementById("submitButton");
  const successAlert = document.getElementById("successAlert");
  const successMessage = document.getElementById("successMessage");
  const errorAlert = document.getElementById("errorAlert");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", function (e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          errorAlert.classList.add("hidden");
          successAlert.classList.remove("hidden");
          successMessage.innerHTML = json.message;
        } else {
          console.log(response);
          successAlert.classList.add("hidden");
          errorAlert.classList.remove("hidden");
          errorMessage.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        successAlert.classList.add("hidden");
        errorAlert.classList.remove("hidden");
        errorMessage.innerHTML = "Error! Message was not sent.";
      })
      .then(function () {
        form.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = "Submit";
      });
  });
});
// END OF CONTACT FORM

// DARK MODE TOGGLE

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const themeController = document.getElementById("themeController");
  const profileLightMode = document.getElementById("profileLightMode");
  const profileDarkMode = document.getElementById("profileDarkMode");

  themeController.addEventListener("change", function () {
    if (themeController.checked) {
      body.classList.add("dark-mode");
      profileDarkMode.classList.remove("hidden");
      profileLightMode.classList.add("hidden");
    } else {
      body.classList.remove("dark-mode");
      profileLightMode.classList.remove("hidden");
      profileDarkMode.classList.add("hidden");
    }
  });
});

// END OF DARK MODE TOGGLE
