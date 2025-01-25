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

// para escuchar el boton 

btn.addEventListener("click",deshabilitar);

//
function deshabilitar() {
    btnContinuar.style.display="none";
}

function agregarAmigo() {
    
    let alerta=document.getElementById("mensajeAmigo")

    if (nombreAmigo.value==="") {
        alerta.innerHTML="El campo tiene que estar lleno";
        nombreAmigo.focus();
    }else{
        if (listadoAmigo.includes(nombreAmigo.value)) {
            alerta.innerHTML="Es nombre ya esta perro";
            nombreAmigo.value="";
            nombreAmigo.focus();
        } else {
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

    let amigoElegido=document.getElementById("resultado")
    amigoElegido=listadoAmigo[Math.floor(Math.random()*listadoAmigo.length)]


    console.log(amigoElegido);
    
    if (listadoAmigoEscojido.includes(amigoElegido)) {
        amigoElegido=listadoAmigo[Math.floor(Math.random()*listadoAmigo.length)]

        if (listadoAmigoEscojido.length == listadoAmigo.length) {
            resultadoNombre.innerHTML="Ya se sortearon todos los amigos secretos";
            btn.setAttribute("disabled","true");
            btn.style.background="var(--color-text)";
            btnReiniciar.style.display="flex";
        }
    }else{
        listadoAmigoEscojido.push(amigoElegido)
        resultadoNombre.innerHTML=amigoElegido
    }

    console.log(listadoAmigoEscojido);

}



function empezarJuego() {
    nombreAmigo.setAttribute("disabled","true");
    btnAgregar.setAttribute("disabled","true");
    btnGo.style.display="none";
    btn.style.display="flex";
    btnContinuar.style.display="flex";
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
    resultadoNombre.innerHTML="";
    // limpiando mi arreglo
    listadoAmigo.length=0;
    listadoAmigoEscojido.length=0;
    // Limpiando la pantalla del arreglo
    let listadoNombresAmigoSecreto=document.getElementById("listaAmigos").innerHTML="";
    // reiniciando el botn
    btn.removeAttribute("disabled","true");
    btn.style.background="var(--color-button)";
    //
}