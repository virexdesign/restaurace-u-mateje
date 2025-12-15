// MENU
fetch("menu.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("menu-full").innerHTML = data;
    document.getElementById("menu-preview").innerHTML = data;
  });

// OTEVÍRACÍ DOBA
fetch("opening-hours.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("opening-hours").innerHTML = data;
  });

// DROPDOWN
const dropdown = document.querySelector(".nav-dropdown");
const toggle = document.querySelector(".dropdown-toggle");

toggle.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

// RECENZE
const reviews = document.querySelectorAll(".review");
let i = 0;
setInterval(() => {
  reviews[i].classList.remove("active");
  i = (i + 1) % reviews.length;
  reviews[i].classList.add("active");
}, 4000);

// ROK
document.getElementById("year").textContent = new Date().getFullYear();
