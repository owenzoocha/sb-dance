/* Sarah Burnell School of Dance: mobile menu, enquiry forms, gallery filters */
(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('mnav');
  if (btn && nav) {
    var label = btn.querySelector('.menu-label');
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      nav.hidden = open;
      if (label) label.textContent = open ? 'Menu' : 'Close';
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !nav.hidden) { btn.click(); btn.focus(); }
    });
  }

  // Enquiry forms.
  // No backend yet: set data-action on the form (e.g. a Formspree endpoint) to send for real.
  document.querySelectorAll('form[data-enquiry]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = form.querySelector('.form-ok');
      var done = function () { if (ok) { ok.hidden = false; } form.reset(); };
      var endpoint = form.getAttribute('data-action');
      if (!endpoint) { done(); return; }
      fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { if (r.ok) { done(); } else { throw new Error('Send failed'); } })
        .catch(function () { if (ok) { ok.hidden = false; ok.textContent = 'Sorry, something went wrong. Please call 07395 416202 or email info@sarahburnellschoolofdance.com.'; } });
    });
  });

  // Gallery filters
  var buttons = document.querySelectorAll('.fbtn[data-filter]');
  var tiles = document.querySelectorAll('.tile[data-cat]');
  var heading = document.getElementById('gallery-heading');
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-filter');
      buttons.forEach(function (o) {
        var on = o === b;
        o.classList.toggle('on', on);
        o.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      tiles.forEach(function (t) { t.hidden = !(f === 'all' || t.getAttribute('data-cat') === f); });
      if (heading) heading.textContent = b.getAttribute('data-heading');
    });
  });
})();
