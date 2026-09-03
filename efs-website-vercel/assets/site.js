// Elite Finance Solutions — site scripts

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Contact form: composes an email in the visitor's own mail client.
  // No server or third-party form service required for the site to work.
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };
      var name = get('f-name');
      var company = get('f-company');
      var email = get('f-email');
      var phone = get('f-phone');
      var topic = get('f-topic');
      var message = get('f-message');

      var subject = 'Website enquiry' + (topic ? ' — ' + topic : '');
      var body =
        'Name: ' + name + '\n' +
        'Company: ' + company + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + phone + '\n' +
        'Area of interest: ' + topic + '\n\n' +
        message + '\n';

      window.location.href =
        'mailto:info@efsegypt.org?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(body);

      var note = document.getElementById('form-status');
      if (note) {
        note.textContent =
          'Your email programme should now be open with this enquiry ready to send. If nothing happened, please write to info@efsegypt.org directly.';
      }
    });
  }
})();
