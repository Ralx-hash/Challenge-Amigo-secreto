// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let personas = [];
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
let listaResultado = document.getElementById('resultado');
listaResultado.innerHTML = '';

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre == '') {
        alert('Se debe ingresar un nombre primero.');
        return;
    }

    document.getElementById('amigo').value = '';
    personas.push(nombre);
    lista.innerHTML += `<li>${nombre}</li>`;
    
}

function sortearAmigo() {
    if (personas.length == 0) {
        alert('No se han ingresado nombres.')
        return;
    }

    let indiceAmigo =Math.floor(Math.random()*personas.length);
    listaResultado.innerHTML = `El amigo secreto sorteado es ${personas[indiceAmigo]}`;
    lista.innerHTML = '';
}