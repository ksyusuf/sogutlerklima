// Sadece canlı ortamda Google Analytics'i yükle
if (window.location.hostname === 'sogutlerservis.com') {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17055278287';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17055278287', {
        'cookie_domain': 'sogutlerservis.com',
        'cookie_flags': 'SameSite=None;Secure'
    });
} 