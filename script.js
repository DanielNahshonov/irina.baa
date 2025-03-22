const translations = {
  ru: {
    navHome: "Главная",
    navAbout: "Обо мне",
    navServices: "Услуги",
    navBlog: "Блог",
    navContact: "Контакты",
    button: "Записаться на консультацию"
  },
  he: {
    navHome: "דף הבית",
    navAbout: "עליי",
    navServices: "שירותים",
    navBlog: "בלוג",
    navContact: "צור קשר",
    button: "לקבוע פגישה"
  },
  ua: {
    navHome: "Головна",
    navAbout: "Про мене",
    navServices: "Послуги",
    navBlog: "Блог",
    navContact: "Контакти",
    button: "Записатися на консультацію"
  }
};

function setLang(lang) {
  const t = translations[lang];

  // Переводим все элементы с data-key
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Направление текста (для иврита)
  document.body.dir = lang === "he" ? "rtl" : "ltr";
}

// Бургер-меню: показать/скрыть навигацию
function toggleMenu() {
  const nav = document.querySelector(".main-nav");
  nav.classList.toggle("show");
}

// Кнопка "Записаться"
function bookAppointment() {
  // Вставь сюда настоящую ссылку на Google Form или Calendly
  window.location.href = "https://forms.gle/your-form-link";
}

// Показать/скрыть меню языков
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.querySelector(".lang-toggle");
  const langMenu = document.querySelector(".lang-menu");

  langToggle.addEventListener("click", () => {
    langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
  });

  // Закрытие по клику вне меню
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".language-dropdown")) {
      langMenu.style.display = "none";
    }
  });
});