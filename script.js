const translations = {
  en: {
    homeLink: "Home",
    aboutLink: "About Us",
    recruitmentLink: "Recruitment",
    contactLink: "Contact",
    propertiesLink: "Properties",
    contentTitle: "COME TO THE HOME OF THE PROFESSIONALS!",
    aboutTitle: "About Us",
    teamTitle: "Meet Our Team",
    teamBest: "MEET OUR BEST LEADERSHIP",
    teamText:
      "Dedicated to helping you find the perfect home, our team at Remax combines local expertise with a passion for real estate to provide exceptional service and support every step of the way.",
    propertiesTitle: "Our Properties",
    propertiesText:
      "Our diverse portfolio of properties offers something for everyone, from cozy starter homes to luxurious estates, all carefully selected to meet the highest standards of quality and value.",
    joinUs: "Join Our Team",
    joinUsText:
      "We are looking for talented individuals to join us. Be part of an innovative and dynamic team. Work with us to build a better future.",
    contactTitle: "Contact Us",
    contactAddress: "Address:",
    address: "Rruga Ismail Qemali, ish Blloku, Tirane",
    contactPhone: "Phone Number:",
    phone: "+355 69 700 70 79",
    contactEmail: "Email:",
    email: "info.home@remax-albania.al",
    sellProp: "PROPERTIES ON SALE",
    rentProp: "PROPERTIES FOR RENT",
    footerText: "REMAX - Your Trusted Real Estate Partner",
    nameLabel: "Name",
    surnameLabel: "Surname",
    phoneLabel: "Phone Number",
    emailLabel: "Email",
    messageLabel: "Message",
    buttonLabel: "Send",
  },
  sq: {
    homeLink: "Faqja Kryesore",
    aboutLink: "Rreth Nesh",
    recruitmentLink: "Rekrutime",
    contactLink: "Kontakt",
    propertiesLink: "Pronat",
    contentTitle: "EJA NË SHTËPINË E PROFESIONISTËVE!",
    aboutTitle: "Rreth Nesh",
    teamTitle: "Njihuni me Ekipin Tonë",
    teamBest: "Njihuni me Leadershipin tonë",
    teamText:
      "Te përkushtuar për t'ju ndihmuar të gjeni shtëpinë e përsosur, ekipi ynë në Remax kombinon ekspertizën lokale me pasionin për pasuritë e paluajtshme për të ofruar shërbime të jashtëzakonshme dhe për të mbështetur çdo hap të rrugës.",
    propertiesTitle: "Pronat Tona",
    propertiesText:
      "Portofoli ynë i larmishëm i pronave ofron diçka për të gjithë, nga shtëpitë komode fillestare deri te pronat luksoze, të gjitha të zgjedhura me kujdes për të përmbushur standardet më të larta të cilësisë dhe vlerës.",
    joinUs: "Bashkohuni me ekipin tonë",
    joinUsText:
      "Ne jemi në kërkim të individëve të talentuar për t'u bashkuar me ne. Bëhuni pjesë e një ekipi inovativ dhe dinamik. Punoni me ne për të ndërtuar një të ardhme më të mirë.",
    contactTitle: "Na Kontaktoni",
    contactAddress: "Adresa:",
    address: "Rruga Ismail Qemali, ish Blloku, Tirane",
    contactPhone: "Numri i Telefonit:",
    phone: "+355 69 700 70 79",
    contactEmail: "Email:",
    email: "info.home@remax-albania.al",
    sellProp: "PRONA NE SHITJE",
    rentProp: "PRONA ME QERA",
    footerText: "REMAX ",
    nameLabel: "Emri",
    surnameLabel: "Mbiemri",
    phoneLabel: "Numri i Telefonit",
    emailLabel: "Email",
    messageLabel: "Mesazh",
    buttonLabel: "Dërgo",
  },
};

document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    document.getElementById("home-link").textContent =
      translations[selectedLanguage].homeLink;
    document.getElementById("about-link").textContent =
      translations[selectedLanguage].aboutLink;
    document.getElementById("recruitment-link").textContent =
      translations[selectedLanguage].recruitmentLink;
    document.getElementById("contact-link").textContent =
      translations[selectedLanguage].contactLink;
    document.getElementById("properties-link").textContent =
      translations[selectedLanguage].propertiesLink;
    document.getElementById("content-title").textContent =
      translations[selectedLanguage].contentTitle;
    document.getElementById("about-title").textContent =
      translations[selectedLanguage].aboutTitle;
    document.getElementById("team-title").textContent =
      translations[selectedLanguage].teamTitle;
    document.getElementById("team-best").textContent =
      translations[selectedLanguage].teamBest;
    document.getElementById("team-text").textContent =
      translations[selectedLanguage].teamText;
    document.getElementById("properties-title").textContent =
      translations[selectedLanguage].propertiesTitle;
    document.getElementById("properties-text").textContent =
      translations[selectedLanguage].propertiesText;
    document.getElementById("join-us").textContent =
      translations[selectedLanguage].joinUs;
    document.getElementById("join-us-text").textContent =
      translations[selectedLanguage].joinUsText;
    document.getElementById("contact-title").textContent =
      translations[selectedLanguage].contactTitle;
    document.getElementById("adresa-contact").textContent =
      translations[selectedLanguage].contactAddress;
    document.querySelector(".contact-details:not([href])").textContent =
      translations[selectedLanguage].address;
    document.getElementById("number-contact").textContent =
      translations[selectedLanguage].contactPhone;
    document.querySelector(".contact-details[href^='tel']").textContent =
      translations[selectedLanguage].phone;
    document.getElementById("email-contact").textContent =
      translations[selectedLanguage].contactEmail;
    document.querySelector(".contact-details[href^='mailto']").textContent =
      translations[selectedLanguage].email;
    document.getElementById("sell-prop").textContent =
      translations[selectedLanguage].sellProp;
    document.getElementById("rent-prop").textContent =
      translations[selectedLanguage].rentProp;
    document.querySelector(".footer-section h1").textContent =
      translations[selectedLanguage].footerText;

    // Form translations
    document.getElementById("name-label").textContent =
      translations[selectedLanguage].nameLabel;
    document.getElementById("surname-label").textContent =
      translations[selectedLanguage].surnameLabel;
    document.getElementById("phone-label").textContent =
      translations[selectedLanguage].phoneLabel;
    document.getElementById("email-label").textContent =
      translations[selectedLanguage].emailLabel;
    document.getElementById("message-label").textContent =
      translations[selectedLanguage].messageLabel;
    document.getElementById("button-label").textContent =
      translations[selectedLanguage].buttonLabel;
  });
