function validarFormulario(input) {
  let tipoInput = input.dataset.tipo;
  if (validadores[tipoInput]) {
    validadores[tipoInput](input);
  }
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoInput, input);
  }
}

let mensajesDeError = {
    nombre: {
        valueMissing: "El campo Nombre no puede estar vacío",
        patternMismatch: "Ingrese entre 2 y 50 caracteres máximo. No se admiten caracteres especiales"
    },
    email: {
        valueMissing: "El campo Email no puede estar vacío",
        patternMismatch: "El correo no es valido"
    },
    asunto: {
        valueMissing: "El campo Asunto no puede estar vacío",
        patternMismatch: "Ingrese 50 caracteres como máximo. No se aceptan caracteres especiales"
    }
}

let tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
]

function mostrarMensajeDeError(tipoInput, input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            console.log(tipoInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoInput][error]);
            mensaje = mensajesDeError[tipoInput][error];
        }
    })


    return mensaje
}

let validadores = {
  nombre: (input) => validarNombre(input),
};

function validarNombre(input) {
  let textoIngresdado = input.value;
  let mensaje = "";
  if (textoIngresdado == 0) {
    mensaje = "Debe ingresar un nombre";
  }
}

let inputs = document.querySelectorAll("input")
inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        validarFormulario(input.target)
    })
})

