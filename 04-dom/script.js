const opciones = ["piedra", "papel", "tijera"];
const url = "http://localhost/04-dom/";

function comenzarJuego(e, jugador, maquina) {
    return function () {
        agregarEvento();
        jugador.classList.remove("clase-animacion");
        maquina.classList.remove("clase-animacion");        
        let opcionComputadora = Math.round(Math.random()*2);
        let opcionUsuario = e.target.id;
        jugador.src = url + e.target.id + ".png";
        maquina.src = url + opciones[opcionComputadora] + ".png";
        console.log(chequearOpcion(opcionUsuario, opciones[opcionComputadora]));   
    }
}

function opcionSelecionada(e) {
    eliminarEvento();
    let jugador = document.getElementById("jugador");
    let maquina = document.getElementById("maquina");
    jugador.classList.add("clase-animacion");
    maquina.classList.add("clase-animacion");
    jugador.src = url + "piedra.png";
    maquina.src = url + "piedra.png";
    // Llama a la funcion comenzar juego pasando los tres parametros que necesita, en caso de no necesitar 
    // parametros se escribiría sin parentesis el "setTimeout(comenzarJuego, 1500);"
    setTimeout(comenzarJuego(e, jugador,maquina), 1500);
}

function chequearOpcion(opcionUsuario, opcionComputadora){
    if (opcionUsuario === opcionComputadora) return "Empate";
    if (opcionUsuario === "piedra"){
        switch (opcionComputadora){
            case "papel":
                return "Perdiste";
            case "tijera":
                return "Ganaste";
        }
    }
    if (opcionUsuario === "papel"){
        switch (opcionComputadora){
            case "piedra":
                return "Ganaste";
            case "tijera":
                return "Perdiste";
        }
    }
    if (opcionUsuario === "tijera"){
        switch (opcionComputadora){
            case "piedra":
                return "Perdiste";
            case "papel":
                return "Ganaste";
        }
    }
}

let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");

function agregarEvento (){
    piedra.addEventListener("click", opcionSelecionada);
    papel.addEventListener("click", opcionSelecionada);
    tijera.addEventListener("click", opcionSelecionada);
}

function eliminarEvento (){
    piedra.removeEventListener("click", opcionSelecionada);
    papel.removeEventListener("click", opcionSelecionada);
    tijera.removeEventListener("click", opcionSelecionada);
}

agregarEvento();