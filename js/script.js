document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-list");
  var dropdown = document.querySelector(".has-dropdown");
  var dropdownToggle = dropdown ? dropdown.querySelector(".dropdown-toggle") : null;

  function setDropdown(open) {
    if (!dropdown) return;
    dropdown.classList.toggle("open", open);
    dropdownToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        setDropdown(false);
      });
    });
  }

  if (dropdown) {
    dropdownToggle.addEventListener("click", function () {
      setDropdown(!dropdown.classList.contains("open"));
    });

    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) setDropdown(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && dropdown.classList.contains("open")) {
        setDropdown(false);
        dropdownToggle.focus();
      }
    });
  }
});
