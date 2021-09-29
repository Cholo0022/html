const opciones = ["verde", "azul", "rojo", "amarillo"];
let listaJugador = [];
let listaMaquina = [];

function opcionAleatoria() {
  let aleatorio = Math.floor(Math.random() * 4);
  let opcion = opciones[aleatorio];
  return opcion;
}

function comenzarJuego() {
  $(".cuadro").unbind();
  $(".cuadro").click(chequearOpcion);
  listaJugador = [];
  listaMaquina = [];
  let opcion = opcionAleatoria();
  agregarOpcion(opcion);
}

function agregarOpcion(opcion) {
  listaMaquina.push(opcion);
  for (let i in listaMaquina) {
    setTimeout(function () {
      $("#" + listaMaquina[i]).addClass(listaMaquina[i] + "-oscuro");
      setTimeout(function () {
        $("#" + listaMaquina[i]).removeClass(listaMaquina[i] + "-oscuro");
      }, 500);
    }, i * 1000);
  }
}

function chequearOpcion(e) {
  listaJugador.push(e.target.id);
  let indice = listaJugador.length - 1;
  if (listaJugador[indice] !== listaMaquina[indice]) {
    perdio();
    return;
  }
  if (listaJugador.length === listaMaquina.length) {
    listaJugador = [];
    let opcion = opcionAleatoria();
    agregarOpcion(opcion);
  }
}

function perdio() {
  $("#puntaje").text(listaMaquina.length - 1);
  console.log(listaMaquina.length);
  listaJugador = [];
  listaMaquina = [];
  $(".cuadro").unbind();
}

$("#comenzar").click(comenzarJuego);
