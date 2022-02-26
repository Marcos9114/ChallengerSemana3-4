function validarIngresoPalabraSecreta(palabraSecreta) {
    var errores = []
    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";

    if (palabraSecreta.length == 0) {
        errores.push("La palabra secreta no puede estar vacia");
    }
    if (!validaSoloLetras(palabraSecreta)) {
        errores.push("La palabra secreta debe no puede contener caracteres especiales, ni minusculas");
    }
    return errores;
}


function exhibirMensajes(errores) {
    var ul = document.querySelector("#mensajes-errores");
    if (errores.length > 0) {
        ul.innerHTML = ""
        errores.forEach(function (error) {
            var li = document.createElement("li");
            li.textContent = error;
            li.classList.add("alert", "alert-danger");
            ul.appendChild(li);
        });
    }else{
        var li = document.createElement("li");
            li.textContent = 'La palabra: "' + palabraSecreta + '" fue agregada con Éxito';
            li.classList.add("alert", "alert-success");
            ul.appendChild(li);

            //borrar value
            document.querySelector("#input-nueva-palabra").value = "";
    }
    errores = [];
}


function validaSoloLetras(msj) {
    let validation = true;
    if (msj == '') {
        validation = false;
    } else {
        for (let i = 0; i < msj.length; i++) {
            let letra = letras.indexOf(msj[i]);
            if (letra == -1) {
                validation = false;
            }
        }
    }
    return validation;
}


// function alert(palabraSecreta) {
//     var mensaje = document.querySelector(".palabraAgregada");

//     mensaje.className = "palabraAgregada";


//     if (validar(palabraSecreta)) {
//         mensaje.classList.add("alert");
//         mensaje.classList.add("alert-success");
//         mensaje.textContent = 'La palabra: "' + palabraSecreta + '" fue agregada con Éxito';
//     } else {
//         mensaje.classList.add("alert");
//         mensaje.classList.add("alert-danger");
//         mensaje.textContent = `Error al agregar la palabra: "${palabraSecreta}".
//                                Solo se admiten letras mayúsculas.`
//         palabraSecreta = "";
//     }
// }