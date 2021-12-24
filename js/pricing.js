(function() {
    const slides = [
        '<img src="img/briofillyum.svg" alt="Briofillyum">',
        '<img src="img/cedar-pine.svg" alt="Cedar Pine">',
        '<img src="img/crassula-ovata.svg" alt="Crassula Ovata">',
        '<img src="img/elephant-bush.svg" alt="Elephant Bush">'
        '<img src="img/graptosedum.svg" alt="Graptosedum">'
        '<img src="img/money-plant.svg" alt="Money Plant">'
        '<img src="img/philodendron.svg" alt="Philodendron">'
        '<img src="img/raphis-palm.svg" alt="Raphis Palm">'
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.plants-pricing-carousel__slide');
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.plants-pricing-carousel forward').addEventListener('click', nextSlide);
    document.querySelector('.plants-pricing-carousel back').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);
};