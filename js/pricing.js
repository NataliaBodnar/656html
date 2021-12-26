(function() {
    const slides = [
        '<img src="img/plants-pricing/briofillyum.svg" alt="Briofillyum">',
        '<img src="img/plants-pricing/cedar-pine.svg" alt="Cedar Pine">',
        '<img src="img/plants-pricing/crassula-ovata.svg" alt="Crassula Ovata">',
        '<img src="img/plants-pricing/elephant-bush.svg" alt="Elephant Bush">'
        '<img src="img/plants-pricing/graptosedum.svg" alt="Graptosedum">'
        '<img src="img/plants-pricing/money-plant.svg" alt="Money Plant">'
        '<img src="img/plants-pricing/philodendron.svg" alt="Philodendron">'
        '<img src="img/plants-pricing/raphis-palm.svg" alt="Raphis Palm">'
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

    document.querySelector('button.plants-pricing-carousel-button.forward').addEventListener('click', nextSlide);
    document.querySelector('button.plants-pricing-carousel-button.back').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);
};