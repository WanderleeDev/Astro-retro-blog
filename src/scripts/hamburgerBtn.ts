const btn = document.querySelector('#btnHamburger');
const navbar = document.querySelector('#navbar');
const hamburgerHandler = () => navbar?.classList.toggle('expanded')

btn?.addEventListener('click', hamburgerHandler);