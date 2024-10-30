const menuIcon = document.getElementById('menu-icon');
const sideNav = document.getElementById('side-nav');

menuIcon.addEventListener('click', () => {
    sideNav.style.left = sideNav.style.left === '0px' ? '-250px' : '0px';
});

document.addEventListener('click', (e) => {
    if (!sideNav.contains(e.target) && !menuIcon.contains(e.target)) {
        sideNav.style.left = '-250px';
    }
});
