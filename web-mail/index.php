<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <link rel="shortcut icon" href="assets/images/icon/logo.png" type="">
  <title>WEB MAIL</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="assets/css/fontawesome.css" />
  <link rel="stylesheet" href="assets/css/templatemo-scholar.css" />
  <link rel="stylesheet" href="assets/css/owl.css" />
  <link rel="stylesheet" href="assets/css/animate.css" />
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
</head>

<body>
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
  <div class="contact-us section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="section-heading">
            <h6>Contact Us</h6>
            <h2>Feel free to contact us anytime</h2>
            <p>
              Discover how Delano solutions can enhance your workplace safety
              and compliance. <br>Contact us today to schedule a consultation or
              inquire about our services.
            </p>
            <div class="special-offer">
              <span class="offer"> </span>
              <h6>
                Please leave your email and phone number for us to contact you
                for consultation. </h6>
              <a href="#"><i class="fa fa-angle-right"></i> </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-us-content">
            <form id="contact-form" action="send_email.php" method="post">
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
                    <button type="submit" id="form-submit" class="orange-button">
                      Send Message Now
                    </button>
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
    <div class="container" id="foteerContainer">
      <div class="col-lg-12">
        <p>
          Copyright © 2024 DELANO SOLUTIONS. All rights reserved.
          &nbsp;&nbsp;&nbsp;
        </p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets/js/isotope.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>
  <script src="assets/js/counter.js"></script>
  <script src="assets/js/custom.js"></script>
</body>

</html>