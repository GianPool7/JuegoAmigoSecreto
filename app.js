// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicializando variables

let listadoAmigo=[];

// listado para guardar los elegidos del random

let listadoAmigoEscojido=[]



function agregarAmigo() {
    
    let nombreAmigo = document.getElementById("amigo");
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
        }
    }

    let listadoNombresAmigoSecreto=document.getElementById("listaAmigos").innerHTML=`${listadoAmigo}\n`;
    
}


function sortearAmigo() {

    let amigoElegido=document.getElementById("resultado")
    amigoElegido=listadoAmigoEscojido[Math.floor(Math.random()*listadoAmigo.length)]

    if (listadoAmigoEscojido.includes(amigoElegido)) {
        alert("el elegido ya esta")
    }else{
        alert("el elegido ya se agrego")
        listadoAmigoEscojido.push(amigoElegido)
    }

    console.log(listadoAmigo);

}

