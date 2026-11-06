// Click a photo to view it full size. Esc or a click closes; arrow keys move between photos.
(function () {
  var imgs = Array.prototype.filter.call(document.querySelectorAll('img'), function (img) {
    return !img.closest('a');
  });
  if (!imgs.length || !window.HTMLDialogElement) return;

  var box = document.createElement('dialog');
  box.className = 'lightbox';
  box.setAttribute('aria-label', 'Full size image');
  var big = document.createElement('img');
  box.appendChild(big);
  document.body.appendChild(box);
  var current = 0;

  function show(i) {
    current = (i + imgs.length) % imgs.length;
    big.src = imgs[current].currentSrc || imgs[current].src;
    big.alt = imgs[current].alt;
  }

  imgs.forEach(function (img, i) {
    img.classList.add('zoomable');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'View full size: ' + img.alt);
    function open() { show(i); box.showModal(); }
    img.addEventListener('click', open);
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  box.addEventListener('click', function () { box.close(); });
  box.addEventListener('close', function () {
    big.removeAttribute('src');
    imgs[current].focus();
  });
  box.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') show(current + 1);
    if (e.key === 'ArrowLeft') show(current - 1);
  });
})();
