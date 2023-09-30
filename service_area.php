<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pentagon detailing</title>
    <link rel="icon" type="image/x-icon" href="assets/favicon.png" />
    <link rel="stylesheet" href="css/general.css" />
    <link rel="stylesheet" href="css/general_query.css" />
    <link rel="stylesheet" href="css/service_area.css" />
    <link rel="stylesheet" href="css/service_area_query.css" />
  </head>
  <body>
    <main>
      <?php include 'templates/navigation.php'; ?>

      <!-- section service area -->
      <section class="section_service_area">
        <div class="service_area_container">
          <div class="service_area_container__1_1">
            <span class="highlight_txt">areas</span>
            <h3 class="section_title">find us here</h3>
          </div>

          <div class="service_area_container__1_2">
            <div class="service_img_container">
              <picture class="service_area_map">
                <source
                  srcset="assets/tablet/service_map.png"
                  media="(max-width: 64em)" />
                <source
                  srcset="assets/mobile/service_map.png"
                  media="(max-width: 27em)" />
                <img src="assets/desktop/service_map.png" alt="" />
              </picture>

              <picture class="service_area_map_shadow">
                <source
                  srcset="assets/tablet/service_map shadow.png"
                  media="(max-width: 64em)" />
                <source
                  srcset="assets/mobile/service_map shadow.png"
                  media="(max-width: 27em)" />
                <img src="assets/desktop/service_map shadow.png" alt="" />
              </picture>
              <i class="i alexandria" name="map_location"></i>
              <i class="i vienna" name="map_location"></i>
              <i class="i laurel" name="map_location"></i>
              <i class="i mclean" name="map_location"></i>
              <i class="i arlington" name="map_location"></i>
              <i class="i rockville" name="map_location"></i>
              <i class="i fort_belvoir" name="map_location"></i>
              <i class="i burke" name="map_location"></i>
              <i class="i annandale" name="map_location"></i>
              <i class="i leesburg" name="map_location"></i>
              <i class="i catonsville" name="map_location"></i>
              <i class="i chantilly" name="map_location"></i>
              <i class="i adlie" name="map_location"></i>
              <i class="i reston" name="map_location"></i>
              <i class="i gainesville" name="map_location"></i>
              <i class="i springfield" name="map_location"></i>
              <i class="i annapolis" name="map_location"></i>
              <i class="i sterling" name="map_location"></i>
              <i class="i lorton" name="map_location"></i>
              <i class="i bethesda" name="map_location"></i>
              <i class="i glen_burnie" name="map_location"></i>
              <i class="i clinton" name="map_location"></i>
              <i class="i silver_spring" name="map_location"></i>
              <i class="i clifton" name="map_location"></i>
              <i class="i falls_church" name="map_location"></i>

              <span class="map_name_1 map_name">virginia</span>
              <span class="map_name_2 map_name">maryland</span>
            </div>

            <div class="location_name_container">
              <h2 class="location_name_container_heading">
                we provide our service to these metropolitan areas
              </h2>

              <div>
                <a href="" class="location_link va">alexandria, va</a>
                <a href="" class="location_link va">vienna, va</a>
                <a href="" class="location_link md">laurel, md</a>
                <a href="" class="location_link va">mclean, va</a>
                <a href="" class="location_link va">arlington, va</a>
                <a href="" class="location_link va">rockville, va</a>
                <a href="" class="location_link va">fort belvoir, va</a>
                <a href="" class="location_link va">burke, va</a>
                <a href="" class="location_link va">annandale, va</a>
                <a href="" class="location_link va">leesburg, va</a>
                <a href="" class="location_link md">catonsville, md</a>
                <a href="" class="location_link va">chantilly, va</a>
                <a href="" class="location_link va">adlie, va</a>
                <a href="" class="location_link va">reston, va</a>
                <a href="" class="location_link va">gainesville, va</a>
                <a href="" class="location_link va">springfield, va</a>
                <a href="" class="location_link md">annapolis, md</a>
                <a href="" class="location_link va">sterling, va</a>
                <a href="" class="location_link va">lorton, va</a>
                <a href="" class="location_link va">bethesda, va</a>
                <a href="" class="location_link md">glen burnie, md</a>
                <a href="" class="location_link md">clinton, md</a>
                <a href="" class="location_link va">silver spring, va</a>
                <a href="" class="location_link va">clifton, va</a>
                <a href="" class="location_link va">falls church, va</a>
              </div>
            </div>
          </div>

          <span class="shape_11"></span>
          <span class="shape_12"></span>
        </div>
      </section>

      <?php include 'templates/footer.php'; ?>
    </main>

    <!----------------- Script section ---------------->
    <script src="scripts/general_script.js" defer></script>
  </body>
</html>
