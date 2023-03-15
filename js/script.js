// Togle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika menu nila ke klik
document.querySelector('#nila-menu').onclick = () => {
    navbarNav.classList.toggle ('active');  
};

// Klik diluar sidebar untuk menghilangkan nav
const nila = document.querySelector('#nila-menu');

document.addEventListener('click', function(e) {
    if(!nila.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});