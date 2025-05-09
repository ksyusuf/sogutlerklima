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

// Navbar başlatma fonksiyonu
function initNavbar() {
  // Navbar ile ilgili özel işlemler buraya eklenebilir
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    // Örnek: Scroll olayını dinle
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }
}

// Footer başlatma fonksiyonu
function initFooter() {
  // Footer ile ilgili özel işlemler buraya eklenebilir
  const footerLinks = document.querySelectorAll('.legal-links a');
  if (footerLinks) {
    footerLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Link tıklama olayını izle
        console.log('Footer link clicked:', this.href);
      });
    });
  }
}

// Sayfa yükleme yönetimi
function initializePage() {
  // Sayfayı başlangıçta gizle
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease-in-out';

  let componentsLoaded = 0;
  const totalComponents = 2; // Navbar ve Footer

  function checkAllComponentsLoaded() {
    componentsLoaded++;
    if (componentsLoaded === totalComponents) {
      // Tüm bileşenler yüklendiğinde sayfayı göster
      document.body.style.opacity = '1';
    }
  }

  // Navbar'ı yükle
  fetch('includes/header-nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-nav-placeholder').innerHTML = data;
      if (typeof initNavbar === 'function') {
        initNavbar();
      }
      checkAllComponentsLoaded();
    })
    .catch(error => {
      console.error('Navbar yüklenirken hata:', error);
      checkAllComponentsLoaded();
    });

  // Footer'ı yükle
  fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
      if (typeof initFooter === 'function') {
        initFooter();
      }
      checkAllComponentsLoaded();
    })
    .catch(error => {
      console.error('Footer yüklenirken hata:', error);
      checkAllComponentsLoaded();
    });
}

// Sayfa yüklendiğinde çalışacak genel fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
  // Sayfa yükleme yönetimini başlat
  initializePage();

  // Owl Carousel başlatma
  if (typeof $ !== "undefined" && $(".owl-carousel").length > 0) {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      navText: [],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }

  // Diğer genel sayfa işlemleri buraya eklenebilir
});
