const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const mobileNav = document.getElementById('mobile-nav');

// باز کردن منو
hamburgerBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

// بستن منو
closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});

// بستن منو با کلیک روی لینک‌ها (UX بهتر)
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});