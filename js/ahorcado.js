var palabraSecreta = "";
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var textoAMostrar = "";
var textAux = "";
var contadorErrores = 0;
var contadorAciertos = 0;
var btn_agregarPalabra = document.querySelector("#nueva-palabra");
var btn_iniciarJuego = document.querySelector("#iniciar-juego");


btn_agregarPalabra.addEventListener("click", function (event) {
    event.preventDefault();
    palabraSecreta = document.querySelector("#input-nueva-palabra").value;
    exhibirMensajes(validarIngresoPalabraSecreta(palabraSecreta));
});


btn_iniciarJuego.addEventListener("click", function () {
    //edito titulo
    document.querySelector(".titulo").textContent = "Empieza el juego";
    //edito subtitulo
    document.querySelector(".form").textContent = "El objetivo de este juego es descubrir una palabra adivinando las letras que la componen.";

    document.querySelector(".form").classList.add("instrucciones");
    document.querySelector("#ahorcado").className = "";
    cabezaSoporte()
    creacionBotonesConLetras();
    creacionGuionBajo();
});

function creacionBotonesConLetras() {
    var div = document.createElement("div");
    div.classList.add("btn-group", "me-2");
    // div.classList.add("me-2");
    div.setAttribute("role", "group");
    div.setAttribute("aria-label", "Second group");

    //creamos botones con las letras del abecedario (array letras), y le asignamos clase y atributos
    for (let i = 0; i < letras.length; i++) {
        var buttonLetra = document.createElement("button");
        buttonLetra.setAttribute("type", "button");
        buttonLetra.classList.add("btn", "btn-secondary", `letra-${letras[i]}`);
        buttonLetra.textContent = letras[i];
        div.appendChild(buttonLetra);
    }

    //llevamos el div creado con los botones al div: letrasAhoracado
    document.querySelector(".letrasAhorcado").appendChild(div);

}


function creacionGuionBajo() {
    var element = "";
    for (let i = 0; i < palabraSecreta.length; i++) {
        element += "_";
    }
    textoAMostrar = element;
    document.querySelector(".text-guion").textContent = textoAMostrar;
    document.querySelector(".text-guion").classList.add("styleTextSecret");
}


var letraSeleccionada = document.querySelector(".letrasAhorcado");

letraSeleccionada.addEventListener("click", function (e) {
    var letraSelect = e.target.textContent;
    var palabraSecretaArray = palabraSecreta.split('');
    console.log(palabraSecretaArray)
    letraEncontrada = false;

    for (let i = 0; i < palabraSecretaArray.length; i++) {

        if (palabraSecreta[i] == letraSelect) {
            console.log("textoAMostrar dentro del FOR" + textoAMostrar);
            textoAMostrar = textoAMostrar.substring(0, i) + letraSelect + textoAMostrar.substring(i + 1)
            console.log("textoAMostrar" + textoAMostrar)
            contadorAciertos += 1;
            letraEncontrada = true;
        }
    }

    document.querySelector(`.letra-${letraSelect}`).remove();

    if (!letraEncontrada) {
        contadorErrores += 1;
    }

    if (contadorAciertos === palabraSecreta.length) {
        ganasteMensaje();
        document.querySelector(".letrasAhorcado").innerHTML = '';
    } else {
        if (contadorErrores < 5){
        canvasDesarrollo(contadorErrores)
    }else{
        document.querySelector(".letrasAhorcado").innerHTML = '';
        perdisteMensaje();
        }
    }


    document.querySelector(".text-guion").textContent = textoAMostrar;
    document.querySelector(".text-guion").classList.add("styleTextSecret")
})














