/*Determino medidas de la pantalla  */
let anchoPantalla = window.innerWidth;
let altoPantalla = window.innerHeight;
/* radio desde el cursor hasta las esferas */
let radio = 150;
/* Cantidad de particulas a Crear */
let CantidadParticulas = 12;
/* variables declaradas en el scoupe general */
let tablero;
let pincel;
let arrparticulas;
let mouseX = (anchoPantalla);
let mouseY = (altoPantalla);
/* funcion llamada al comienzo de todo */
inicio();

function inicio() {

    tablero = document.getElementById("canvas");
    
    if (tablero && tablero.getContext) {
        pincel = tablero.getContext('2d');
        tablero.addEventListener('mousemove', controlarMovimientoMouse, false);
        window.addEventListener('resize', redimensionarPantalla, false);
        crearParticulas();
        redimensionarPantalla();
        /* Se necesita esperar para que cargue la funcion loop */
        setInterval( loop, 2 );
    }
}

function crearParticulas() {
    arrparticulas = [];
    for (var i = 0; i < CantidadParticulas; i++) {
        var particula = {
            posicion: { x: mouseX, y: mouseY },
            cambio: { x: mouseX, y: mouseY },
            fillColor: '#' + (Math.random() * 0x404040 + 0xaaaaaa | 0).toString(16),
            tamaño: 1,
            tamanioObjetivo: 1,
            angulo: 0,
            velocidad: 0.01+Math.random()*0.02,
            orbita: radio*.3
        };
        console.log(particula);
        arrparticulas.push( particula );
    }
}

function controlarMovimientoMouse(evento) {
    mouseX = evento.clientX;
    mouseY = evento.clientY;
}

function redimensionarPantalla() {
    tablero.width = anchoPantalla;
    tablero.height = altoPantalla;
}

function loop() {
    
    // Fade out the lines slowly by drawing a rectangle over the entire canvas
    pincel.fillStyle = 'rgba(0,0,0,0.05)';
    pincel.fillRect(0, 0, pincel.canvas.width, pincel.canvas.height);
    
    for (i = 0; i < arrparticulas.length; i++) {
        let particula = arrparticulas[i];
        let posicion = { x: particula.posicion.x, y: particula.posicion.y };
        
        /* Se desplaza el angulo para mantener el giro */
        particula.angulo += particula.velocidad;
        
        /* Se crea un lag entre las particulas y el raton */
        particula.cambio.x += ( mouseX - particula.cambio.x) * (particula.velocidad);
        particula.cambio.y += ( mouseY - particula.cambio.y) * (particula.velocidad);
        
        /* Determina la posición de la particula en x e y */
        particula.posicion.x = particula.cambio.x + Math.cos(i + particula.angulo) * (particula.orbita);
        particula.posicion.y = particula.cambio.y + Math.sin(i + particula.angulo) * (particula.orbita);
        
        /* Se limita la pantalla */
        particula.posicion.x = Math.max( Math.min( particula.posicion.x, anchoPantalla ), 0 );
        particula.posicion.y = Math.max( Math.min( particula.posicion.y, altoPantalla ), 0 );
        /* Determinar el tamaño de la particula*/
        particula.tamaño += ( particula.tamanioObjetivo - particula.tamaño ) *0.09;
        
        /* Evita que las particulas sean del mismo tamaño */
        if( Math.round( particula.tamaño ) == Math.round( particula.tamanioObjetivo ) ) {
            particula.tamanioObjetivo = 1 + Math.random() * 9;
        }
        /* Se dibujan las particulas, teniendo en cuenta color, la línea que sigue la misma y las esferas de las partículas */
        pincel.beginPath();
        pincel.fillStyle = particula.fillColor;
        pincel.strokeStyle = particula.fillColor;
        pincel.lineWidth = particula.tamaño;
        pincel.moveTo(posicion.x, posicion.y);
        pincel.lineTo(particula.posicion.x, particula.posicion.y);
        pincel.stroke();
        pincel.arc(particula.posicion.x, particula.posicion.y, particula.tamaño/2, 0, Math.PI*2, true);
        pincel.fill();
    }
}