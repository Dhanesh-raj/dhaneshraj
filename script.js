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
                item.classList.add('animate__animated', 'animate__fadeIn');
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
        const socialIcons = document.querySelectorAll('.social-icons a, .scholar-links a, .btn');
        
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                icon.classList.add('animate__animated', 'animate__tada');
            });
            icon.addEventListener('mouseout', () => {
                icon.classList.remove('animate__tada');
            });
        });
    }

    // Add loading animations
    function initLoadingAnimations() {
        const elementsToAnimate = document.querySelectorAll('.animate-on-load');
        elementsToAnimate.forEach(element => {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        });
    }

    // Add click animations
    function initClickAnimations() {
        const clickableElements = document.querySelectorAll('.click-animate');
        clickableElements.forEach(element => {
            element.addEventListener('click', () => {
                element.classList.add('animate__animated', 'animate__rubberBand');
                setTimeout(() => {
                    element.classList.remove('animate__rubberBand');
                }, 1000); // Duration of the animation
            });
        });
    }

    initCarousel();
    initSocialIcons();
    initLoadingAnimations();
    initClickAnimations();
});
