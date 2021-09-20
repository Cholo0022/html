const opciones = ["piedra", "papel", "tijera"];
const url = "http://localhost/programar101/04-dom/";

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

function chequearOpcion(opcionUsuario, opcionComputadora) {
    let mensaje = document.getElementById("resultado");
    let texto;
    if (opcionUsuario === opcionComputadora) texto = "Empate!!!";
    
    if (opcionUsuario === "piedra") {
        switch (opcionComputadora) {
            case "papel":
                texto = "Perdiste!!!";
                break;
            case "tijera":
                texto = "Ganaste!!!";
                break;
        }
    }
    if (opcionUsuario === "papel") {
        switch (opcionComputadora) {
            case "piedra":
                texto = "Ganaste!!!";
                break;
            case "tijera":
                texto = "Perdiste!!!";
                break;
        }
    }
    if (opcionUsuario === "tijera") {
        switch (opcionComputadora) {
            case "piedra":
                texto = "Perdiste!!!";
                break;
            case "papel":
                texto = "Ganaste!!!";
                break;
        }
    }
    mensaje.textContent = texto;
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