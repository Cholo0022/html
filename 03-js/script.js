let preguntas = [
    {
        texto: "Cual es el lugar más frio de la tierra?",
        opciones: [
            "Antartida",
            "Canada",
            "Rusia",
            "Argentina"
        ],
        respuesta: 0
    },
    {
        texto: "Cual es el río más largo del mundo?",
        opciones: [
            "Nilo",
            "Amazonas",
            "Uruguay",
            "Parana"
        ],
        respuesta: 1
    },
    {
        texto: "En que continente se encuentra Ecuado",
        opciones: [
            "Europa",
            "Asia",
            "Oceania",
            "America"
        ],
        respuesta: 3
    }
];

let pregunta = Math.random() * (preguntas.length - 1);

pregunta = Math.round(pregunta);

//console.log(pregunta);

function generarMensaje(x){
    let mensaje = preguntas[x].texto;
    for (let i in preguntas[x].opciones){
        mensaje = mensaje + "\n" + (Number(i) + 1) + " " + preguntas[x].opciones[i];
    }
    return mensaje;
}


let resp = prompt(generarMensaje(pregunta));

resp = Number(resp);

//console.log(typeof resp);

if ((resp - 1) === preguntas[pregunta].respuesta) {
    alert("La respuesta es correcta");
} else{
    alert("La respuesta es incorrecta");
}

