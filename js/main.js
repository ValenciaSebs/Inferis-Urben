// Archivo JS mínimo para facilitar comportamiento adicional si se requiere.
// Por ahora dejamos un pequeño helper: cuando se abre un modal pausamos cualquier carousel externo.
document.addEventListener('show.bs.modal', function (event) {
  // Pausar todos los carousels del modal para evitar que otros sigan reproduciendo
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(c => {
    const bs = bootstrap.Carousel.getInstance(c);
    if (bs) bs.pause();
  });
});

// Reanudar carousels al cerrar modal (no obligatorio)
document.addEventListener('hidden.bs.modal', function (event) {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(c => {
    const bs = bootstrap.Carousel.getOrCreateInstance(c);
    // no iniciar automáticamente para evitar movimiento indeseado, se deja en pausa
    // bs.cycle();
  });
});
