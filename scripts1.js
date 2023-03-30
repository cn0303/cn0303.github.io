const typedText = document.querySelector('.typed-text');
const phrases = ['Discover your potential', 'Master the art of public speaking', 'Join our courses and coaching'];
let phraseIndex = 0;
let letterIndex = 0;
let lastTypeTimestamp = 0;
let lastEraseTimestamp = 0;
const typeDelay = 100;
const eraseDelay = 50;

function type(timestamp) {
    if (letterIndex < phrases[phraseIndex].length) {
        if (timestamp - lastTypeTimestamp > typeDelay) {
            typedText.textContent += phrases[phraseIndex].charAt(letterIndex);
            letterIndex++;
            lastTypeTimestamp = timestamp;
        }
        requestAnimationFrame(type);
    } else {
        setTimeout(() => requestAnimationFrame(erase), 2000);
    }
}

function erase(timestamp) {
    if (letterIndex > 0) {
        if (timestamp - lastEraseTimestamp > eraseDelay) {
            typedText.textContent = phrases[phraseIndex].slice(0, --letterIndex);
            lastEraseTimestamp = timestamp;
        }
        requestAnimationFrame(erase);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(() => requestAnimationFrame(type), 500);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => requestAnimationFrame(type), 1000);
});

const menuBtn = document.querySelector('#menu-btn');
const menuList = document.querySelector('#menu-popup');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuList.style.display = 'block';
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuList.style.display = 'none';
        menuOpen = false;
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
});
