(function() {
    const slides = [
        '<div><img src="img/briofillyum.svg" alt="Briofillyum"></div>',
        '<div><img src="img/cedar-pine.svg" alt="Cedar Pine"></div>',
        '<div><img src="img/crassula-ovata.svg" alt="Crassula Ovata"></div>',
        '<div><img src="img/elephant-bush.svg" alt="Elephant Bush"></div>'
        '<div><img src="img/graptosedum.svg" alt="Graptosedum"></div>'
        '<div><img src="img/money-plant.svg" alt="Money Plant"></div>'
        '<div><img src="img/philodendron.svg" alt="Philodendron"></div>'
        '<div><img src="img/raphis-palm.svg" alt="Raphis Palm"></div>'
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.plants-pricing-carousel__slide');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }

    document.querySelector('button.plants-pricing-carousel__button.forward').addEventListener('click', nextSlide);
    document.querySelector('button.plants-pricing--carousel__button.back').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);
};