// Dark mode toggle functionality
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
}
