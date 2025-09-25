// Add custom JavaScript here
function navbarScroll() {
    const navbar = document.querySelector('.nav-gap');
    const toTopBtn = document.querySelector('#to-top');
    const toWhatsapp = document.querySelector('#to-whatsapp');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('navbar-sticky'); // Ajoute la classe au scroll
            toTopBtn.classList.remove('show');
            toTopBtn.style.opacity = 1;
            toWhatsapp.style.opacity = 1;
        } else {
            navbar.classList.add('navbar-sticky'); // Retire la classe si on remonte
            toTopBtn.classList.add('show');
            toTopBtn.style.opacity = 0;
            toWhatsapp.style.opacity = 0;

        }
    });
}


function scrolltoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

navbarScroll();
document.querySelector('#to-top').addEventListener('click', scrolltoTop);