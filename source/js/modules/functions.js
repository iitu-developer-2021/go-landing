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
