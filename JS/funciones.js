let tablero = document.querySelector("#presentacion");
let pincel = tablero.getContext("2d");

pincel.fillRect(0, 0, 1000, 800);

tablero.addEventListener("mousemove",  mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}