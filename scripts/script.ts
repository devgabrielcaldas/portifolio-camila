import { setupThemeToggle } from './theme';

// Função para carregar um componente HTML externamente
async function loadComponent(id: string, file: string) {
  const res = await fetch(file);
  const html = await res.text();
  const container = document.getElementById(id);
  if (container) {
    container.innerHTML = html;
  }
}

// Inicialização do site
async function init() {
  await loadComponent('header-container', 'components/header.html');
  setupThemeToggle();
}

init();