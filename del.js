    // بيانات اللوحات
    const artworks = {
        1: { title: "An artistic painting 1", artist: "الرسام أ", year: "2020", description: "وصف اللوحة الأولى هنا." },
        2: { title: "An artistic painting 2", artist: "الرسام ب", year: "2019", description: "وصف اللوحة الثانية هنا." },
        3: { title: "An artistic painting 3", artist: "الرسام ج", year: "2021", description: "وصف اللوحة الثالثة هنا." },
        4: { title: "An artistic painting 4", artist: "الرسام د", year: "2018", description: "وصف اللوحة الرابعة هنا." },
        5: { title: "An artistic painting 5", artist: "الرسام هـ", year: "2022", description: "وصف اللوحة الخامسة هنا." },
        6: { title: "An artistic painting  6", artist: "الرسام و", year: "2020", description: "وصف اللوحة السادسة هنا." },
        7: { title: "An artistic painting 7", artist: "الرسام ز", year: "2021", description: "وصف اللوحة السابعة هنا." },
        8: { title: "An artistic painting 8", artist: "الرسام ح", year: "2019", description: "وصف اللوحة الثامنة هنا." },
        9: { title: "An artistic painting 9", artist: "الرسام ط", year: "2022", description: "وصف اللوحة التاسعة هنا." },
        10: { title: "An artistic painting 10", artist: "الرسام ي", year: "2020", description: "وصف اللوحة العاشرة هنا." } ,
        11: { title: "An artistic painting 11", artist: "الرسام ك", year: "2018", description: "وصف اللوحة الحادية عشر هنا." },
    };

    // قراءة رقم اللوحة من الرابط
    const params = new URLSearchParams(window.location.search);
    const artNumber = params.get("art");
    const art = artworks[artNumber];

    // تعيين البيانات
    document.getElementById("artImage").src = "img/art" + artNumber + ".jpg";
    document.getElementById("artTitle").innerText = art.title;
    document.getElementById("artistName").innerText = "Artist: " + art.artist;
    document.getElementById("yearCreated").innerText = "Year of construction: " + art.year;
    document.getElementById("artDescription").innerText = art.description;

    // --------- Popup Logic ---------
    const modal = document.getElementById("contactModal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");

    openBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }