document.addEventListener('DOMContentLoaded', function() {
    const quadrados = document.querySelectorAll('.quadrado');
    
    quadrados.forEach(function(quadrado) {
      quadrado.addEventListener('click', function() {
        this.classList.toggle('expandido');
      });
    });
  });
  