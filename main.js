// Main JavaScript file for Dhanesh Raj's Portfolio

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

    // Interactive CV Functionality
    function initInteractiveCV() {
        var cvSections = document.querySelectorAll('.cv-section');

        cvSections.forEach(function(section) {
            section.addEventListener('click', function() {
                var details = section.querySelector('.details');
                if (details) {
                    details.style.display = details.style.display === 'none' ? 'block' : 'none';
                }
            });
        });
    }

    // Lightbox Gallery Initialization
    function initLightboxGallery() {
        var galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach(function(item) {
            item.addEventListener('click', function() {
                var overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                overlay.style.display = 'flex';
                overlay.style.justifyContent = 'center';
                overlay.style.alignItems = 'center';
                overlay.style.zIndex = '1000';

                var img = document.createElement('img');
                img.src = item.querySelector('img').src;
                img.style.maxWidth = '80%';
                img.style.maxHeight = '80%';

                overlay.appendChild(img);
                document.body.appendChild(overlay);

                overlay.addEventListener('click', function() {
                    document.body.removeChild(overlay);
                });
            });
        });
    }

    // Dynamic Word Cloud Initialization
    function initWordCloud() {
        var wordCloud = document.querySelector('#word-cloud');
        if (!wordCloud) return;

        var words = ["research", "data", "analysis", "publication", "experiment", "results"];
        words.forEach(function(word) {
            var span = document.createElement('span');
            span.textContent = word;
            span.style.fontSize = Math.random() * 20 + 10 + 'px';
            span.style.margin = '5px';
            wordCloud.appendChild(span);
        });
    }

    // Call initialization functions
    initCarousel();
    initInteractiveCV();
    initLightboxGallery();
    initWordCloud();
});
