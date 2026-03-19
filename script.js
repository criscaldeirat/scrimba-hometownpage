// Carousel logic for the Gastronomy section.
// - Always shows 3 items (left/center/right)
// - Center item is the "active" one
// - Buttons navigate left/right in an infinite loop

function createGastronomyCarousel() {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const cards = Array.from(document.querySelectorAll('.carousel-card'));

    const items = [
        {
            img: './images/gastronomy/madeira-wine.jpeg',
            alt: 'Madeira wine glass',
            title: 'Madeira Wine',
            desc: 'The island is famous for its fortified wine, which can age for decades and is still enjoyed worldwide.',
        },
        {
            img: './images/gastronomy/bolo-do-caco.jpg',
            alt: 'Bolo do caco flatbread',
            title: 'Bolo do Caco',
            desc: 'A traditional Madeiran flatbread usually served warm with garlic butter.',
        },
        {
            img: './images/gastronomy/espetada.jpg',
            alt: 'Espetada skewers on grill',
            title: 'Espetada',
            desc: 'Skewered beef rubbed with bay leaves and grilled over wood, a local BBQ favorite.',
        },
    ];

    let currentIndex = 0;

    function setCardContent(card, item) {
        const img = card.querySelector('img');
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');

        if (img) {
            img.src = item.img;
            img.alt = item.alt;
        }

        if (title) title.textContent = item.title;
        if (desc) desc.textContent = item.desc;
    }

    function updateCarousel(index) {
        currentIndex = ((index % items.length) + items.length) % items.length;
        const leftIndex = (currentIndex - 1 + items.length) % items.length;
        const rightIndex = (currentIndex + 1) % items.length;

        const order = [leftIndex, currentIndex, rightIndex];
        const positions = ['left', 'center', 'right'];

        cards.forEach((card, i) => {
            setCardContent(card, items[order[i]]);
            card.dataset.position = positions[i];
        });
    }

    function onArrowClick(isNext) {
        updateCarousel(currentIndex + (isNext ? 1 : -1));
    }


    if (!cards.length) return;

    updateCarousel(currentIndex);

    prevBtn?.addEventListener('click', () => onArrowClick(false));
    nextBtn?.addEventListener('click', () => onArrowClick(true));
}

window.addEventListener('DOMContentLoaded', createGastronomyCarousel);
