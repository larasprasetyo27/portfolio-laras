document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');

        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            themeToggleBtn.textContent = '🌓 Dark Mode';
        }
    });
});