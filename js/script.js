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

  // تبديل الأيقونة
  const icon = this.querySelector("i");
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
});

const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))