let language;

function languageChecker() {
  language = localStorage.getItem("language");
  
  if (!language) {
    language = 'en';
    localStorage.setItem("language", JSON.stringify(language));
  }

  return language.replace(/['"]+/g, '');
}

export default languageChecker;