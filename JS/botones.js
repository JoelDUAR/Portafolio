let botonNav = document.querySelector(".lbl-menu");
let menu = document.querySelector(".contenedor__menu");
let btnChecked = document.querySelector("#btn-menu");
let altura = menu.offsetTop;
let btnSobreMi = document.querySelector(".btn1");
let btnSoftSkills = document.querySelector(".btn2");
let btnFormacion = document.querySelector(".btn3");
let btnProyectos = document.querySelector(".btn4");
let btnContacto = document.querySelector(".btn5");


btnSobreMi.addEventListener("click", function () {
    if (btnChecked.checked == true) {
        btnChecked.checked = false
        menu.classList.remove("menu-fixed");
        cerrarMenu();
      }
      window.location.href = "#container__imagen__sobre-mi"
  });

btnSoftSkills.addEventListener("click", function () {
    if (btnChecked.checked == true) {
        btnChecked.checked = false
        menu.classList.remove("menu-fixed");
        cerrarMenu();
      }
      window.location.href = "#container__softskills"
});

btnFormacion.addEventListener("click", function () {
    if (btnChecked.checked == true) {
        btnChecked.checked = false
        menu.classList.remove("menu-fixed");
        cerrarMenu();
      }
      window.location.href = "#container__formacion"
});

btnProyectos.addEventListener("click", function () {
    if (btnChecked.checked == true) {
        btnChecked.checked = false
        menu.classList.remove("menu-fixed");
        cerrarMenu();
      }
      window.location.href = "#container__proyectos"
});

btnContacto.addEventListener("click", function () {
    if (btnChecked.checked == true) {
        btnChecked.checked = false
        menu.classList.remove("menu-fixed");
        cerrarMenu();
      }
      window.location.href = "#container__formulario"
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= altura) {
    menu.classList.add("menu-fixed");
  } else {
    menu.classList.remove("menu-fixed");
  }
});

botonNav.addEventListener("click", function () {
  if (btnChecked.checked == false) {
    abrirMenu();
    document.querySelector("#header").classList.toggle("clip__path__menu");
  } else {
    cerrarMenu();
  }
  
});

function abrirMenu() {
  menu.classList.remove("invisible");
}

function cerrarMenu() {
  menu.classList.add("invisible");
}
