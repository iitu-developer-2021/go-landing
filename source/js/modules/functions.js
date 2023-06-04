import Swiper, { Navigation, Pagination } from 'swiper';

export function isWebp() {
    function testWebP(callback) {
        // eslint-disable-next-line
        const webP = new Image();
        function checkHeight() {
            callback(webP.height === 2);
        }

        webP.onerror = checkHeight;
        webP.onload = checkHeight;

        webP.src =
            'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    // Додавання класу _webp або _no-webp для HTML
    testWebP((support) => {
        const className = support === true ? 'webp' : 'no-webp';
        // eslint-disable-next-line
        window.document.documentElement.classList.add(className);
    });
}

export const initSwiper = () => {
    const swiper = new Swiper('', {
        // Name of slider class
        modules: [Navigation, Pagination],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        navigation: {
            nextEl: '', // Arrow right .class
            prevEl: '' // Arrow left .class
        }
    });
};

export const initMenuBurgerToggle = () => {
    const header = document.querySelector('.header');
    const headerLogo = header.querySelector('.header-logo');
    const headerMenu = header.querySelector('.header-menu');
    const headerNav = header.querySelector('.header-nav');
    const navSocials = headerNav.querySelector('.nav-socials');
    const toggleButton = document.querySelector('.header__nav-toggle');

    const closeMenu = () => {
        header.classList.remove('header--active');
        headerLogo.classList.remove('header-logo--active');
        headerNav.classList.remove('header-nav--active');
        navSocials.classList.remove('nav-socials--active');
        headerMenu.classList.remove('header-menu--active');
    };

    const openMenu = () => {
        header.classList.add('header--active');
        headerLogo.classList.add('header-logo--active');
        headerNav.classList.add('header-nav--active');
        navSocials.classList.add('nav-socials--active');
        headerMenu.classList.add('header-menu--active');
    };

    toggleButton.addEventListener('click', () => {
        if (header.classList.contains('header--active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    const mobileWidthMediaQuery = window.matchMedia('(min-width: 991px)');

    function handleMediaQuery(event) {
        if (event.matches) {
            closeMenu();
        }
    }

    mobileWidthMediaQuery.addEventListener('change', handleMediaQuery);
    handleMediaQuery(mobileWidthMediaQuery);
};
