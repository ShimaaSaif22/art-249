document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.getElementById('galleryContainer');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalLink = document.getElementById('modalLink');
  const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

  const pages = [
    [
      { img: "img/art1.jpg", title: "لوحة فنية 1", link: "details.html?art=1" },
      { img: "img/art2.jpg", title: "لوحة فنية 2", link: "details.html?art=2" },
      { img: "img/art3.jpg", title: "لوحة فنية 3", link: "details.html?art=3" },
      { img: "img/art4.jpg", title: "لوحة فنية 4", link: "details.html?art=4" }
    ]
  ];

  function showPage(pageIndex) {
    galleryContainer.innerHTML = "";

    pages[pageIndex].forEach(function(item) {
      const card = document.createElement('div');
      card.className = 'card gallery-box';
      card.style.width = '220px';
      card.style.cursor = 'pointer';
      card.style.position = 'relative';
      card.innerHTML = 
        <img src="${item.img}" class="img-fluid w-100" alt="${item.title}">
        <div class="caption position-absolute bottom-0 start-0 w-100 text-center text-white bg-dark bg-opacity-50 py-2">
          <h5>${item.title}</h5>
        </div>
      ;

      card.addEventListener('click', function(e) {
        e.preventDefault();
        modalTitle.textContent = item.title;
        modalImage.src = item.img;
        modalLink.href = item.link;
        imageModal.show();
      });

      galleryContainer.appendChild(card);
    });
  }

  showPage(0);
  window.showPage = showPage;
});