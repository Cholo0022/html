const opciones = ["verde", "azul", "rojo", "amarillo"];
let listaJugador = [];
let listaMaquina = [];

function comenzarJuego() {
  /*   listaJugador = [];
    listaMaquina = []; */
    let aleatorio = Math.floor(Math.random() * 4);
    let opcion = opciones[aleatorio];
    $("#" + opcion).addClass(opcion + "-oscuro");
    agregarOpcionComputadora(opcion);
    setTimeout(function () {
        $("#" + opcion).removeClass(opcion + "-oscuro");
    }, 500)
}

function agregarOpcionJugador(e){
    listaJugador.push(e.target.id);
    console.log(listaJugador);
}

$("#comenzar").click(comenzarJuego);
$(".cuadro").click(agregarOpcionJugador);
function agregarOpcionComputadora(opcion) {
    listaMaquina.push(opcion);
    console.log(listaMaquina);    
}