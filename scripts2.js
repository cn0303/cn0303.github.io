const scrollAnimateElements = document.querySelectorAll('.scroll-animate');

function isElementInView(elem) {
  const rect = elem.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showScrollAnimateElements() {
  scrollAnimateElements.forEach((elem) => {
    if (isElementInView(elem)) {
      elem.classList.add('in-view');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showScrollAnimateElements();
});

window.addEventListener('scroll', () => {
  showScrollAnimateElements();
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
