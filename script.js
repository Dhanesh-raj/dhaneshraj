document.addEventListener('DOMContentLoaded', function() {
    // Initialize Publication Carousel
    function initCarousel() {
        const carousel = document.querySelector('.carousel');
        if (!carousel) return;

        let currentIndex = 0;
        const items = Array.from(carousel.querySelectorAll('.carousel-item'));
        const nextButton = carousel.querySelector('.next');
        const prevButton = carousel.querySelector('.prev');

        function updateCarousel() {
            items.forEach((item, index) => {
                item.style.display = index === currentIndex ? 'block' : 'none';
                item.setAttribute('aria-hidden', index !== currentIndex);
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % items.length;
                updateCarousel();
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                updateCarousel();
            });
        }

        updateCarousel();
    }

    // Initialize hover animation for social icons
    function initSocialIcons() {
        const socialIcons = document.querySelectorAll('.social-icons a, .scholar-links a');
        
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                icon.classList.add('fa-bounce');
            });
            icon.addEventListener('mouseout', () => {
                icon.classList.remove('fa-bounce');
            });
        });
    }

    initCarousel();
    initSocialIcons();
});
