<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Permissions-Policy" content="browsing-topics=(none)" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pentagon detailing</title>
    <link rel="icon" type="image/x-icon" href="assets/favicon.png" />
    <link rel="stylesheet" href="css/general.css" />
    <link rel="stylesheet" href="css/index.css" />
    <link rel="stylesheet" href="css/general_query.css" />
    <link rel="stylesheet" href="css/home_query.css" />
  </head>
  <body>
    <!-- scroll to top -->
    <span class="scroll_btn" onclick="scrollToTop()"><h3>go up</h3></span>
    <main>
      <header>
        <?php include 'templates/navigation.php'; ?>

        <!---------------- Section Hero ---------------->
        <section class="section_hero">
          <div class="hero_container">
            <h1 class="main_heading">give your car a new look</h1>

            <picture class="hero_img">
              <source
                srcset="assets/tablet/hero_car.png"
                media="(max-width: 64em)" />
              <source
                srcset="assets/mobile/hero_car.png"
                media="(max-width: 27em)" />
              <img
                src="assets/desktop/hero_car.png"
                alt="a sports car in red color" />
            </picture>

            <i class="i" name="arrow_down"></i>
          </div>

          <div class="customer_count_container">
            <div class="customer_img_container">
              <span class="customer customer__1"></span>
              <span class="customer customer__2"></span>
              <span class="customer customer__3"></span>
              <span class="customer customer__5"></span>
              <span class="customer customer__4"></span>
            </div>
            <p class="customer_count">
              <span class="first_word">1000+</span> Happy Customers
            </p>
            <span class="red_line"></span>
          </div>
        </section>

        <span class="highlight_txt">pentagon</span>
        <span class="shape_1"></span>
        <span class="shape_2"></span>
      </header>

      <!---------------- Section About ---------------->
      <section class="section_about" id="about">
        <div class="about_container">
          <div class="about_container__1">
            <div class="about_txt_container">
              <h3 class="section_title">about us</h3>
              <h2 class="section_heading">about our company</h2>
              <p class="about_txt">
                Your trusted destination for premier car detailing services.
                Boasting a decade of industry prowess, we specialize in a
                comprehensive range of services including dent removal, dust
                cleaning, and flawless painting.<br /><br />
                Our 10-year journey signifies not just experience, but a
                relentless commitment to excellence. Join us in discovering the
                art of automotive detailing where each vehicle's story is
                uniquely enhanced.
              </p>
              <a href="/?id=contact" class="btn_contact">contact us</a>
            </div>

            <div class="about_img_container">
              <picture class="about_shape_1">
                <source
                  srcset="assets/tablet/shape_1.png"
                  media="(max-width: 64em)" />
                <source
                  srcset="assets/mobile/shape_1.png"
                  media="(max-width: 27em)" />
                <img src="assets/desktop/shape_1.png" alt="" />
              </picture>

              <picture class="about_shape_2">
                <source
                  srcset="assets/tablet/shape_2.png"
                  media="(max-width: 64em)" />
                <source
                  srcset="assets/mobile/shape_2.png"
                  media="(max-width: 27em)" />
                <img src="assets/desktop/shape_2.png" alt="" />
              </picture>

              <picture class="about_shape_3">
                <source
                  srcset="assets/tablet/shape_3.png"
                  media="(max-width: 64em)" />
                <source
                  srcset="assets/mobile/shape_3.png"
                  media="(max-width: 27em)" />
                <img src="assets/desktop/shape_3.png" alt="" />
              </picture>
            </div>

            <div class="about_summery_container">
              <div class="box box__1">
                <h2 class="num">10+</h2>
                <span class="line"></span>
                <h3 class="txt">years of<br />experience</h3>
              </div>
              <div class="box box__2">
                <h2 class="num">1k+</h2>
                <span class="line"></span>
                <h3 class="txt">happy<br />customers</h3>
              </div>
              <div class="box box__3">
                <h2 class="num">5+</h2>
                <span class="line"></span>
                <h3 class="txt">service<br />locations</h3>
              </div>
              <div class="box box__4">
                <h2 class="num">20+</h2>
                <span class="line"></span>
                <h3 class="txt">type of<br />services</h3>
              </div>
            </div>
          </div>
          <span class="highlight_txt">about</span>
          <span class="shape_3"></span>
          <span class="shape_4"></span>
          <span class="shape_5"></span>
        </div>
      </section>

      <!--------------- Section Service --------------->
      <section class="section_service">
        <div class="service_container">
          <div class="service_container__1">
            <div class="service_img_container">
              <div class="service_img_container__1">
                <picture class="service_img">
                  <source
                    srcset="assets/tablet/service_car.png"
                    media="(max-width: 64em)" />

                  <img
                    src="assets/desktop/service_car.png"
                    alt="a luxury car png"
                    loading="lazy" />
                </picture>
                <!-- This is the inditacors to indicate different sides of the car -->
                <span class="indicators indicator__1">
                  <span class="line__1">
                    <span class="line__2"></span>
                  </span>
                </span>

                <span class="indicators indicator__2">
                  <span class="line__1">
                    <span class="line__2"></span>
                  </span>
                </span>

                <span class="indicators indicator__3">
                  <span class="line__1">
                    <span class="line__2"></span>
                  </span>
                </span>

                <span class="indicators indicator__4">
                  <span class="line__1">
                    <span class="line__2"></span>
                  </span>
                </span>

                <span class="indicators indicator__5">
                  <span class="line__1">
                    <span class="line__2"></span>
                  </span>
                </span>

                <span class="indicators indicator__6">
                  <span class="line__1">
                    <span class="line__2"></span>
                  </span>
                </span>

                <span class="indicators indicator__7">
                  <span class="line__1">
                    <span class="line__2"></span>
                  </span>
                </span>

                <span class="indicators indicator__8">
                  <span class="line__1">
                    <span class="line__2"></span>
                  </span>
                </span>
              </div>

              <div class="service_btn_container">
                <a href="service.html" class="btn_service">see all services</a>
              </div>
              <span class="service_overlay"></span>
            </div>
          </div>

          <span class="highlight_txt">services</span>
          <span class="shape_6"></span>
          <span class="shape_7"></span>
        </div>
      </section>

      <!-- ------------ Section Gallery ------------------- -->
      <section class="section_gallery" id="gallery">
        <div class="gallery_container">
          <span class="background_highlight"></span>

          <picture class="gallery_img left">
            <source
              srcset="assets/tablet/gallery_img/work-1.webp"
              media="(max-width: 64em)" />
            <source
              srcset="assets/mobile/gallery_img/work-1.webp"
              media="(max-width: 27em)" />
            <img src="assets/desktop/gallery_img/work-1.webp" alt="" />
          </picture>

          <picture class="gallery_img center">
            <source
              srcset="assets/tablet/gallery_img/work-2.webp"
              media="(max-width: 64em)" />
            <source
              srcset="assets/mobile/gallery_img/work-2.webp"
              media="(max-width: 27em)" />
            <img src="assets/desktop/gallery_img/work-2.webp" alt="" />
          </picture>

          <picture class="gallery_img right">
            <source
              srcset="assets/tablet/gallery_img/work-3.webp"
              media="(max-width: 64em)" />
            <source
              srcset="assets/mobile/gallery_img/work-3.webp"
              media="(max-width: 27em)" />
            <img src="assets/desktop/gallery_img/work-3.webp" alt="" />
          </picture>

          <picture class="gallery_img right">
            <source
              srcset="assets/tablet/gallery_img/work-4.webp"
              media="(max-width: 64em)" />
            <source
              srcset="assets/mobile/gallery_img/work-4.webp"
              media="(max-width: 27em)" />
            <img src="assets/desktop/gallery_img/work-4.webp" alt="" />
          </picture>

          <button class="btn_gallery left" onclick="carousel('left')">
            <i name="arrow_left" class="i"></i>
          </button>
          <button class="btn_gallery right" onclick="carousel('right')">
            <i name="arrow_right" class="i"></i>
          </button>

          <span class="highlight_txt">gallery</span>
          <h3 class="section_title">our previous works</h3>

          <div class="gallery_indicator_con"></div>
        </div>
      </section>

      <!---------------- Section testimonial ---------------->
      <section class="section_testimonial" id="testimonial">
        <div class="testimonial_container">
          <h3 class="section_title">what our clients are saying</h3>
          <div class="testimonial_container__1">
            <div class="testimonial_container___2">
              <div class="review_box">
                <h3 class="client_name">client name</h3>
                <p class="client_review">
                  “Pentagon Detailing exceeded my expectations! The team's
                  attention to detail was impeccable, leaving my car looking
                  brand new. The customer service was fantastic, with friendly
                  staff who listened to my needs. They worked efficiently and
                  delivered exceptional results. I highly recommend Pentagon
                  Detailing for anyone looking for top-quality car detailing
                  services.”
                </p>
                <h1 class="review_highlight">,,</h1>
              </div>

              <div class="review_box">
                <h3 class="client_name">client name</h3>
                <p class="client_review">
                  "I had a wonderful experience at Pentagon Detailing. The staff
                  was professional and knowledgeable, providing expert advice on
                  the best detailing options for my vehicle. The level of care
                  and precision they put into their work was evident in the end
                  result. My car has never looked better! I will definitely be
                  returning for future detailing needs."
                </p>
                <h1 class="review_highlight">,,</h1>
              </div>

              <div class="review_box">
                <h3 class="client_name">client name</h3>
                <p class="client_review">
                  "Pentagon Detailing is my go-to place for car detailing. The
                  team consistently delivers excellent service, paying close
                  attention to every nook and cranny. They take pride in their
                  work and it shows. The staff is friendly, the pricing is
                  reasonable, and the results are outstanding. I highly
                  recommend Pentagon Detailing for a thorough and professional
                  car detailing experience."
                </p>
                <h1 class="review_highlight">,,</h1>
              </div>
            </div>
          </div>
          <div class="testimonial_indicator_con"></div>

          <span class="highlight_txt">testimonial</span>
        </div>
      </section>

      <!-- -------------Section Contact------------- -->
      <section class="section_contact" id="contact">
        <div class="contact_container">
          <div class="contact_form_container">
            <h2 class="contact_heading">send us a message</h2>
            <form action="PHP_Forms/formHandler.php" class="contact_form" id="contact_form" method="POST" >
              <div class="input_container">
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="John Smith" />
                <label for="username">full Name</label>
              </div>

              <div class="input_container">
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="examples@xyz.com" />
                <label for="user_email">Email address</label>
              </div>

              <div class="input_container">
                <textarea
                  name="user_message"
                  id="user_message"
                  placeholder="explain what you want from us..."></textarea>
                <label for="user_message">Your Message</label>
              </div>

              <button type="submit" id="contact_submit_btn">
                send message
              </button>
            </form>
          </div>

          <div class="contact_location_container">
            <picture class="global_map">
              <source
                srcset="assets/tablet/global map.png"
                media="(max-width: 64em)" />
              <source
                srcset="assets/mobile/global map.png"
                media="(max-width: 27em)" />
              <img
                src="assets/desktop/global map.png"
                alt="map of earth"
                loading="lazy" />
            </picture>

            <picture class="contact_map">
              <source
                srcset="assets/tablet/contact_map_tablet.png"
                media="(max-width: 64em)" />
              <source
                srcset="assets/mobile/contact_map_mobile.png"
                media="(max-width: 27em)" />
              <img
                src="assets/desktop/contact_map.png"
                alt="the map of the service areas"
                loading="lazy" />
            </picture>

            <picture class="contact_map_shadow">
              <source
                srcset="assets/tablet/contact_map_shadow_tablet.png"
                media="(max-width: 64em)" />
              <source
                srcset="assets/mobile/contact_map_shadow_mobile.png"
                media="(max-width: 27em)" />
              <img
                src="assets/desktop/contact_map_shadow.png"
                alt="background shadow of the contact map"
                loading="lazy" />
            </picture>
            <i class="i prince_geo" name="map_location"></i>
            <i class="i fairfax_co" name="map_location"></i>
            <i class="i anne_arundel" name="map_location"></i>
            <i class="i loudown_co" name="map_location"></i>
            <i class="i montgomery_co" name="map_location"></i>
            <i class="i howard_co" name="map_location"></i>
            <i class="i prince_will" name="map_location"></i>

            <span class="contact_map_wave"></span>
            <span class="contact_location_dot">
              <span class="contact_line__1">
                <span class="contact_line__2"></span>
            </span>
          </div>

          <span class="highlight_txt">contact</span>
          <h3 class="section_title">contact us</h3>
          <span class="shape_8"></span>
          <span class="shape_9"></span>
          <span class="shape_10"></span>
        </div>
      </section>
      <?php include 'templates/footer.php'; ?>
    </main>

    <!----------------- Script section ---------------->
    <script src="scripts/general_script.js" defer></script>
    <script src="scripts/index.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts/contact_form.js"></script>
  </body>
</html>
