// Formularios (demo). Conectar con el servicio real de email o backend.
document.querySelectorAll('form').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var ok = form.querySelector('.ok');
    if (ok) ok.classList.add('show');
    var btn = form.querySelector('button[type=submit]');
    if (btn && !ok) btn.textContent = '¡Listo!';
    form.reset();
  });
});
