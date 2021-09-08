const opciones = ["piedra", "papel", "tijera"];


function comenzarJuego(e, jugador, maquina) {
    return function () {
        jugador.classList.remove("clase-animacion");
        maquina.classList.remove("clase-animacion");
        let opcionComputadora = Math.round(Math.random()*2);
        let opcionUsuario = e.target.id;
        console.log(chequearOpcion(opcionUsuario, opciones[opcionComputadora]));   
    }
}

function opcionSelecionada(e) {
    let jugador = document.getElementById("jugador");
    let maquina = document.getElementById("maquina");
    jugador.classList.add("clase-animacion");
    maquina.classList.add("clase-animacion");
    setTimeout(comenzarJuego(e, jugador,maquina), 2100);
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

piedra.addEventListener("click", opcionSelecionada);
papel.addEventListener("click", opcionSelecionada);
tijera.addEventListener("click", opcionSelecionada);