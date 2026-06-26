(function () {
  // Email encoded with XOR key 42 — decoded only on user click, never in DOM at load time
  var _d = [75,65,69,70,70,67,31,106,67,70,70,67,68,69,67,89,4,79,78,95], _k = 42;

  function _decode() {
    return _d.map(function(c) { return String.fromCharCode(c ^ _k); }).join('');
  }

  function _feedback(btn) {
    if (!btn) return;
    btn.setAttribute('data-copied', '');
    var lbl = btn.querySelector('.ecl, .email-copy-feedback');
    if (lbl) lbl.textContent = 'Copied!';
    if (btn._ct) clearTimeout(btn._ct);
    btn._ct = setTimeout(function() {
      btn.removeAttribute('data-copied');
      if (lbl) lbl.textContent = '';
    }, 1800);
  }

  function _fallbackCopy(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    _feedback(btn);
  }

  function _copyEmail(btn) {
    var email = _decode();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(
        function() { _feedback(btn); },
        function() { _fallbackCopy(email, btn); }
      );
    } else {
      _fallbackCopy(email, btn);
    }
  }



  var BACK_TO_TOP_HTML =
    '<button id="back-to-top" class="back-to-top" type="button" aria-label="Back to top">' +
      '<svg class="icon" aria-hidden="true"><use href="/icons.svg#icon-chevron"></use></svg>' +
    '</button>';


  var backToTopHost = document.body;
  if (backToTopHost) {
    backToTopHost.insertAdjacentHTML('beforeend', BACK_TO_TOP_HTML);
  }

  var path = window.location.pathname;
  var activePage = 'home';
  if (/^\/work\//.test(path)) activePage = 'work';
  else if (/^\/projects\//.test(path)) activePage = 'projects';
  else if (/^\/contact\//.test(path)) activePage = 'contact';

  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.dataset.page === activePage) a.classList.add('nav-link-active');
  });

  var nav = document.getElementById('navbar');
  if (nav) {
    nav.classList.add('visible');
    nav.setAttribute('aria-hidden', 'false');
  }

  // Wire up all email copy buttons on this page (injected + static)
  document.querySelectorAll('.email-copy-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { _copyEmail(btn); });
  });

  // IntersectionObserver lazy loading with fade-in for projects/ and logos/ images
  (function() {
    var lazyImgs = document.querySelectorAll('img[loading="lazy"]');
    if (!lazyImgs.length) return;

    lazyImgs.forEach(function(img) {
      img.classList.add('lazy-img');
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('lazy-loaded');
      }
    });

    if (!('IntersectionObserver' in window)) {
      lazyImgs.forEach(function(img) { img.classList.add('lazy-loaded'); });
      return;
    }

    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var img = entry.target;
        function reveal() { img.classList.add('lazy-loaded'); }
        if (img.complete && img.naturalWidth > 0) {
          reveal();
        } else {
          img.addEventListener('load', reveal, { once: true });
          img.addEventListener('error', reveal, { once: true });
        }
        io.unobserve(img);
      });
    }, { rootMargin: '200px 0px' });

    lazyImgs.forEach(function(img) { io.observe(img); });
  })();
})();
