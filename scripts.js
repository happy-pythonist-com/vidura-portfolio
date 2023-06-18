$(document).ready(function() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 0) {
        $('.navbar').addClass('is-solid');
      } else {
        $('.navbar').removeClass('is-solid');
      }

      const features = document.querySelectorAll('.scrollable-column');
      let activeFeatureIndex = null;
    
      features.forEach((feature, index) => {
        const rect = feature.getBoundingClientRect();
        if (rect.top < 100 && rect.bottom > 100) {
          activeFeatureIndex = index;
        }
      });
    
      if (activeFeatureIndex !== null) {
        const featureImage = document.getElementById('feature-image');
        featureImage.src = featureImages[activeFeatureIndex];
      }
    });

    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  });