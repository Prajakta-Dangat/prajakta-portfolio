document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
