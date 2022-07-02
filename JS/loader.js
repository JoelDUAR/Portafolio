const tped = new Typed(".typed", {
  strings: [
    "<i>Joel Dupraz</i>",
    "<i>Portafolio</i>",
  ],
  stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 55, // Velocidad en mlisegundos para poner una letra,
  startDelay: 100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 55, // Velocidad en milisegundos para borrrar una letra,
  backDelay: 800, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "/", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
});

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".contenedor__loader").classList.toggle("loader2");
  }, 6000);
});