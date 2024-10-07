// code.js
const emailInput = document.getElementById('emailBox');
const continueButton = document.querySelector('.continue-button');
const languageButton = document.querySelector('.language-btn');

// Add event listener to continue button
continueButton.addEventListener('click', validateEmail);

// Add event listener to language button
languageButton.addEventListener('click', changeLanguage);

// Function to validate email input
function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(emailValue)) {
    alert('Email address is valid!');
  } else {
    alert('Invalid email address. Please try again.');
  }
}

// Function to change language
function changeLanguage() {
  const languageSelect = document.querySelector('.footer-language select');
  const language = languageSelect.value;
  switch (language) {
    case 'en':
      // Change language to English
      document.title = 'Login | TIDAL';
      document.querySelector('.sub-heading h2').textContent = 'Sign up or log in';
      document.querySelector('.footer-content .footer-left span').textContent = ' 2024 TIDAL Music AS';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(1)').textContent = 'Privacy Notice';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(2)').textContent = 'Terms and Conditions';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(3)').textContent = 'Cookie Settings';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(4)').textContent = 'Accessibility Statement';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(5)').textContent = 'Contact';
      document.querySelector('.input-container label').textContent = 'Email or Username';
      document.querySelector('.continue-button').textContent = 'Continue';
      document.querySelector('.loginbuttons a:nth-child(1) .button').textContent = 'Continue with Google';
      document.querySelector('.loginbuttons a:nth-child(2) .button').textContent = 'Continue with Facebook';
      document.querySelector('.loginbuttons a:nth-child(3) .button').textContent = 'Continue with Apple';
      document.querySelector('.loginbuttons a:nth-child(4) .button').textContent = 'Continue with X';
      break;
    case 'es':
      // Change language to Spanish
      document.title = 'Iniciar sesión | TIDAL';
      document.querySelector('.sub-heading h2').textContent = 'Regístrate o inicia sesión';
      document.querySelector('.footer-content .footer-left span').textContent = ' 2024 TIDAL Música AS';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(1)').textContent = 'Aviso de privacidad';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(2)').textContent = 'Términos y condiciones';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(3)').textContent = 'Configuración de cookies';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(4)').textContent = 'Declaración de accesibilidad';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(5)').textContent = 'Contacto';
      document.querySelector('.input-container label').textContent = 'Correo electrónico o nombre de usuario';
      document.querySelector('.continue-button').textContent = 'Continuar';
      document.querySelector('.loginbuttons a:nth-child(1) .button').textContent = 'Continuar con Google';
      document.querySelector('.loginbuttons a:nth-child(2) .button').textContent = 'Continuar con Facebook';
      document.querySelector('.loginbuttons a:nth-child(3) .button').textContent = 'Continuar con Apple';
      document.querySelector('.loginbuttons a:nth-child(4) .button').textContent = 'Continuar con X';
      break;
    case 'hi':
      // Change language to Hindi
      document.title = 'लॉगिन | टिडल';
      document.querySelector('.sub-heading h2').textContent = 'साइन अप करें या लॉगिन करें';
      document.querySelector('.footer-content .footer-left span').textContent = ' 2024 टिडल म्यूजिक एएस';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(1)').textContent = 'गोपनीयता नोटिस';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(2)').textContent = 'नियम और शर्तें';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(3)').textContent = 'कुकी सेटिंग्स';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(4)').textContent = 'सुलभता बयान';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(5)').textContent = 'संपर्क';
      document.querySelector('.input-container label').textContent = 'ईमेल या उपयोगकर्ता नाम';
      document.querySelector('.continue-button').textContent = 'जारी रखें';
      document.querySelector('.loginbuttons a:nth-child(1) .button').textContent = 'गूगल के साथ जारी रखें';
      document.querySelector('.loginbuttons a:nth-child(2) .button').textContent = 'फेसबुक के साथ जारी रखें';
      document.querySelector('.loginbuttons a:nth-child(3) .button').textContent = 'एप्पल के साथ जारी रखें';
      document.querySelector('.loginbuttons a:nth-child(4) .button').textContent = 'एक्स के साथ जारी रखें';
      break;
    case 'de':
      // Change language to German
      document.title = 'Anmelden | TIDAL'; 
      document.querySelector('.sub-heading h2').textContent = 'Registrieren oder anmelden';
      document.querySelector('.footer-content .footer-left span').textContent = ' 2024 TIDAL Musik AS';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(1)').textContent = 'Datenschutzhinweis';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(2)').textContent = 'Allgemeine Geschäftsbedingungen';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(3)').textContent = 'Cookie-Einstellungen';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(4)').textContent = 'Barrierefreierklärung';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(5)').textContent = 'Kontakt';
      document.querySelector('.input-container label').textContent = 'E-Mail oder Benutzername';
      document.querySelector('.continue-button').textContent = 'Weiter';
      document.querySelector('.loginbuttons a:nth-child(1) .button').textContent = 'Mit Google weiter';
      document.querySelector('.loginbuttons a:nth-child(2) .button').textContent = 'Mit Facebook weiter';
      document.querySelector('.loginbuttons a:nth-child(3) .button').textContent = 'Mit Apple weiter';
      document.querySelector('.loginbuttons a:nth-child(4) .button').textContent = 'Mit X weiter';
      break;
    case 'fr':
         // Change language to French
      document.title = 'Se connecter | TIDAL';
      document.querySelector('.sub-heading h2').textContent = 'Inscrivez-vous ou connectez-vous';
      document.querySelector('.footer-content .footer-left span').textContent = ' 2024 TIDAL Musique AS';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(1)').textContent = 'Avis de confidentialité';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(2)').textContent = 'Conditions générales';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(3)').textContent = 'Paramètres des cookies';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(4)').textContent = 'Déclaration d\'accessibilité';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(5)').textContent = 'Contact';
      document.querySelector('.input-container label').textContent = 'Adresse e-mail ou nom d\'utilisateur';
      document.querySelector('.continue-button').textContent = 'Continuer';
      document.querySelector('.loginbuttons a:nth-child(1) .button').textContent = 'Continuer avec Google';
      document.querySelector('.loginbuttons a:nth-child(2) .button').textContent = 'Continuer avec Facebook';
      document.querySelector('.loginbuttons a:nth-child(3) .button').textContent = 'Continuer avec Apple';
      document.querySelector('.loginbuttons a:nth-child(4) .button').textContent = 'Continuer avec X';
     break;
    case 'ru':
       // Change language to Russian
      document.title = 'Войти | TIDAL';
      document.querySelector('.sub-heading h2').textContent = 'Зарегистрироваться или войти';
      document.querySelector('.footer-content .footer-left span').textContent = ' 2024 TIDAL Музыка AS';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(1)').textContent = 'Уведомление о конфиденциальности';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(2)').textContent = 'Общие условия';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(3)').textContent = 'Настройки файлов cookie';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(4)').textContent = 'Заявление об доступности';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(5)').textContent = 'Контакт';
      document.querySelector('.input-container label').textContent = 'Электронная почта или имя пользователя';
      document.querySelector('.continue-button').textContent = 'Продолжить';
      document.querySelector('.loginbuttons a:nth-child(1) .button').textContent = 'Продолжить с Google';
      document.querySelector('.loginbuttons a:nth-child(2) .button').textContent = 'Продолжить с Facebook';
      document.querySelector('.loginbuttons a:nth-child(3) .button').textContent = 'Продолжить с Apple';
      document.querySelector('.loginbuttons a:nth-child(4) .button').textContent = 'Продолжить с X';
     break;
    case 'ja':
      // Change language to Japanese
      document.title = 'ログイン | TIDAL';
      document.querySelector('.sub-heading h2').textContent = '登録またはログイン';
      document.querySelector('.footer-content .footer-left span').textContent = ' 2024 TIDAL ミュージック AS';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(1)').textContent = 'プライバシーポリシー';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(2)').textContent = '利用規約';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(3)').textContent = 'クッキーの設定';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(4)').textContent = 'アクセシビリティ声明';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(5)').textContent = 'お問い合わせ';
      document.querySelector('.input-container label').textContent = 'メールアドレスまたはユーザー名';
      document.querySelector('.continue-button').textContent = '続行';
      document.querySelector('.loginbuttons a:nth-child(1) .button').textContent = 'Googleで続行';
      document.querySelector('.loginbuttons a:nth-child(2) .button').textContent = 'Facebookで続行';
      document.querySelector('.loginbuttons a:nth-child(3) .button').textContent = 'Appleで続行';
      document.querySelector('.loginbuttons a:nth-child(4) .button').textContent = 'Xで続行';
     break;
    case 'ko':
      // Change language to Korean
      document.title = '로그인 | TIDAL';
      document.querySelector('.sub-heading h2').textContent = '등록 또는 로그인';
      document.querySelector('.footer-content .footer-left span').textContent = ' 2024 TIDAL 뮤직 AS';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(1)').textContent = '개인정보 보호정책';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(2)').textContent = '이용약관';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(3)').textContent = '쿠키 설정';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(4)').textContent = '접근성 성명';
      document.querySelector('.footer-content .footer-right .footer-links a:nth-child(5)').textContent = '문의하기';
      document.querySelector('.input-container label').textContent = '이메일 또는 사용자 이름';
      document.querySelector('.continue-button').textContent = '계속';
      document.querySelector('.loginbuttons a:nth-child(1) .button').textContent = 'Google로 계속';
      document.querySelector('.loginbuttons a:nth-child(2) .button').textContent = 'Facebook로 계속';
      document.querySelector('.loginbuttons a:nth-child(3) .button').textContent = 'Apple로 계속';
      document.querySelector('.loginbuttons a:nth-child(4) .button').textContent = 'X로 계속';
     break;
  }
}
