  // اختر كل روابط nav داخل collapse
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      // لو الكلاس show موجود (يعني القائمة مفتوحة)
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
  // --------- password ---------
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  // تغيير نوع كلمة المرور
  const type = password.type === "password" ? "text" : "password";
  password.type = type;

  // تبديل الأيقونة مباشرة
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))
toastList.forEach(toast => toast.show())

// --------- search ---------
const toggleSearch = document.getElementById("toggleSearch");
const searchInput = document.getElementById("searchInput");

toggleSearch.addEventListener("click", () => {
  if (searchInput.value !== "") {
    searchInput.value = ""; // يمسح النص
    toggleSearch.classList.remove("fa-times");
    toggleSearch.classList.add("fa-search");
  } else {
    searchInput.focus();
  }
});