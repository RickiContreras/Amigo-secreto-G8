//A modo de practica voy a cambiar el texto Amigo Secreto, manipulando el DOM
let cambioTitulo = document.querySelector('h1');
    cambioTitulo.innerHTML = 'Amigo Secreto.v1 G8';

//A modo de práctica voy a cambiar el texto Digite el nombre de sus amigos, manipulando el DOM
let cambioIndicacion = document.querySelector('h2');
    cambioIndicacion.innerHTML = 'Escriba el nombre de sus amigos';

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea la lista de amigos. Esta lista debe ser ingresada por el usuario. se debe presentar en pantalla.
let listaAmigos = []


//Con la función siguiente capturo el texto (nombre), que ingreso el usuario en el campo de entrada. Ademas con el console.log verifico que lo escrito por el usurios se vea impreso en la consola.
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    console.log(nombreDeAmigo);
}


