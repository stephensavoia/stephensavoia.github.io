// ============================================================
// HAMBURGER MENU
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
});

// ============================================================
// CONTACT FORM
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  if (!form) return;

  const submitButton = document.getElementById("submitButton");
  const successAlert = document.getElementById("successAlert");
  const successMessage = document.getElementById("successMessage");
  const errorAlert = document.getElementById("errorAlert");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    submitButton.disabled = true;
    submitButton.textContent = "Sending\u2026";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(function (response) {
        return response.json().then(function (data) {
          return { status: response.status, data: data };
        });
      })
      .then(function (result) {
        if (result.status === 200) {
          errorAlert.classList.add("hidden");
          successAlert.classList.remove("hidden");
          successMessage.textContent = result.data.message || "Message sent successfully.";
        } else {
          successAlert.classList.add("hidden");
          errorAlert.classList.remove("hidden");
          errorMessage.textContent = result.data.message || "Something went wrong.";
        }
      })
      .catch(function (error) {
        console.error(error);
        successAlert.classList.add("hidden");
        errorAlert.classList.remove("hidden");
        errorMessage.textContent = "Error! Message was not sent.";
      })
      .finally(function () {
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      });
  });
});

// ============================================================
// DARK MODE TOGGLE
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggleBtn = document.getElementById("darkModeToggle");
  const iconMoon = document.getElementById("iconMoon");
  const iconSun = document.getElementById("iconSun");

  if (!toggleBtn) return;

  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add("dark-mode");
      iconMoon.classList.add("hidden");
      iconSun.classList.remove("hidden");
    } else {
      body.classList.remove("dark-mode");
      iconMoon.classList.remove("hidden");
      iconSun.classList.add("hidden");
    }
  }

  toggleBtn.addEventListener("click", function () {
    var isDark = !body.classList.contains("dark-mode");
    applyTheme(isDark);
    try { localStorage.setItem("avp-theme", isDark ? "dark" : "light"); } catch (e) {}
  });

  // Restore saved preference
  var saved;
  try { saved = localStorage.getItem("avp-theme"); } catch (e) {}
  if (saved === "dark") {
    applyTheme(true);
  } else {
    applyTheme(false);
  }
});
