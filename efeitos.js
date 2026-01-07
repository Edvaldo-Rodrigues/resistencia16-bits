// Aplicar fade-in quando a página carrega
window.addEventListener('load', () => {
  document.body.classList.remove('fade-out');
  document.body.classList.add('fade-in');
});

function transition(e) {
  e.preventDefault();
  document.body.classList.remove('fade-in');
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location = e.target.href;
  }, 500); // tempo da animação
}