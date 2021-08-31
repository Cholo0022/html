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

let respuestaUsuario = prompt(preguntas[0].texto + "\n" + preguntas[0].opciones[0] + "\n" + preguntas[0].opciones[1] + "\n" + preguntas[0].opciones[2] + "\n" + preguntas[0].opciones[3]);

