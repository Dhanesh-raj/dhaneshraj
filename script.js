document.addEventListener('DOMContentLoaded', function () {

    // Initialize Carousel for Publications
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

    // Smooth Scrolling
    function smoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Animate Social Media Icons on Hover
    function animateSocialIcons() {
        const socialIcons = document.querySelectorAll('.social-links a');

        socialIcons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                icon.classList.add('animate__animated', 'animate__tada');
            });
            icon.addEventListener('mouseout', () => {
                icon.classList.remove('animate__tada');
            });
        });
    }

    // Animate Elements on Scroll
    function initScrollAnimations() {
        const scrollElements = document.querySelectorAll('.scroll-animate');

        function elementInView(el, dividend = 1) {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        }

        function displayScrollElement(element) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }

        function hideScrollElement(element) {
            element.classList.remove('animate__animated', 'animate__fadeInUp');
        }

        function handleScrollAnimation() {
            scrollElements.forEach(el => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                } else {
                    hideScrollElement(el);
                }
            });
        }

        window.addEventListener('scroll', handleScrollAnimation);
    }

    // Lazy Load Images
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            observer.observe(img);
        });
    }

    // Click Animations
    function initClickAnimations() {
        const clickableElements = document.querySelectorAll('.click-animate');

        clickableElements.forEach(element => {
            element.addEventListener('click', () => {
                element.classList.add('animate__animated', 'animate__rubberBand');
                setTimeout(() => {
                    element.classList.remove('animate__rubberBand');
                }, 1000);
            });
        });
    }

    // Responsive Menu Toggle
    function initMenuToggle() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (!menuToggle || !navLinks) return;

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // Initialize all functions
    initCarousel();
    smoothScroll();
    animateSocialIcons();
    initScrollAnimations();
    lazyLoadImages();
    initClickAnimations();
    initMenuToggle();
});
