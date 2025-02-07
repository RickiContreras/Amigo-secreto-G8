//A modo de practica voy a cambiar el texto Amigo Secreto, manipulando el DOM
let cambioTitulo = document.querySelector('h1');
    cambioTitulo.innerHTML = 'Amigo Secreto.beta1 G8';

//A modo de práctica voy a cambiar el texto Digite el nombre de sus amigos, manipulando el DOM
let cambioIndicacion = document.querySelector('h2');
    cambioIndicacion.innerHTML = 'Escriba el nombre de sus amigos';

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea la lista de amigos. Esta lista debe ser ingresada por el usuario. se debe presentar en pantalla.
let listaAmigos = [];
let nombreDeAmigo = '';


//Con la función siguiente capturo el texto (nombre), que ingreso el usuario en el campo de entrada. Ademas con el console.log verifico que lo escrito por el usurios se vea impreso en la consola.
function agregarAmigo() {
    nombreDeAmigo = document.getElementById('amigo').value;

//Con el condicional IF y la expresión regurlar /\d/.test y llamando a la variable agregarAmigo verifica que el usuario solo pueda ingresar textos sin numeros     
  /*  if (/\d/.test(nombreDeAmigo)) {
        alert("Por favor, ingrese un nombre válido.");
        
    }*/
    
//Con el condicional IF llamando a la variable agregarAmigo y el metodo TRIM(elimina espacios vacios), verifico que al pulsar el boton Añadir el campo de entrada no quede vacio. Con alert le pido al usuario que ingrese un nombre.    
   /* if (nombreDeAmigo.trim() === '') {
        alert("Por favor, inserte un nombre.");
    }*/

//Llamando a la lista "listaAmigos" con el metodo ".push()" los nombres ingresados por el usuario se agragan al array
    
    if (/\d/.test(nombreDeAmigo) || nombreDeAmigo.trim() === '') {
        alert("Por favor, ingrese un nombre válido.");
        //console.log("Error: El nombre no puede contener números ni estar vacío.");
    } else {
        // Si es un nombre válido, lo agregamos al array
        listaAmigos.push(nombreDeAmigo);
       // console.log(`Amigo agregado: ${nombreDeAmigo}`);

       limpiarCampoEntrada();
    }
    mostrarAmigoAgregado();
    console.log(listaAmigos);
    console.log(nombreDeAmigo);
    
    return;
}
// Con esta función llamando al id ('amigo') del código HTML indicando (value = '') al pulsar el boton "Añadir amigo" el campo de entrada se borra quedando listo para recibir otro nombre.
function limpiarCampoEntrada () {
    document.querySelector('#amigo').value = '';
    
}


function mostrarAmigoAgregado () {
    let lista = document.getElementById('listaAmigos'); //Obtengo el elemento de la lista con document.getElementById()
    lista.innerHTML = ''; // Limpio la lista antes de actualizar
    
    //Con el metodo forEach se crea un bucle (for) para recorrer el array listaAmigos
    listaAmigos.forEach(function(amigo) {
        let li = document.createElement('li'); //Crea un nuevo elemento <li>
        li.textContent = amigo; //Agrega texto dentro del <li>, con este método se agrega el texto ingresado por el usuario.
        lista.appendChild(li); //Agrega el elemento <li> a la lista existente, listaAmigos en el HTML, con esto se logra ver el nombre de los amigos ingresados por el usuario en la interface de la web amigo secreto.
    })
}