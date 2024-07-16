const translations = {
  en: {
    homeLink: "Home",
    aboutLink: "About Us",
    recruitmentLink: "Recruitment",
    contactLink: "Contact",
    propertiesLink:"Properties",
    contentTitle: "Unstoppable Starts Here℠",
    contentText:
      "Success shouldn’t just be a goal; it should be the starting point. As part of the RE/MAX® network you’ll experience a culture focused on resources that lift your business. Like supportive broker/owners with relevant field insight and values that make a difference in our communities. Worldwide exposure and connections with industry experts. And over 140,000 talented agents around the globe who will inspire you to work toward greatness.",
    aboutTitle: "About",
    
    teamTitle: "Meet Our Team",
    teamBest:"MEET OUR BEST LEADERSHIP",
    teamText:"Dedicated to helping you find the perfect home, our team at Remax combines local expertise with a passion for real estate to provide exceptional service and support every step of the way.",
    
   
    
    propertiesTitle: "Our Properties",
    propertiesText:" Our diverse portfolio of properties offers something for everyone, from cozy starter homes to luxurious estates, all carefully selected to meet the highest standards of quality and value.",
    joinUs:"Join our Team",
    joinUsText:"We are looking for talented individuals to join us. Be part of an innovative and dynamic team. Work with us to build a better future.",
    contactTitle: "Contact Us",
    contactAddress: "Address: Your Agency Address",
    contactPhone: "Phone: Your Phone Number",
    contactEmail: "Email: Your Email",
    footerText: "REMAX - Your Trusted Real Estate Partner",
  },
  sq: {
    homeLink: "Faqja Kryesore",
    aboutLink: "Rreth Nesh",
    recruitmentLink: "Rekrutime",
    contactLink: "Kontakt",
    propertiesLink:"Pronat",
    contentTitle: "E pandalshmja fillon këtu℠",
    contentText:
      "Suksesi nuk duhet të jetë vetëm një qëllim; duhet të jetë pika e fillimit. Si pjesë e rrjetit RE/MAX® ju do të përjetoni një kulturë të fokusuar në burime që ngrejnë biznesin tuaj. Si mbështetës broker/pronarë me njohuri të rëndësishme të fushës dhe vlera që bëjnë një ndryshim në komunitetet tona. Ekspozim në mbarë botën dhe lidhje me ekspertë të industrisë. Dhe mbi 140,000 agjentë të talentuar në të gjithë botën që do t'ju inspirojnë të punoni drejt madhështisë.",
    aboutTitle: "Rreth Nesh",
    
    teamTitle: "Njihuni me Ekipin Tonë",
    teamBest:"Njihuni me Leadershipin tone"
    teamText:"Te përkushtuar për t'ju ndihmuar të gjeni shtëpinë e përsosur, ekipi ynë në Remax kombinon ekspertizën lokale me pasionin për pasuritë e paluajtshme për të ofruar shërbime të jashtëzakonshme dhe për të mbështetur çdo hap të rrugës."
,
    
    
    propertiesTitle: "Pronat Tona",
    propertiesText:"Portofoli ynë i larmishëm i pronave ofron diçka për të gjithë, nga shtëpitë komode fillestare deri te pronat luksoze, të gjitha të zgjedhura me kujdes për të përmbushur standardet më të larta të cilësisë dhe vlerës.",
    joinUs:"Bashkohuni me ekipin tone",
    joinUsText:"Ne jemi në kërkim të individëve të talentuar për t'u bashkuar me ne. Bëhuni pjesë e një ekipi inovativ dhe dinamik. Punoni me ne për të ndërtuar një të ardhme më të mirë.",
    contactTitle: "Na Kontaktoni",
    contactAddress: "Adresa: Adresa e Agjencisë Suaj",
    contactPhone: "Telefon: Numri Juaj i Telefonit",
    contactEmail: "Email-i Juaj",
    footerText:
      "REMAX - Partneri Juaj i Besueshëm i Pasurive të Patundshme",
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
    document.getElementById("services-link").textContent =
      translations[selectedLanguage].servicesLink;
    document.getElementById("contact-link").textContent =
      translations[selectedLanguage].contactLink;
    document.getElementById("content-title").textContent =
      translations[selectedLanguage].contentTitle;
    document.getElementById("content-text").textContent =
      translations[selectedLanguage].contentText;
    document.getElementById("about-title").textContent =
      translations[selectedLanguage].aboutTitle;
    document.getElementById("about-text").textContent =
      translations[selectedLanguage].aboutText;
    document.getElementById("team-title").textContent =
      translations[selectedLanguage].teamTitle;
    document.getElementById("team-member-1").textContent =
      translations[selectedLanguage].teamMember1;
    document.getElementById("team-member-2").textContent =
      translations[selectedLanguage].teamMember2;
    document.getElementById("team-member-3").textContent =
      translations[selectedLanguage].teamMember3;
    document.getElementById("team-member-4").textContent =
      translations[selectedLanguage].teamMember4;
    document.getElementById("services-title").textContent =
      translations[selectedLanguage].servicesTitle;
    document.getElementById("service-1").textContent =
      translations[selectedLanguage].service1;
    document.getElementById("service-2").textContent =
      translations[selectedLanguage].service2;
    document.getElementById("service-3").textContent =
      translations[selectedLanguage].service3;
    document.getElementById("service-4").textContent =
      translations[selectedLanguage].service4;
    document.getElementById("service-5").textContent =
      translations[selectedLanguage].service5;
    document.getElementById("service-6").textContent =
      translations[selectedLanguage].service6;
    document.getElementById("properties-title").textContent =
      translations[selectedLanguage].propertiesTitle;
    document.getElementById("property-1").textContent =
      translations[selectedLanguage].property1;
    document.getElementById("property-2").textContent =
      translations[selectedLanguage].property2;
    document.getElementById("property-3").textContent =
      translations[selectedLanguage].property3;
    document.getElementById("contact-title").textContent =
      translations[selectedLanguage].contactTitle;
    document.getElementById("contact-address").textContent =
      translations[selectedLanguage].contactAddress;
    document.getElementById("contact-phone").textContent =
      translations[selectedLanguage].contactPhone;
    document.getElementById("contact-email").textContent =
      translations[selectedLanguage].contactEmail;
    document.getElementById("footer-text").textContent =
      translations[selectedLanguage].footerText;
  });
