document.addEventListener('DOMContentLoaded', function() {

  const galleryContainer = document.getElementById('galleryContainer');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalLink = document.getElementById('modalLink');
  const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

  const artworks = [
    { img: "img/art1.jpg", title: "لوحة فنية 1", link: "details.html?art=1" },
    { img: "img/art2.jpg", title: "لوحة فنية 2", link: "details.html?art=2" },
    { img: "img/art3.jpg", title: "لوحة فنية 3", link: "details.html?art=3" },
    { img: "img/art4.jpg", title: "لوحة فنية 4", link: "details.html?art=4" },
    { img: "img/art5.jpg", title: "لوحة فنية 5", link: "details.html?art=5" },
    { img: "img/art6.jpg", title: "لوحة فنية 6", link: "details.html?art=6" },
    { img: "img/art7.jpg", title: "لوحة فنية 7", link: "details.html?art=7" },
    { img: "img/art8.jpg", title: "لوحة فنية 8", link: "details.html?art=8" }
  ];

  artworks.forEach(function(item) {

    const card = document.createElement('div');
    card.className = 'gallery-box';

    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="caption">
        <h5>${item.title}</h5>
      </div>
    `;

    card.addEventListener('click', function() {
      modalTitle.textContent = item.title;
      modalImage.src = item.img;
      modalLink.href = item.link;
      imageModal.show();
    });

    galleryContainer.appendChild(card);
  });

});

/* تحريك السلايدر */
function scrollGallery(direction) {
  const container = document.getElementById('galleryContainer');
  container.scrollLeft += direction * 300;
}

// ====== سحب بالماوس واللمس ======
const slider = document.getElementById('galleryContainer');

let isDown = false;
let startX;
let scrollLeft;

// ماوس
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.style.cursor = 'grabbing';
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5; // سرعة السحب
  slider.scrollLeft = scrollLeft - walk;
});

// لمس (موبايل)
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});