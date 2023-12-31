export function scrollTopWindow (): void {
  const btnScroll = document.querySelector('#btnScrollTop');
  if (btnScroll instanceof HTMLButtonElement) {
    btnScroll.addEventListener('click', () => window.scrollTo(0, 0));
  }
} 
