// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicializando variables

let listadoAmigo=[];




function agregarAmigo() {
    
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo==="") {
        alert("El campo tiene que estar lleno")
    }else{
        if (listadoAmigo.includes(nombreAmigo)) {
            alert("es nombre ya esta perro");
        } else {
            listadoAmigo.push(nombreAmigo);
            console.log(listadoAmigo);
        }
    }

    let listadoNombresAmigoSecreto=document.getElementById("listaAmigos").innerHTML=`${listadoAmigo}\n`;
    
}


function sortearAmigo() {
    let elegido = document.getElementById("resultado").innerHTML=listadoAmigo[Math.floor(Math.random()*listadoAmigo.length)]
    console.log(elegido);
}






