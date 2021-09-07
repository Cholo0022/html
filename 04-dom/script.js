let opcionUsuario;

const opciones = ["piedra", "papel", "tijera"];


function opcionSelecionada(e){
    let opcionComputadora = Math.round(Math.random()*2);
    console.log(opcionComputadora);
    opcionUsuario = e.target.id;
    console.log(chequearOpcion(opcionUsuario, opciones[opcionComputadora]));   
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