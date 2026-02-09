
const pages = [
    [
        { img: "img/art1.jpg", title: "لوحة فنية 1", link: "details.html?art=1" },
        { img: "img/art2.jpg", title: "لوحة فنية 2", link: "details.html?art=2" },
        { img: "img/art3.jpg", title: "لوحة فنية 3", link: "details.html?art=3" },
        { img: "img/art4.jpg", title: "لوحة فنية 4", link: "details.html?art=4" }
    ],
    [
        { img: "img/art5.jpg", title: "لوحة فنية 5", link: "details.html?art=5" },
        { img: "img/art6.jpg", title: "لوحة فنية 6", link: "details.html?art=6" },
        { img: "img/art7.jpg", title: "لوحة فنية 7", link: "details.html?art=7" },
        { img: "img/art8.jpg", title: "لوحة فنية 8", link: "details.html?art=8" }
    ],
    [
        { img: "img/art9.jpg", title: "لوحة فنية 9", link: "details.html?art=9" },
        { img: "img/art10.jpg", title: "لوحة فنية 10", link: "details.html?art=10" },
        { img: "img/art11.jpg", title: "لوحة فنية 11", link: "details.html?art=11" },
        { img: "img/art12.jpg", title: "لوحة فنية 12", link: "details.html?art=12" }
    ]
];

function showPage(pageIndex) {
    for (let i = 0; i < 4; i++) {
        const imgEl = document.getElementById("img" + (i + 1));
        const titleEl = document.getElementById("title" + (i + 1));
        const linkEl = document.getElementById("link" + (i + 1));

        if (pages[pageIndex][i]) {
            imgEl.src = pages[pageIndex][i].img;
            titleEl.innerText = pages[pageIndex][i].title;
            linkEl.href = pages[pageIndex][i].link;
            linkEl.style.display = "block";
        } else {
            linkEl.style.display = "none";
        }
    }
}

// عرض الصفحة الأولى عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    showPage(0);
});

//JavaScript for mobile menu 

    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");        
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });