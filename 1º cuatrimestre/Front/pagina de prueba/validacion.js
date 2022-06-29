'use strict';
let btnvalidar = document.getElementById("btnvalidar")
let menorEdad = document.getElementById("menor");
let mayorEdad = document.getElementById("mayor");
let resultado = document.getElementById("mensajito");
btnvalidar.addEventListener("click", validar);
function validar(e) {
    e.preventDefault(); /*  para que no se recargue la pagina cuando apretas un boton */
    if (menor.checked == true) {
        resultado.innerHTML = `Por se menor de edad vas a necesitar una planilla de autorizacion`;
    } else if (mayor.checked == true) {
        resultado.innerHTML = `Sos mayor no necesitas una planilla de autorizacion`;
    } else {
        resultado.innerHTML = `Por favor ingrese una edad`;
    }
};
