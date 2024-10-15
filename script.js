const toggleButton = document.getElementById('theme-toggle');

// Funkcia na prepnutie tmavého režimu
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Uloží preferenciu do localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Pri načítaní stránky skontrolujeme preferenciu z localStorage
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    
    // Ak je v localStorage nastavený tmavý režim, aplikujeme ho
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Pridanie event listenera na tlačidlo na prepínanie režimu
toggleButton.addEventListener('click', toggleDarkMode);
