// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicializando variables

let listadoAmigo=[];

// listado para guardar los elegidos del random

let listadoAmigoEscojido=[]

// el input de entrada 
let nombreAmigo = document.getElementById("amigo");
nombreAmigo.focus();

// el boton para agregar
let btnAgregar=document.getElementById("agregar");

// el boton de sortear amigos
//variable para deshabilitar la opcion de seguir sorteando
let btn=document.getElementById("btnSortear");

// los botones del juego
// variable de la caja de empezar
let btnGo=document.getElementById("btn_caja_empezar");
let btnContinuar=document.getElementById("continuarAgregando");
let btnReiniciar=document.getElementById("reiniciar");


// variable creada para mostrar el nombre escojido
let resultadoNombre=document.getElementById("resultado")
let amigoElegido=null;

// para escuchar el boton 
btn.addEventListener("click",deshabilitar);

// boton para alertar que los campos no hay
let alerta = document.getElementById("mensajeAmigo");

//
function deshabilitar() {
    btnContinuar.style.display="none";
}

function agregarAmigo() {
    

    if (nombreAmigo.value==="") {
        alerta.innerHTML="El campo tiene que estar lleno";
        nombreAmigo.focus();
    }else{
        if (listadoAmigo.includes(nombreAmigo.value)) {
            alerta.innerHTML="Es nombre ya esta perro";
            nombreAmigo.value="";
            nombreAmigo.focus();
        } else {
            limpiandoErrores();
            listadoAmigo.push(nombreAmigo.value);
            console.log(listadoAmigo);
            nombreAmigo.value="";
            nombreAmigo.focus();
            btnGo.style.display="flex";
        }
    }

    let listadoNombresAmigoSecreto=document.getElementById("listaAmigos").innerHTML=`${listadoAmigo}\n`;
    
}


function sortearAmigo() {

    aleatorio();

}

// funcion de aleatorio

function aleatorio() {

    if (listadoAmigoEscojido.length === listadoAmigo.length) {
      completado();
      return;
    }

    while (!amigoElegido || listadoAmigoEscojido.includes(amigoElegido)) {
        amigoElegido =
        listadoAmigo[Math.floor(Math.random() * listadoAmigo.length)];
    }


  listadoAmigoEscojido.push(amigoElegido)

  resultadoNombre.innerHTML = amigoElegido;
  console.log(listadoAmigoEscojido);
}


// funciones de botones

function empezarJuego() {
    nombreAmigo.setAttribute("disabled","true");
    btnAgregar.setAttribute("disabled","true");
    btnGo.style.display="none";
    btn.style.display="flex";
    btnContinuar.style.display="flex";
    limpiandoErrores();
}

function continuarAgregando() {
    btnGo.style.display="flex";
    btn.style.display="none";
    btnContinuar.style.display="none";
    nombreAmigo.removeAttribute("disabled","true");
    btnAgregar.removeAttribute("disabled","true");
    nombreAmigo.focus();
}

function reiniciarJuego() {
    btnContinuar.style.display="none";
    btnReiniciar.style.display="none";
    btn.style.display="none";
    // para que pueda ingresar con normalidad los datos
    nombreAmigo.removeAttribute("disabled","true");
    btnAgregar.removeAttribute("disabled","true");
    nombreAmigo.focus();
    resultadoNombre.innerHTML = "";
    // limpiando mi arreglo
    listadoAmigo.length=0;
    listadoAmigoEscojido.length=0;
    // Limpiando la pantalla del arreglo
    let listadoNombresAmigoSecreto=document.getElementById("listaAmigos").innerHTML="";
    // reiniciando el botn
    btn.removeAttribute("disabled","true");
    btn.style.background="var(--color-button)";
    limpiandoErrores();
}

function completado() {
    btn.setAttribute("disabled","true");
    btn.style.background="var(--color-text)";
    btnReiniciar.style.display="flex";
    limpiandoErrores();
}

//
function limpiandoErrores() {
    alerta.innerHTML = "";
}