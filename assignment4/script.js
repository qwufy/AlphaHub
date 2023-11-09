function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }

  const content = document.getElementById("content");
  const languageSwitcher = document.getElementById("language-switcher");
  
  const defaultLanguage = "en";
  
  function translate(language) {
    const text = content.textContent;
    const translatedText = translateText(text, language);
  
    content.textContent = translatedText;
  }
  
  function translateText(text, language) {
    const translate = new google.translate.Translate();
  
    const translatedText = translate.translate(text, {
      sourceLanguage: defaultLanguage,
      targetLanguage: language,
    });
  
    return translatedText;
  }
  
  languageSwitcher.addEventListener("click", event => {
    const buttonId = event.target.id;
  
    if (buttonId === "eng") {
      translate("en");
    } else if (buttonId === "rus") {
      translate("ru");
    }
  });

function search() {
    const searchInput = document.querySelector('.search input');
    const searchTerm = searchInput.value;
    alert(`Searching for: ${searchTerm}`);
}

//For reviews

function addReview() {
    var name = document.getElementById('name').value;
    var rating = document.getElementById('rating').value;
    var comment = document.getElementById('comment').value;

    if (name && rating && comment) {
        var reviewsList = document.getElementById('reviewsList');

        var newReview = document.createElement('div');
        newReview.className = 'review';
        newReview.innerHTML = '<strong>' + name + '</strong> - ★'.repeat(rating) + '<br>' + comment;

        reviewsList.appendChild(newReview);

        document.getElementById('reviewForm').reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
}