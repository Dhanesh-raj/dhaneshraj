/* Navigation */
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    const sectionPosition = section.offsetTop - 60;
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  });
});

/* Back to Top Button */
const backToTopButton = document.querySelector('#back-to-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* Parallax Scrolling */
const parallaxSections = document.querySelectorAll('.parallax-section');

window.addEventListener('scroll', function() {
  parallaxSections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const scrollBottom = scrollTop + windowHeight;
    const parallaxBg = section.querySelector('.parallax-bg');

    if (scrollBottom > sectionTop && scrollTop < sectionTop + sectionHeight) {
      parallaxBg.style.backgroundPositionY = (sectionTop - scrollTop) / 2 + 'px';
    }
  });
});

/* Background Fade */
const fadeSections = document.querySelectorAll('.fade-section');

window.addEventListener('scroll', function() {
  fadeSections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const scrollBottom = scrollTop + windowHeight;
    const fadeBg = section.querySelector('.fade-bg');

    if (scrollBottom > sectionTop && scrollTop < sectionTop + sectionHeight) {
      const opacity = 1 - ((scrollBottom - sectionTop) / (sectionHeight + windowHeight));
      fadeBg.style.opacity = opacity;
    }
  });
});


/* DHANESH RAJ*/

// Select the body element
const body = document.querySelector('body');

// Define an array of colors
const colors = [
  "#FF6B6B",
  "#FFE66D",
  "#3FBF3F",
  "#1E90FF",
  "#C0448F",
  "#FF8C00",
  "#4B0082",
];

// Function to generate a random gradient background
function generateGradient() {
  // Generate a random index to select two colors from the array
  const randomIndex1 = Math.floor(Math.random() * colors.length);
  const randomIndex2 = Math.floor(Math.random() * colors.length);

  // Select the two colors from the array using the random indexes
  const color1 = colors[randomIndex1];
  const color2 = colors[randomIndex2];

  // Create the gradient background using the selected colors
  const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;

  // Set the background of the body element to the gradient
  body.style.background = gradient;
}

// Call the generateGradient function on page load
generateGradient();

// Call the generateGradient function whenever the user scrolls
window.addEventListener('scroll', generateGradient);



/* Creative Effects */
const creativeSections = document.querySelectorAll('.creative-section');

creativeSections.forEach(section => {
  const sectionTitle = section.querySelector('h2');
  const sectionTitleLetters = sectionTitle.textContent.split('');

  sectionTitle.textContent = '';

  sectionTitleLetters.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    sectionTitle.appendChild(span);
  });

  section.addEventListener('mouseenter', function() {
    sectionTitleLetters.forEach((letter, index) => {
      const span = sectionTitle.children[index];
      span.style.transform = `translateY(-${Math.random() * 20}px) rotate(${Math.random() * 360}deg)`;
      span.style.transition = 'transform 0.5s';
    });
  });

  section.addEventListener('mouseleave', function() {
    sectionTitleLetters.forEach((letter, index) => {
      const span = sectionTitle.children[index];
      span.style.transform = '';
    });
  });
});

