// URL de la API
const apiUrl = 'http://localhost:5501/usuarios';

// Hacer una solicitud GET a la API
fetch(apiUrl)
  .then(response => {
    // Verificar si la respuesta es exitosa (código 200)
    if (!response.ok) {
      throw new Error(`Error de red - ${response.status}`);
    }
    // Parsear la respuesta a formato JSON
    return response.json();
  })
  .then(data => {
    // Manipular los datos recibidos
    console.log('Datos de usuarios:', data);
  })
  .catch(error => {
    // Manejar errores de red u otros errores
    console.error('Error al obtener datos:', error);
  });





// Botón que abre el modal
var span = document.getElementById("actulizar");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var card = document.getElementById("card");

span.addEventListener("click",function() {
  card.style.display = "block";
});
// Si el usuario hace clic en la x, la ventana se cierra
card.addEventListener("click",function() {
console.log("entro");
card.style.display = "none";
  
});

var a = document.getElementById("eliminarBtn");



