// Basic Vanilla JS for toggling mobile menu
    const btn = document.getElementById('navbar-menu-toggle');
    const dropdown = document.getElementById('mobile-dropdown');
    const menuIcon = document.getElementById('menu-icon');
    let menuOpen = false;
    btn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      if (menuOpen) {
        dropdown.classList.remove('hidden');
        menuIcon.classList.remove('ri-menu-line');
        menuIcon.classList.add('ri-close-line');
      } else {
        dropdown.classList.add('hidden');
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
      }
    });

    // Close the dropdown on navigation (for SPA feel, but does a page reload in static HTML)
    dropdown.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        dropdown.classList.add('hidden');
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
      });
    });