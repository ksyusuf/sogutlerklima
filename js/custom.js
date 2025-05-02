document.addEventListener("DOMContentLoaded", function () {
    // Get Current Year
    var d = new Date();
    var year = d.getFullYear();
    var yearElement = document.querySelector("#displayDateYear");
    if (yearElement) {
        yearElement.innerText = year;
    }

    // Owl Carousel
    if (typeof $ !== "undefined" && $(".owl-carousel").length > 0) {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            navText: [
                '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
            ],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    }
});

// Slide-in animasyonları
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.slide-in-left').forEach(function(el, i) {
    setTimeout(function() {
      el.classList.add('active');
    }, 200 + i * 100);
  });
  document.querySelectorAll('.slide-in-right').forEach(function(el, i) {
    setTimeout(function() {
      el.classList.add('active');
    }, 400 + i * 100);
  });
});

// Slide-in-up animasyonları (scroll ile)
(function() {
  var observer = new window.IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.slide-in-up').forEach(function(el) {
    observer.observe(el);
  });
})();
