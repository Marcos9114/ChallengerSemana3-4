var pantalla = document.querySelector('#ahorcado');
var lienzo = pantalla.getContext('2d');


function cabezaSoporte() {
    lienzo.strokeStyle = "black";
    lienzo.arc(300,200,50,0,2*Math.PI,false)
    lienzo.stroke();
    
    lienzo.moveTo(300,150);
    lienzo.lineTo(300,100);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
    
    lienzo.moveTo(300,100);
    lienzo.lineTo(150,100);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
    
    lienzo.moveTo(150,100);
    lienzo.lineTo(150,400);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
    
    lienzo.moveTo(150,400);
    lienzo.lineTo(50,500);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
    
    lienzo.moveTo(150,400);
    lienzo.lineTo(250,500);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
    
    lienzo.moveTo(20,500);
    lienzo.lineTo(280,500);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
}

function cuerpo() {
    lienzo.moveTo(300,250);
    lienzo.lineTo(300,350);
    lienzo.stroke();
}

function brazoIzq() {
    lienzo.moveTo(300,250);
    lienzo.lineTo(250,300);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
}

function brazoDer() {
    lienzo.moveTo(300,250);
    lienzo.lineTo(350,300);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
}

function piernaIzq() {
    lienzo.moveTo(300,350);
    lienzo.lineTo(250,400);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
}

function piernaDer() {
    lienzo.moveTo(300,350);
    lienzo.lineTo(350,400);
    lienzo.strokeStyle = "black";
    lienzo.stroke();
}

function ganasteMensaje() {
    lienzo.beginPath() //iniciar ruta   
    lienzo.fillStyle="green"; //color de relleno
    lienzo.font="bold 70px Julius Sans One"; //estilo de texto
    lienzo.fillText("Felicitaciones!!!",400,300); //texto con método fill
    lienzo.fillText("Ganaste el juego",400,360); //texto con método fill
}

function perdisteMensaje() {
    lienzo.beginPath() //iniciar ruta   
    lienzo.fillStyle="red"; //color de relleno
    lienzo.font="bold 70px Julius Sans One"; //estilo de texto
    lienzo.fillText("Lo siento...",400,200); //texto con método fill
    lienzo.fillText("Perdiste el juego",400,260); //texto con método fill
    lienzo.fillText(`La palabra secreta es...`,400,320); //texto con método fill
    lienzo.fillText(`" ${palabraSecreta} "`,400,400); //texto con método fill
}


function canvasDesarrollo(contadorErrores) {
    
    if (contadorErrores >= 1) {
        cuerpo();
    }
    if(contadorErrores >= 2){
        brazoIzq();
    }
    if(contadorErrores >= 3){
        brazoDer();
    }
    if(contadorErrores >= 4){
        piernaIzq();
    }
    if(contadorErrores >= 5){
        piernaDer();
    }
}
