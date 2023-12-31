export function showNavMobile (): void {
  const btn = document.querySelector('#btnHamburger');
  const navbar = document.querySelector('#navbar');

  if (!btn || !navbar) return;

  const hamburgerHandler = (): void => {
    navbar.classList.toggle('expanded');
    btn.textContent =  navbar.classList.contains('expanded') ? '-' : '+';
  };

  btn.addEventListener('click', hamburgerHandler);
}
