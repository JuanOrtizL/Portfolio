 // Función para cargar el contenido de las secciones
function cargarContenido(url) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById('contenido-principal').innerHTML = data;
      })
      .catch(error => console.error('Error al cargar el contenido:', error));
}

// Carga el contenido inicial al cargar la página
window.onload = function() {
  cargarContenido('Vista/Sobremi.html');
};
