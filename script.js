document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const appNav = document.querySelector('.app-nav');

    if (navToggle && appNav) {
        navToggle.addEventListener('click', () => {
            
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
          
            appNav.classList.toggle('is-active');
            
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
});