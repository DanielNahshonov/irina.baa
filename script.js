const translations = {
    ru: {
      name: "Ирина Батуренцев",
      title: "Лицензированный психолог",
      description: "Помогаю справиться с тревогой, стрессом и внутренними кризисами.",
      servicesTitle: "Услуги:",
      servicesList: "<li>Индивидуальные консультации</li><li>Онлайн и оффлайн встречи</li><li>Поддержка при тревожности, депрессии</li>",
      educationTitle: "Образование:",
      education: "МГУ, факультет психологии, 2015",
      contactsTitle: "Контакты:",
      button: "Записаться на консультацию"
    },
    en: {
      name: "Irina Baturentsev",
      title: "Licensed Psychologist",
      description: "Helping people cope with anxiety, stress, and personal crises.",
      servicesTitle: "Services:",
      servicesList: "<li>Individual counseling</li><li>Online & offline sessions</li><li>Support with anxiety, depression</li>",
      educationTitle: "Education:",
      education: "Moscow State University, Psychology, 2015",
      contactsTitle: "Contacts:",
      button: "Book an appointment"
    },
    he: {
      name: "אירינה בטורנצב",
      title: "פסיכולוגית מוסמכת",
      description: "עוזרת להתמודד עם חרדה, לחץ ומשברים אישיים.",
      servicesTitle: "שירותים:",
      servicesList: "<li>ייעוץ אישי</li><li>מפגשים אונליין ופרונטליים</li><li>תמיכה בחרדה ודיכאון</li>",
      educationTitle: "השכלה:",
      education: "אוניברסיטת מוסקבה, פסיכולוגיה, 2015",
      contactsTitle: "יצירת קשר:",
      button: "קבעו פגישה"
    },
    ua: {
      name: "Ірина Батуренцев",
      title: "Ліцензований психолог",
      description: "Допомагаю впоратися з тривогою, стресом і особистими кризами.",
      servicesTitle: "Послуги:",
      servicesList: "<li>Індивідуальні консультації</li><li>Онлайн та офлайн зустрічі</li><li>Підтримка при тривожності та депресії</li>",
      educationTitle: "Освіта:",
      education: "МДУ, факультет психології, 2015",
      contactsTitle: "Контакти:",
      button: "Записатися на консультацію"
    }
  };
  
  function setLang(lang) {
    const t = translations[lang];
    document.querySelector('[data-key="name"]').textContent = t.name;
    document.querySelector('[data-key="title"]').textContent = t.title;
    document.querySelector('[data-key="description"]').textContent = t.description;
    document.querySelector('[data-key="servicesTitle"]').textContent = t.servicesTitle;
    document.querySelector('[data-key="servicesList"]').innerHTML = t.servicesList;
    document.querySelector('[data-key="educationTitle"]').textContent = t.educationTitle;
    document.querySelector('[data-key="education"]').textContent = t.education;
    document.querySelector('[data-key="contactsTitle"]').textContent = t.contactsTitle;
    document.querySelector('[data-key="button"]').textContent = t.button;
  
    if (lang === 'he') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
  }
  
  function bookAppointment() {
    window.location.href = "https://forms.gle/your-form-link"; // вставь свою ссылку
  }