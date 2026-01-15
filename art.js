// JavaScript for mobile menu 

    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });
// JavaScript for horizontal scrolling gallery
const scrollContainer = document.querySelector('.gallery-wrapper');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

let isDown = false, startX, scrollLeft;

// Mouse drag
scrollContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});
scrollContainer.addEventListener('mouseleave', () => isDown = false);
scrollContainer.addEventListener('mouseup', () => isDown = false);
scrollContainer.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  scrollContainer.scrollLeft = scrollLeft - (x - startX);
});

// Touch drag
scrollContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});
scrollContainer.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX - scrollContainer.offsetLeft;
  scrollContainer.scrollLeft = scrollLeft - (x - startX);
});

// Buttons
const scrollAmount = 235; // عرض العمود + gap
btnRight.addEventListener('click', () => scrollContainer.scrollBy({left: scrollAmount, behavior: 'smooth'}));
btnLeft.addEventListener('click', () => scrollContainer.scrollBy({left: -scrollAmount, behavior: 'smooth'}));