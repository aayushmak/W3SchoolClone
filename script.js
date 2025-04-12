// Example: Alert when search is clicked
document.querySelector('button').addEventListener('click', function () {
    alert("Search feature coming soon!");
  });
  
  const themeToggle = document.getElementById('themeToggle');
  const navbar = document.getElementById('mainNavbar');
  
  let isDark = true;
  
  themeToggle.addEventListener('click', () => {
    isDark = !isDark;
  
    if (isDark) {
      navbar.classList.remove('navbar-light', 'bg-light');
      navbar.classList.add('navbar-dark', 'bg-dark');
      themeToggle.textContent = '🌙 Dark';
    } else {
      navbar.classList.remove('navbar-dark', 'bg-dark');
      navbar.classList.add('navbar-light', 'bg-light');
      themeToggle.textContent = '☀️ Light';
    }
  });
  