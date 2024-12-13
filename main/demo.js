window.addEventListener("DOMContentLoaded", () => {
  const message = localStorage.getItem("successMessage");
  if (message) {
    alert(message); // Xabarni ko'rsatish
    localStorage.removeItem("successMessage");
  }
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
