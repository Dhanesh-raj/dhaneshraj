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


/* DHANESH RAJ CALENDAR */

const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet,
ringtone = new Audio("./files/ringtone.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);

/*===========================CALENDAR*/



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

