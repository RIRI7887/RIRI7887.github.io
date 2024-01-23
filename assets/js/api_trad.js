 
    // Remplacez 'VOTRE_CLE_API' par votre clé API Google Translate
    var apiKey = 'VOTRE_CLE_API';

    // Fonction pour traduire le contenu de la page
    function traduirePage(langueCible) {
      var elements = document.querySelectorAll('#about');

      elements.forEach(function(element) {
        var texteOriginal = element.textContent;
        traduireTexte(texteOriginal, langueCible)
          .then(function(traduction) {
            element.textContent = traduction;
          })
          .catch(function(erreur) {
            console.error("Erreur de traduction :", erreur);
          });
      });
    }

    // Fonction pour traduire un texte en utilisant l'API Google Translate
    function traduireTexte(texte, langueCible) {
      var url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${encodeURIComponent(texte)}&target=${langueCible}`;

      return fetch(url, { method: 'POST' })
        .then(response => response.json())
        .then(data => data.data.translations[0].translatedText);
    }

    // Exemple d'utilisation
    traduirePage('fr'); // Traduire en français 