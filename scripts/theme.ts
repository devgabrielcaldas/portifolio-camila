export function setupThemeToggle() {
  const toggleButton = document.getElementById('toggleTheme') as HTMLButtonElement;

  toggleButton.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    document.body.className = currentTheme;
    localStorage.setItem('theme', currentTheme);
  });

  // Aplica o tema salvo ao carregar
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.className = savedTheme;
}