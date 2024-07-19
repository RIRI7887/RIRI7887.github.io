<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

    <title>Delano Solutions</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css" />
    <link rel="stylesheet" href="assets/css/templatemo-scholar.css" />
    <link rel="stylesheet" href="assets/css/owl.css" />
    <link rel="stylesheet" href="assets/css/animate.css" />
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
    <!-- REACT -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/i18next@23.12.2/i18next.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-i18next@1.2.2/jquery-i18next.min.js"></script>
  </head>

  <body>
    <!-- Language Dropdown -->
    <div style="text-align: right; padding: 10px;">
      <select id="languageSwitcher">
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>

    <!-- ***** Preloader Start ***** -->
    <div id="js-preloader" class="js-preloader">
      <div class="preloader-inner">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- ***** Preloader End ***** -->

    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a href="#" class="logo">
                <h1 data-i18n="delanoSolutions">Delano Solutions</h1>
              </a>
              <ul class="nav">
                <li class="scroll-to-section"><a href="#top" class="active" data-i18n="home">Home</a></li>
                <li class="scroll-to-section"><a href="#services" data-i18n="services">Services</a></li>
                <li class="scroll-to-section"><a href="#about-us" data-i18n="faq">FAQ</a></li>
                <li class="scroll-to-section"><a href="#contact" data-i18n="contactUs">Contact us</a></li>
                <li class="scroll-to-section"><a href="#contact" data-i18n="requestConsultation">Request Consultation</a></li>
                <li class="scroll-to-section" style="text-decoration: underline;text-decoration-color: rgb(97, 209, 215); text-decoration-thickness: 4px;">
                  <a><i class="fa-solid fa-address-card"></i> erich@delanosolutions.co.za</a>
                </li>
                <li class="scroll-to-section" style="text-decoration: underline;text-decoration-color: rgb(97, 209, 215); text-decoration-thickness: 4px;">
                  <a><i class="fa-solid fa-square-phone"></i>+27 83 366 7608</a>
                </li>
              </ul>
              <a class="menu-trigger"><span>Menu</span></a>
              <!-- ***** Menu End ***** -->
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- ***** Header Area End ***** -->

    <div class="main-banner" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="owl-carousel owl-banner">
              <div class="item item-1">
                <div class="header-text">
                  <span class="category" data-i18n="whatWeOffer">What We Offer</span>
                  <h2 data-i18n="ensuringSafetyWorkplace">Ensuring Safety Workplace</h2>
                  <p data-i18n="comprehensiveRiskAssessments">
                    Our comprehensive risk assessments identify potential hazards and implement control measures to create a safer work environment for everyone.
                  </p>
                  <div class="buttons">
                    <div class="main-button">
                      <a href="#" data-i18n="requestConsultation">Request Consultation</a>
                    </div>
                    <div class="icon-button">
                      <a href="#"><i class="fa fa-shield fa-2xl"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Add more items as necessary with similar structure -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional sections like services, about us, etc. would go here -->

    <div class="contact-us section" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-self-center">
            <div class="section-heading">
              <h6 data-i18n="contactUs">Contact Us</h6>
              <h2 data-i18n="feelFreeToContact">Feel free to contact us anytime</h2>
              <p data-i18n="discoverHowDelanoCanHelp">
                Discover how Delano solutions can enhance your workplace safety and compliance. Contact us today to schedule a consultation or inquire about our services.
              </p>
              <div class="special-offer">
                <h6 data-i18n="leaveYourEmail">Please leave your email and phone number for us to contact you for consultation.</h6>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-us-content">
              <form id="contact-form" action="" method="post">
                <div class="row">
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="text" name="name" id="name" placeholder="Your Name..." autocomplete="on" required />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="email" name="email" id="email" pattern="[^@]*@[^@]*" placeholder="Your E-mail..." required />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="tel" name="phone" id="phone" placeholder="Your Phone Number..." required />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" id="message" placeholder="Your Message" required></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="orange-button" data-i18n="sendMessageNow">Send Message Now</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div class="container" id="foteerContainer"></div>
    </footer>

    <script type="text/babel">
      function Hello() {
        return <div className="col-lg-12">
          <p data-i18n="copyright">
            Copyright © 2024 DELANO SOLUTIONS. All rights reserved.
            &nbsp;&nbsp;&nbsp;
          </p>
        </div>;
      }
      const container = document.getElementById('foteerContainer');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />);
    </script>

    <!-- Scripts -->
    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/isotope.min.js"></script>
    <script src="assets/js/owl-carousel.js"></script>
    <script src="assets/js/counter.js"></script>
    <script src="assets/js/custom.js"></script>

    <script>
      // i18next initialization
      i18next.init({
        lng: 'en',
        resources: {
          en: {
            translation: {
              delanoSolutions: "Delano Solutions",
              home: "Home",
              services: "Services",
              faq: "FAQ",
              contactUs: "Contact us",
              requestConsultation: "Request Consultation",
              whatWeOffer: "What We Offer",
              ensuringSafetyWorkplace: "Ensuring Safety Workplace",
              comprehensiveRiskAssessments: "Our comprehensive risk assessments identify potential hazards and implement control measures to create a safer work environment for everyone.",
              feelFreeToContact: "Feel free to contact us anytime",
              discoverHowDelanoCanHelp: "Discover how Delano solutions can enhance your workplace safety and compliance. Contact us today to schedule a consultation or inquire about our services.",
              leaveYourEmail: "Please leave your email and phone number for us to contact you for consultation.",
              sendMessageNow: "Send Message Now",
              copyright: "Copyright © 2024 DELANO SOLUTIONS. All rights reserved."
            }
          },
          fr: {
            translation: {
              delanoSolutions: "Solutions Delano",
              home: "Accueil",
              services: "Services",
              faq: "FAQ",
              contactUs: "Contactez-nous",
              requestConsultation: "Demander une consultation",
              whatWeOffer: "Ce que nous offrons",
              ensuringSafetyWorkplace: "Assurer la sécurité au travail",
              comprehensiveRiskAssessments: "Nos évaluations complètes des risques identifient les dangers potentiels et mettent en œuvre des mesures de contrôle pour créer un environnement de travail plus sûr pour tout le monde.",
              feelFreeToContact: "N'hésitez pas à nous contacter à tout moment",
              discoverHowDelanoCanHelp: "Découvrez comment les solutions Delano peuvent améliorer la sécurité et la conformité de votre lieu de travail. Contactez-nous dès aujourd'hui pour planifier une consultation ou vous renseigner sur nos services.",
              leaveYourEmail: "Veuillez laisser votre e-mail et votre numéro de téléphone pour que nous puissions vous contacter pour une consultation.",
              sendMessageNow: "Envoyer le message maintenant",
              copyright: "Droits d'auteur © 2024 SOLUTIONS DELANO. Tous les droits sont réservés."
            }
          }
        }
      }, function(err, t) {
        // init set content
        updateContent();
      });

      function updateContent() {
        // Update text content
        $('body').localize();
      }

      // Language switcher event
      $('#languageSwitcher').on('change', function() {
        const selectedLanguage = $(this).val();
        i18next.changeLanguage(selectedLanguage, function(err, t) {
          if (err) return console.error('something went wrong loading', err);
          updateContent();
        });
      });

      $(document).ready(function() {
        updateContent(); // initial call to update content based on default language
      });
    </script>
  </body>
</html>
