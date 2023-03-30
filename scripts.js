const typedText = document.querySelector('.typed-text');
const phrases = ['Discover your potential', 'Master the art of public speaking', 'Join our courses and coaching'];
let phraseIndex = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < phrases[phraseIndex].length) {
    typedText.textContent += phrases[phraseIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (letterIndex > 0) {
    typedText.textContent = phrases[phraseIndex].slice(0, --letterIndex);
    setTimeout(erase, 100);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(type, 1000);
});

const menuBtn = document.querySelector('#menu-btn');
const menuPopup = document.querySelector('#menu-popup');

menuBtn.addEventListener('click', function() {
  menuPopup.classList.toggle('show');
});
