// let titulo = document.getElementById("titulo");

// console.log(titulo);

// titulo.style.color = "blue";

let cabecera = document.createElement("h1");

// console.log(cabecera);

let texto = document.createTextNode("Hola mundo!");

// console.log(texto);

cabecera.appendChild(texto);

let div = document.getElementById("seccion");

div.appendChild(cabecera);

let elemento = document.getElementById("titulo");

document.body.removeChild(elemento);

function click (e){
    e.target.style.color = "blue";
}

function teclado(e){
    console.log(e);
}

function tecla (e){
    console.log("La tecla usada es " + e.key)
}

let boton = document.getElementById("boton");

boton.addEventListener("click", click);

document.addEventListener("keypress", teclado);

let input = document.getElementById("input");

input.addEventListener("keypress", tecla);


// document.body.appendChild(cabecera);