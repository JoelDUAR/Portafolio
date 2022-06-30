let elementosAnimados = document.querySelectorAll(".animado__scroll");

function mostrarElementos(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i < elementosAnimados.length; i++){
        let alturaElemento = elementosAnimados[i].offsetTop;
        if((alturaElemento/2) < scrollTop){
            elementosAnimados[i].style.opacity = 1;
            elementosAnimados[i].classList.add("mostrarContenido");
        }else{
            elementosAnimados[i].style.opacity = 0;
            elementosAnimados[i].classList.remove("mostrarContenido")
        }
    }
}

window.addEventListener("scroll", mostrarElementos);