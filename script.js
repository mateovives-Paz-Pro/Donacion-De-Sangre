// Navegación entre las tres secciones usando el hash de la URL
// (#inicio, #quien-puede-donar, #mitos). Así funcionan los botones
// "atrás/adelante" del navegador y se puede compartir el enlace directo.
(function () {
  var views = {
    'inicio': document.getElementById('inicio'),
    'quien-puede-donar': document.getElementById('quien-puede-donar'),
    'mitos': document.getElementById('mitos')
  };

  function show() {
    var id = location.hash.replace('#', '');
    if (!views[id]) id = 'inicio';

    Object.keys(views).forEach(function (key) {
      views[key].hidden = key !== id;
    });
    document.body.setAttribute('data-view', id);
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', show);
  show();
})();
