const content = {
  en: {
    main: `
      INTERNATIONAL GROUP LAW FIRMS<br>
      <span style="font-weight:normal;font-size:0.85em;">
        Professional legal solutions for clients<br>
        UK, EU, USA and Middle East
      </span>
    `,
    about: `
      <div class="about-title">ABOUT US:</div>
      <div style="margin-bottom:10px;">
        <span style="font-weight:bold;">C100P LIMITED</span> is part of an International Group of Law Firms
      </div>
      <div style="margin: 15px 0;">
        <img src="img/logo-red.png" alt="Center100Plus" class="red-logo">
        <span class="red-text">ЦЕНТР100PLUS</span>
      </div>
      <div class="company-details">
        <span style="font-weight:bold;">C100P LIMITED</span><br>
        Registered in the United Kingdom, Ipswich.<br>
        Company registration number: <b>16034770</b>
      </div>
      <div class="contact-info">
        Contact phone numbers (WhatsApp / Telegram): [to be added]<br>
        E-mail: <a href="mailto:center100plus@gmail.com">center100plus@gmail.com</a><br>
        Mailing address: 50 PRINCES STREET, IPSWICH, ENGLAND IP1 1RJ
      </div>
    `,
    info: `
      For information about tariffs and additional information about our services you can visit the website of the International Group of Law Firms
      <a href="https://www.c100p.com" target="_blank">WWW.C100P.COM</a>
    `
  },
  ru: {
    main: `
      МЕЖДУНАРОДНАЯ ГРУППА ЮРИДИЧЕСКИХ КОМПАНИЙ<br>
      <span style="font-weight:normal;font-size:0.85em;">
        Профессиональные юридические решения для клиентов<br>
        Великобритании, ЕС, США и Ближнего Востока
      </span>
    `,
    about: `
      <div class="about-title">О НАС:</div>
      <div style="margin-bottom:10px;">
        <span style="font-weight:bold;">C100P LIMITED</span> является частью Международной группы юридических компаний
      </div>
      <div style="margin: 15px 0;">
        <img src="img/logo-red.png" alt="Центр100Плюс" class="red-logo">
        <span class="red-text">ЦЕНТР100PLUS</span>
      </div>
      <div class="company-details">
        <span style="font-weight:bold;">C100P LIMITED</span><br>
        зарегистрирована в Соединенном Королевстве, г. Ипсвич.<br>
        Регистрационный номер компании: <b>16034770</b>
      </div>
      <div class="contact-info">
        Контактные телефоны (WhatsApp / Telegram): [добавим, как будут]<br>
        Адрес эл. почты: <a href="mailto:center100plus@gmail.com">center100plus@gmail.com</a><br>
        Почтовый адрес: 50 PRINCES STREET, IPSWICH, ENGLAND IP1 1RJ
      </div>
    `,
    info: `
      Для получения информации по тарифам и услугам, приглашаем посетить основной сайт Международной группы юридических компаний
      <a href="https://www.c100p.com" target="_blank">WWW.C100P.COM</a>
    `
  }
};

function setLang(lang) {
  document.getElementById('main-block').innerHTML = content[lang].main;
  document.getElementById('about-section').innerHTML = content[lang].about;
  document.getElementById('info-block').innerHTML = content[lang].info;
  document.getElementById('en-btn').classList.toggle('active', lang === 'en');
  document.getElementById('ru-btn').classList.toggle('active', lang === 'ru');
  document.documentElement.lang = lang;
}

document.getElementById('en-btn').onclick = () => setLang('en');
document.getElementById('ru-btn').onclick = () => setLang('ru');

// Default language
setLang('en');