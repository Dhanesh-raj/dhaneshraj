document.addEventListener('DOMContentLoaded', function() {
    // Initialize Publication Carousel
    function initCarousel() {
        var carousel = document.querySelector('.carousel');
        if (!carousel) return;

        var currentIndex = 0;
        var items = carousel.querySelectorAll('.carousel-item');
        var nextButton = carousel.querySelector('.next');
        var prevButton = carousel.querySelector('.prev');

        function updateCarousel() {
            items.forEach(function(item, index) {
                item.style.display = index === currentIndex ? 'block' : 'none';
            });
        }

        nextButton && nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });

        prevButton && prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });

        updateCarousel();
    }

    initCarousel();
});
