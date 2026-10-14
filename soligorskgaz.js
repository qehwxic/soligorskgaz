document.getElementById('yr').textContent = new Date().getFullYear();

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => menu.classList.toggle('open'));

menu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => menu.classList.remove('open'))
);