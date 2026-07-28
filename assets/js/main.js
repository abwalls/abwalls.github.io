window.onload = function() {
    document.body.classList.remove('is-preload');
};

window.onorientationchange = function() {
    document.body.scrollTop = 0;
};

const about = document.getElementById('about');
const aboutIcon = document.getElementById('about-icon');
const aboutClose = document.getElementById('about-header-close');
const aboutBackdrop = document.getElementById('about-backdrop');
const contact = document.getElementById('contact');
const contactIcon = document.getElementById('contact-icon');

function openAbout() {
    contact.style.display = 'none';
    about.style.display = 'block';
    aboutBackdrop.style.display = 'block';

    requestAnimationFrame(function() {
        about.classList.add('is-open');
        aboutBackdrop.classList.add('is-open');
    });

    about.setAttribute('aria-hidden', 'false');
    aboutBackdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    aboutClose.focus();
}

function closeAbout() {
    about.classList.remove('is-open');
    aboutBackdrop.classList.remove('is-open');
    about.setAttribute('aria-hidden', 'true');
    aboutBackdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    window.setTimeout(function() {
        about.style.display = 'none';
        aboutBackdrop.style.display = 'none';
    }, 180);

    aboutIcon.focus();
}

aboutIcon.addEventListener('click', openAbout);
aboutIcon.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openAbout();
    }
});

aboutClose.addEventListener('click', closeAbout);
aboutBackdrop.addEventListener('click', closeAbout);

contactIcon.addEventListener('click', function() {
    closeAbout();
    contact.style.display = 'block';
    document.getElementById('overlay').style.backgroundColor = 'rgba(0,0,0,.3)';
});

contactIcon.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        contactIcon.click();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && about.classList.contains('is-open')) {
        closeAbout();
    }
});
